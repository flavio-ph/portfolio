
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Todos');

  const filteredProjects = activeTab === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-100/30 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center">Projetos Recentes</h2>
        
        <div className="flex justify-center border-b border-slate-200 dark:border-white/10">
          <div className="flex space-x-8">
            {['Todos', 'Front-end', 'Back-end', 'Full-stack'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-sm font-medium transition-all relative ${
                  activeTab === tab ? 'text-pink-500' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
