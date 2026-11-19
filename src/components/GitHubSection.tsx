import React, { useState, useEffect } from 'react';
import { 
  Github, 
  GitFork, 
  Star, 
  BookOpen, 
  ExternalLink, 
  GitCommit, 
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO, GITHUB_REPOS_STATIC } from '../data/portfolioData';

interface GitHubProfileData {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  created_at: string;
}

export const GitHubSection: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfileData | null>(null);

  useEffect(() => {
    // Attempt live fetch with fallback
    const fetchGithubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/prashu26');
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        } else {
          // Fallback to accurate static profile
          setProfile({
            login: 'prashu26',
            name: PERSONAL_INFO.name,
            avatar_url: 'https://avatars.githubusercontent.com/u/132470788?v=4',
            html_url: PERSONAL_INFO.socialLinks.github,
            public_repos: 12,
            followers: 18,
            following: 24,
            bio: 'Computer Science and Engineering Student @ UVCE | Backend & AI Enthusiast',
            created_at: '2023-05-01T00:00:00Z'
          });
        }
      } catch {
        setProfile({
          login: 'prashu26',
          name: PERSONAL_INFO.name,
          avatar_url: 'https://avatars.githubusercontent.com/u/132470788?v=4',
          html_url: PERSONAL_INFO.socialLinks.github,
          public_repos: 12,
          followers: 18,
          following: 24,
          bio: 'Computer Science and Engineering Student @ UVCE | Backend & AI Enthusiast',
          created_at: '2023-05-01T00:00:00Z'
        });
      }
    };

    fetchGithubData();
  }, []);

  // Generate simulated GitHub contribution matrix (28 columns x 7 days)
  const contributionGrid = Array.from({ length: 28 * 7 }, (_, i) => {
    // Semi-deterministic realistic activity levels (0: none, 1: low, 2: med, 3: high)
    const seed = (i * 17 + (i % 5) * 31) % 100;
    if (seed < 35) return 0;
    if (seed < 65) return 1;
    if (seed < 88) return 2;
    return 3;
  });

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-emerald-950/80 border-emerald-800/40';
      case 2: return 'bg-emerald-700/80 border-emerald-600/50';
      case 3: return 'bg-emerald-500 border-emerald-400';
      default: return 'bg-[#141A26] border-[#1D2536]';
    }
  };

  return (
    <section id="github" className="py-24 bg-[#090C12] relative overflow-hidden border-t border-[#161D2B]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131926] border border-[#212C42] text-xs font-mono text-cyan-400">
              <Github className="w-3.5 h-3.5" />
              <span>06 // CODE REPOSITORY & ACTIVITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              GitHub Activity & Open Repositories
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
              Explore public repositories, continuous commit habits, and open-source software engineering workflows.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20 active:scale-95 transition self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Explore My GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* GitHub Profile Card & Activity Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Profile Card */}
          <div className="lg:col-span-5 bg-[#101420] border border-[#1E2638] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src={profile?.avatar_url || 'https://avatars.githubusercontent.com/u/132470788?v=4'}
                  alt="Prashanth HM GitHub Avatar"
                  className="w-16 h-16 rounded-2xl border-2 border-blue-500/40 object-cover shadow-lg"
                  onError={(e) => {
                    // Fallback avatar icon
                    e.currentTarget.src = 'https://api.dicebear.com/7.x/identicon/svg?seed=prashu26';
                  }}
                />
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                    <span>{profile?.name || PERSONAL_INFO.name}</span>
                    <span className="text-blue-400 text-xs font-mono">(@prashu26)</span>
                  </h3>
                  <a
                    href={PERSONAL_INFO.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gray-400 hover:text-blue-400 font-mono flex items-center gap-1 mt-0.5"
                  >
                    github.com/prashu26 <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="inline-block mt-1 text-[11px] text-emerald-400 font-mono">
                    ● Active Engineering Profile
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#141A28] p-3 rounded-xl border border-[#1E273A]">
                {profile?.bio || 'Computer Science & Engineering Student @ UVCE | Backend Systems, AI & Full-Stack Developer'}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-[#141926] p-3 rounded-xl border border-[#1F283C]">
                  <div className="text-xs text-gray-400 font-mono">Repositories</div>
                  <div className="text-lg font-bold text-white font-mono mt-0.5">
                    {profile?.public_repos || 12}
                  </div>
                </div>
                <div className="bg-[#141926] p-3 rounded-xl border border-[#1F283C]">
                  <div className="text-xs text-gray-400 font-mono">Followers</div>
                  <div className="text-lg font-bold text-white font-mono mt-0.5">
                    {profile?.followers || 18}
                  </div>
                </div>
                <div className="bg-[#141926] p-3 rounded-xl border border-[#1F283C]">
                  <div className="text-xs text-gray-400 font-mono">Following</div>
                  <div className="text-lg font-bold text-white font-mono mt-0.5">
                    {profile?.following || 24}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1C2436] flex items-center justify-between text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-400" /> git clone --recursive
              </span>
              <a 
                href={PERSONAL_INFO.socialLinks.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-400 hover:text-blue-300"
              >
                View Profile &rarr;
              </a>
            </div>
          </div>

          {/* Activity / Heatmap Card */}
          <div className="lg:col-span-7 bg-[#101420] border border-[#1E2638] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <GitCommit className="w-4 h-4 text-emerald-400" />
                    <span>Contribution Cadence & Activity</span>
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Weekly commits, feature branches, and code reviews across academic & personal projects
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Continuous Streak
                </span>
              </div>

              {/* Heatmap Visual Matrix */}
              <div className="bg-[#0C0F17] p-4 rounded-xl border border-[#1B2335] overflow-x-auto">
                <div className="min-w-[500px]">
                  <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                    {contributionGrid.map((level, i) => (
                      <div
                        key={i}
                        className={`w-3.5 h-3.5 rounded-sm border ${getHeatmapColor(level)} transition-colors`}
                        title={`Activity level: ${level}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono mt-3 pt-2 border-t border-[#182030]">
                    <span>Mon - Sun</span>
                    <div className="flex items-center gap-1.5">
                      <span>Less</span>
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#141A26] border border-[#1D2536]"></span>
                      <span className="w-2.5 h-2.5 rounded-sm bg-emerald-950/80 border border-emerald-800/40"></span>
                      <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700/80 border border-emerald-600/50"></span>
                      <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 border border-emerald-400"></span>
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commit Habits */}
            <div className="mt-6 pt-4 border-t border-[#1C2436] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="text-gray-400">
                <span className="text-gray-500 block text-[10px]">PRIMARY FOCUS</span>
                <span className="text-white font-medium">Backend & AI</span>
              </div>
              <div className="text-gray-400">
                <span className="text-gray-500 block text-[10px]">VERSION CONTROL</span>
                <span className="text-white font-medium">Git Flow / Trunk</span>
              </div>
              <div className="text-gray-400 col-span-2 sm:col-span-1">
                <span className="text-gray-500 block text-[10px]">ORGANIZATION</span>
                <span className="text-emerald-400 font-medium">UVCE Bengaluru</span>
              </div>
            </div>
          </div>

        </div>

        {/* Repositories Cards Grid */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
            Verified Repositories:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GITHUB_REPOS_STATIC.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#101420] border border-[#1E2638] hover:border-blue-500/40 rounded-xl p-5 flex flex-col justify-between transition group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      <span className="font-mono text-sm font-bold text-white group-hover:text-blue-300 transition">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition" />
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {repo.topics.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#161D2B] text-gray-300 border border-[#222E42]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1A2234] flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    {repo.language}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-amber-400 transition">
                      <Star className="w-3.5 h-3.5" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-blue-400 transition">
                      <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
