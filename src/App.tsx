import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { CommandPalette } from './components/CommandPalette';
import { Project, PROJECTS } from './data/portfolioData';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleToggleCommandPalette = () => {
      setIsCommandPaletteOpen(prev => !prev);
    };

    window.addEventListener('toggle-command-palette', handleToggleCommandPalette);
    return () => window.removeEventListener('toggle-command-palette', handleToggleCommandPalette);
  }, []);

  const handleSelectProjectById = (projectId: string) => {
    const found = PROJECTS.find(p => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F3F4F6] selection:bg-blue-600/30 selection:text-white font-sans relative">
      
      {/* Sticky Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setIsResumeModalOpen(true)} 
        />
        <About />
        <Skills />
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)} 
        />
        <Experience />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onSelectProject={handleSelectProjectById}
      />

    </div>
  );
};

export default App;
