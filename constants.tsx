
import React from 'react';
import { Project, Skill } from './types';
import metricflowImage from './assets/metricflow.gif';
import payment from './assets/payment.gif';
import fisio from './assets/fisio.gif'; 
import barbearia from './assets/barber.gif';
import milhas from './assets/milhas.gif';
import bubbleIcon from './assets/bubbleicon.png';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'MetricFlow',
    category: 'Front-end',
    image: metricflowImage,
    description: 'React & Tailwind'
  },
  {
    id: 2,
    title: 'Payment Gateway',
    category: 'Full-stack',
    image: payment,
    description: 'Java, Spring boot, Mysql & React'
  },
  {
    id: 3,
    title: 'Portfolio Fisio Marcela',
    category: 'Front-end',
    image: fisio,
    description: 'React & Tailwind'
  },
    {
    id: 4,
    title: 'Barbearia Corte e Navalha',
    category: 'Front-end',
    image: barbearia,
    description: 'React & Tailwind'
  },
    {
    id: 5,
    title: 'MilhasPro',
    category: 'Full-stack',
    image: milhas,
    description: 'Java, Spring boot, PostgreSQL & React'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bubble.io', icon: bubbleIcon },
  { name: 'n8n', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/n8n.svg' },

];
