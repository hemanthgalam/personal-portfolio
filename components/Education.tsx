import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="education">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {EDUCATION.map(edu => (
            <article key={edu.degree} className="neural-card rounded-2xl p-5 sm:p-7 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono pb-3 border-b border-slate-800 text-sky-400 font-bold">
                <GraduationCap size={16} />
                <span>DEGREE</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">{edu.degree}</h3>
              <p className="text-sky-400 font-semibold text-sm mb-3 font-mono">{edu.institution}</p>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-4">
                <Calendar size={13} className="text-sky-400" />
                {edu.period}
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

              {edu.note && (
                <p className="mt-4 text-xs font-mono text-slate-500">{edu.note}</p>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
