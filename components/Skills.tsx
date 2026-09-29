import React from 'react';
import { SKILL_CATEGORIES, ROBOTICS_SKILL_CATEGORIES } from '../constants';
import { Database, Cpu, Terminal, Share2, Layers, ShieldCheck, Bot } from 'lucide-react';

interface SkillsProps {
  profile?: 'backend' | 'robotics';
}

const getClusterIcon = (category: string) => {
  if (category.includes('Robotics') || category.includes('ROS')) return <Bot size={20} className="text-amber-400" />;
  if (category.includes('AI') || category.includes('Deep Learning')) return <Cpu size={20} className="text-indigo-400" />;
  if (category.includes('Languages')) return <Cpu size={20} className="text-sky-400" />;
  if (category.includes('Database')) return <Database size={20} className="text-indigo-400" />;
  if (category.includes('Security')) return <ShieldCheck size={20} className="text-emerald-400" />;
  return <Terminal size={20} className="text-amber-400" />;
};

const getSkillProgress = (skill: string) => {
  const code = skill.toLowerCase();
  if (code.includes('ros2') || code.includes('isaac') || code.includes('c++') || code.includes('pytorch') || code.includes('node') || code.includes('typescript') || code.includes('docker') || code.includes('aws')) {
    return "90%";
  }
  if (code.includes('tensorrt') || code.includes('python') || code.includes('transformers') || code.includes('gcn') || code.includes('sim2real')) {
    return "85%";
  }
  return "75%";
};

const Skills: React.FC<SkillsProps> = ({ profile = 'backend' }) => {
  const categories = profile === 'robotics' ? ROBOTICS_SKILL_CATEGORIES : SKILL_CATEGORIES;

  return (
    <section className="py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="skills">
      
      {/* Route Line background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-sky-500/50 via-slate-800 to-indigo-500/50 pointer-events-none hidden lg:block">
        <div className="packet-purple"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Technical Capabilities</h2>
          <p className="text-slate-400 text-sm font-mono max-w-xl">
            {profile === 'robotics' 
              ? 'Core Competencies in ROS2, Sim2Real, Edge AI & Deep Learning' 
              : 'Core Competencies in Distributed Backend Systems & Infrastructure'
            }
          </p>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="neural-card rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>

              {/* Cluster Title */}
              <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl">
                    {getClusterIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{cat.category}</h3>
                  </div>
                </div>
              </div>

              {/* Skill Nodes Grid */}
              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((skill, sIdx) => {
                  const progress = getSkillProgress(skill);
                  return (
                    <div 
                      key={sIdx} 
                      className="p-3.5 bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 rounded-xl flex flex-col justify-between transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="text-slate-200 font-semibold text-sm group-hover:text-sky-400 transition-colors truncate">{skill}</span>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
                        <div 
                          className="h-full bg-sky-400 transition-all duration-500 rounded-full"
                          style={{ width: progress }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;