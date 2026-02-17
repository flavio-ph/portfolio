import React from 'react';
import heroIllustration from '../assets/hero-illustration.svg';

const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} flex items-center justify-center relative`}>
      {/* Brilho de fundo pulsante para dar profundidade */}
      <div className="absolute w-64 h-64 bg-pink-500/20 dark:bg-pink-500/10 blur-[120px] rounded-full animate-pulse"></div>

      {/* Ilustração Principal */}
      <img
        src={heroIllustration}
        alt="Hero Illustration"
        className="relative z-10 w-full h-auto drop-shadow-2xl"
        style={{
          filter: 'drop-shadow(0 0 40px rgba(236, 72, 153, 0.4))'
        }}
      />

      {/* Elementos decorativos (estrelas/pontos de brilho) */}
      <div className="absolute top-0 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-50 [animation-delay:1.5s]"></div>
      <div className="absolute top-1/2 -right-4 w-1 h-1 bg-white rounded-full animate-ping opacity-30 [animation-delay:0.8s]"></div>
    </div>
  );
};

export default HeroIllustration;
