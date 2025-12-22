
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to HTML element for Tailwind's dark mode class strategy
    const root = window.document.documentElement;
    if (theme === Theme.DARK) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <div className="min-h-screen theme-transition">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="theme-transition">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
