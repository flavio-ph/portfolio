import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-[#0f0f12] theme-transition overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[80%] h-[80%] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 w-full max-w-[320px] aspect-square flex items-center justify-center">
            <div className="animate-float">
              <img
                src="https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u1f9d1_1f3ff_200d_1f4bb.png"
                alt="Ilustração Desenvolvedor"
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 p-4 glass rounded-2xl shadow-xl border border-pink-500/20 dark:border-pink-500/30 animate-float-fast hover:scale-105 transition-transform [animation-delay:1s] group cursor-default">
              <div className="text-center group-hover:animate-pulse">
                <span className="block text-2xl font-bold text-pink-500 leading-none">2</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Anos Tech</span>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 px-4 py-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-lg text-xs font-mono shadow-lg animate-float-slow [animation-delay:0.5s]">
              &lt;code /&gt;
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-pink-500 font-bold tracking-[0.2em] text-xs uppercase">Trajetória Profissional</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold">Sobre Mim</h3>
          </div>

          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            <p>
              Sou um desenvolvedor com experiência na criação de soluções digitais funcionais e bem estruturadas, sempre com foco em qualidade, organização e boa experiência para o usuário. Ao longo da minha trajetória, venho evoluindo constantemente, aplicando boas práticas e buscando aprimorar minhas entregas.
            </p>
            <p>
              Atuo no desenvolvimento de aplicações completas, desde a concepção das ideias até a implementação e manutenção das soluções, utilizando tanto abordagens tradicionais quanto plataformas low-code, o que me permite entregar soluções eficientes, escaláveis e de fácil manutenção, sempre prezando por código limpo e bem estruturado.
            </p>
            <p>
              Acredito que a tecnologia deve ser utilizada para resolver problemas reais e gerar valor. Por isso, busco equilibrar eficiência técnica, clareza e usabilidade, contribuindo para o crescimento dos projetos e para a evolução contínua como profissional.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">5+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-pink-500">Projetos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">12</span>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">Stacks</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">100%</span>
              <span className="text-xs font-bold uppercase tracking-wider text-green-500">Dedicação</span>
            </div>

            <a
              href="/curriculo.pdf"
              download="Curriculo_Flavio.pdf"
              className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold flex items-center justify-center transition-all hover:-translate-y-1 shadow-xl shadow-pink-500/20 w-fit group md:ml-4"
            >
              Baixar Currículo
              <Download className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;