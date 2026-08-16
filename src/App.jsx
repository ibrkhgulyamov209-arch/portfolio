import React, { useState } from 'react';
import YoshFermers from './projects/YoshFermers';
import DreamCareer from './projects/DreamCareer';
import UniPath from './projects/UniPath';
import TaskFlow from './projects/TaskFlow';
import WeatherSphere from './projects/WeatherSphere';
import EduLink from './projects/EduLink';

const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const IconExternal = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const projects = [
  { id: "yosh-fermers", title: "Yosh Fermers", desc: "A modern network and educational platform for young farmers.", tag: "AgriTech", link: "#" },
  { id: "dream-career", title: "Dream Career Simulator", desc: "AI-powered career roadmaps & skill tree generator.", tag: "AI / Web", link: "#" },
  { id: "unipath", title: "UniPath AI", desc: "Global university & scholarship guidance platform.", tag: "EdTech", link: "#" },
  { id: "taskflow", title: "TaskFlow", desc: "Modern, minimalist productivity dashboard.", tag: "SaaS", link: "#" },
  { id: "weathersphere", title: "WeatherSphere", desc: "Real-time weather forecasting with elegant data visualization.", tag: "Utility", link: "#" },
  { id: "edulink", title: "EduLink", desc: "Community-driven resource sharing platform for students.", tag: "Education", link: "#" }
];

const skills = ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Git", "Responsive Design", "UI/UX Design"];

const App = () => {
  const [activeProject, setActiveProject] = useState(null);

  const renderActiveProjectComponent = () => {
    switch (activeProject) {
      case 'yosh-fermers': return <YoshFermers />;
      case 'dream-career': return <DreamCareer />;
      case 'unipath': return <UniPath />;
      case 'taskflow': return <TaskFlow />;
      case 'weathersphere': return <WeatherSphere />;
      case 'edulink': return <EduLink />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 scroll-smooth">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ibrkh.dev</span>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          {['About', 'Projects', 'Timeline', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-200">{item}</a>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 pt-32">
        {activeProject ? (
          <section className="py-12">
            <button
              onClick={() => setActiveProject(null)}
              className="mb-8 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
            >
              ← Back to Portfolio
            </button>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {renderActiveProjectComponent()}
            </div>
          </section>
        ) : (
          <>
            <section className="h-[80vh] flex flex-col justify-center items-center text-center">
              <div className="transition-all duration-700 ease-out">
                <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 inline-block">Available for new challenges</span>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Hi, I'm <span className="text-blue-500">Ibrokhim</span></h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Frontend Developer & Future Computer Science Student. Building modern web applications and AI-powered products.
                </p>
                <div className="flex gap-4 justify-center">
                  <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">View Projects</a>
                  <a href="#contact" className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-medium transition-all">Contact Me</a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24">
              <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                  <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                        <IconCode />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                      <p className="text-slate-400 mb-6">{p.desc}</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{p.tag}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                        <button
                          onClick={() => setActiveProject(p.id)}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-purple-300 border border-white/5 transition-all cursor-pointer"
                        >
                          <IconCode /> View Code
                        </button>
                        <a
                          href={p.link}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-xs font-semibold text-blue-300 border border-blue-500/20 transition-all"
                        >
                          Demo <IconExternal />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section className="py-24">
              <h2 className="text-4xl font-bold mb-12 text-center">Tech Arsenal</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map(s => (
                  <span key={s} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-purple-500/50 transition-all cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer & Contact Section */}
      <footer id="contact" className="py-16 border-t border-white/5 text-center text-slate-400 space-y-4">
        <div className="flex justify-center gap-6 text-sm">
          <a href="tel:+998930070778" className="hover:text-blue-400 transition-colors">
             +998 (93) 007-07-78
          </a>
          <a href="mailto:ibrkh.gulyamov209@gmail.com" className="hover:text-blue-400 transition-colors">
            ibrkh.gulyamov209@gmail.com
          </a>
        </div>
        <p className="text-xs text-slate-600">© 2026 Ibrokhim. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;