
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Travel World',
    category: 'Full-stack',
    image: 'https://picsum.photos/id/1015/800/450',
    description: 'Design & Dev'
  },
  {
    id: 2,
    title: 'E-commerce API',
    category: 'Back-end',
    image: 'https://picsum.photos/id/1018/800/450',
    description: 'Node.js & PostgreSQL'
  },
  {
    id: 3,
    title: 'Dashboard Admin',
    category: 'Front-end',
    image: 'https://picsum.photos/id/1019/800/450',
    description: 'React & Tailwind'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bubble.io', icon: 'https://static.cdnlogo.com/logos/b/80/bubble-io.svg' },
];
