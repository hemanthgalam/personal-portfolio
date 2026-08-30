import React, { useEffect, useState } from 'react';
import { Dog } from 'lucide-react';

const ScrollDog: React.FC = () => {
  const [scrollDir, setScrollDir] = useState<'up' | 'down' | 'idle'>('idle');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let idleTimer: ReturnType<typeof setTimeout>;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      
      // Show dog only after scrolling a bit
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (Math.abs(scrollY - lastScrollY) < 5) {
        ticking = false;
        return;
      }

      const direction = scrollY > lastScrollY ? 'down' : 'up';
      setScrollDir(direction);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
      
      // Reset to idle if no scroll happens for 500ms
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setScrollDir('idle');
      }, 200);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-center pointer-events-none">
      
      {/* Rope Visual - Only visible when moving */}
      <div 
        className={`w-0.5 bg-primary-400/50 dark:bg-primary-500/50 transition-all duration-300 absolute left-1/2 -translate-x-1/2
          ${scrollDir === 'down' ? '-top-20 h-20' : 'h-0 -top-0'}
          ${scrollDir === 'up' ? 'top-10 h-20' : 'h-0'}
        `}
      ></div>

      {/* Robot Dog Container */}
      <div 
        className={`
          relative p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl border-2 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400
          transition-all duration-300 ease-out
          ${scrollDir === 'down' ? 'translate-y-2 rotate-12' : ''}
          ${scrollDir === 'up' ? '-translate-y-2 -rotate-12' : ''}
          ${scrollDir !== 'idle' ? 'animate-bounce scale-110' : 'scale-100'}
        `}
      >
        <Dog size={28} strokeWidth={2.5} />
        
        {/* Robot Eyes Glow */}
        <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      {/* Speech Bubble */}
      <div className={`
        mt-2 px-3 py-1 bg-slate-800 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-lg shadow-lg transition-opacity duration-300
        ${scrollDir !== 'idle' ? 'opacity-100' : 'opacity-0'}
      `}>
        {scrollDir === 'down' ? 'Pulling!' : 'Pushing!'}
      </div>
    </div>
  );
};

export default ScrollDog;