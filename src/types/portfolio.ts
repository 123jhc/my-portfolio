export interface PersonalInfo {
  name: string
  title: string
  description: string
  bio: string[]
  avatar: string
  resumeUrl?: string
}

export interface Experience {
  type: 'work' | 'education'
  company: string
  role: string
  period: string
  description: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface Project {
  title: string
  role: string
  description: string
  techStack: string[]
  image?: string
  url?: string
  github?: string
}

export interface Contact {
  email: string
  github?: string
  linkedin?: string
  wechat?: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  contact: Contact
}
