import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Database, Cpu, Terminal, Layers, ShieldCheck, Bot, Activity, Code2, Cloud, Box, Wrench, Sparkles } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Languages': <Code2 size={18} className="text-sky-400" />,
  'Backend': <Terminal size={18} className="text-sky-400" />,
  'Data & messaging': <Database size={18} className="text-indigo-400" />,
  'Cloud & delivery': <Cloud size={18} className="text-sky-400" />,
  'Observability': <Activity size={18} className="text-emerald-400" />,
  'Security': <ShieldCheck size={18} className="text-emerald-400" />,
  'Frontend': <Layers size={18} className="text-indigo-400" />,
  'Robotics': <Bot size={18} className="text-amber-400" />,
  'Perception & ML': <Cpu size={18} className="text-indigo-400" />,
  'Simulation & synthetic data': <Box size={18} className="text-amber-400" />,
  'Hardware': <Wrench size={18} className="text-amber-400" />,
  'AI tooling': <Sparkles size={18} className="text-indigo-400" />
};

const Skills: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="skills">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {SKILL_CATEGORIES.map(cat => (
            <div key={cat.category} className="neural-card rounded-2xl p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>

              <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl">
                  {CATEGORY_ICONS[cat.category] ?? <Terminal size={18} className="text-sky-400" />}
                </div>
                <h3 className="font-bold text-base text-white">{cat.category}</h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {cat.items.map(skill => (
                  <li key={skill} className="px-2.5 py-1 bg-slate-950/80 border border-slate-800 text-slate-200 rounded-lg font-mono text-xs">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
