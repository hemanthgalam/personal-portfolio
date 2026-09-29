import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="education">
      
      {/* Route Line background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-sky-500/50 via-slate-800 to-indigo-500/50 pointer-events-none hidden lg:block">
        <div className="packet-purple"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Education & Degrees</h2>
          <p className="text-slate-300 text-base max-w-xl">
            Academic degrees and credentials in electrical engineering, computer science, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <div 
              key={idx} 
              className="neural-card rounded-2xl p-7 relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4 text-xs font-mono pb-3 border-b border-slate-800">
                <span className="flex items-center gap-2 text-sky-400 font-bold">
                  <GraduationCap size={16} />
                  <span>ACADEMIC DEGREE</span>
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={14} />
                  VERIFIED
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">{edu.degree}</h3>
              <p className="text-sky-400 font-semibold text-sm mb-4 font-mono">{edu.institution}</p>
              
              <div className="text-xs font-mono text-slate-400 mb-4">
                <span className="text-slate-500 uppercase tracking-wider">Period:</span> {edu.period}
              </div>

              {edu.details && (
                <ul className="space-y-3 border-t border-slate-800 pt-4 text-sm text-slate-300">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-2.5 items-start">
                      <span className="text-sky-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;