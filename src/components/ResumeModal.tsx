import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Award, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown resume or trigger print-to-pdf
    const resumeText = `
PRASHANTH H M
Bengaluru, India | ${PERSONAL_INFO.socialLinks.email} | ${PERSONAL_INFO.socialLinks.github} | ${PERSONAL_INFO.socialLinks.linkedin}

SUMMARY
${PERSONAL_INFO.shortIntro}

EDUCATION
${PERSONAL_INFO.education.degree}
${PERSONAL_INFO.education.institution}, ${PERSONAL_INFO.education.location}
Expected Graduation: ${PERSONAL_INFO.education.graduationYear} | CGPA: ${PERSONAL_INFO.education.cgpa}

EXPERIENCE
${EXPERIENCE[0].role} - ${EXPERIENCE[0].company} (${EXPERIENCE[0].period})
${EXPERIENCE[0].description.map(d => `- ${d}`).join('\n')}

FEATURED PROJECTS
${PROJECTS.map(p => `• ${p.title} (${p.technologies.join(', ')})\n  ${p.description}\n  Key Features: ${p.features.slice(0, 3).join('; ')}\n  GitHub: ${p.githubUrl}`).join('\n\n')}

HONORS & ACHIEVEMENTS
${ACHIEVEMENTS.map(a => `• ${a.title} - ${a.award} (${a.year}): ${a.description}`).join('\n')}
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Prashanth_HM_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0F131C] border border-[#222B3D] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E2536] bg-[#0B0E15]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Curriculum Vitae</h3>
              <p className="text-xs text-gray-400">Prashanth H M • UVCE Bengaluru '27</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.socialLinks.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition"
              title="Open Official PDF in Google Drive"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Drive PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 bg-[#161D2B] hover:bg-[#1E273A] border border-[#273248] transition"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleDownload}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 bg-[#161D2B] hover:bg-[#1E273A] border border-[#273248] transition"
              title="Download Plaintext Summary"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Text</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-[#1E2536] transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 text-gray-300 space-y-8 font-sans selection:bg-blue-500/20">
          
          {/* Header */}
          <div className="border-b border-[#1E2536] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Prashanth H M</h1>
                <p className="text-sm sm:text-base text-blue-400 font-medium mt-1">
                  Computer Science Engineer | Backend & AI Systems
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" /> Bengaluru, India
                </span>
                <a href={`mailto:${PERSONAL_INFO.socialLinks.email}`} className="flex items-center gap-1 text-gray-300 hover:text-blue-400">
                  <Mail className="w-3.5 h-3.5 text-gray-500" /> {PERSONAL_INFO.socialLinks.email}
                </a>
                <a href={PERSONAL_INFO.socialLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-300 hover:text-blue-400">
                  <Github className="w-3.5 h-3.5 text-gray-500" /> github.com/prashu26
                </a>
                <a href={PERSONAL_INFO.socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-300 hover:text-blue-400">
                  <Linkedin className="w-3.5 h-3.5 text-gray-500" /> LinkedIn
                </a>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
              {PERSONAL_INFO.shortIntro}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-blue-400 uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="bg-[#131824] border border-[#1E273A] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-base font-semibold text-white">{PERSONAL_INFO.education.institution}</h4>
                <p className="text-sm text-gray-300">{PERSONAL_INFO.education.degree}</p>
                <p className="text-xs text-gray-500">{PERSONAL_INFO.education.location}</p>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
                <p className="text-xs text-gray-400 mt-1">Expected: {PERSONAL_INFO.education.graduationYear}</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-blue-400 uppercase">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </div>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="bg-[#131824] border border-[#1E273A] rounded-xl p-4 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="font-semibold text-white">{exp.role}</h4>
                    <p className="text-sm text-blue-400">{exp.company} • <span className="text-gray-400 text-xs">{exp.location}</span></p>
                  </div>
                  <span className="text-xs text-gray-400 bg-[#1A2234] px-2.5 py-1 rounded-md self-start sm:self-auto border border-[#232F48]">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300 list-disc list-inside">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1B2335] text-gray-300 border border-[#293550]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Projects */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-blue-400 uppercase">
              <FolderGit2 className="w-4 h-4" />
              <span>Key Projects</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="bg-[#131824] border border-[#1E273A] rounded-xl p-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-white text-base">{proj.title}</h4>
                      {proj.achievementBadge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {proj.achievementBadge}
                        </span>
                      )}
                    </div>
                    {proj.githubUrl && (
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono self-start"
                      >
                        Repository <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">{proj.description}</p>
                  <p className="text-xs text-gray-400"><strong className="text-gray-300">Impact:</strong> {proj.myContribution}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#182030] text-gray-300 border border-[#24314A]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-blue-400 uppercase">
              <Code2 className="w-4 h-4" />
              <span>Skills Matrix</span>
            </div>
            <div className="bg-[#131824] border border-[#1E273A] rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-gray-200">Programming Languages:</span>
                <p className="text-gray-400 mt-0.5">Python, Java, JavaScript (ES6+), SQL</p>
              </div>
              <div>
                <span className="font-semibold text-gray-200">Backend & Databases:</span>
                <p className="text-gray-400 mt-0.5">Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, MySQL</p>
              </div>
              <div>
                <span className="font-semibold text-gray-200">AI & Machine Learning:</span>
                <p className="text-gray-400 mt-0.5">LLM APIs, Google Gemini API, Sentence-BERT, Embeddings, Semantic Search, ONNX Runtime</p>
              </div>
              <div>
                <span className="font-semibold text-gray-200">Cloud & DevOps:</span>
                <p className="text-gray-400 mt-0.5">AWS, Docker, Docker Compose, Terraform, Jenkins, Linux, Git & GitHub</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-blue-400 uppercase">
              <Award className="w-4 h-4" />
              <span>Achievements & Competitions</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="p-3 rounded-lg bg-[#131824] border border-[#1E273A]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-400">{ach.award}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{ach.year}</span>
                  </div>
                  <p className="text-sm font-medium text-white mt-0.5">{ach.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
