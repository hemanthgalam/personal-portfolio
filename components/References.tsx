import React from 'react';
import { REFERENCES } from '../constants';
import { Users, Mail, CheckCircle2 } from 'lucide-react';

const References: React.FC = () => {
  return (
    <section className="py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="references">
      
      {/* Route Line background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500/50 via-slate-800 to-transparent pointer-events-none hidden lg:block">
        <div className="packet"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">References</h2>
          <p className="text-slate-300 text-base max-w-xl">
            Verified professional engineering contacts and academic thesis supervisors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REFERENCES.map((ref, idx) => (
            <div 
              key={idx} 
              className="neural-card rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-4 text-xs font-mono pb-3 border-b border-slate-800">
                <span className="flex items-center gap-2 text-sky-400 font-bold">
                  <Users size={16} />
                  <span>REFERENCE_0{idx + 1}</span>
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={14} />
                  VERIFIED
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 font-mono">{ref.name}</h3>
              <p className="text-sky-400 font-semibold text-sm mb-4 font-mono">{ref.role} // {ref.company}</p>
              
              <div className="space-y-3 border-t border-slate-800 pt-4 text-sm text-slate-300">
                <div className="flex gap-2.5 items-start">
                  <span className="text-slate-500 font-mono text-xs uppercase tracking-wider shrink-0 w-24">Relation:</span>
                  <span className="font-medium text-slate-200">{ref.relation}</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <span className="text-slate-500 font-mono text-xs uppercase tracking-wider shrink-0 w-24">Contact:</span>
                  {ref.contact.includes('@') ? (
                    <a href={`mailto:${ref.contact}`} className="text-sky-400 font-mono hover:underline font-bold flex items-center gap-1.5">
                      <Mail size={14} />
                      {ref.contact}
                    </a>
                  ) : (
                    <span className="font-mono text-slate-200">{ref.contact}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default References;
