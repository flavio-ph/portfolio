import React from 'react';
import { Briefcase, Building2, Calendar, ChevronRight } from 'lucide-react';
import { ExperienceData } from '../data/experiences';

interface ExperienceCardProps {
    experience: ExperienceData;
    isLast?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isLast }) => {
    return (
        <div className="group h-full flex flex-col pt-4 md:pt-0 relative">
            {/* Timeline Node - Absolute on the left line */}
            <div className="absolute -left-6 md:-left-[100px] top-4 md:top-8 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl border-4 border-slate-50 dark:border-[#0f0f12] bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors z-20 shadow-lg -translate-x-1/2">
                <Briefcase size={24} className="md:w-7 md:h-7" aria-hidden="true" />
            </div>

            <div className="flex flex-col flex-grow p-6 md:p-8 rounded-3xl bg-white dark:bg-[#0f0f12] shadow-xl border border-slate-200/60 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/10 hover:-translate-y-2 relative">


                <div className="flex flex-col gap-4 mb-6">
                    <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                        {experience.role}
                    </span>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 text-sm md:text-base font-medium text-slate-500 dark:text-slate-400">
                            <Building2 size={16} className="text-pink-500 md:w-[18px] md:h-[18px]" aria-hidden="true" />
                            {experience.company}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 tracking-wider">
                            <Calendar size={12} className="md:w-[14px] md:h-[14px]" aria-hidden="true" />
                            {experience.period}
                        </div>
                    </div>
                </div>

                <div className="space-y-4 flex-grow">
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                        {experience.description}
                    </p>

                    {experience.achievements && experience.achievements.length > 0 && (
                        <ul className="space-y-3 mt-4">
                            {experience.achievements.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <ChevronRight size={16} className="text-pink-500 shrink-0 mt-0.5 md:w-[18px] md:h-[18px]" aria-hidden="true" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {experience.technologies && experience.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-white/5 mt-8">
                        {experience.technologies.map((tech, i) => (
                            <span key={i} className="text-[10px] md:text-xs font-semibold px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;
