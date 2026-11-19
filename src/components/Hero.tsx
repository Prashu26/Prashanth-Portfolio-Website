import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  ChevronDown, 
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden dev-grid"
    >
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#121724] border border-[#20293D] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-300">
                {PERSONAL_INFO.status}
              </span>
              <span className="text-[10px] text-gray-500 font-mono hidden sm:inline">
                • UVCE '27 (8.67 CGPA)
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>Software Engineering Portfolio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-300 pt-1">
                {PERSONAL_INFO.roleTitle}
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.shortIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 active:scale-95 transition"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-200 bg-[#141A26] hover:bg-[#1D2536] border border-[#243048] hover:border-blue-500/40 active:scale-95 transition"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white bg-transparent hover:bg-[#151C2A] border border-transparent hover:border-[#222E44] transition"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons & Quick Metadata */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#1C2436] text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-[#111622] border border-[#1E273A] text-gray-300 hover:text-white hover:border-blue-500/40 transition group"
                  title="Visit GitHub Profile"
                >
                  <Github className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition" />
                  <span>github/prashu26</span>
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-[#111622] border border-[#1E273A] text-gray-300 hover:text-white hover:border-blue-500/40 transition group"
                  title="Visit LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-gray-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.education.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal */}
          <div className="lg:col-span-5 flex justify-center">
            <InteractiveTerminal />
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition animate-bounce"
            aria-label="Scroll down to About section"
          >
            <span>explore portfolio</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
