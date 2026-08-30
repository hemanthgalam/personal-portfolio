import React from 'react';
import { Mail, Phone, Github, Linkedin, ChevronDown, User, Video } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-slate-900 pt-32 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-indigo-50 dark:bg-indigo-900/20 blur-3xl opacity-40 dark:opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-40 dark:opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 text-sm font-medium mb-6">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8 max-w-2xl mx-auto md:mx-0">
              {PERSONAL_INFO.title}
            </h2>

            <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
              {PERSONAL_INFO.primarySkills.map((skill, idx) => (
                <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-md transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-12 text-slate-600 dark:text-slate-400 justify-center md:justify-start">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group justify-center md:justify-start">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 group-hover:bg-primary-50 dark:group-hover:bg-slate-700 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium">{PERSONAL_INFO.email}</span>
              </a>
              
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group justify-center md:justify-start">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 group-hover:bg-primary-50 dark:group-hover:bg-slate-700 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="font-medium">{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               {PERSONAL_INFO.linkedin && (
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all hover:scale-105 font-medium shadow-lg shadow-primary-500/20"
                >
                  <Linkedin size={22} />
                  Connect on LinkedIn
                </a>
              )}
              {PERSONAL_INFO.github && (
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium"
                >
                  <Github size={22} />
                  View GitHub
                </a>
              )}
              {PERSONAL_INFO.meetingUrl && (
                 <a 
                  href={PERSONAL_INFO.meetingUrl}
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl transition-all hover:scale-105 font-medium shadow-lg shadow-green-500/20 hover:from-green-600 hover:to-emerald-700"
                >
                  <Video size={22} />
                  Schedule Meeting
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Headshot Placeholder */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative group w-72 h-72 md:w-96 md:h-96">
              {/* Decorative background blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-indigo-200 dark:from-primary-900/40 dark:to-indigo-900/40 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 blur-sm"></div>
              
              {/* Image Container */}
              <div className="relative h-full w-full bg-slate-100 dark:bg-slate-800 rounded-[2rem] border-4 border-white dark:border-slate-700 shadow-2xl overflow-hidden flex items-center justify-center">
                {/* 
                  PLACEHOLDER LOGIC:
                  In a real app, replace this div with an <img src="/path/to/photo.jpg" /> 
                */}
                <div className="text-center p-6 text-slate-400 dark:text-slate-500 flex flex-col items-center gap-4">
                  <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-2">
                    <User size={64} className="opacity-50" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm uppercase tracking-widest mb-1">Professional Headshot</p>
                    <p className="text-xs opacity-70">Replace this placeholder with your photo</p>
                  </div>
                </div>
                
                {/* Overlay gradient for style */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <a href="#experience" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-600 hidden md:block cursor-pointer hover:text-primary-500 transition-colors">
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;