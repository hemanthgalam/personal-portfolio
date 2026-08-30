import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Code2, Database, Cpu, Terminal } from 'lucide-react';

const getIcon = (category: string) => {
  if (category.includes('Languages')) return <Code2 size={20} />;
  if (category.includes('Database')) return <Database size={20} />;
  if (category.includes('Machine')) return <Cpu size={20} />;
  return <Terminal size={20} />;
};

const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 border-b dark:border-slate-800 pb-4 border-slate-100">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-800 hover:border-primary-100 dark:hover:border-primary-900/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-primary-600 dark:text-primary-400">
                {getIcon(cat.category)}
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-md font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;