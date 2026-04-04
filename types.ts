export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  category: 'Front-end' | 'Back-end' | 'Full-stack';
  image: string;
  description: string;
  tags: string[];
  repositoryUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
