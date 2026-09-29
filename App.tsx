import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import References from './components/References';
import Chatbot from './components/Chatbot';
import ScrollDog from './components/ScrollDog'; // Rethemed as NetworkPing
import { Moon, Sun, Server, Cpu, Bot, Code2 } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [profile, setProfile] = useState<'backend' | 'robotics'>('backend');

  // URL path & parameter check: /portfolio -> robotics, /hemanth -> backend
  useEffect(() => {
    const search = window.location.search.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (
      path.includes('/portfolio') || 
      search.includes('portfolio') || 
      hash.includes('portfolio') ||
      search.includes('robotics') ||
      hash.includes('robotics')
    ) {
      setProfile('robotics');
    } else if (
      path.includes('/hemanth') || 
      search.includes('hemanth') || 
      hash.includes('hemanth')
    ) {
      setProfile('backend');
    }
  }, []);

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
      <header className="fixed top-0 left-0 right-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3.5 flex justify-between items-center text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <Server size={16} className="text-sky-400" />
          <span className="text-white font-bold tracking-wider uppercase text-sm hidden sm:inline">hemanth_galam.io</span>
          <span className="text-white font-bold tracking-wider uppercase text-xs sm:hidden">hg.io</span>
        </div>
        
        {/* Navigation links */}
        <nav className="hidden lg:flex gap-6 text-slate-300 font-sans font-medium text-xs">
          <a href="#ingress" className="hover:text-sky-400 transition-colors">Welcome</a>
          <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
          <a href="#research" className="hover:text-sky-400 transition-colors">Research</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#education" className="hover:text-sky-400 transition-colors">Education</a>
          <a href="#references" className="hover:text-sky-400 transition-colors">References</a>
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

      {/* Main Cluster Ingress */}
      <div id="ingress">
        <Hero profile={profile} />
      </div>

      {/* Network Hop Connector 1 -> 2 */}
      <div className="w-full flex justify-center py-4 bg-cyber-bg pointer-events-none">
        <div className="w-0.5 h-16 bg-gradient-to-b from-cyber-cyan to-cyber-purple relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyber-cyan animate-ping"></div>
          <div className="packet"></div>
        </div>
      </div>

      {/* Hop 2: Service Mesh */}
      <Experience profile={profile} />

      {/* Network Hop Connector 2 -> 3 */}
      <div className="w-full flex justify-center py-4 bg-cyber-bg pointer-events-none">
        <div className="w-0.5 h-16 bg-gradient-to-b from-cyber-purple to-cyber-cyan relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyber-purple animate-ping"></div>
          <div className="packet-purple"></div>
        </div>
      </div>

      {/* Hop 3: Research Registry */}
      <Research profile={profile} />

      {/* Network Hop Connector 3 -> 4 */}
      <div className="w-full flex justify-center py-4 bg-cyber-bg pointer-events-none">
        <div className="w-0.5 h-16 bg-gradient-to-b from-cyber-cyan to-cyber-amber relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyber-cyan animate-ping"></div>
          <div className="packet-cyan"></div>
        </div>
      </div>

      {/* Hop 4: Storage Layer */}
      <Skills profile={profile} />

      {/* Network Hop Connector 4 -> 5 */}
      <div className="w-full flex justify-center py-4 bg-cyber-bg pointer-events-none">
        <div className="w-0.5 h-16 bg-gradient-to-b from-cyber-amber to-cyber-cyan relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyber-amber animate-ping"></div>
          <div className="packet-amber"></div>
        </div>
      </div>

      {/* Hop 5: Event Queue Broker */}
      <Projects profile={profile} />

      {/* Network Hop Connector 5 -> 6 */}
      <div className="w-full flex justify-center py-4 bg-cyber-bg pointer-events-none">
        <div className="w-0.5 h-16 bg-gradient-to-b from-cyber-cyan to-cyber-emerald relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyber-cyan animate-ping"></div>
          <div className="packet"></div>
        </div>
      </div>

      {/* Hop 6: Academic Security Registry */}
      <Education />

      {/* Network Hop Connector 6 -> 7 */}
      <div className="w-full flex justify-center py-4 bg-cyber-bg pointer-events-none">
        <div className="w-0.5 h-16 bg-gradient-to-b from-cyber-emerald to-cyber-cyan relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyber-emerald animate-ping"></div>
          <div className="packet"></div>
        </div>
      </div>

      {/* Hop 7: Consensus Endorsements */}
      <References />

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
          <p className="text-[10px] text-slate-400 max-w-md mx-auto leading-relaxed">
            All rights reserved.
          </p>
          <div className="text-[9px] text-slate-600">
            © {new Date().getFullYear()} Hemanth Kumar Galam.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;