import React, { useState } from 'react';
import { Terminal as TerminalIcon, Check, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'focus' | 'stats'>('profile');
  const [customInput, setCustomInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; out: string | React.ReactNode }>>([]);
  const [copied, setCopied] = useState(false);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = customInput.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    let out: string | React.ReactNode = '';

    if (cmd === 'help') {
      out = 'Available commands: whoami, skills, projects, contact, resume, cgpa, clear, sudo hire';
    } else if (cmd === 'whoami') {
      out = `${PERSONAL_INFO.name} — ${PERSONAL_INFO.roleTitle}`;
    } else if (cmd === 'resume' || cmd === 'cv') {
      window.open(PERSONAL_INFO.socialLinks.resume, '_blank');
      out = `Opening official resume in new tab: ${PERSONAL_INFO.socialLinks.resume}`;
    } else if (cmd === 'cgpa' || cmd === 'education') {
      out = `${PERSONAL_INFO.education.institution} (${PERSONAL_INFO.education.graduationYear}) — CGPA: ${PERSONAL_INFO.education.cgpa}`;
    } else if (cmd === 'skills') {
      out = 'Languages: Python, Java, JS, SQL | Backend: Node, Express, MongoDB, Postgres | AI: LLMs, ONNX, S-BERT | DevOps: Docker, Terraform, AWS';
    } else if (cmd === 'projects') {
      out = '1. AI Specialist Chatbot  2. HomeHub Rental  3. Blockchain Verification (SIH Finalist)  4. Driver Monitor (ONNX)  5. Local DevOps Pipeline';
    } else if (cmd === 'contact' || cmd === 'email') {
      out = `Email: ${PERSONAL_INFO.socialLinks.email} | GitHub: ${PERSONAL_INFO.socialLinks.github}`;
    } else if (cmd === 'sudo hire') {
      out = 'Permission granted! Send an email or invite Prashanth for Summer 2025/2026 internships. 🚀';
    } else if (cmd === 'clear') {
      setHistory([]);
      setCustomInput('');
      return;
    } else {
      out = `command not found: ${raw}. Type 'help' to see valid commands.`;
    }

    setHistory((prev) => [...prev.slice(-4), { cmd: raw, out }]);
    setCustomInput('');
  };

  const handleCopyBash = () => {
    navigator.clipboard.writeText(`git clone ${PERSONAL_INFO.socialLinks.github}/portfolio.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden border border-[#222B3D] bg-[#0E121B]/95 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#090C12] border-b border-[#1A2234]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 font-mono text-[11px] text-gray-400">
            prashanth@uvce-node:~
          </span>
        </div>

        {/* Tab buttons */}
        <div className="flex items-center gap-1 bg-[#141A26] p-0.5 rounded-lg border border-[#1E273A]">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition ${
              activeTab === 'profile'
                ? 'bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/30'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            profile.ts
          </button>
          <button
            onClick={() => setActiveTab('focus')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition ${
              activeTab === 'focus'
                ? 'bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/30'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            stack.json
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition ${
              activeTab === 'stats'
                ? 'bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/30'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            status.log
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-5 font-mono text-xs leading-relaxed text-gray-300 min-h-[260px] flex flex-col justify-between">
        
        {activeTab === 'profile' && (
          <div className="space-y-1.5 animate-fadeIn">
            <div className="text-gray-500">// Personal developer identity</div>
            <div>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-400">developer</span> = {'{'}
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">name</span>:{' '}
              <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">university</span>:{' '}
              <span className="text-emerald-300">"UVCE, Bengaluru (Batch 2027)"</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">cgpa</span>:{' '}
              <span className="text-amber-300">{PERSONAL_INFO.education.cgpa}</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">coreInterests</span>: [
            </div>
            <div className="pl-8 text-gray-300">
              <span className="text-emerald-300">"Backend & REST APIs"</span>,{'\n'}
              <span className="text-emerald-300">"AI / LLM Pipelines"</span>,{'\n'}
              <span className="text-emerald-300">"Cloud & DevOps Automation"</span>
            </div>
            <div className="pl-4">],</div>
            <div className="pl-4">
              <span className="text-cyan-300">openToWork</span>:{' '}
              <span className="text-emerald-400 font-bold">true</span>
            </div>
            <div>{'};'}</div>
          </div>
        )}

        {activeTab === 'focus' && (
          <div className="space-y-1.5 animate-fadeIn">
            <div className="text-gray-500">// Core technical capabilities</div>
            <div className="text-gray-400">{'{'}</div>
            <div className="pl-4">
              <span className="text-cyan-400">"languages"</span>: ["Python", "Java", "JavaScript (ES6+)", "SQL"],
            </div>
            <div className="pl-4">
              <span className="text-cyan-400">"backend"</span>: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
            </div>
            <div className="pl-4">
              <span className="text-cyan-400">"ai_ml"</span>: ["Gemini API", "Sentence-BERT", "Embeddings", "ONNX Runtime"],
            </div>
            <div className="pl-4">
              <span className="text-cyan-400">"devops"</span>: ["Docker", "Docker Compose", "Terraform", "Jenkins", "Linux"]
            </div>
            <div className="text-gray-400">{'}'}</div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between text-gray-400 pb-1 border-b border-[#1A2234]">
              <span>[SYSTEM HEALTH & METRICS]</span>
              <span className="text-emerald-400">STATUS: 200 OK</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">UVCE Academic Standing:</span>
              <span className="text-white font-semibold">8.67 CGPA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Smart India Hackathon:</span>
              <span className="text-amber-400 font-semibold">National Finalist</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Google Bit N Build:</span>
              <span className="text-blue-400 font-semibold">Top 4 State</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Industry Experience:</span>
              <span className="text-emerald-400">Shishira Softbiz (MERN Intern)</span>
            </div>
          </div>
        )}

        {/* History from Interactive Shell */}
        {history.length > 0 && (
          <div className="mt-3 pt-3 border-t border-[#1C2436] space-y-2 text-xs">
            {history.map((h, i) => (
              <div key={i} className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <span>$</span>
                  <span className="text-gray-200">{h.cmd}</span>
                </div>
                <div className="text-gray-400 pl-3">{h.out}</div>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Shell Input */}
        <form onSubmit={handleCommand} className="mt-3 pt-3 border-t border-[#1C2436] flex items-center gap-2">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="type 'help', 'skills', 'cgpa' or 'sudo hire'..."
            className="flex-1 bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none text-xs font-mono"
          />
          <button 
            type="submit"
            className="px-2 py-1 rounded bg-[#182133] hover:bg-[#202C44] text-[10px] text-blue-400 font-mono flex items-center gap-1"
          >
            <Play className="w-2.5 h-2.5" />
            <span>run</span>
          </button>
        </form>

      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2 bg-[#090C12] border-t border-[#1A2234] flex items-center justify-between text-[11px] text-gray-500 font-mono">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>bash 5.2.15 • utf-8</span>
        </div>
        <button
          onClick={handleCopyBash}
          className="hover:text-gray-300 flex items-center gap-1 transition"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <TerminalIcon className="w-3 h-3 text-gray-500" />}
          <span>{copied ? 'copied clone cmd' : 'git clone'}</span>
        </button>
      </div>
    </div>
  );
};
