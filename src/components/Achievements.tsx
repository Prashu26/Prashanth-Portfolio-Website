import React from 'react';
import { 
  Trophy, 
  Award, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Calendar,
  Medal
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-blue-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-purple-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-400" />;
      default:
        return <Medal className="w-6 h-6 text-amber-400" />;
    }
  };

  const getCardBorder = (category: string) => {
    switch (category) {
      case 'Hackathon': return 'hover:border-amber-500/40';
      case 'Leadership': return 'hover:border-emerald-500/40';
      default: return 'hover:border-blue-500/40';
    }
  };

  return (
    <section id="achievements" className="py-24 bg-[#0B0D12] relative overflow-hidden border-t border-[#161D2B]">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131926] border border-[#212C42] text-xs font-mono text-amber-400">
              <Trophy className="w-3.5 h-3.5" />
              <span>05 // HONORS & LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Hackathons & Technical Milestones
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
              National hackathon recognition, technical leadership, and collaborative team competition results.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121622] border border-[#1E273A] text-xs font-mono text-gray-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>4 Competitive Distinctions</span>
          </div>
        </div>

        {/* Compact Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className={`bg-[#101420] border border-[#1E2638] ${getCardBorder(item.category)} rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1`}
            >
              <div className="space-y-4">
                {/* Icon & Category Pill */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#161D2B] border border-[#232F46] group-hover:scale-105 transition">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#161E2E] text-gray-400 border border-[#222E46]">
                    {item.category}
                  </span>
                </div>

                {/* Award & Title */}
                <div>
                  <div className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                    {item.award}
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-amber-300 transition">
                    {item.title}
                  </h3>
                  <div className="text-xs text-blue-400 font-medium mt-0.5">
                    {item.organization}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer with Year */}
              <div className="mt-6 pt-4 border-t border-[#1A2234] flex items-center justify-between text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gray-400" /> {item.year}
                </span>
                <span className="text-[10px] text-emerald-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
