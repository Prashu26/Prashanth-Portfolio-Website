import React, { useEffect, useState } from 'react';
import { 
  Search, 
  Terminal, 
  User, 
  Code2, 
  FolderGit2, 
  Briefcase, 
  Trophy, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  X,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // open
          window.dispatchEvent(new CustomEvent('toggle-command-palette'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const items = [
    {
      category: 'Navigation',
      id: 'nav-home',
      label: 'Home',
      icon: Terminal,
      action: () => navigateTo('hero'),
    },
    {
      category: 'Navigation',
      id: 'nav-about',
      label: 'About Me',
      icon: User,
      action: () => navigateTo('about'),
    },
    {
      category: 'Navigation',
      id: 'nav-skills',
      label: 'Technical Skills',
      icon: Code2,
      action: () => navigateTo('skills'),
    },
    {
      category: 'Navigation',
      id: 'nav-projects',
      label: 'Featured Projects',
      icon: FolderGit2,
      action: () => navigateTo('projects'),
    },
    {
      category: 'Navigation',
      id: 'nav-exp',
      label: 'Experience & Internships',
      icon: Briefcase,
      action: () => navigateTo('experience'),
    },
    {
      category: 'Navigation',
      id: 'nav-achievements',
      label: 'Hackathons & Achievements',
      icon: Trophy,
      action: () => navigateTo('achievements'),
    },
    {
      category: 'Navigation',
      id: 'nav-contact',
      label: 'Contact Section',
      icon: Mail,
      action: () => navigateTo('contact'),
    },
    {
      category: 'Actions',
      id: 'act-resume-drive',
      label: 'Open Official Resume (Google Drive PDF)',
      icon: FileText,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.socialLinks.resume, '_blank');
      },
    },
    {
      category: 'Actions',
      id: 'act-resume',
      label: 'View Interactive Curriculum Vitae',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      category: 'Actions',
      id: 'act-email',
      label: copiedEmail ? 'Email Copied!' : `Copy Email (${PERSONAL_INFO.socialLinks.email})`,
      icon: copiedEmail ? Check : Copy,
      action: handleCopyEmail,
    },
    {
      category: 'Links',
      id: 'link-github',
      label: 'GitHub Profile (github.com/prashu26)',
      icon: Github,
      action: () => window.open(PERSONAL_INFO.socialLinks.github, '_blank'),
    },
    {
      category: 'Links',
      id: 'link-linkedin',
      label: 'LinkedIn Profile',
      icon: Linkedin,
      action: () => window.open(PERSONAL_INFO.socialLinks.linkedin, '_blank'),
    },
    {
      category: 'Projects',
      id: 'proj-ai-spec',
      label: 'Project: AI Specialist & Chatbot',
      icon: FolderGit2,
      action: () => {
        onClose();
        navigateTo('projects');
        onSelectProject('ai-specialist-chatbot');
      },
    },
    {
      category: 'Projects',
      id: 'proj-homehub',
      label: 'Project: HomeHub Rental Platform',
      icon: FolderGit2,
      action: () => {
        onClose();
        navigateTo('projects');
        onSelectProject('homehub-rental-platform');
      },
    },
    {
      category: 'Projects',
      id: 'proj-blockchain',
      label: 'Project: Blockchain Credential Verification (SIH Finalist)',
      icon: FolderGit2,
      action: () => {
        onClose();
        navigateTo('projects');
        onSelectProject('blockchain-credential-verification');
      },
    },
    {
      category: 'Projects',
      id: 'proj-driver',
      label: 'Project: Driver Monitoring System (ONNX)',
      icon: FolderGit2,
      action: () => {
        onClose();
        navigateTo('projects');
        onSelectProject('driver-monitoring-system');
      },
    },
    {
      category: 'Projects',
      id: 'proj-devops',
      label: 'Project: Local DevOps Deployment Pipeline',
      icon: FolderGit2,
      action: () => {
        onClose();
        navigateTo('projects');
        onSelectProject('local-devops-pipeline');
      },
    },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-[#121620] border border-[#2A344A] rounded-xl shadow-2xl shadow-blue-500/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1E2536] bg-[#0E121A]">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Type a command or search (e.g. 'resume', 'projects', 'github')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-200 rounded transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#1A2232]">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500">
              No matching commands or links found for "{query}".
            </div>
          ) : (
            filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm text-gray-300 hover:text-white hover:bg-blue-600/15 group transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-md bg-[#182030] text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <span className="text-xs text-gray-500">{item.category}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 transition" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[#1E2536] bg-[#0B0E14] text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-[#1B2333] border border-[#28354D] text-[10px] text-gray-400">ESC</span>
            <span>to close</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-[#1B2333] border border-[#28354D] text-[10px] text-gray-400">⌘K / Ctrl+K</span>
            <span>shortcut</span>
          </div>
        </div>
      </div>
    </div>
  );
};
