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
        role: "Desenvolvedor | Liderança Técnica",
        company: "InfoEduc Company",
        period: "Jun 2025 - Atual",
        description:
            "Atuação no desenvolvimento de soluções web combinando desenvolvimento tradicional e plataformas No-Code, além de liderança técnica da equipe e organização de processos ágeis.",
        achievements: [
            "Desenvolvimento de APIs e regras de negócio utilizando Java",
            "Construção de interfaces modernas com React",
            "Desenvolvimento de soluções utilizando Bubble.io (No-Code)",
            "Automação e integração de fluxos com n8n",
            "Containerização de aplicações com Docker",
            "Organização de sprints e acompanhamento de entregas com metodologias ágeis",
            "Apoio técnico ao time e participação em decisões de arquitetura"
        ],
        technologies: [
            "Java",
            "React",
            "JavaScript",
            "Bubble.io",
            "No-Code",
            "n8n",
            "Docker",
            "Git",
            "Scrum"
        ]
    },
    {
        id: 2,
        role: "Desenvolvedor",
        company: "InfoEduc Company",
        period: "Set 2024 - Jun 2025",
        description:
            "Desenvolvimento full stack de aplicações web, atuando na implementação de funcionalidades, integrações entre sistemas e evolução contínua da plataforma.",
        achievements: [
            "Implementação de funcionalidades backend com Java",
            "Desenvolvimento de interfaces web com React",
            "Construção de soluções com Bubble.io",
            "Integração e automações utilizando n8n",
            "Ambientes isolados para desenvolvimento com Docker",
            "Participação ativa em cerimônias ágeis (planning, daily e review)",
            "Versionamento e colaboração em equipe utilizando Git"
        ],
        technologies: [
            "Java",
            "React",
            "JavaScript",
            "Bubble.io",
            "n8n",
            "Docker",
            "Git",
            "Metodologias Ágeis"
        ]
    },
    {
        id: 3,
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
