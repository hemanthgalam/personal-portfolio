import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ChevronDown, Cpu, ArrowRight, Server, Bot, Network } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { trackEvent } from '../utils/telemetry';

const Hero: React.FC = () => {
  const [sessionTime, setSessionTime] = useState(0);
  const [activeConsoleTab, setActiveConsoleTab] = useState<'endpoints' | 'metrics' | 'env'>('endpoints');

  const currentInfo = PERSONAL_INFO;

  // Simulate active session timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatSessionTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}s`;
  };

  return (
    <section className="relative bg-[#0b0f19] pt-28 sm:pt-32 pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-center neural-grid">
      
      {/* Background Decorative Neural Aura */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 text-center md:text-left">
            
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
              STUTTGART, GERMANY
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight text-white">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400">
                {currentInfo.name}
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-200 font-medium mb-8 flex items-center justify-center md:justify-start gap-2.5">
              <Network className="text-sky-400 shrink-0 hidden sm:block" size={24} />
              {currentInfo.tagline}
            </h2>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8 bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-slate-300 max-w-lg mx-auto md:mx-0">
              <div className="text-center md:text-left border-r border-slate-800 pr-2">
                <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1 font-mono">Session</span>
                <span className="text-white text-sm sm:text-base font-bold font-mono">{formatSessionTime(sessionTime)}</span>
              </div>
              <div className="text-center md:text-left border-r border-slate-800 px-2">
                <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1 font-mono">Experience</span>
                <span className="text-emerald-400 text-sm sm:text-base font-bold font-mono">5+ Years</span>
              </div>
              <div className="text-center md:text-left pl-2">
                <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1 font-mono">Focus</span>
                <span className="block text-sky-400 text-xs sm:text-sm font-bold font-mono leading-snug">Backend<br />Robotics<br />ML</span>
              </div>
            </div>

            {/* Primary Skill Badges */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
              {currentInfo.primarySkills.map((skill, idx) => (
                <span key={idx} className="px-3.5 py-1.5 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 hover:border-sky-500/50 hover:text-white transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap gap-3 mb-8 text-sm justify-center md:justify-start">
              <a
                href={`mailto:${currentInfo.email}`}
                onClick={() => trackEvent('click_email', { context: 'hero' })}
                className="flex items-center gap-2 px-4 py-2.5 bg-sky-500/15 border border-sky-500/40 text-white rounded-xl hover:bg-sky-500/25 transition-colors"
              >
                <Mail size={16} className="text-sky-400" />
                <span className="font-medium">Email me</span>
              </a>
              <a
                href={currentInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_github', { context: 'hero' })}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-700 text-slate-200 rounded-xl hover:border-sky-500/50 hover:text-white transition-colors"
              >
                <Github size={16} className="text-sky-400" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href={currentInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_linkedin', { context: 'hero' })}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-700 text-slate-200 rounded-xl hover:border-sky-500/50 hover:text-white transition-colors"
              >
                <Linkedin size={16} className="text-sky-400" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Console Dashboard */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative font-mono text-xs">
              
              {/* Header */}
              <div className="bg-slate-800/60 px-4 py-3 flex justify-between items-center border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="text-xs text-slate-300 font-semibold tracking-wide ml-2">neural_dashboard.sh</span>
                </div>
                <span className="text-xs text-slate-400">v2.4</span>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-800 text-slate-400 bg-slate-950/40">
                <button 
                  onClick={() => setActiveConsoleTab('endpoints')}
                  className={`flex-1 py-2.5 text-center font-bold transition-colors ${activeConsoleTab === 'endpoints' ? 'text-sky-400 bg-slate-800/40 border-b-2 border-b-sky-400' : 'hover:text-slate-200'}`}
                >
                  CONNECT
                </button>
                <button 
                  onClick={() => setActiveConsoleTab('metrics')}
                  className={`flex-1 py-2.5 text-center font-bold transition-colors ${activeConsoleTab === 'metrics' ? 'text-sky-400 bg-slate-800/40 border-b-2 border-b-sky-400' : 'hover:text-slate-200'}`}
                >
                  TOPOLOGY
                </button>
                <button 
                  onClick={() => setActiveConsoleTab('env')}
                  className={`flex-1 py-2.5 text-center font-bold transition-colors ${activeConsoleTab === 'env' ? 'text-sky-400 bg-slate-800/40 border-b-2 border-b-sky-400' : 'hover:text-slate-200'}`}
                >
                  SPECS
                </button>
              </div>

              {/* Console Body */}
              <div className="p-5 h-72 overflow-y-auto text-slate-200 space-y-4">
                
                {/* Tab: Endpoints */}
                {activeConsoleTab === 'endpoints' && (
                  <div className="space-y-3">
                    <p className="text-slate-400 text-xs mb-3 font-sans">// Connect with me directly:</p>
                    {PERSONAL_INFO.linkedin && (
                      <a 
                        href={PERSONAL_INFO.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('click_linkedin', { context: 'console_tab' })}
                        className="flex items-center justify-between p-3 bg-slate-950/60 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all rounded-xl group"
                      >
                        <div className="flex items-center gap-3">
                          <Linkedin size={18} className="text-sky-400" />
                          <span className="text-white font-medium text-sm font-sans">LinkedIn Profile</span>
                        </div>
                        <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {PERSONAL_INFO.github && (
                      <a 
                        href={PERSONAL_INFO.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('click_github', { context: 'console_tab' })}
                        className="flex items-center justify-between p-3 bg-slate-950/60 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all rounded-xl group"
                      >
                        <div className="flex items-center gap-3">
                          <Github size={18} className="text-sky-400" />
                          <span className="text-white font-medium text-sm font-sans">GitHub Repositories</span>
                        </div>
                        <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      onClick={() => trackEvent('click_email', { context: 'console_tab' })}
                      className="flex items-center justify-between p-3 bg-slate-950/60 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all rounded-xl group"
                    >
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-emerald-400" />
                        <span className="text-white font-medium text-sm font-sans">Email</span>
                      </div>
                      <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}

                {/* Tab: Topology */}
                {activeConsoleTab === 'metrics' && (
                  <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <div className="relative w-full max-w-[280px] h-[150px] border border-slate-800 bg-slate-950/80 rounded-xl p-3 flex flex-col justify-between">
                      <div className="flex justify-center">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-sky-500/10 border border-sky-500/40 rounded-lg text-xs text-sky-400 font-bold">
                          <Server size={12} />
                          <span>Design to delivery</span>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 flex justify-around items-center pointer-events-none">
                        <svg className="w-full h-full text-slate-700" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <line x1="50" y1="25" x2="20" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                          <line x1="50" y1="25" x2="50" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                          <line x1="50" y1="25" x2="80" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                          <circle cx="35" cy="47" r="2.5" fill="#38bdf8" className="animate-ping" />
                          <circle cx="50" cy="55" r="2.5" fill="#34d399" />
                          <circle cx="65" cy="47" r="2.5" fill="#818cf8" className="animate-ping" />
                        </svg>
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/40 rounded text-[10px] text-emerald-400">
                          <Server size={10} />
                          <span>Backend</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 border border-amber-500/40 rounded text-[10px] text-amber-400">
                          <Bot size={10} />
                          <span>Robotics</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/40 rounded text-[10px] text-indigo-400">
                          <Cpu size={10} />
                          <span>ML</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400">// Focus areas</span>
                  </div>
                )}

                {/* Tab: Specs */}
                {activeConsoleTab === 'env' && (
                  <div className="space-y-2.5 text-slate-300 text-xs font-mono">
                    <div>
                      <span className="text-indigo-400">EXPERIENCE</span> = <span className="text-sky-300 font-bold">"5+ years"</span>
                    </div>
                    <div>
                      <span className="text-indigo-400">LOCATION</span> = <span className="text-sky-300 font-bold">"{PERSONAL_INFO.location}"</span>
                    </div>
                    <div>
                      <span className="text-indigo-400">LANGUAGES</span> = <span className="text-sky-300 font-bold">"English C1, German A2"</span>
                    </div>
                    <div>
                      <span className="text-indigo-400">STACK</span> = <span className="text-sky-300 font-bold">"Node.js/TypeScript, Python, ROS 2"</span>
                    </div>
                    <div className="pt-3 text-slate-400 font-sans leading-relaxed border-t border-slate-800">
                      {PERSONAL_INFO.tagline}.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Down scroll button */}
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sky-400 hover:text-white transition-colors cursor-pointer flex flex-col items-center gap-1 font-mono text-xs">
        <span className="tracking-widest uppercase text-[10px]">Explore</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;