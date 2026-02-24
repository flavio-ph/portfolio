import React from 'react';
import { Briefcase, Building2, Calendar, ChevronRight } from 'lucide-react';
import { ExperienceData } from '../data/experiences';

interface ExperienceCardProps {
    experience: ExperienceData;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-[#0f0f12] bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-pink-500">
                <Briefcase size={16} aria-hidden="true" />
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-[#0f0f12] shadow-xl border border-slate-200/60 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/5 hover:-translate-y-1">
                <div className="flex flex-col space-y-4">
                    <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                {experience.role}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                <Calendar size={12} aria-hidden="true" />
                                {experience.period}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                            <Building2 size={14} className="text-pink-500" aria-hidden="true" />
                            {experience.company}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {experience.description}
                        </p>

                        <ul className="space-y-2">
                            {experience.achievements?.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                    <ChevronRight size={16} className="text-pink-500 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                        {experience.technologies?.map((tech, i) => (
                            <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
