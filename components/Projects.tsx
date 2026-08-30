
import React, { useState } from 'react';
import { PROJECTS, FREELANCE_PROJECTS, ACHIEVEMENTS } from '../constants';
import { Project } from '../types';
import { FolderGit2, Trophy, Award, ExternalLink, Github, Layers, Briefcase, Video, Presentation, FileText } from 'lucide-react';
import Modal from './Modal';
import Slideshow from './Slideshow';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

   // Helper to construct appropriate Iframe SRC based on source type
   const getIframeSrc = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url;
    }
    return `${url}#toolbar=0&view=Fit`;
  };

  const renderProjectCard = (project: Project, idx: number) => (
    <button 
      key={idx} 
      onClick={() => setSelectedProject(project)}
      className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col w-full text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      type="button"
      aria-label={`View details for project ${project.name}`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={20} className="text-indigo-500 dark:text-indigo-400" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {project.name}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.slice(0, 3).map((tag, tIdx) => {
          const isNode = tag.toLowerCase().includes('node');
          return (
            <span 
              key={tIdx} 
              className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                isNode 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {tag}
            </span>
          );
        })}
        {project.tags.length > 3 && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
            +{project.tags.length - 3}
          </span>
        )}
      </div>
    </button>
  );

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Projects Column */}
          <div className="flex-1">
            {/* Featured Projects */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <FolderGit2 size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Select a project to see technical details</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map(renderProjectCard)}
              </div>
            </div>

            {/* Freelance Projects */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Freelance Work</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Independent contracts & Client solutions</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FREELANCE_PROJECTS.map(renderProjectCard)}
              </div>
            </div>
          </div>

          {/* Achievements Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 rounded-xl">
                  <Trophy size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Recognition</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Hackathons & Awards</p>
                </div>
              </div>

              <div className="space-y-4">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4 items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-500">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100">{ach.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">{ach.event}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{ach.location}</p>
                    </div>
                  </div>
                ))}
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/50 p-6 rounded-2xl border border-blue-100 dark:border-slate-700 mt-8">
                   <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
                      <Award size={20} className="text-blue-600 dark:text-blue-400" /> 
                      Certifications
                   </h3>
                   <div className="bg-white/60 dark:bg-slate-900/50 p-3 rounded-lg backdrop-blur-sm">
                     <p className="text-blue-800 dark:text-blue-200 font-medium">TensorFlow Developer Certificate</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name || ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            
            {/* Video or Presentation Section for Projects */}
            {(selectedProject.videoUrl || selectedProject.presentationUrl || (selectedProject.slides && selectedProject.slides.length > 0)) && (
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                 <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                        {selectedProject.videoUrl ? <Video size={16} className="text-primary-500" /> : <Presentation size={16} className="text-primary-500" />}
                        {selectedProject.videoUrl ? 'Project Video' : 'Project Demo'}
                    </h4>
                    {/* Fallback download if presentationUrl exists */}
                    {selectedProject.presentationUrl && (
                      <a 
                        href={selectedProject.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        <ExternalLink size={14} />
                        View/Download
                      </a>
                    )}
                 </div>
                 
                 {selectedProject.videoUrl ? (
                   <div className="w-full h-[50vh] md:h-[65vh] bg-black rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg relative group">
                      <video 
                        controls 
                        className="w-full h-full object-contain"
                        preload="metadata"
                      >
                        <source src={selectedProject.videoUrl} type="video/mp4" />
                        <source src={selectedProject.videoUrl} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                   </div>
                 ) : selectedProject.presentationUrl ? (
                   <div className="w-full h-[50vh] md:h-[65vh] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                     <iframe 
                       src={getIframeSrc(selectedProject.presentationUrl)}
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
                         href={selectedProject.presentationUrl} 
                         target="_blank" 
                         rel="noreferrer" 
                         className="text-primary-600 dark:text-primary-400 font-semibold underline decoration-2 underline-offset-4 hover:text-primary-700 dark:hover:text-primary-300"
                       >
                         Open directly
                       </a>
                     </div>
                   </div>
                 ) : (
                   <Slideshow slides={selectedProject.slides!} />
                 )}
              </div>
            )}

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers size={16} />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => {
                   const isNode = tag.toLowerCase().includes('node');
                   return (
                    <span 
                      key={idx} 
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${
                        isNode
                        ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {tag}
                    </span>
                   )
                })}
              </div>
            </div>

            {/* Placeholder for project links if we add them to the data later */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
              <button className="flex-1 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-2">
                <Github size={18} />
                View Source
              </button>
              <button className="flex-1 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                <ExternalLink size={18} />
                Live Demo
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
