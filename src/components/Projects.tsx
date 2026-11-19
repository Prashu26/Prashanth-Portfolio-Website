import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  Terminal,
  Activity,
  Server,
  Workflow
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'AI / ML', 'Full-Stack', 'Blockchain', 'DevOps'];

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  // Custom visual illustration for each project to give high-end developer aesthetic
  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'ai-specialist-chatbot':
        return (
          <div className="w-full h-44 bg-[#0B0E15] p-3 rounded-xl border border-[#1C2538] flex flex-col justify-between font-mono text-[11px] overflow-hidden group-hover:border-blue-500/40 transition">
            <div className="flex items-center justify-between pb-2 border-b border-[#182030] text-gray-500">
              <span className="flex items-center gap-1.5 text-blue-400">
                <Workflow className="w-3.5 h-3.5" /> ws://localhost:8080/stream
              </span>
              <span className="text-[10px] text-emerald-400">● 100% encrypted</span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="text-gray-400 flex items-start gap-1">
                <span className="text-blue-400">&gt; user:</span>
                <span className="text-gray-300">"Frequent morning fatigue & sinus headache"</span>
              </div>
              <div className="text-emerald-400 flex items-start gap-1 pl-2">
                <span>&lt; agent:</span>
                <span className="text-emerald-300">"Analyzing symptoms... Confidence: ENT (0.94)"</span>
              </div>
              <div className="text-purple-400 flex items-start gap-1 pl-2">
                <span>&lt; match:</span>
                <span className="text-purple-300">"Routing to ENT / Sleep Specialist via WebSocket"</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#182030] text-[10px] text-gray-500">
              <span>Embeddings: Sentence-BERT</span>
              <span className="text-blue-400 font-semibold">Latency: ~140ms</span>
            </div>
          </div>
        );

      case 'homehub-rental-platform':
        return (
          <div className="w-full h-44 bg-[#0B0E15] p-3 rounded-xl border border-[#1C2538] flex flex-col justify-between font-mono text-[11px] overflow-hidden group-hover:border-blue-500/40 transition">
            <div className="flex items-center justify-between pb-2 border-b border-[#182030] text-gray-500">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Server className="w-3.5 h-3.5" /> api.homehub.internal/v1
              </span>
              <span className="text-[10px] text-blue-400">JWT + OAuth 2.0</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="bg-[#121824] p-2 rounded border border-[#1E293E]">
                <div className="text-[10px] text-gray-500">AUTH PIPELINE</div>
                <div className="text-white font-semibold">OAuth / JWT Bearer</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">● Verified Session</div>
              </div>
              <div className="bg-[#121824] p-2 rounded border border-[#1E293E]">
                <div className="text-[10px] text-gray-500">DATABASE QUERY</div>
                <div className="text-white font-semibold">MongoDB Atlas Geo</div>
                <div className="text-[10px] text-cyan-400 mt-0.5">● Indexed Indices</div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#182030] text-[10px] text-gray-500">
              <span>Stack: React + Node.js + Express</span>
              <span className="text-emerald-400">HTTP 200 OK</span>
            </div>
          </div>
        );

      case 'blockchain-credential-verification':
        return (
          <div className="w-full h-44 bg-[#0B0E15] p-3 rounded-xl border border-[#1C2538] flex flex-col justify-between font-mono text-[11px] overflow-hidden group-hover:border-amber-500/40 transition">
            <div className="flex items-center justify-between pb-2 border-b border-[#182030] text-gray-500">
              <span className="flex items-center gap-1.5 text-amber-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Ethereum Smart Contract
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                SIH Finalist
              </span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="bg-[#151926] p-1.5 rounded border border-[#222B3F] text-[10px] flex items-center justify-between">
                <span className="text-gray-400">DocHash:</span>
                <span className="text-amber-300 font-mono">0x7f9a...3c8e</span>
                <span className="text-emerald-400 font-bold">VERIFIED</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-gray-400 px-1">
                <span>RBAC Guard:</span>
                <span className="text-white">Institute / Student / Verifier</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#182030] text-[10px] text-gray-500">
              <span>Docker Compose Cluster</span>
              <span className="text-amber-400">Gas Optimized</span>
            </div>
          </div>
        );

      case 'driver-monitoring-system':
        return (
          <div className="w-full h-44 bg-[#0B0E15] p-3 rounded-xl border border-[#1C2538] flex flex-col justify-between font-mono text-[11px] overflow-hidden group-hover:border-emerald-500/40 transition">
            <div className="flex items-center justify-between pb-2 border-b border-[#182030] text-gray-500">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Activity className="w-3.5 h-3.5" /> Edge Vision Stream (OpenCV)
              </span>
              <span className="text-[10px] text-cyan-400">ONNX Optimized</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 my-auto text-center">
              <div className="bg-[#121926] p-1.5 rounded border border-[#1F293D]">
                <div className="text-[9px] text-gray-500">PERCLOS</div>
                <div className="text-xs font-bold text-emerald-400">0.12 (Normal)</div>
              </div>
              <div className="bg-[#121926] p-1.5 rounded border border-[#1F293D]">
                <div className="text-[9px] text-gray-500">MAR (Mouth)</div>
                <div className="text-xs font-bold text-emerald-400">0.24 (Alert)</div>
              </div>
              <div className="bg-[#121926] p-1.5 rounded border border-[#1F293D]">
                <div className="text-[9px] text-gray-500">HEAD POSE</div>
                <div className="text-xs font-bold text-white">Pitch: -1.2°</div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#182030] text-[10px] text-gray-500">
              <span>Model: CNN + LSTM Temporal</span>
              <span className="text-emerald-400 font-semibold">FPS: 45+ fps</span>
            </div>
          </div>
        );

      case 'local-devops-pipeline':
        return (
          <div className="w-full h-44 bg-[#0B0E15] p-3 rounded-xl border border-[#1C2538] flex flex-col justify-between font-mono text-[11px] overflow-hidden group-hover:border-blue-500/40 transition">
            <div className="flex items-center justify-between pb-2 border-b border-[#182030] text-gray-500">
              <span className="flex items-center gap-1.5 text-blue-400">
                <Terminal className="w-3.5 h-3.5" /> docker-compose up -d
              </span>
              <span className="text-[10px] text-emerald-400">● 5 Containers Up</span>
            </div>
            <div className="space-y-1 my-auto">
              <div className="text-[10px] text-gray-400 flex items-center justify-between bg-[#131926] p-1.5 rounded border border-[#1E2638]">
                <span>[app-gateway] :80</span>
                <span className="text-emerald-400">Healthy (2ms)</span>
              </div>
              <div className="text-[10px] text-gray-400 flex items-center justify-between bg-[#131926] p-1.5 rounded border border-[#1E2638]">
                <span>[api-backend] :5000</span>
                <span className="text-emerald-400">Healthy (Subnet: vpc-local)</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#182030] text-[10px] text-gray-500">
              <span>Simulated AWS VPC on Ubuntu</span>
              <span className="text-blue-400">1-Cmd Teardown</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0B0D12] relative overflow-hidden border-t border-[#161D2B]">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131926] border border-[#212C42] text-xs font-mono text-blue-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
              Hands-on architectural implementations solving real problems in AI, distributed backend systems, blockchain security, and cloud automation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-[#10141F] border border-[#1E2638] p-1 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  filter === cat
                    ? 'bg-blue-600/25 text-blue-400 font-semibold border border-blue-500/30'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#101420] border border-[#1E2638] hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="space-y-5">
                
                {/* Visual Architecture Preview */}
                <div className="relative">
                  {renderProjectVisual(project)}
                </div>

                {/* Header & Badges */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.category}
                    </span>
                    {project.achievementBadge && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {project.achievementBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Being Solved */}
                <div className="p-3.5 rounded-xl bg-[#141926] border border-[#1F283C] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>PROBLEM SOLVED</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Key Features (Top 3) */}
                <div className="space-y-1.5">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Key Highlights:
                  </div>
                  <div className="space-y-1">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* My Contribution Snippet */}
                <div className="text-xs text-gray-400 bg-[#0C1018] p-3 rounded-lg border border-[#182030]">
                  <strong className="text-blue-400 font-mono">Role & Contribution: </strong>
                  <span className="text-gray-300 line-clamp-2">{project.myContribution}</span>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#161D2B] text-gray-300 border border-[#212C40]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-[#1C2436] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition group/btn font-mono"
                >
                  <span>View Details & Arch</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-300 hover:text-white bg-[#151C2A] hover:bg-[#1E273A] border border-[#222E44] transition"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5 text-gray-400" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-white bg-blue-600/80 hover:bg-blue-600 border border-blue-500/30 transition shadow-sm"
                      title="Live Demo or Project Link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Explore</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
