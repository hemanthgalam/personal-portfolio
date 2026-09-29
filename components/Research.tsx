import React, { useState } from 'react';
import { RESEARCH_HISTORY, ROBOTICS_RESEARCH_HISTORY } from '../constants';
import { WorkExperience } from '../types';
import { Calendar, MapPin, Award, ArrowRight, ExternalLink, FileText, Activity, CheckCircle2, Cpu, Mail } from 'lucide-react';
import Modal from './Modal';
import Slideshow from './Slideshow';

interface ResearchProps {
  profile?: 'backend' | 'robotics';
}

const Research: React.FC<ResearchProps> = ({ profile = 'backend' }) => {
  const [selectedThesis, setSelectedThesis] = useState<WorkExperience | null>(null);

  const history = profile === 'robotics' ? ROBOTICS_RESEARCH_HISTORY : RESEARCH_HISTORY;

  const getIframeSrc = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url;
    }
    return `${url}#toolbar=0&view=Fit`;
  };

  const hasMedia = (thesis: WorkExperience) => {
    return !!(thesis.videoUrl || thesis.presentationUrl || (thesis.slides && thesis.slides.length > 0));
  };

  return (
    <section className="py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="research">
      
      {/* Route line indicator */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500/50 via-slate-800 to-sky-500/50 pointer-events-none hidden lg:block">
        <div className="packet-cyan"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Research & Publications</h2>
          <p className="text-slate-400 text-sm font-mono max-w-xl">
            {profile === 'robotics' 
              ? 'Academic Master & Research Theses in Robotics, ML & Computer Vision' 
              : 'Academic Master & Research Theses at the University of Stuttgart'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {history.map((thesis, idx) => (
            <div 
              key={idx} 
              className="neural-card rounded-2xl p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Cpu size={16} className="text-sky-400" />
                    <span className="text-white font-bold text-sm">{thesis.company}</span>
                  </div>
                  <span className="text-slate-400 font-mono">{thesis.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
                  {thesis.role}
                </h3>
                <p className="text-sky-400 font-semibold font-mono text-xs mb-4">{thesis.period}</p>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {thesis.summary}
                </p>

                {thesis.referenceEmail && (
                  <div className="mb-6 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs">
                    <Mail size={14} className="text-sky-400 shrink-0" />
                    <span className="text-slate-400">Advisor Ref:</span>
                    <a 
                      href={`mailto:${thesis.referenceEmail}`} 
                      className="text-sky-400 hover:underline font-mono truncate font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {thesis.referenceEmail}
                    </a>
                  </div>
                )}
              </div>

              <button 
                onClick={() => setSelectedThesis(thesis)}
                className="w-full mt-auto py-3 px-4 bg-slate-900 border border-slate-700 hover:border-sky-500/50 hover:bg-sky-500/10 text-slate-200 font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                View Thesis & Slides
                <ArrowRight size={15} className="text-sky-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedThesis} 
        onClose={() => setSelectedThesis(null)} 
        title={selectedThesis?.role || ''}
        subtitle={selectedThesis ? `${selectedThesis.company} // Detailed Research Logs` : undefined}
      >
        {selectedThesis && (
          <div className="text-sm space-y-6">
            
            {/* Upper Stats */}
            <div className="flex flex-wrap gap-6 text-xs bg-slate-950/60 border border-slate-800 p-4 rounded-xl font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-sky-400" />
                <span>PERIOD: {selectedThesis.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-sky-400" />
                <span>ZONE: {selectedThesis.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={14} className="text-emerald-400" />
                <span>VERIFICATION: Academic Consensus</span>
              </div>
            </div>

            {/* Split layout: media on left, text logs on right */}
            <div className={`grid grid-cols-1 ${hasMedia(selectedThesis) ? 'lg:grid-cols-12' : ''} gap-8`}>
              
              {/* Media column */}
              {hasMedia(selectedThesis) && (
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-4 text-xs font-mono">
                      <h4 className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Activity size={15} className="text-sky-400 animate-pulse" />
                        Thesis Presentation Slides
                      </h4>
                      {selectedThesis.presentationUrl && (
                        <a 
                          href={selectedThesis.presentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-sky-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-sky-400 transition-all"
                        >
                          <ExternalLink size={12} />
                          Full View
                        </a>
                      )}
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center">
                      {selectedThesis.videoUrl ? (
                        <div className="w-full h-[40vh] md:h-[48vh] bg-black rounded-lg overflow-hidden border border-slate-800 relative group">
                          <video 
                            controls 
                            className="w-full h-full object-contain"
                            preload="metadata"
                          >
                            <source src={selectedThesis.videoUrl} type="video/mp4" />
                            <source src={selectedThesis.videoUrl} type="video/webm" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : selectedThesis.presentationUrl ? (
                        <div className="w-full h-[40vh] md:h-[48vh] bg-slate-900 rounded-lg overflow-hidden border border-slate-800 relative">
                          <iframe 
                            src={getIframeSrc(selectedThesis.presentationUrl)}
                            className="w-full h-full relative z-10"
                            title="Presentation PDF"
                            allow="autoplay"
                          >
                          </iframe>
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-slate-400 z-0">
                            <FileText size={40} className="mb-3 opacity-40 text-sky-400" />
                            <p className="mb-2 font-medium">Mounting thesis slide stream...</p>
                            <a 
                              href={selectedThesis.presentationUrl} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-sky-400 font-semibold underline hover:text-white"
                            >
                              View directly
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full">
                          <Slideshow slides={selectedThesis.slides!} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Text logs column */}
              <div className={`${hasMedia(selectedThesis) ? 'lg:col-span-5' : 'w-full'} space-y-6`}>
                
                {/* Summary */}
                <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 border-l-2 border-sky-400 pl-2 font-mono">// Research Brief</h4>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {selectedThesis.summary}
                  </p>
                </div>

                {/* Contributions */}
                <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-sky-400 pl-2 font-mono">// Contributions Ledger</h4>
                  <ul className="space-y-3 text-sm">
                    {selectedThesis.description.map((desc, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-200 leading-relaxed items-start">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-sky-400 pl-2 font-mono">// Technology Domains</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedThesis.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg font-mono text-xs hover:border-sky-400/50 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Supervisor Reference */}
                {selectedThesis.referenceEmail && (
                  <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 border-l-2 border-sky-400 pl-2 font-mono">// Academic Supervisor Reference</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-200">
                      <Mail size={16} className="text-sky-400 shrink-0" />
                      <span>Official Contact:</span>
                      <a 
                        href={`mailto:${selectedThesis.referenceEmail}`} 
                        className="text-sky-400 font-mono hover:underline font-bold"
                      >
                        {selectedThesis.referenceEmail}
                      </a>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        )}
      </Modal>
    </section>
  );
};

export default Research;
