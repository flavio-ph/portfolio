
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-100/80 dark:bg-white/[0.03] theme-transition overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800" 
            alt="Workspace" 
            className="rounded-3xl shadow-xl w-full border border-black/5 dark:border-white/5"
          />
          <div className="absolute -bottom-10 -right-10 p-8 glass rounded-3xl hidden md:block shadow-xl">
            <div className="text-3xl font-bold text-pink-500">5+</div>
            <div className="text-xs font-semibold uppercase tracking-wider opacity-60">Anos de Experiência</div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">Sobre Mim</h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            <p>
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam, e hoje transformo essa curiosidade em sistemas robustos e eficientes.
            </p>
            <p>
              Com experiência em <span className="text-slate-900 dark:text-white font-bold transition-colors">Full Stack</span>, atuo desde a arquitetura de bancos de dados até a interface do usuário. Valorizo o <span className="text-slate-900 dark:text-white font-bold transition-colors">Clean Code</span> e a escalabilidade, sempre buscando soluções que não apenas resolvam problemas imediatos, mas que perdurem.
            </p>
            <p>
              Além do código, acredito no poder da colaboração e da liderança técnica para elevar o nível dos projetos. Estou sempre em busca de novos desafios que me permitam evoluir e entregar valor real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
