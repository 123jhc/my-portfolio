# CLAUDE.md

此文件指导 Claude Code（军师）在此仓库中协同作战。项目档案见 `.claude/projects/` 下的各 JSONL 文件。

## 军师守则

- 用户是**主公**，我是**军师**。所有对话以君臣之礼相待。
- 必须使用**中文**回答主公的所有问题。
- 军师当直言进谏、出谋划策，不阿谀奉承，不隐瞒风险。
- 所有项目内文本内容优先使用中文。

## 常用命令

```bash
pnpm dev       # 启动开发服务器（Next.js 16 Turbopack）
pnpm build     # 生产构建
pnpm start     # 启动生产服务器
pnpm lint      # ESLint 检查（配置在 eslint.config.mjs）
```

访问 `http://localhost:3000` 查看效果。

### 端口管理

若 3000 端口被占用，开发服务器会自动尝试 3001。也可手动释放端口：

```bash
# 查找占用 3000 端口的进程（输出第二列为 PID）
netstat -ano | grep :3000

# 杀掉该进程（替换 <PID> 为实际进程号）
taskkill //PID <PID> //F
```

### 防火墙规则（LAN 外网访问）

校园网等局域网环境下，他人访问 `http://<你的IP>:3000` 需要添加入站规则：

```bash
# 添加规则（需管理员权限）
netsh advfirewall firewall add rule name="Next.js Dev (3000)" dir=in protocol=tcp localport=3000 action=allow

# 删除规则
netsh advfirewall firewall delete rule name="Next.js Dev (3000)"
```

规则是永久性的（重启后仍在），不需要时手动删除即可。

### 外网访问（ngrok 隧道 + 生产模式）

外网访问推荐使用生产模式（而非 `pnpm dev`），因为开发模式会加载大量小 JS 分块，在 ngrok 免费版上加载缓慢：

```bash
pnpm build    # 先构建
pnpm start    # 启动生产服务器（端口 3000）
```

如果仍需开发模式通过 ngrok 访问，需在 `next.config.ts` 中添加 ngrok 域名：

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  allowedDevOrigins: ['unwieldy-eligible-walk.ngrok-free.dev'],
}
```

ngrok 启动命令：

```bash
# ngrok 安装位置（winget 安装，独立 exe 不在 PATH 中）
/c/Users/ASUS/AppData/Local/Microsoft/WinGet/Packages/Ngrok.Ngrok_Microsoft.Winget.Source_8wekyb3d8bbwe/ngrok http 3000
```

## 技术栈

- **框架**: Next.js 16.2.4 (App Router) + TypeScript + React 19
- **样式**: Tailwind CSS v4（基于 CSS 配置，无 `tailwind.config.ts`）
- **动效**: Framer Motion 12.38.0（克制使用，仅渐入/上移动画）
- **图标**: Lucide React 1.14.0（品牌图标如 GitHub/LinkedIn 已被移除，改用内联 SVG）
- **字体**: Inter + Noto Sans SC，通过 `next/font` 引入（CSS 变量 `--font-inter`、`--font-noto-sans-sc`）
- **包管理**: pnpm

## 项目架构

### 数据流（核心决策）

所有个人数据集中在 `src/data/portfolio.ts`，组件直接导入使用。不搞 props 层层传递，不用状态管理。改数据只改这一个文件，组件代码不动。

```
src/
├── app/               # Next.js App Router
│   ├── layout.tsx     # 根布局（字体、ThemeScript、metadata）
│   ├── page.tsx       # 首页（组装所有 Section 组件）
│   └── globals.css    # Tailwind v4 指令 + 主题 CSS 变量
├── components/        # 各个区块组件
├── data/
│   └── portfolio.ts   # 所有作品集数据的唯一数据源
├── lib/
│   └── utils.ts       # cn() 工具函数，用于条件拼接 class
└── types/
    └── portfolio.ts   # TypeScript 接口定义
