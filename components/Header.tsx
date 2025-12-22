
import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Instagram, Menu, X } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter flex items-center">
          <span>Flávio</span>
          <span className="text-pink-500 ml-1">Almeida</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-pink-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-3 border-r pr-4 border-slate-200 dark:border-white/10">
            <a href="#" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 hover:text-pink-500 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 hover:text-pink-500 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 hover:text-pink-500 transition-all duration-300">
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

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-[#0f0f12] border-b border-slate-200 dark:border-white/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium hover:text-pink-500 transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-slate-100 dark:border-white/5 w-full justify-center">
            <a href="#" className="p-2 hover:text-pink-500 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="p-2 hover:text-pink-500 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="p-2 hover:text-pink-500 transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
