import React, { useState } from 'react';
import { PROJECTS, ROBOTICS_PROJECTS, ACHIEVEMENTS, PERSONAL_INFO } from '../constants';
import { Project } from '../types';
import { trackEvent } from '../utils/telemetry';
import { Trophy, ExternalLink, Github, FolderGit2, Activity, CheckCircle2, FileText, Play } from 'lucide-react';
import Modal from './Modal';
import Slideshow from './Slideshow';

interface ProjectsProps {
  profile?: 'backend' | 'robotics';
}

const Projects: React.FC<ProjectsProps> = ({ profile = 'backend' }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [query, setQuery] = useState('');
  const [technology, setTechnology] = useState('all');

  const projectList = profile === 'robotics' ? ROBOTICS_PROJECTS : PROJECTS;
  const technologies = [...new Set(projectList.flatMap(project => project.tags))].sort();
  const visibleProjects = projectList.filter(project =>
    (technology === 'all' || project.tags.includes(technology)) &&
    `${project.name} ${project.description} ${project.tags.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  const getIframeSrc = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url;
    }
    return `${url}#toolbar=0&view=Fit`;
  };

  const hasMedia = (project: Project) => {
    return !!(project.videoUrl || project.presentationUrl || (project.slides && project.slides.length > 0));
  };

  const renderProjectCard = (project: Project, idx: number) => {
    return (
      <button 
        key={project.name}
        onClick={() => {
          setSelectedProject(project);
          trackEvent('view_project_details', { project_name: project.name });
        }}
        className="group cursor-pointer neural-card rounded-2xl p-6 hover:border-amber-400/50 transition-all duration-300 relative flex flex-col w-full text-left focus:outline-none"
        type="button"
        aria-label={`View details for project ${project.name}`}
      >
        <div className="flex items-center justify-between gap-2 text-xs text-amber-400 mb-3 border-b border-slate-800 pb-3 w-full font-mono">
          <div className="flex items-center gap-2">
            <FolderGit2 size={16} />
            <span className="font-bold">PROJECT_0{idx + 1}</span>
          </div>
          <ExternalLink size={14} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
          {project.name}
        </h3>
        
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, tIdx) => (
            <span 
              key={tIdx} 
              className="text-xs px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </button>
    );
  };

  return (
    <section className="py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="projects">
      
      {/* Route Line background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500/50 via-slate-800 to-sky-500/50 pointer-events-none hidden lg:block">
        <div className="packet-amber"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Projects Column */}
          <div className="flex-1 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl">
                  <FolderGit2 size={20} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                  <p className="text-sm text-slate-300 mt-1">Select a project to inspect technical details and links.</p>
                </div>
              </div>

              <div className="project-filters">
                <label>Search projects<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try AI, migration, or Python…"/></label>
                <label>Technology<select value={technology} onChange={event => setTechnology(event.target.value)}><option value="all">All technologies</option>{technologies.map(tag => <option key={tag} value={tag}>{tag}</option>)}</select></label>
                {(query || technology !== 'all') && <button type="button" onClick={() => { setQuery(''); setTechnology('all'); }}>Clear filters</button>}
              </div>
              <p className="project-results" role="status">Showing {visibleProjects.length} of {projectList.length} projects</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visibleProjects.map(project => renderProjectCard(project, projectList.indexOf(project)))}
              </div>
              {visibleProjects.length === 0 && <div className="project-empty">No projects match your filters. Try another keyword or clear the filters.</div>}
            </div>
          </div>

          {/* Achievements Ledger */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 bg-sky-500/10 border border-sky-500/30 text-sky-400 rounded-xl">
                  <Trophy size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Recognition</h2>
                  <p className="text-xs text-slate-400 font-mono">Hackathons & Awards</p>
                </div>
              </div>

              <div className="space-y-4">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div key={idx} className="neural-card rounded-xl p-5 border border-slate-800">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white text-base">{ach.title}</h4>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">Award</span>
                    </div>
                    <p className="text-sky-400 text-sm font-semibold mb-1 font-mono">{ach.event}</p>
                    <p className="text-slate-400 text-xs font-mono">{ach.location}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject?.name || ''}
        subtitle="Project Architecture & Specifications"
      >
        {selectedProject && (
          <div className="text-sm space-y-6">
            
            {/* Overview */}
            <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-sky-400 pl-2 font-mono">// Overview</h4>
                {selectedProject.link && (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-lg hover:bg-emerald-500/20 transition-all"
                  >
                    <ExternalLink size={12} />
                    Live Web Demo
                  </a>
                )}
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Key Engineering Details */}
            {selectedProject.details && selectedProject.details.length > 0 && (
              <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-amber-400 pl-2 font-mono">// Engineering Highlights & Features</h4>
                <ul className="space-y-2 text-slate-300 text-xs leading-relaxed">
                  {selectedProject.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold font-mono mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-sky-400 pl-2 font-mono">// System Components</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg font-mono text-xs"
                  >
                    {tag}
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

export default Projects;
