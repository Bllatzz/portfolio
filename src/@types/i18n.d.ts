export type Language = 'pt' | 'en'

export interface Translation {
  nav: {
    home: string
    projects: string
    courses: string
    contact: string
  }
  hero: {
    greeting: string
    role: string
    description: string
    cta: string
  }
  about: {
    title: string
    content: string
  }
  projects: {
    title: string
    viewProject: string
    items: ProjectItem[]
  }
  courses: {
    title: string
    certificate: string
    items: CourseItem[]
  }
  contact: {
    title: string
    subtitle: string
  }
}

export interface ProjectItem {
  id: string
  name: string
  year: string
  description: string
  image: string
  link: string
}

export interface CourseItem {
  id: string
  name: string
  progress: number
  certificateUrl: string
}

