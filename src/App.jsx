import { useState, useEffect } from 'react';
import YoshFermers from './projects/YoshFermers';
import DreamCareer from './projects/DreamCareer';
import UniPath from './projects/UniPath';
import TaskFlow from './projects/TaskFlow';
import WeatherSphere from './projects/WeatherSphere';
import EduLink from './projects/EduLink';

const translations = {
  en: {
    nav: [
      ['projects', 'Projects'],
      ['skills', 'Skills'],
      ['timeline', 'Timeline'],
      ['contact', 'Contact']
    ],
    greeting: "👋 , my name is Ibrokhim and I am a freelance",
    role1: 'Frontend',
    role2: 'Developer',
    location: 'based in Tashkent, Uzbekistan.',
    viewProjectsBtn: 'View Projects',
    hireMeBtn: 'Hire Me',
    techStackLabels: ['React', 'JavaScript', 'Next.js', 'Tailwind CSS'],
    scrollText: 'scroll',
    featuredProjectsHeadingLines: ['Featured', 'Projects'],
    featuredProjectsSub: 'A selection of projects built with care — from concept to deployed product.',
    techArsenalHeadingLines: ['Tech', 'Arsenal'],
    journeyHeadingLines: ['My', 'Journey'],
    availableForWork: 'Available for work',
    contactHeadingLines: ["Let's build", 'something'],
    openTo: 'Open to',
    openToList: [
      'Frontend development projects',
      'Full-stack web applications',
      'UI/UX implementation from Figma',
      'EdTech & AgriTech startups',
      'Open source collaboration'
    ],
    footerCopy: '© 2026 IBRKH.DEV. Built with React & Tailwind CSS v4.',
    footerLinks: ['GitHub', 'LinkedIn', 'Telegram'],
    backToPortfolio: 'Back to Portfolio',
    moreProjects: 'More Projects',
    projects: [
      { id: 'yosh-fermers', title: 'Yosh Fermers', tag: 'AgriTech', desc: 'A modern network and educational platform for young farmers. Connecting agriculture with technology.', tech: ['React', 'Node.js', 'MongoDB'], year: '2025' },
      { id: 'dream-career', title: 'Dream Career Simulator', tag: 'AI / Web', desc: 'AI-powered career roadmaps & skill tree generator. Discover realistic paths to your dream job.', tech: ['Next.js', 'OpenAI API', 'Tailwind'], year: '2025' },
      { id: 'unipath', title: 'UniPath AI', tag: 'EdTech', desc: 'Global university & scholarship guidance platform. Simplifies international university applications.', tech: ['React', 'Firebase', 'Python'], year: '2025' },
      { id: 'taskflow', title: 'TaskFlow', tag: 'SaaS', desc: 'Modern, minimalist productivity dashboard. Manage tasks, track habits and build better workflows.', tech: ['React', 'TypeScript', 'Supabase'], year: '2025' },
      { id: 'weathersphere', title: 'WeatherSphere', tag: 'Utility', desc: 'Real-time weather forecasting with elegant data visualisation. Beautiful UI meets accurate data.', tech: ['JavaScript', 'D3.js', 'REST API'], year: '2024' },
      { id: 'edulink', title: 'EduLink', tag: 'Education', desc: 'Community-driven resource sharing platform for students. Learn, share, and grow together.', tech: ['React', 'GraphQL', 'PostgreSQL'], year: '2024' },
    ],
    skills: [
      { name: 'React', icon: '⚛' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind CSS', icon: 'TW' },
      { name: 'HTML5', icon: 'H5' },
      { name: 'CSS3', icon: 'C3' },
      { name: 'Git', icon: 'GIT' },
      { name: 'Node.js', icon: '⬡' },
      { name: 'Figma', icon: '◈' },
      { name: 'Next.js', icon: 'N' },
    ],
    timeline: [
      { year: '2027', title: 'University Application Journey', place: 'Tashkent, Uzbekistan', desc: 'Preparing and submitting applications to top computer science universities.' },
      { year: '2026', title: 'Certificates & Admissions Prep', place: 'Tashkent, Uzbekistan', desc: 'Focusing on acquiring standard certificates and preparing for university requirements.' },
      { year: '2025', title: 'Mars IT Student & Developer', place: 'Tashkent, Uzbekistan', desc: 'Studied core web development and built real projects with mentors at Mars IT School.' },
      { year: '2024', title: 'First Lines of Code', place: 'Tashkent, Uzbekistan', desc: 'Discovered programming and fell in love with building things for the web.' },
    ]
  },
  ru: {
    nav: [
      ['projects', 'Проекты'],
      ['skills', 'Навыки'],
      ['timeline', 'Таймлайн'],
      ['contact', 'Контакты']
    ],
    greeting: "👋 , меня зовут Иброхим, и я фриланс",
    role1: 'Фронтенд',
    role2: 'Разработчик',
    location: 'живу в Ташкенте, Узбекистан.',
    viewProjectsBtn: 'Смотреть проекты',
    hireMeBtn: 'Связаться',
    techStackLabels: ['React', 'JavaScript', 'Next.js', 'Tailwind CSS'],
    scrollText: 'прокрутка',
    featuredProjectsHeadingLines: ['Избранные', 'Проекты'],
    featuredProjectsSub: 'Подборка проектов, созданных с вниманием — от концепции до готового продукта.',
    techArsenalHeadingLines: ['Техно', 'Арсенал'],
    journeyHeadingLines: ['Мой', 'Путь'],
    availableForWork: 'Открыт для работы',
    contactHeadingLines: ['Давайте создадим', 'что-то'],
    openTo: 'Интересно',
    openToList: [
      'Фронтенд-разработка проектов',
      'Full-stack веб-приложения',
      'Реализация UI/UX по Figma',
      'Стартапы в сфере EdTech и AgriTech',
      'Open source сотрудничество'
    ],
    footerCopy: '© 2026 IBRKH.DEV. Создано на React и Tailwind CSS v4.',
    footerLinks: ['GitHub', 'LinkedIn', 'Telegram'],
    backToPortfolio: 'Назад к портфолио',
    moreProjects: 'Другие проекты',
    projects: [
      { id: 'yosh-fermers', title: 'Yosh Fermers', tag: 'AgriTech', desc: 'Современная сеть и образовательная платформа для молодых фермеров, связывающая сельское хозяйство с технологиями.', tech: ['React', 'Node.js', 'MongoDB'], year: '2025' },
      { id: 'dream-career', title: 'Dream Career Simulator', tag: 'AI / Web', desc: 'Карьерные карты и генератор навыков на базе ИИ. Найдите реалистичный путь к работе мечты.', tech: ['Next.js', 'OpenAI API', 'Tailwind'], year: '2025' },
      { id: 'unipath', title: 'UniPath AI', tag: 'EdTech', desc: 'Платформа глобального поиска университетов и стипендий. Упрощает подачу заявок в вузы за рубежом.', tech: ['React', 'Firebase', 'Python'], year: '2025' },
      { id: 'taskflow', title: 'TaskFlow', tag: 'SaaS', desc: 'Современный минималистичный дашборд продуктивности. Управляйте задачами и привычками.', tech: ['React', 'TypeScript', 'Supabase'], year: '2025' },
      { id: 'weathersphere', title: 'WeatherSphere', tag: 'Utility', desc: 'Прогноз погоды в реальном времени с элегантной визуализацией данных.', tech: ['JavaScript', 'D3.js', 'REST API'], year: '2024' },
      { id: 'edulink', title: 'EduLink', tag: 'Education', desc: 'Платформа для совместного обмена ресурсами среди студентов. Учитесь и развивайтесь вместе.', tech: ['React', 'GraphQL', 'PostgreSQL'], year: '2024' },
    ],
    skills: [
      { name: 'React', icon: '⚛' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind CSS', icon: 'TW' },
      { name: 'HTML5', icon: 'H5' },
      { name: 'CSS3', icon: 'C3' },
      { name: 'Git', icon: 'GIT' },
      { name: 'Node.js', icon: '⬡' },
      { name: 'Figma', icon: '◈' },
      { name: 'Next.js', icon: 'N' },
    ],
    timeline: [
      { year: '2027', title: 'Подача заявлений в вуз', place: 'Ташкент, Узбекистан', desc: 'Подготовка и подача документов в ведущие университеты по направлению Computer Science.' },
      { year: '2026', title: 'Получение сертификатов для вуза', place: 'Ташкент, Узбекистан', desc: 'Сдача экзаменов и получение необходимых сертификатов для поступления в университет.' },
      { year: '2025', title: 'Студент Mars IT и Разработчик', place: 'Ташкент, Узбекистан', desc: 'Изучение веб-разработки и создание проектов под руководством менторов в Mars IT School.' },
      { year: '2024', title: 'Первые строки кода', place: 'Ташкент, Узбекистан', desc: 'Знакомство с программированием и создание первых веб-страниц.' },
    ]
  },
  uz: {
    nav: [
      ['projects', 'Loyihalar'],
      ['skills', 'Ko\'nikmalar'],
      ['timeline', 'Vaqt jadvali'],
      ['contact', 'Aloqa']
    ],
    greeting: "👋 , mening ismim Ibrohim va men frilans",
    role1: 'Frontend',
    role2: 'Dasturchiman',
    location: 'Toshkent, O\'zbekiston.',
    viewProjectsBtn: "Loyihalarni ko'rish",
    hireMeBtn: "Bog'lanish",
    techStackLabels: ['React', 'JavaScript', 'Next.js', 'Tailwind CSS'],
    scrollText: "aylantirish",
    featuredProjectsHeadingLines: ['Saralangan', 'Loyihalar'],
    featuredProjectsSub: 'G\'oyadan tortib tayyor mahsulotgacha — mehr bilan qurilgan loyihalar tanlovi.',
    techArsenalHeadingLines: ['Texno', 'Arsenal'],
    journeyHeadingLines: ['Mening', 'Yo\'lim'],
    availableForWork: 'Ish uchun ochiqman',
    contactHeadingLines: ['Keling, biror', 'narsa quramiz'],
    openTo: 'Qiziqishlar',
    openToList: [
      'Frontend dasturlash loyihalari',
      'Full-stack veb-ilovalar',
      'Figma\'dan UI/UX qismiga o\'tkazish',
      'EdTech va AgriTech стартаплар',
      'Open source hamkorlik'
    ],
    footerCopy: '© 2026 IBRKH.DEV. React va Tailwind CSS v4 yordamida yaratilgan.',
    footerLinks: ['GitHub', 'LinkedIn', 'Telegram'],
    backToPortfolio: 'Portfelga qaytish',
    moreProjects: 'Boshqa loyihalar',
    projects: [
      { id: 'yosh-fermers', title: 'Yosh Fermers', tag: 'AgriTech', desc: 'Yosh fermerlar uchun zamonaviy tarmoq va ta’lim platformasi. Qishloq xo\'jaligini texnologiya bilan bog\'laydi.', tech: ['React', 'Node.js', 'MongoDB'], year: '2025' },
      { id: 'dream-career', title: 'Dream Career Simulator', tag: 'AI / Web', desc: 'Sun’iy intellektga asoslangan karyera yo\'llari va ko\'nikmalar daraxti generatori.', tech: ['Next.js', 'OpenAI API', 'Tailwind'], year: '2025' },
      { id: 'unipath', title: 'UniPath AI', tag: 'EdTech', desc: 'Global universitetlar va stipendiyalar bo\'yicha maslahat platformasi. Xorijiy universitetlarga arizalarni soddalashtiradi.', tech: ['React', 'Firebase', 'Python'], year: '2025' },
      { id: 'taskflow', title: 'TaskFlow', tag: 'SaaS', desc: 'Zamonaviy, minimalistik unumdorlik boshqaruv paneli. Vazifalarni boshqaring va odatlarni kuzating.', tech: ['React', 'TypeScript', 'Supabase'], year: '2025' },
      { id: 'weathersphere', title: 'WeatherSphere', tag: 'Utility', desc: 'Elegant ma’lumotlar vizualizatsiyasi bilan real vaqtda ob-havo prognozi.', tech: ['JavaScript', 'D3.js', 'REST API'], year: '2024' },
      { id: 'edulink', title: 'EduLink', tag: 'Education', desc: 'Talabalar uchun hamjamiyat tomonidan boshqariladigan resurs almashish platformasi.', tech: ['React', 'GraphQL', 'PostgreSQL'], year: '2024' },
    ],
    skills: [
      { name: 'React', icon: '⚛' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind CSS', icon: 'TW' },
      { name: 'HTML5', icon: 'H5' },
      { name: 'CSS3', icon: 'C3' },
      { name: 'Git', icon: 'GIT' },
      { name: 'Node.js', icon: '⬡' },
      { name: 'Figma', icon: '◈' },
      { name: 'Next.js', icon: 'N' },
    ],
    timeline: [
      { year: '2027', title: 'Universitetga topshirish', place: 'Toshkent, O\'zbekiston', desc: 'Xalqaro universitetlarga hujjat topshirish va qabul jarayonlarida qatnashish.' },
      { year: '2026', title: 'Universitet uchun sertifikatlar', place: 'Toshkent, O\'zbekiston', desc: 'Universitetga kirish talablari uchun zarur bo\'lgan sertifikatlarni olishga tayyorgarlik.' },
      { year: '2025', title: 'Mars IT Talabasi va Dasturchi', place: 'Toshkent, O\'zbekiston', desc: 'Mars IT School\'da mentorlar yordamida veb-dasturlashni o\'rganib, real loyihalar yaratdim.' },
      { year: '2024', title: 'Birinchi qator kodlar', place: 'Toshkent, O\'zbekiston', desc: 'Dasturlash olami bilan tanishib, ilk veb-sahifalarimni yoza boshladim.' },
    ]
  }
};

function projectComponent(id, lang, onLanguageChange) {
  switch (id) {
    case 'yosh-fermers': return <YoshFermers lang={lang} onLanguageChange={onLanguageChange} />;
    case 'dream-career': return <DreamCareer lang={lang} onLanguageChange={onLanguageChange} />;
    case 'unipath': return <UniPath lang={lang} onLanguageChange={onLanguageChange} />;
    case 'taskflow': return <TaskFlow lang={lang} onLanguageChange={onLanguageChange} />;
    case 'weathersphere': return <WeatherSphere lang={lang} onLanguageChange={onLanguageChange} />;
    case 'edulink': return <EduLink lang={lang} onLanguageChange={onLanguageChange} />;
    default: return null;
  }
}

function ArrowDiag() {
  return (
    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="w-9 h-9 rounded-full border border-black/10 bg-black/5 flex items-center justify-center text-[#0a0a0a] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
    >
      {isDark ? (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
      ) : (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" /></svg>
      )}
    </button>
  );
}

function ArrowLeft() {
  return (
    <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const t = translations[lang];

  useEffect(() => {
    if (activeProject) return;
    function onScroll() {
      for (const id of ['home', 'projects', 'skills', 'timeline', 'contact']) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) { setActiveSection(id); break; }
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeProject]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');

  // ── PROJECT DETAIL VIEW ──────────────────────────────────────────────────
  if (activeProject) {
    return (
      <div className={`${theme === 'dark' ? 'dark-mode' : ''} bg-white text-[#0a0a0a] min-h-screen transition-colors duration-300`}>
        {/* Detail nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-black/6">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 h-16 flex items-center justify-between">
            <a href="#" onClick={e => { e.preventDefault(); setActiveProject(null); }}
              className="flex items-center gap-0.5 no-underline">
              <span className="font-['Barlow_Condensed'] text-[24px] sm:text-[26px] font-black text-[#0a0a0a] tracking-[-0.5px]">Ibrkh.</span>
              <span className="font-['Barlow_Condensed'] text-[24px] sm:text-[26px] font-black text-[#f4a819]">dev</span>
            </a>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1 bg-black/5 border border-black/10 rounded-full p-1 text-[11px] font-bold">
                {['en', 'ru', 'uz'].map(l => (
                  <button key={l} onClick={() => setLang(l)}
                    className={`px-2 py-1 rounded-full uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${lang === l ? 'bg-[#0a0a0a] text-white shadow-sm' : 'text-black/50 hover:text-[#0a0a0a]'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
              <button
                onClick={() => setActiveProject(null)}
                className="group flex items-center gap-2 bg-transparent border-[1.5px] border-black/15 rounded-full px-3.5 sm:px-4.5 py-2 text-[12px] sm:text-[13px] font-semibold cursor-pointer text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ArrowLeft /> <span className="hidden sm:inline">{t.backToPortfolio}</span><span className="sm:hidden">Back</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Detail content */}
        <main className="max-w-240 mx-auto pt-24 px-5 sm:px-10 pb-20">
          {projectComponent(activeProject, lang, setLang)}
        </main>

        {/* Next project footer */}
        <div className="border-t border-black/8 py-12 px-5 sm:px-10 text-center">
          <p className="text-[11px] font-bold text-black/30 uppercase tracking-[0.15em] mb-5">{t.moreProjects}</p>
          <div className="flex gap-2.5 sm:gap-3 justify-center flex-wrap">
            {t.projects.filter(p => p.id !== activeProject).slice(0, 3).map(p => (
              <button key={p.id} onClick={() => setActiveProject(p.id)}
                className="font-['Barlow_Condensed'] text-sm sm:text-base font-black uppercase tracking-wider bg-transparent border-[1.5px] border-black/12 rounded-full px-4 sm:px-5.5 py-2.5 cursor-pointer text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // inspect number
  console.log("%c📞 Contact: +998 93 007 07 78", "color: #38bdf8; font-size: 14px; font-weight: bold;");


  // ── MAIN PORTFOLIO VIEW ──────────────────────────────────────────────────
  return (
    <div className={`${theme === 'dark' ? 'dark-mode' : ''} bg-white text-[#0a0a0a] min-h-screen overflow-x-hidden transition-colors duration-300`}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-black/6">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="no-underline flex items-center">
            <span className="font-['Barlow_Condensed'] text-[24px] sm:text-[26px] font-black text-[#0a0a0a] tracking-[-0.5px]">Ibrkh.</span>
            <span className="font-['Barlow_Condensed'] text-[24px] sm:text-[26px] font-black text-[#f4a819]">dev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {t.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={`text-sm font-medium no-underline transition-colors ${activeSection === id ? 'text-[#0a0a0a]' : 'text-black/40 hover:text-[#0a0a0a]'}`}>
                {label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-black/5 border border-black/10 rounded-full p-1 text-[11px] font-bold">
              {['en', 'ru', 'uz'].map(l => (
                <button key={l} onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${lang === l ? 'bg-[#0a0a0a] text-white shadow-sm' : 'text-black/50 hover:text-[#0a0a0a]'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <a href="#contact" className="inline-flex items-center bg-[#0a0a0a] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full no-underline transition-all duration-300 hover:scale-105 active:scale-95">
              ibrkh.gulyamov209@gmail.com
            </a>
          </div>

          <div className="hidden md:flex lg:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden bg-transparent border-none cursor-pointer p-1 flex flex-col gap-1.25">
            <span className={`block w-6 h-0.5 bg-[#0a0a0a] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-x-1.25 translate-y-1.25' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0a0a0a] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-[#0a0a0a] transition-transform duration-300 ${menuOpen ? '-rotate-45 translate-x-1.25 -translate-y-1.25' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/6 bg-white px-5 sm:px-10 py-6 flex flex-col gap-5 md:hidden shadow-lg">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <div className="flex items-center gap-1 bg-black/5 border border-black/10 rounded-full p-1 text-[11px] font-bold w-fit">
              {['en', 'ru', 'uz'].map(l => (
                <button key={l} onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${lang === l ? 'bg-[#0a0a0a] text-white shadow-sm' : 'text-black/50 hover:text-[#0a0a0a]'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {t.nav.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}
                  className="text-xl font-bold font-['Barlow_Condensed'] uppercase tracking-wider no-underline text-[#0a0a0a]">{label}</a>
              ))}
            </div>
            <div className="pt-2 border-t border-black/10">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-xs font-semibold text-black/60 break-all">
                ibrkh.gulyamov209@gmail.com
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="min-h-screen pt-24 sm:pt-28 pb-16 flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 w-full">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-[14px] sm:text-[15px] text-black/45 font-medium m-0 leading-relaxed">
              {t.greeting}
            </p>
          </div>

          <div className="relative my-2">
            <h1 className="font-['Barlow_Condensed'] text-[clamp(64px,14vw,200px)] font-black leading-[0.88] tracking-[-2px] uppercase m-0 text-[#0a0a0a] select-none">
              {t.role1}
            </h1>
            <h1 className="outline-adaptive font-['Barlow_Condensed'] text-[clamp(64px,14vw,200px)] font-black leading-[0.88] tracking-[-2px] uppercase m-0 text-transparent [-webkit-text-stroke:2px_#0a0a0a] sm:[-webkit-text-stroke:2.5px_#0a0a0a] select-none">
              {t.role2}
            </h1>
          </div>

          <div className="mt-8 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
            <div>
              <p className="text-sm text-black/45 font-medium mb-6">{t.location}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#projects" className="inline-flex justify-center items-center bg-[#0a0a0a] text-white font-bold text-sm px-7 py-3.5 no-underline tracking-[0.02em] transition-all duration-300 hover:scale-105 active:scale-95">
                  {t.viewProjectsBtn}
                </a>
                <a href="#contact" className="inline-flex justify-center items-center border-[1.5px] border-black/20 text-[#0a0a0a] font-bold text-sm px-7 py-3.5 no-underline tracking-[0.02em] transition-all duration-300 hover:scale-105 active:scale-95">
                  {t.hireMeBtn}
                </a>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-5 flex-wrap pt-4 lg:pt-0">
              {t.techStackLabels.map(item => (
                <span key={item} className="text-[11px] font-bold text-black/30 uppercase tracking-[0.12em]">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 sm:h-12 bg-black/15" />
          <span className="text-[10px] font-bold text-black/25 uppercase tracking-[0.15em]">{t.scrollText}</span>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 sm:py-30 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <h2 className="font-['Barlow_Condensed'] text-[clamp(44px,7.5vw,96px)] font-black uppercase leading-[0.9] tracking-[-1px] m-0">
              {t.featuredProjectsHeadingLines[0]} <span className="sm:hidden">{t.featuredProjectsHeadingLines[1]}</span><br className="hidden sm:inline" />
              <span className="outline-adaptive text-transparent [-webkit-text-stroke:1.5px_#0a0a0a] sm:[-webkit-text-stroke:2px_#0a0a0a] hidden sm:inline">{t.featuredProjectsHeadingLines[1]}</span>
            </h2>
            <p className="text-[13px] text-black/40 max-w-full lg:max-w-55 lg:text-right leading-[1.6] shrink-0">
              {t.featuredProjectsSub}
            </p>
          </div>

          <div className="border-t border-black/8">
            {t.projects.map((p, i) => (
              <ProjectRow key={p.id} project={p} index={i} onOpen={() => setActiveProject(p.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-20 sm:py-30 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <h2 className="font-['Barlow_Condensed'] text-[clamp(44px,7.5vw,96px)] font-black uppercase leading-[0.9] tracking-[-1px] mb-12 sm:mb-16">
            {t.techArsenalHeadingLines[0]} <span className="sm:hidden">{t.techArsenalHeadingLines[1]}</span><br className="hidden sm:inline" />
            <span className="text-transparent [-webkit-text-stroke:1.5px_#fff] sm:[-webkit-text-stroke:2px_#fff] hidden sm:inline">{t.techArsenalHeadingLines[1]}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-px bg-white/10">
            {t.skills.map(s => <SkillCard key={s.name} skill={s} />)}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section id="timeline" className="py-20 sm:py-30 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <h2 className="font-['Barlow_Condensed'] text-[clamp(44px,7.5vw,96px)] font-black uppercase leading-[0.9] tracking-[-1px] mb-12 sm:mb-16">
            {t.journeyHeadingLines[0]} <span className="sm:hidden">{t.journeyHeadingLines[1]}</span><br className="hidden sm:inline" />
            <span className="outline-adaptive text-transparent [-webkit-text-stroke:1.5px_#0a0a0a] sm:[-webkit-text-stroke:2px_#0a0a0a] hidden sm:inline">{t.journeyHeadingLines[1]}</span>
          </h2>
          <div className="border-t border-black/8">
            {t.timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[90px_1fr] md:grid-cols-[100px_1fr] gap-2 sm:gap-[0_48px] py-8 sm:py-10 border-b border-black/8 items-start">
                <span className="font-['Barlow_Condensed'] text-[40px] sm:text-[52px] font-black text-black/15 sm:text-black/10 leading-none">{item.year}</span>
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-[24px] sm:text-[28px] font-black uppercase m-0 mb-1 leading-[1.1]">{item.title}</h3>
                  <p className="text-[11px] font-bold text-black/35 uppercase tracking-[0.12em] mb-3">{item.place}</p>
                  <p className="text-sm text-black/55 leading-[1.7] max-w-130 m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 sm:py-30 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[0_80px] items-center">
            <div>
              <span className="text-[11px] font-bold text-black/30 uppercase tracking-[0.15em] block mb-4">{t.availableForWork}</span>
              <h2 className="font-['Barlow_Condensed'] text-[clamp(44px,7.5vw,96px)] font-black uppercase leading-[0.9] tracking-[-1px] mb-8 sm:mb-10">
                {t.contactHeadingLines[0]}<br />
                <span className="outline-adaptive text-transparent [-webkit-text-stroke:1.5px_#0a0a0a] sm:[-webkit-text-stroke:2px_#0a0a0a]">{t.contactHeadingLines[1]}</span>
              </h2>
              <div className="flex flex-col gap-3">
                <a href="mailto:ibrkh.gulyamov209@gmail.com" className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#0a0a0a] no-underline border-b border-black/12 pb-2 transition-all duration-300 hover:translate-x-1 break-all">
                  ibrkh.gulyamov209@gmail.com <ArrowDiag />
                </a>
                <a href="tel:+998930070778" className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-black/50 no-underline transition-all duration-300 hover:translate-x-1">
                  +998 (93) 007-07-78 <ArrowDiag />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-[11px] font-bold text-black/30 uppercase tracking-[0.15em] mb-4">{t.openTo}</h3>
              {t.openToList.map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-black/6">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/25 shrink-0" />
                  <span className="text-sm font-medium text-black/65">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-black/8 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 text-center sm:text-left">
          <span className="font-['Barlow_Condensed'] text-[22px] font-black">
            Ibrkh.<span className="text-[#f4a819]">dev</span>
          </span>

          <p className="text-xs text-black/30 m-0">{t.footerCopy}</p>
          <div className="flex gap-6">
            {t.footerLinks.map(s => (
              <a key={s} href="#" className="text-[11px] font-bold text-black/35 uppercase tracking-[0.12em] no-underline transition-colors duration-300 hover:text-[#0a0a0a]">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectRow({ project, index, onOpen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      className={`group grid grid-cols-[28px_1fr_32px] sm:grid-cols-[40px_1fr_40px] gap-3 sm:gap-[0_24px] items-center py-6 sm:py-7 px-1 sm:px-2 border-b border-black/8 cursor-pointer transition-all duration-300 transform active:scale-[0.98] ${hovered ? 'bg-black/2 sm:translate-x-1 sm:scale-[1.01]' : 'bg-transparent'}`}
    >
      <span className="text-[11px] font-bold text-black/25 sm:text-black/20 tracking-wider">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_auto] gap-3 lg:gap-[0_32px] items-center">
        <div>
          <h3 className={`font-['Barlow_Condensed'] text-[24px] sm:text-[28px] font-black uppercase m-0 mb-0.5 leading-none transition-colors ${hovered ? 'underline underline-offset-4 decoration-1 text-[#f4a819]' : ''}`}>
            {project.title}
          </h3>
          <span className="text-[11px] font-bold text-black/30 uppercase tracking-[0.12em]">
            {project.tag} · {project.year}
          </span>
        </div>
        <p className="text-[13px] text-black/50 leading-[1.6] m-0">{project.desc}</p>
        <div className="flex gap-1.5 sm:gap-2 flex-wrap lg:justify-end pt-1 lg:pt-0">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] sm:text-[11px] font-semibold text-black/40 border border-black/10 px-2 sm:px-2.5 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>

      <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-[1.5px] border-black/15 rounded-full transition-all duration-300 shrink-0 transform active:scale-90 ${hovered ? 'bg-[#0a0a0a] text-white sm:scale-110' : 'bg-transparent text-[#0a0a0a]'}`}>
        <ArrowDiag />
      </div>
    </div>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`p-6 sm:p-8 flex flex-col gap-2 sm:gap-3 cursor-default transition-all duration-300 transform active:scale-95 ${hovered ? 'bg-white text-[#0a0a0a] sm:scale-[1.02]' : 'bg-[#0a0a0a] text-white'}`}
    >
      <span className={`text-[20px] sm:text-[22px] font-black transition-colors ${hovered ? 'text-black/20' : 'text-white/20'}`}>{skill.icon}</span>
      <span className="font-['Barlow_Condensed'] text-[18px] sm:text-[20px] font-bold uppercase tracking-wider">{skill.name}</span>
    </div>
  );
}
