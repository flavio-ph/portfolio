
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-pink-500">Tech Stack</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Especialidades Técnicas</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Foco em tecnologias modernas e performáticas para entregar soluções escaláveis de ponta a ponta.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="group relative p-8 rounded-[32px] border border-slate-200/60 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/5 hover:-translate-y-1"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/5 group-hover:to-purple-600/5 rounded-[32px] transition-all duration-500"></div>
              
              <div className="relative flex flex-col items-center space-y-6">
                <div className="w-16 h-16 flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                
                <div className="text-center">
                  <span className="text-sm font-bold tracking-wider text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                  {/* Modern indicator line */}
                  <div className="mt-2 w-0 h-[2px] bg-pink-500 mx-auto group-hover:w-8 transition-all duration-500 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-sm text-slate-400 italic font-light tracking-wide">
            "Sempre explorando novas fronteiras tecnológicas."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
