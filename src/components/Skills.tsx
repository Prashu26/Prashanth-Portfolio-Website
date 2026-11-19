import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Cloud, 
  Layers, 
  Check, 
  Search
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Terminal className="w-5 h-5 text-blue-400" />,
    "Backend & Database": <Database className="w-5 h-5 text-emerald-400" />,
    "Frontend Development": <Layers className="w-5 h-5 text-cyan-400" />,
    "AI & Machine Learning": <Cpu className="w-5 h-5 text-purple-400" />,
    "Cloud & DevOps": <Cloud className="w-5 h-5 text-amber-400" />,
  };

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (activeCategory !== 'all' && category.title !== activeCategory) {
      return false;
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const hasSkill = category.skills.some(s => s.name.toLowerCase().includes(term));
      const hasTitle = category.title.toLowerCase().includes(term);
      return hasSkill || hasTitle;
    }
    return true;
  });

  // Calculate total skill count
  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 bg-[#090C12] relative overflow-hidden border-t border-[#161D2B]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131926] border border-[#212C42] text-xs font-mono text-cyan-400">
              <Code2 className="w-3.5 h-3.5" />
              <span>02 // TECHNICAL REPERTOIRE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Engineering Toolbelt
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
              A comprehensive toolkit spanning scalable backend systems, applied machine learning, cloud pipelines, and modern web applications.
            </p>
          </div>

          {/* Quick stats badge */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-[#111622] border border-[#1E2638] text-right">
              <div className="text-xs text-gray-500 font-mono">TOTAL TECHNOLOGIES</div>
              <div className="text-xl font-bold text-white font-mono">{totalSkillsCount}+ Verified</div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1A2234]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                activeCategory === 'all'
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-[#141A28]'
              }`}
            >
              All Categories ({SKILL_CATEGORIES.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  activeCategory === cat.title
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-[#141A28]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Docker, ONNX)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#111622] border border-[#1E2638] text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#101420] border border-[#1E2638] hover:border-[#2D3950] rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#151B2A] border border-[#222D42] group-hover:scale-105 transition">
                    {categoryIcons[category.title] || <Terminal className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-blue-300 transition">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400">{category.description}</p>
                  </div>
                </div>

                {/* Skills Badge Container */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => {
                    const isMatched = searchTerm && skill.name.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition border ${
                          isMatched
                            ? 'bg-blue-600/20 text-white border-blue-400'
                            : 'bg-[#151B28] hover:bg-[#1A2234] text-gray-200 border-[#222E44] hover:border-[#324362]'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span className="font-medium">{skill.name}</span>
                        {skill.badge && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#1A2234] flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>{category.skills.length} competencies</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note about real skills vs arbitrary percentage bars */}
        <div className="mt-12 p-4 rounded-xl bg-[#111622]/60 border border-[#1E2638] text-center text-xs text-gray-400 font-mono">
          <span className="text-blue-400">// Engineering Philosophy:</span> We value practical architecture, proven implementations, and clean code over arbitrary percentage bars.
        </div>

      </div>
    </section>
  );
};
