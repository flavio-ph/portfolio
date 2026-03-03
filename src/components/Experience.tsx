import React from 'react';
import { experiences } from '../data/experiences';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
    // Manter a ordem do mais antigo para o mais novo
    const sortedExperiences = [...experiences].reverse();

    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#0f0f12]/50 theme-transition">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-indigo-500">Trajetória</h2>
                    <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Experiência Profissional</h3>
                </div>

                <div className="relative pl-8 md:pl-0">
                    {/* Linha Vertical conectando (visível tanto mobile quanto desktop) */}
                    <div className="absolute left-8 md:left-[50px] top-4 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-indigo-400 to-pink-500 dark:from-indigo-900/50 dark:via-indigo-600 dark:to-pink-600 rounded-full z-0 -translate-x-1/2"></div>

                    <div className="flex flex-col gap-12 relative w-full pb-8">
                        {sortedExperiences.map((exp, index) => (
                            <div key={exp.id} className="relative z-10 w-full pl-6 md:pl-[100px]">
                                <ExperienceCard experience={exp} isLast={index === sortedExperiences.length - 1} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;