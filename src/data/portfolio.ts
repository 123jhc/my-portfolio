import type { PortfolioData } from '@/types/portfolio'

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: '蒋海崇',
    title: 'AI 工程师',
    description: '热爱技术，专注于人工智能领域',
    bio: [
      '你好，我是蒋海崇，一名 AI 工程师。我对机器学习和深度学习充满热情，喜欢用技术解决实际问题。',
      '在这个网站中你可以了解到我的个人经历、技术栈和项目成果。欢迎联系我！',
    ],
    avatar: '/images/avatar.jpg',
  },

  experiences: [
    {
      type: 'work',
      company: '公司名称',
      role: 'AI 工程师',
      period: '2023 - 至今',
      description: [
        '负责 AI 相关项目的研发与落地',
        '参与模型训练、优化和部署全流程',
      ],
    },
    {
      type: 'education',
      company: '学校名称',
      role: '专业名称',
      period: '2019 - 2023',
      description: [
        '主修课程：机器学习、深度学习、自然语言处理',
        '参与多个科研项目和竞赛',
      ],
    },
  ],

  skills: [
    {
      category: '编程语言',
      items: ['Python', 'TypeScript', 'JavaScript', 'Java'],
    },
    {
      category: 'AI / 机器学习',
      items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain'],
    },
    {
      category: '前端开发',
      items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: '后端与工具',
      items: ['FastAPI', 'Docker', 'Git', 'Linux'],
    },
  ],

  projects: [
    {
      title: '项目一',
      role: '核心开发者',
      description: '这是一个基于 AI 的项目，实现了 XXX 功能，使用了 YYY 技术。',
      techStack: ['Python', 'PyTorch', 'FastAPI'],
      url: 'https://example.com',
      github: 'https://github.com/username/project',
    },
    {
      title: '项目二',
      role: '独立开发',
      description: '一个全栈 Web 应用，集成了 AI 模型推理和可视化展示。',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python'],
      url: 'https://example.com',
    },
  ],

  contact: {
    email: 'your-email@example.com',
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    wechat: 'your-wechat-id',
  },
}
