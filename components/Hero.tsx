
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import HeroIllustration from './HeroIllustration';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Desenvolvedor web", "Desenvolvedor frontend", "Desenvolvedor backend"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 lg:order-1 relative z-10">
          <div className="space-y-2">
            <h3 className="text-pink-500 font-bold tracking-widest text-sm uppercase">Bem-vindo ao meu portfólio</h3>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Olá! Eu sou <span className="gradient-text">Flávio</span> <br />
              <span className="inline-block min-h-[1.2em]">
                {displayText}
                <span className="animate-pulse ml-1 text-pink-500">|</span>
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed pt-4">
              Transformo ideias complexas em código limpo, escalável e de alta performance. 
              Foco em UX/UI minimalista e eficiência no back-end.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full font-bold flex items-center group transition-all hover:pr-10 shadow-xl shadow-pink-500/10">
              Vamos Conectar
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center items-center">
          {/* Background Glow */}
          <div className="absolute w-[120%] h-[120%] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          
          <div className="relative group w-full max-w-xl">
            {/* Main Illustration Component */}
            <HeroIllustration 
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(236,72,153,0.3)] animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