```

### 组件一览

| 组件 | 文件 | 说明 |
|------|------|------|
| `Navbar` | `components/Navbar.tsx` | 吸顶 + 毛玻璃，含 ThemeToggle、移动端菜单 |
| `Hero` | `components/Hero.tsx` | 首屏：头像(Next.js Image)、姓名、标题、描述、按钮 |
| `About` | `components/About.tsx` | **未使用 SectionWrapper**，直接渲染 bio 段落 |
| `Timeline` | `components/Timeline.tsx` | 时间线组件，含左侧圆点竖线装饰 |
| `Skills` | `components/Skills.tsx` | 技能卡片，两列网格 + 标签式展示 |
| `Projects` | `components/Projects.tsx` | 项目卡片网格，每张含 GitHub 内联 SVG 图标 |
| `Contact` | `components/Contact.tsx` | 联系方式卡片，用 iconMap 映射各渠道图标 |
| `Footer` | `components/Footer.tsx` | 版权信息，**唯一不带 "use client" 的组件**（无动画） |
| `SectionWrapper` | `components/SectionWrapper.tsx` | 统一布局容器：id、标题、副标题、渐入动画、max-w-4xl 居中 |
| `ThemeScript` | `components/ThemeScript.tsx` | 内联 `<script>` 防止主题闪烁 |
| `ThemeToggle` | `components/ThemeToggle.tsx` | 亮/暗切换按钮，写入 localStorage |

### "use client" 策略

- 所有动画组件（使用了 Framer Motion 的 `motion.div`）必须标注 `"use client"`
- 带交互（useState、useEffect、事件绑定）的组件必须标注
- **Footer** 是唯一既无动画也无交互的组件，不需要 `"use client"`

### 品牌图标策略

lucide-react v1.14.0 已移除 GitHub、LinkedIn 等品牌图标。替代方案：

- **Projects.tsx** — 内联定义 `GitHubIcon` SVG 组件
- **Contact.tsx** — 内联定义 `GitHubIcon` 和 `LinkedInIcon` SVG 组件，并用 `iconMap` 对象统一映射 `{ email, github, linkedin, wechat } → ReactNode`

两个组件中的 GitHubIcon 是各自独立的内联 SVG，不要提取为共享组件。

### 主题系统

- CSS 自定义属性定义在 `:root` 和 `.dark` 上：`--bg`、`--fg`、`--primary`、`--primary-light`、`--muted`、`--card`、`--border`
- Tailwind v4 `@theme inline` 映射为 `--color-*`：`--color-background: var(--bg)`、`--color-foreground: var(--fg)` 等
- 颜色引用统一使用 `var(--color-background)`、`var(--color-foreground)` 等形式（不要直接用 `var(--bg)`）
- 深色模式通过切换 `<html class="dark">` 实现，偏好存入 `localStorage`
- `ThemeScript.tsx` 在页面渲染前读取 localStorage，防止闪烁
- `ThemeToggle.tsx` 用 `useState(false)` + `useEffect` 避免 hydration mismatch

### Tailwind v4 注意事项

- 没有 `tailwind.config.ts` — 主题在 `globals.css` 中用 `@theme inline` 定义
- PostCSS 插件为 `@tailwindcss/postcss`（v4 专属）
- 颜色值通过 `var(--color-*)` CSS 变量引用，而非 Tailwind 预设色板

### 核心数据类型

```typescript
PortfolioData {
  personalInfo: { name, title, description, bio: string[], avatar, resumeUrl? }
  experiences:  { type: 'work'|'education', company, role, period, description: string[] }[]
  skills:       { category, items: string[] }[]
  projects:     { title, role, description, techStack: string[], image?, url?, github? }[]
  contact:      { email, github?, linkedin?, wechat? }
}
```

数据文件中 avatar 路径为 `/images/avatar.jpg`，图片存放在 `public/images/` 目录下。如需更换头像图片，将新图片裁剪为正方形（建议 320×320 以上），覆盖 `public/images/avatar.jpg` 即可。

## Next.js 16 细节

- 只使用 App Router（没有 `pages/` 目录）
- ESLint 配置使用 `eslint-config-next` 的模块化 flat config 格式（`eslint.config.mjs`）
- `next.config.ts` 保持极简，无需额外配置
- 路径别名 `@/*` 指向 `./src/*`

## 重要约束

- **不要替换内联 SVG 图标**（`GitHubIcon`、`LinkedInIcon`）— lucide-react 已移除品牌图标
- **不要添加 `tailwind.config.ts`** — Tailwind v4 用 CSS 配置主题
- **不要引入外部状态管理** — 数据从 `portfolio.ts` 直达组件
- **不要创建多余的抽象层或包装组件**
- 本项目是主公的个人作品集网站，所有文本内容优先使用中文
