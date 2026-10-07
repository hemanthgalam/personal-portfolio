import React from 'react';
import { WORK_HISTORY } from '../constants';
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import FilterTabs, { AreaFilter, AREA_LABELS } from './FilterTabs';

interface ExperienceProps {
  filter: AreaFilter;
  onFilterChange: (value: AreaFilter) => void;
}

const Experience: React.FC<ExperienceProps> = ({ filter, onFilterChange }) => {
  const history = filter === 'all' ? WORK_HISTORY : WORK_HISTORY.filter(job => job.areas.includes(filter));

  return (
    <section className="py-16 sm:py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="experience">

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">

        {/* Section Header */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 text-center lg:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Experience</h2>
            <p className="text-slate-400 text-sm font-mono max-w-xl">
              Backend engineering, robotics and ML roles, most recent first.
            </p>
          </div>
          <FilterTabs value={filter} onChange={onFilterChange} label="Filter experience by area" />
        </div>

        {/* Timeline */}
        <ol className="relative border-l border-slate-800 ml-2 sm:ml-3 space-y-8">
          {history.map(job => (
            <li key={`${job.company}-${job.period}`} className="pl-6 sm:pl-8 relative">
              <span className="absolute -left-[7px] top-7 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-[#0b0f19]" aria-hidden="true"></span>

              <article className="neural-card rounded-2xl p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 border-b border-slate-800 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Briefcase size={15} className="text-sky-400 shrink-0" />
                    <span className="text-white font-semibold text-sm">{job.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.areas.map(area => (
                      <span key={area} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[10px] uppercase tracking-wider">
                        {AREA_LABELS[area]}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{job.role}</h3>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-mono text-slate-400 mb-5">
                  <span className="flex items-center gap-1.5"><Calendar size={13} className="text-sky-400" />{job.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={13} className="text-sky-400" />{job.location}</span>
                </div>

                <ul className="space-y-2.5 text-sm mb-5">
                  {job.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-200 leading-relaxed items-start">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {job.skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg font-mono text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
