import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Workflow, 
  AlertCircle,
  GitBranch
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#10141E] border border-[#232C3E] rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#1E2638] bg-[#0C0F17]">
          <div className="space-y-1.5 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              {project.achievementBadge && (
                <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {project.achievementBadge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#1E2536] transition flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-gray-300 font-sans">
          
          {/* Problem Being Solved */}
          <div className="space-y-2 bg-[#141926] p-4 rounded-xl border border-[#20293D]">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Being Solved</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* Architecture / Pipeline Workflow */}
          {project.architectureDetails && (
            <div className="space-y-3 bg-[#131722] p-5 rounded-xl border border-[#1F2739]">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Workflow className="w-4 h-4" />
                <span>Architecture & Data Flow</span>
              </div>
              
              <div className="p-3 bg-[#0B0E15] rounded-lg border border-[#1A2234] font-mono text-xs text-blue-300">
                <span className="text-gray-500">// Pipeline:</span><br />
                {project.architectureDetails.workflow}
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 mb-2">Key System Components:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.architectureDetails.components.map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300 bg-[#161C2A] p-2.5 rounded-lg border border-[#212B3E]">
                      <Cpu className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Key Features</span>
            </div>
            <div className="space-y-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          <div className="space-y-2 bg-[#121927] p-4 rounded-xl border border-blue-500/20">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <GitBranch className="w-4 h-4" />
              <span>Engineering Contribution</span>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Technology Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#161D2B] text-gray-200 border border-[#243048]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-t border-[#1E2638] bg-[#0C0F17]">
          <span className="text-xs text-gray-500 font-mono hidden sm:inline-block">
            Project ID: {project.id}
          </span>
          
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-[#1A2234] hover:bg-[#232F48] border border-[#2A3750] transition"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Project</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
