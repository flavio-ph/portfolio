import React from 'react';
import { experiences } from '../data/experiences';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#0f0f12]/50 theme-transition">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-indigo-500">Trajetória</h2>
                    <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Experiência Profissional</h3>
                </div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                    {experiences.map((exp) => (
                        <ExperienceCard key={exp.id} experience={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;