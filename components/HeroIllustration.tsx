
import React from 'react';
import { Rocket } from 'lucide-react';

const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} flex items-center justify-center relative`}>
      {/* Brilho de fundo pulsante para dar profundidade ao ícone */}
      <div className="absolute w-64 h-64 bg-pink-500/20 dark:bg-pink-500/10 blur-[120px] rounded-full animate-pulse"></div>
      
      {/* Ícone de Foguete Principal */}
      <Rocket 
        size={320} 
        className="text-pink-500 dark:text-pink-400 relative z-10 stroke-[1.2]" 
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
