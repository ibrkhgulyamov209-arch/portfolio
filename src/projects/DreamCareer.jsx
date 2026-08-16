import React, { useState } from 'react';

const DreamCareer = () => {
  const [targetTrack, setTargetTrack] = useState('AI Full-Stack Developer');
  const [unlockedSkills, setUnlockedSkills] = useState({
    'React & Vite': true,
    'Tailwind CSS': true,
    'JavaScript ES6+': true,
  });

  const skillTree = {
    'AI Full-Stack Developer': [
      { category: 'Frontend Architecture', skills: ['React & Vite', 'Tailwind CSS', 'JavaScript ES6+', 'State Management'], level: 'Advanced' },
      { category: 'AI & API Integration', skills: ['LLM Prompt Engineering', 'OpenAI / Gemini SDKs', 'Vector Databases', 'API Orchestration'], level: 'Specialist' },
      { category: 'Systems & Growth', skills: ['Git & Version Control', 'CI/CD Pipelines', 'Cloud Deployment', 'Global Scaling'], level: 'Professional' }
    ],
    'Computer Science Pioneer': [
      { category: 'Core Fundamentals', skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Memory Management', 'Discrete Math'], level: 'Core' },
      { category: 'Software Engineering', skills: ['System Design', 'Database Architecture', 'Clean Code Principles', 'Testing & Debugging'], level: 'Advanced' },
      { category: 'Innovation & Research', skills: ['Algorithm Optimization', 'Open Source Contribution', 'Technical Writing', 'Problem Solving'], level: 'Expert' }
    ]
  };

  const toggleSkill = (skill) => {
    setUnlockedSkills(prev => ({
      ...prev,
      [skill]: !prev[skill]
    }));
  };

  const totalSkillsCount = skillTree[targetTrack].reduce((acc, cat) => acc + cat.skills.length, 0);
  const completedCount = Object.keys(unlockedSkills).filter(skill => 
    unlockedSkills[skill] && skillTree[targetTrack].some(cat => cat.skills.includes(skill))
  ).length;

  const readinessScore = Math.round((completedCount / totalSkillsCount) * 100);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
          Interactive Career & Skill Simulator
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white tracking-tight">Dream Career Simulator</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Click skills to track your mastery. Watch your simulated readiness score scale in real time.
        </p>
      </div>

      {/* Track Selector & Live Stats Bar */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <span className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Select Target Track</span>
          <div className="flex gap-2">
            {Object.keys(skillTree).map(track => (
              <button
                key={track}
                onClick={() => { setTargetTrack(track); setUnlockedSkills({}); }}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${targetTrack === track ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
              >
                {track.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Skills Mastered</span>
            <span className="text-2xl font-bold text-white">{completedCount} <span className="text-sm text-slate-500 font-normal">/ {totalSkillsCount}</span></span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold border border-purple-500/20">
            ⚡
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1 font-semibold">AI Career Readiness</span>
            <span className="text-2xl font-bold text-blue-400">{readinessScore}%</span>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-blue-500/20 border-t-blue-500 flex items-center justify-center text-xs font-bold text-white">
            {readinessScore}%
          </div>
        </div>
      </div>

      {/* Dynamic Skill Tree Grid */}
      <div className="space-y-6">
        {skillTree[targetTrack].map((section, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">{section.category}</h3>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                {section.level}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {section.skills.map((skill, sIdx) => {
                const isUnlocked = unlockedSkills[skill];
                return (
                  <button
                    key={sIdx}
                    onClick={() => toggleSkill(skill)}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isUnlocked 
                        ? 'bg-blue-600/15 border-blue-500/50 text-white shadow-[0_0_15px_rgba(37,99,235,0.15)]' 
                        : 'bg-white/2 border-white/5 text-slate-400 hover:bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${isUnlocked ? 'bg-blue-500 text-white' : 'bg-white/10 text-transparent'}`}>
                        ✓
                      </div>
                      <span className="font-medium text-sm">{skill}</span>
                    </div>
                    <span className={`text-xs font-semibold ${isUnlocked ? 'text-blue-400' : 'text-slate-600'}`}>
                      {isUnlocked ? 'Mastered' : 'Click to Learn'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamCareer;