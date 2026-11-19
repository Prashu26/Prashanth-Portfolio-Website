import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  FileText, 
  Search,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0D12]/85 backdrop-blur-md border-b border-[#1E2536] shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Terminal Tag */}
          <a 
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 text-white font-mono text-sm tracking-tight group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#141A28] border border-[#232F48] flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 group-hover:text-blue-300 transition shadow-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex items-baseline">
              <span className="text-gray-400 font-mono text-xs hidden sm:inline">~/</span>
              <span className="font-semibold text-gray-100 group-hover:text-blue-400 transition">
                {PERSONAL_INFO.name.toLowerCase().replace(/ /g, '-')}
              </span>
              <span className="inline-block w-2 h-4 ml-1 bg-blue-500 animate-pulse"></span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#10141F]/80 border border-[#1E2536] px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-[#182030]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-gray-400 hover:text-gray-200 bg-[#121622] border border-[#20293D] hover:border-[#2D3A54] transition shadow-sm"
              title="Open Command Palette (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">⌘K</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/30 shadow-md shadow-blue-500/20 transition active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white bg-[#121622] border border-[#20293D] transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#10141F] border border-[#1E2536] rounded-2xl shadow-xl space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E2536] text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-400" /> UVCE '27 Portfolio
              </span>
              <span className="text-[11px] text-emerald-400">🟢 Available</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-xs rounded-lg font-medium transition ${
                      isActive 
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'text-gray-300 hover:bg-[#182030]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#1E2536]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Curriculum Vitae</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
