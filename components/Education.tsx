import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <GraduationCap className="text-slate-700 dark:text-slate-300" />
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.institution}</p>
              <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full font-medium">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;