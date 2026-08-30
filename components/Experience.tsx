import React, { useState } from 'react';
import { WORK_HISTORY } from '../constants';
import { WorkExperience } from '../types';
import { Calendar, MapPin, Briefcase, ArrowRight, Presentation, ExternalLink, FileText, Video } from 'lucide-react';
import Modal from './Modal';
import Slideshow from './Slideshow';

const Experience: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<WorkExperience | null>(null);

  // Helper to construct appropriate Iframe SRC based on source type
  const getIframeSrc = (url: string) => {
    // For Google Drive links, we use the URL as is (assuming it's a preview link)
    // We avoid appending PDF parameters like #toolbar=0 as they don't apply to Drive Viewer
    if (url.includes('drive.google.com')) {
      return url;
    }
    // For standard PDF files, attempt to hide toolbar and fit view
    return `${url}#toolbar=0&view=Fit`;
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300" id="experience">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Professional Journey</h2>
            <p className="text-slate-600 dark:text-slate-400">A timeline of my contributions and technical growth.</p>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_HISTORY.map((job, idx) => (
            <div 
              key={idx} 
              className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-slate-900/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-xl text-primary-600 dark:text-primary-400">
                    <Briefcase size={24} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                    {job.period}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {job.role}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">{job.company}</p>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {job.summary}
                </p>
              </div>

              <button 
                onClick={() => setSelectedJob(job)}
                className="w-full py-3 px-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-xl flex items-center justify-center gap-2 transition-colors group-hover:bg-primary-50 dark:group-hover:bg-slate-700/50 group-hover:text-primary-700 dark:group-hover:text-primary-300"
              >
                View Details
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
        title={selectedJob?.role || ''}
        subtitle={selectedJob?.company}
      >
        {selectedJob && (
          <div className="space-y-8">
            <div className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary-500 dark:text-primary-400" />
                {selectedJob.period}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-500 dark:text-primary-400" />
                {selectedJob.location}
              </div>
            </div>

            {/* Video or Presentation Section */}
            {(selectedJob.videoUrl || selectedJob.presentationUrl || (selectedJob.slides && selectedJob.slides.length > 0)) && (
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                 <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                        {selectedJob.videoUrl ? <Video size={16} className="text-primary-500" /> : <Presentation size={16} className="text-primary-500" />}
                        {selectedJob.videoUrl ? 'Presentation Video' : 'Presentation Slides'}
                    </h4>
                    {/* Fallback download if presentationUrl exists */}
                    {selectedJob.presentationUrl && (
                      <a 
                        href={selectedJob.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        <ExternalLink size={14} />
                        View/Download
                      </a>
                    )}
                 </div>
                 
                 {selectedJob.videoUrl ? (
                   <div className="w-full h-[50vh] md:h-[65vh] bg-black rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg relative group">
                      <video 
                        controls 
                        className="w-full h-full object-contain"
                        preload="metadata"
                      >
                        <source src={selectedJob.videoUrl} type="video/mp4" />
                        <source src={selectedJob.videoUrl} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                   </div>
                 ) : selectedJob.presentationUrl ? (
                   <div className="w-full h-[50vh] md:h-[65vh] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                     <iframe 
                       src={getIframeSrc(selectedJob.presentationUrl)}
                       className="w-full h-full relative z-10"
                       title="Presentation PDF"
                       allow="autoplay"
                     >
                     </iframe>
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-slate-500 dark:text-slate-400 z-0">
                       <FileText size={48} className="mb-4 opacity-50" />
                       <p className="mb-2 font-medium">Loading Document...</p>
                       <p className="text-xs max-w-xs opacity-70 mb-4">If the document doesn't load automatically, use the button above.</p>
                       <a 
                         href={selectedJob.presentationUrl} 
                         target="_blank" 
                         rel="noreferrer" 
                         className="text-primary-600 dark:text-primary-400 font-semibold underline decoration-2 underline-offset-4 hover:text-primary-700 dark:hover:text-primary-300"
                       >
                         Open directly
                       </a>
                     </div>
                   </div>
                 ) : (
                   <Slideshow slides={selectedJob.slides!} />
                 )}
              </div>
            )}

            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Key Responsibilities & Achievements</h4>
              <ul className="space-y-4">
                {selectedJob.description.map((desc, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary-400 dark:bg-primary-500" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Experience;