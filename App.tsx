import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Publication from './components/Publication';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import ScrollDog from './components/ScrollDog'; // Rethemed as NetworkPing
import { AreaFilter } from './components/FilterTabs';
import { Moon, Sun, Server } from 'lucide-react';

// Every URL variant (/, ?portfolio, ?hemanth, ...) renders the same page:
// nothing here reads the query string, path or hash.
const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#publication', label: 'Publication' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

const HopConnector: React.FC<{ from: string; to: string; dot: string; packet: string }> = ({ from, to, dot, packet }) => (
  <div className="w-full flex justify-center py-4 bg-cyber-bg pointer-events-none" aria-hidden="true">
    <div className={`w-0.5 h-12 sm:h-16 bg-gradient-to-b ${from} ${to} relative`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${dot} animate-ping`}></div>
      <div className={packet}></div>
    </div>
  </div>
);

function App() {
  const [isDark, setIsDark] = useState(true);
  // Shared Backend / Robotics / ML filter for Experience and Projects
  const [areaFilter, setAreaFilter] = useState<AreaFilter>('all');

  // Enforce dark mode as the default theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-white transition-colors duration-300 neural-grid relative pb-1">
      
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3.5 flex justify-between items-center text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <Server size={16} className="text-sky-400" />
            <span className="text-white font-bold tracking-wider uppercase text-sm hidden sm:inline">hemanth_galam.io</span>
            <span className="text-white font-bold tracking-wider uppercase text-xs sm:hidden">hg.io</span>
          </div>
        
          {/* Navigation links */}
          <nav aria-label="Sections" className="hidden lg:flex gap-5 text-slate-300 font-sans font-medium text-xs">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="hover:text-sky-400 transition-colors">{link.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Status Indicator */}
            <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px]">Status: Active</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-400 bg-slate-950 rounded-lg transition-colors"
              title="Toggle theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </header>

        {/* Mobile section links */}
        <nav aria-label="Sections" className="lg:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800 overflow-x-auto">
          <div className="flex gap-4 px-4 py-2 text-xs font-medium text-slate-300 whitespace-nowrap">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="hover:text-sky-400 transition-colors py-1">{link.label}</a>
            ))}
          </div>
        </nav>
      </div>

      <main>
        <div id="ingress">
          <Hero />
        </div>

        <HopConnector from="from-cyber-cyan" to="to-cyber-purple" dot="bg-cyber-cyan" packet="packet" />
        <About />
        <Experience filter={areaFilter} onFilterChange={setAreaFilter} />
        <HopConnector from="from-cyber-purple" to="to-cyber-amber" dot="bg-cyber-purple" packet="packet-purple" />
        <Projects filter={areaFilter} onFilterChange={setAreaFilter} />
        <HopConnector from="from-cyber-amber" to="to-cyber-emerald" dot="bg-cyber-amber" packet="packet-amber" />
        <Education />
        <Publication />
        <Achievements />
        <HopConnector from="from-cyber-emerald" to="to-cyber-cyan" dot="bg-cyber-emerald" packet="packet" />
        <Skills />
        <Contact />
      </main>

      {/* Floating System Log Daemon (AI Chatbot) */}
      <Chatbot />

      {/* Floating Telemetry Inbound Ping (Re-themed Scroll Companion) */}
      <ScrollDog />
      
      {/* Cluster Footer */}
      <footer className="bg-cyber-card text-slate-500 py-12 border-t border-cyber-border font-mono text-center relative scanline overflow-hidden">
        <div className="absolute inset-0 bg-cyber-bg/25 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <div className="flex justify-center items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
            <Server size={14} className="text-cyber-cyan animate-pulse" />
            Hemanth Kumar Galam
          </div>
          <div className="text-[9px] text-slate-600">
            © {new Date().getFullYear()} Hemanth Kumar Galam.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;