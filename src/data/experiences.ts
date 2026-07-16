export interface ExperienceData {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export const experiences: ExperienceData[] = [

    {
        id: 1,
        role: "Software Engineer",
        company: "InfoEduc Educação",
        period: "Jul 2024 - Atual",
        description:
            "Atuação no desenvolvimento e evolução de aplicações e microsserviços para o setor educacional, participando desde a análise de requisitos até a entrega de soluções escaláveis. Desenvolvimento backend, frontend, integrações entre sistemas e apoio técnico à equipe na definição de soluções e melhoria contínua dos projetos.",
        achievements: [
            "Desenvolvimento e manutenção de APIs REST e microsserviços utilizando Java e Spring Boot",
            "Implementação de solução de autenticação centralizada (SSO) com OAuth2/OpenID Connect (OIDC)",
            "Desenvolvimento de interfaces modernas utilizando React e TypeScript",
            "Integração entre sistemas e serviços para o ecossistema educacional",
            "Modelagem e persistência de dados utilizando PostgreSQL, MySQL e JPA/Hibernate",
            "Conteinerização de aplicações com Docker e versionamento utilizando Git",
            "Apoio técnico ao time, participando de code reviews, refinamentos e definições arquiteturais",
            "Atuação em metodologias ágeis (Scrum e Kanban), contribuindo para a evolução contínua dos processos"
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "React",
            "TypeScript",
            "JavaScript",
            "Bubble.io",
            "PostgreSQL",
            "MySQL",
            "JPA/Hibernate",
            "OAuth2/OIDC",
            "Docker",
            "Git",
            "Scrum",
            "Kanban"
        ]
    },
    {
        id: 2,
        role: "Educador de Informática e Programação",
        company: "Prepara Cursos Profissionalizantes",
        period: "Mai 2022 - Set 2024",
        description:
            "Atuação como instrutor na área de tecnologia, ministrando cursos de programação e fundamentos de desenvolvimento de software.",
        achievements: [
            "Ensino de lógica de programação e algoritmos",
            "Ministração de cursos de Java, JavaScript, HTML e CSS",
            "Acompanhamento do desenvolvimento técnico dos alunos",
            "Elaboração de materiais didáticos e exercícios práticos"
        ],
        technologies: ["Java", "JavaScript", "HTML", "CSS"]
    }
];
