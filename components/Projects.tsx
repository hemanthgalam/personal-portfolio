import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { trackEvent } from '../utils/telemetry';
import { ExternalLink, FolderGit2, CheckCircle2, ArrowRight } from 'lucide-react';
import Modal from './Modal';
import FilterTabs, { AreaFilter, AREA_LABELS } from './FilterTabs';

interface ProjectsProps {
  filter: AreaFilter;
  onFilterChange: (value: AreaFilter) => void;
}

const ProjectLink: React.FC<{ project: Project; context: string }> = ({ project, context }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackEvent('click_project_link', { project_name: project.name, context })}
    className="inline-flex items-center gap-1.5 px-3 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs font-mono font-bold text-amber-300 hover:bg-amber-500/20 transition-colors"
  >
    <ExternalLink size={13} />
    {project.linkLabel}
  </a>
);

const Projects: React.FC<ProjectsProps> = ({ filter, onFilterChange }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectList = filter === 'all' ? PROJECTS : PROJECTS.filter(project => project.areas.includes(filter));

  return (
    <section className="py-16 sm:py-24 bg-[#0b0f19] relative border-t border-slate-800/60 neural-grid" id="projects">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 text-center lg:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Projects</h2>
            <p className="text-slate-400 text-sm font-mono max-w-xl">
              Open the details for the full feature list, or follow the link to the project.
            </p>
          </div>
          <FilterTabs value={filter} onChange={onFilterChange} label="Filter projects by area" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projectList.map(project => (
            <article key={project.name} className="neural-card rounded-2xl p-5 sm:p-6 flex flex-col">
              <div className="flex items-center justify-between gap-2 text-xs text-amber-400 mb-3 border-b border-slate-800 pb-3 font-mono">
                <FolderGit2 size={16} className="shrink-0" />
                <div className="flex flex-wrap justify-end gap-1.5">
                  {project.areas.map(area => (
                    <span key={area} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[10px] uppercase tracking-wider">
                      {AREA_LABELS[area]}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
              <p className="text-amber-300/90 text-xs font-mono mb-3">{project.subtitle}</p>
              <p className="text-slate-300 text-sm mb-5 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 items-center justify-between pt-4 border-t border-slate-800">
                <ProjectLink project={project} context="card" />
                {project.details && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(project);
                      trackEvent('view_project_details', { project_name: project.name });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    Details
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name || ''}
        subtitle={selectedProject?.subtitle}
      >
        {selectedProject && (
          <div className="text-sm space-y-6">
            <ul className="space-y-3 bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
              {selectedProject.details?.map((detail, idx) => (
                <li key={idx} className="flex gap-3 text-slate-200 leading-relaxed items-start">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg font-mono text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <ProjectLink project={selectedProject} context="modal" />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
