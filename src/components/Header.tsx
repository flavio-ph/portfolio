import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Instagram, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { Theme } from '../../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Sobre', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projetos', href: '#projects', icon: Briefcase },
    { name: 'Contato', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Controle do background do Header Desktop
      setScrolled(window.scrollY > 20);

      // Lógica de Scroll Spy
      const scrollPosition = window.scrollY + 200; // Offset para detectar a seção um pouco antes

      navLinks.forEach((link) => {
        const sectionId = link.href.replace('#', '');
        const element = document.getElementById(sectionId);

        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header Desktop */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'glass backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center">
            <span>Flávio</span>
            <span className="text-pink-500 ml-1">Almeida</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 ${activeSection === link.href.replace('#', '') ? 'text-pink-500 font-bold' : 'hover:text-pink-500'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-3 border-r pr-4 border-slate-200 dark:border-white/10">
              <a href="https://www.linkedin.com/in/fl%C3%A1vio-almeida-804827361/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 hover:text-pink-500 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/flavio-ph" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 hover:text-pink-500 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/fl4viox_/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 hover:text-pink-500 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {theme === Theme.DARK ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Inferior Mobile (Pílula com Active State) */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-4">
        <nav className="max-w-md mx-auto bg-white/70 dark:bg-[#0f0f12]/70 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-full shadow-2xl shadow-black/10">
          <ul className="flex justify-around items-center h-16 px-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name} className="flex-1">
                  <a
                    href={link.href}
                    className="flex flex-col items-center justify-center space-y-1 group py-2"
                  >
                    <div className={`p-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-pink-500/20' : 'group-hover:bg-pink-500/10 dark:group-hover:bg-pink-500/20'
                      }`}>
                      <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-pink-500' : 'text-slate-500 dark:text-slate-400 group-hover:text-pink-500'
                        }`} />
                    </div>
                    <span className={`text-[8px] font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-pink-500' : 'text-slate-400 dark:text-slate-500 group-hover:text-pink-500'
                      }`}>
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;