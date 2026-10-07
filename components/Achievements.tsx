import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, MapPin } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="achievements">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Achievements</h2>
          <p className="text-slate-400 text-sm font-mono max-w-xl">Hackathon prizes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ACHIEVEMENTS.map(ach => (
            <article key={ach.event} className="neural-card rounded-2xl p-5 sm:p-7">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono pb-3 border-b border-slate-800 text-amber-400 font-bold">
                <Trophy size={16} />
                <span>{ach.title.toUpperCase()}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{ach.event}</h3>
              <p className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-4">
                <MapPin size={13} className="text-sky-400" />
                {ach.location}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">{ach.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
