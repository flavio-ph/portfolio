
import React from 'react';
import { Project, Skill, Experience } from './types';
import bubbleIcon from './src/assets/bubbleicon.png';
import fisio from './src/assets/fisio.gif';
import finanquest from './src/assets/finanquest.gif';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'MetricFlow',
    category: 'Front-end',
    image: 'https://i.postimg.cc/TPxMfWpQ/metricflow.gif',
    description: 'SaaS de métricas para gestores com dashboard interativo.',
    tags: ['React', 'Tailwind'],
    repositoryUrl: 'https://github.com/flavio-ph',
    demoUrl: 'https://metricflow.com.br'
  },
  {
    id: 2,
    title: 'Payment Gateway',
    category: 'Full-stack',
    image: 'https://i.postimg.cc/4xD4tdnt/payment.gif',
    description: 'Sistema completo de pagamentos com processamento em tempo real.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React'],
    repositoryUrl: 'https://github.com/flavio-ph',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'Portfolio Fisio Marcela',
    category: 'Front-end',
    image: fisio,
    description: 'Site institucional moderno para profissional de saúde.',
    tags: ['React', 'Tailwind'],
    repositoryUrl: 'https://github.com/flavio-ph',
    demoUrl: '#'
  },
  {
    id: 4,
    title: 'Barbearia Corte e Navalha',
    category: 'Front-end',
    image: 'https://i.postimg.cc/nzd64RTd/barber.gif',
    description: 'Landing page para agendamento e apresentação de serviços.',
    tags: ['React', 'Tailwind'],
    repositoryUrl: 'https://github.com/flavio-ph',
    demoUrl: '#'
  },
  {
    id: 5,
    title: 'MilhasPro',
    category: 'Full-stack',
    image: 'https://i.postimg.cc/hGnWc7fC/milhas.gif',
    description: 'Plataforma de gestão de milhas aéreas e viagens.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    repositoryUrl: 'https://github.com/flavio-ph',
    demoUrl: '#'
  },
  {
    id: 6,
    title: 'EducChain',
    category: 'Full-stack',
    image: 'https://i.postimg.cc/4NwhzzTj/educ_Chain.gif',
    description: 'Solução educacional com gamificação e blockchain.',
    tags: ['Golang', 'MySQL', 'Typescript', 'React'],
    repositoryUrl: 'https://github.com/flavio-ph',
    demoUrl: '#'
  },
  {
    id: 7,
    title: 'FinanQuest',
    category: 'Full-stack',
    image: finanquest,
    description: 'App mobile de controle financeiro pessoal.',
    tags: ['Java', 'Spring', 'MySQL', 'React Native'],
    repositoryUrl: 'https://github.com/flavio-ph',
    demoUrl: '#'
  },
];

export const CONTACT_INFO = {
  phone: '5579998975808',
  email: 'flaviophalmeida@gmail.com',
  whatsappMessage: 'Olá Flávio! Vim pelo seu portfólio.',
};

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

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Freelance",
    role: "Desenvolvedor Full Stack",
    period: "2023 - Presente",
    description: "Desenvolvimento de soluções sob medida para clientes, focando em performance e escalabilidade.",
    achievements: [
      "Criação do sistema FinanQuest reduzindo o tempo de gestão financeira manual dos usuários.",
      "Desenvolvimento de Portfólios e Landing Pages convertendo 30% a mais de leads."
    ],
    technologies: ["React", "Typescript", "Tailwind CSS", "Node.js"]
  },
  {
    id: 2,
    company: "Projetos Pessoais & Estudos Avançados",
    role: "Engenheiro de Software",
    period: "2022 - 2023",
    description: "Período dedicado à arquitetura de software e construção de projetos complexos backend.",
    achievements: [
      "Implementação do Payment Gateway em Java com Spring Boot e processamento em tempo real.",
      "Aprofundamento em DevOps, Docker e banco de dados relacionais (PostgreSQL, MySQL)."
    ],
    technologies: ["Java", "Spring Boot", "Docker", "MySQL"]
  }
];
