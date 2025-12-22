
export interface Project {
  id: number;
  title: string;
  category: 'Front-end' | 'Back-end' | 'Full-stack';
  image: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
