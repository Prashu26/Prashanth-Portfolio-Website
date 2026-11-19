import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  GitBranch
} from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#090C12] relative overflow-hidden border-t border-[#161D2B]">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131926] border border-[#212C42] text-xs font-mono text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // INDUSTRY INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            Hands-on software development engineering in Agile teams, shipping production-grade code.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#1E2638] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0E131E] border-2 border-blue-500 group-hover:scale-125 transition-transform flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
              </div>

              {/* Experience Card */}
              <div className="bg-[#101420] border border-[#1E2638] hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl transition">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1A2234]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {exp.type}
                      </span>
                      <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-blue-400 font-medium text-sm mt-0.5">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#151C2A] px-3 py-1.5 rounded-xl border border-[#222E44] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Key Engineering Responsibilities & Impact:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.description.map((resp, rIdx) => (
                      <div 
                        key={rIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141A28] border border-[#1F273C] text-xs sm:text-sm text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-gray-500 font-mono mr-1 flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5" /> Stack:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#161D2B] text-gray-300 border border-[#222E42]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
