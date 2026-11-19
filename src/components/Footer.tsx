import React from 'react';
import { 
  Terminal, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080A0F] border-t border-[#161D2B] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#141A28]">
          
          {/* Brand & Identity */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-white text-base font-bold">
              <span className="p-1 rounded bg-[#131926] text-blue-400 border border-[#1E273A]">
                <Terminal className="w-4 h-4" />
              </span>
              <span>prashanth.dev</span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm">
              Computer Science & Engineering Student @ UVCE, Bengaluru ('27). Building scalable backends and intelligent AI applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#111622] border border-[#1D2638] text-gray-400 hover:text-white hover:border-blue-500/40 transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#111622] border border-[#1D2638] text-gray-400 hover:text-white hover:border-blue-500/40 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.socialLinks.email}`}
              className="p-2.5 rounded-xl bg-[#111622] border border-[#1D2638] text-gray-400 hover:text-white hover:border-blue-500/40 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#151C2A] border border-[#232F46] text-blue-400 hover:text-blue-300 hover:bg-[#1C2538] transition flex items-center gap-1.5 text-xs font-mono"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Build Info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 font-mono text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed & Built with developer aesthetic.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with React + TypeScript + Tailwind</span>
            <span className="text-emerald-400">● 100% Responsive</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
