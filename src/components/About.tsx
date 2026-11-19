import React from 'react';
import { 
  Server, 
  Brain, 
  Layout, 
  Cloud, 
  Cpu, 
  CheckCircle2, 
  Code2,
  Zap
} from 'lucide-react';
import { WHAT_I_ENJOY_BUILDING } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0B0D12] relative overflow-hidden border-t border-[#161D2B]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131926] border border-[#212C42] text-xs font-mono text-blue-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>01 // BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering with Purpose & Precision
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            Bridging fundamental computer science principles with modern application architectures.
          </p>
        </div>

        {/* Top Bio & Academic Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story / About Card */}
          <div className="lg:col-span-8 bg-[#101521] border border-[#1E2638] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span>Computer Science & Engineering @ UVCE</span>
              <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Class of 2027
              </span>
            </h3>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I am currently pursuing my Bachelor of Technology in Computer Science and Engineering at{' '}
              <strong className="text-white font-semibold">
                University Visvesvaraya College of Engineering (UVCE), Bengaluru
              </strong>
              , maintaining a cumulative grade point average of{' '}
              <span className="text-emerald-400 font-semibold font-mono">8.67 / 10</span>.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              My engineering interests span <strong className="text-gray-100">backend architecture, full-stack systems, applied AI/LLM pipelines, and DevOps</strong>. I love taking applications from raw architectural sketches on a whiteboard to robust containerized production deployments.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I am obsessed with <span className="text-blue-400 font-medium">performance</span>, <span className="text-indigo-400 font-medium">reliability</span>, <span className="text-cyan-400 font-medium">scalability</span>, and <span className="text-emerald-400 font-medium">maintainable code</span>. Whether optimizing ONNX neural inference to run with sub-millisecond edge latency or designing resilient relational and document schemas, I prioritize writing clean, well-tested, and developer-friendly code.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#141A28] border border-[#202B3F]">
                <div className="text-gray-400">Current CGPA</div>
                <div className="text-lg font-bold text-white font-mono mt-0.5">8.67 / 10</div>
              </div>
              <div className="p-3 rounded-xl bg-[#141A28] border border-[#202B3F]">
                <div className="text-gray-400">University</div>
                <div className="text-base font-semibold text-white truncate mt-0.5">UVCE Bengaluru</div>
              </div>
              <div className="p-3 rounded-xl bg-[#141A28] border border-[#202B3F] col-span-2 sm:col-span-1">
                <div className="text-gray-400">Expected Batch</div>
                <div className="text-lg font-bold text-white font-mono mt-0.5">2027</div>
              </div>
            </div>
          </div>

          {/* Quick Pillars Sidebar */}
          <div className="lg:col-span-4 bg-[#0F1420] border border-[#1E2638] rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-3 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>Engineering Values</span>
              </div>
              <h4 className="text-lg font-semibold text-white">How I Approach Software</h4>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-white">First-Principles Thinking</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Understanding deep fundamentals before choosing abstractions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-white">Production-Ready Rigor</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Containerization, schema validation, and defensive API contracts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-white">Continuous Curiosity</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Experimenting with local LLM pipelines, WebSockets, and DevOps tools.</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#131926] rounded-xl border border-[#202C44] text-xs text-gray-400 font-mono">
              <span className="text-blue-400">$</span> status --availability<br />
              <span className="text-emerald-400">&gt; Internship & Fresher Ready</span>
            </div>
          </div>

        </div>

        {/* Section: "What I Enjoy Building" - 4 Visual Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#1E2536] pb-4">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">CORE PILLARS</span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1">What I Enjoy Building</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400">
              Four architectural disciplines where I deliver the highest engineering value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHAT_I_ENJOY_BUILDING.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-[#111622] hover:bg-[#151C2C] border border-[#1E2638] hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-[#172033] border border-[#243352] ${item.accent} group-hover:scale-105 transition`}>
                      {getIcon(item.icon)}
                    </div>
                    <span className="font-mono text-xs text-gray-600 group-hover:text-gray-400 transition">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-1.5 mt-auto">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#161D2B] text-gray-300 border border-[#212C40]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
