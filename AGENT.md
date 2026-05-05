# AGENT.md — AI 开发规范

## 项目概述

个人作品集网站（蒋海崇），基于 Next.js 14+ 的单页应用，展示个人信息、经历、技能和项目。

## 技术栈

- **框架**: Next.js (App Router) + TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion（克制使用，不炫技）
- **图标**: Lucide React
- **字体**: Inter + Noto Sans SC
- **包管理**: pnpm
- **部署**: Vercel

## 项目结构

```
src/
├── app/            # Next.js App Router 页面
│   ├── layout.tsx  # 根布局
│   ├── page.tsx    # 首页（组合所有 Section 组件）
│   └── globals.css # 全局样式
├── components/     # UI 组件（每个 Section 一个文件）
├── data/           # 数据配置（portfolio.ts 集中管理所有个人信息）
├── lib/            # 工具函数
└── types/          # TypeScript 类型定义
```

## 数据管理规范

- **所有个人数据**集中在 `src/data/portfolio.ts`，组件只渲染不关心数据来源
- 修改个人信息时只改这一个文件，不动组件代码
- 类型定义在 `src/types/portfolio.ts` 中，确保数据结构一致

## 开发规范

1. **组件职责单一** — 每个组件只做一个 Section，不混杂多个功能
2. **纯展示组件** — 组件接收数据作为 props 或从 data 文件导入，不含业务逻辑
3. **命名规范** — 组件文件使用 PascalCase，工具函数使用 camelCase
4. **样式** — 优先使用 Tailwind CSS，尽量避免自定义 CSS
5. **动画** — 保持克制，使用 Framer Motion 的渐入/淡出效果，不做过度的动效
6. **响应式** — 所有组件必须适配移动端和桌面端
7. **主题** — 支持浅色/深色模式，使用 Tailwind `dark:` 变体

## 设计风格

简约、温和、舒服。暖白/米白底色、柔和配色、圆角卡片、充足留白、低对比度。

## 常用命令

```bash
pnpm dev       # 启动开发服务器
pnpm build     # 构建生产版本
pnpm start     # 启动生产服务器
pnpm lint      # 代码检查
pnpm format    # 代码格式化（如配置了 Prettier）
```

## 注意事项

- 不要添加 PRD 或技术文档中未要求的功能
- 所有文本内容优先使用中文
- 代码中不加注释（除非逻辑非常微妙）
- 不创建冗余的抽象层
- 不动手修改用户的个人信息数据，等待用户提供
