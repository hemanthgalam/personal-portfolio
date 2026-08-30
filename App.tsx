import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Chatbot from './components/Chatbot';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-primary-100 selection:text-primary-900 dark:selection:bg-primary-900 dark:selection:text-primary-100 transition-colors duration-300">
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg hover:scale-110 transition-all text-slate-600 dark:text-yellow-400"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Main Content */}
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      
      {/* AI Chat Assistant */}
      <Chatbot />
      
      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4 text-slate-300 dark:text-slate-200 font-medium">Hemanth Kumar Galam</p>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;