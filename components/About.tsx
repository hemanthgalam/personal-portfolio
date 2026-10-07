import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="about">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">About</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 neural-card rounded-2xl p-5 sm:p-7">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">{PERSONAL_INFO.bio}</p>
          </div>

          <dl className="neural-card rounded-2xl p-5 sm:p-7 space-y-5 text-sm">
            <div>
              <dt className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                <MapPin size={14} className="text-sky-400" />
                Location
              </dt>
              <dd className="text-slate-200">{PERSONAL_INFO.location}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                <Languages size={14} className="text-sky-400" />
                Languages
              </dt>
              {PERSONAL_INFO.languages.map(language => (
                <dd key={language} className="text-slate-200">{language}</dd>
              ))}
            </div>
          </dl>
        </div>

      </div>
    </section>
  );
};

export default About;
