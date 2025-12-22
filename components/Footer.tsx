
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold flex items-center">
          <span>Flávio</span>
          <span className="text-pink-500 ml-1">Almeida</span>
        </div>
        
        <p className="text-slate-500 text-sm text-center">
          © {new Date().getFullYear()} Flávio Almeida. Todos os direitos reservados.
        </p>

        <div className="flex space-x-6 text-sm text-slate-500">
          <a href="#" className="hover:text-pink-500 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
