import React from 'react';
import { PUBLICATIONS } from '../constants';
import { trackEvent } from '../utils/telemetry';
import { BookOpen, ExternalLink } from 'lucide-react';

const Publication: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="publication">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Publication</h2>
        </div>

        <div className="space-y-6 max-w-4xl">
          {PUBLICATIONS.map(pub => (
            <article key={pub.doi} className="neural-card rounded-2xl p-5 sm:p-7">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono pb-3 border-b border-slate-800 text-indigo-300 font-bold">
                <BookOpen size={16} />
                <span>{pub.venue.toUpperCase()}</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">{pub.authors}</p>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug">"{pub.title}"</h3>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_publication', { doi: pub.doi })}
                className="inline-flex items-center gap-1.5 text-sm font-mono text-sky-400 hover:text-white hover:underline break-all"
              >
                <ExternalLink size={14} className="shrink-0" />
                DOI: {pub.doi}
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Publication;
