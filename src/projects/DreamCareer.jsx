import { useState } from 'react';

// 1. Define translations for all UI texts, categories, and skill names
const translations = {
  en: {
    badge: "Interactive Career & Skill Simulator",
    title: "Dream Career Simulator",
    subtitle: "Click skills to track your mastery. Watch your simulated readiness score scale in real time.",
    selectTrack: "Select Target Track",
    skillsMastered: "Skills Mastered",
    careerReadiness: "Career Readiness",
    mastered: "Mastered",
    learn: "Learn",
    tracks: {
      "AI Full-Stack Developer": "AI Full-Stack",
      "Computer Science Pioneer": "CS Pioneer"
    },
    levels: {
      Advanced: "Advanced",
      Specialist: "Specialist",
      Professional: "Professional",
      Core: "Core",
      Expert: "Expert"
    },
    categories: {
      "Frontend Architecture": "Frontend Architecture",
      "AI & API Integration": "AI & API Integration",
      "Systems & Growth": "Systems & Growth",
      "Core Fundamentals": "Core Fundamentals",
      "Software Engineering": "Software Engineering",
      "Innovation & Research": "Innovation & Research"
    },
    skills: {
      'React & Vite': 'React & Vite',
      'Tailwind CSS': 'Tailwind CSS',
      'JavaScript ES6+': 'JavaScript ES6+',
      'State Management': 'State Management',
      'LLM Prompt Engineering': 'LLM Prompt Engineering',
      'OpenAI / Gemini SDKs': 'OpenAI / Gemini SDKs',
      'Vector Databases': 'Vector Databases',
      'API Orchestration': 'API Orchestration',
      'Git & Version Control': 'Git & Version Control',
      'CI/CD Pipelines': 'CI/CD Pipelines',
      'Cloud Deployment': 'Cloud Deployment',
      'Global Scaling': 'Global Scaling',
      'Data Structures & Algorithms': 'Data Structures & Algorithms',
      'Object-Oriented Programming': 'Object-Oriented Programming',
      'Memory Management': 'Memory Management',
      'Discrete Math': 'Discrete Math',
      'System Design': 'System Design',
      'Database Architecture': 'Database Architecture',
      'Clean Code Principles': 'Clean Code Principles',
      'Testing & Debugging': 'Testing & Debugging',
      'Algorithm Optimization': 'Algorithm Optimization',
      'Open Source Contribution': 'Open Source Contribution',
      'Technical Writing': 'Technical Writing',
      'Problem Solving': 'Problem Solving'
    }
  },
  ru: {
    badge: "Интерактивный симулятор карьеры и навыков",
    title: "Симулятор мечты о карьере",
    subtitle: "Нажимайте на навыки, чтобы отслеживать свой прогресс. Следите за изменением балла готовности в реальном времени.",
    selectTrack: "Выберите трек",
    skillsMastered: "Освоенные навыки",
    careerReadiness: "Готовность к карьере",
    mastered: "Освоен",
    learn: "Изучить",
    tracks: {
      "AI Full-Stack Developer": "AI Full-Stack",
      "Computer Science Pioneer": "CS Пионер"
    },
    levels: {
      Advanced: "Продвинутый",
      Specialist: "Специалист",
      Professional: "Профессионал",
      Core: "Базовый",
      Expert: "Эксперт"
    },
    categories: {
      "Frontend Architecture": "Архитектура Frontend",
      "AI & API Integration": "ИИ и интеграция API",
      "Systems & Growth": "Системы и масштабирование",
      "Core Fundamentals": "Фундаментальные основы",
      "Software Engineering": "Программная инженерия",
      "Innovation & Research": "Инновации и исследования"
    },
    skills: {
      'React & Vite': 'React & Vite',
      'Tailwind CSS': 'Tailwind CSS',
      'JavaScript ES6+': 'JavaScript ES6+',
      'State Management': 'Управление состоянием',
      'LLM Prompt Engineering': 'Промпт-инжиниринг LLM',
      'OpenAI / Gemini SDKs': 'OpenAI / Gemini SDK',
      'Vector Databases': 'Векторные базы данных',
      'API Orchestration': 'Оркестрация API',
      'Git & Version Control': 'Git и контроль версий',
      'CI/CD Pipelines': 'CI/CD пайплайны',
      'Cloud Deployment': 'Облачное развертывание',
      'Global Scaling': 'Глобальное масштабирование',
      'Data Structures & Algorithms': 'Структуры данных и алгоритмы',
      'Object-Oriented Programming': 'Объектно-ориентированное программирование',
      'Memory Management': 'Управление памятью',
      'Discrete Math': 'Дискретная математика',
      'System Design': 'Системный дизайн',
      'Database Architecture': 'Архитектура баз данных',
      'Clean Code Principles': 'Принципы чистого кода',
      'Testing & Debugging': 'Тестирование и отладка',
      'Algorithm Optimization': 'Оптимизация алгоритмов',
      'Open Source Contribution': 'Вклад в Open Source',
      'Technical Writing': 'Техническая документация',
      'Problem Solving': 'Решение задач'
    }
  },
  uz: {
    badge: "Interaktiv Karyera va Ko'nikmalar Simulyatori",
    title: "Orzuyingizdagi Karyera Simulyatori",
    subtitle: "O'zlashtirgan ko'nikmalaringizni belgilang va tayyorgarlik darajangiz real vaqtda qanday oshib borishini kuzating.",
    selectTrack: "Karyera yo'nalishini tanlang",
    skillsMastered: "O'zlashtirilgan ko'nikmalar",
    careerReadiness: "Karyeraga tayyorgarlik",
    mastered: "O'zlashtirildi",
    learn: "O'rganish",
    tracks: {
      "AI Full-Stack Developer": "AI Full-Stack",
      "Computer Science Pioneer": "CS Pioner"
    },
    levels: {
      Advanced: "Ilg'or",
      Specialist: "Mutaxassis",
      Professional: "Professional",
      Core: "Asosiy",
      Expert: "Ekspert"
    },
    categories: {
      "Frontend Architecture": "Frontend Arxitekturasi",
      "AI & API Integration": "Sun'iy Intellekt va API Integratsiyasi",
      "Systems & Growth": "Tizimlar va O'sish",
      "Core Fundamentals": "Asosiy Fundamentlar",
      "Software Engineering": "Dasturiy Ta'minot Injiniringi",
      "Innovation & Research": "Innovatsiyalar va Tadqiqot"
    },
    skills: {
      'React & Vite': 'React & Vite',
      'Tailwind CSS': 'Tailwind CSS',
      'JavaScript ES6+': 'JavaScript ES6+',
      'State Management': 'Holatni Boshqarish (State Management)',
      'LLM Prompt Engineering': 'LLM Promp-injiniring',
      'OpenAI / Gemini SDKs': 'OpenAI / Gemini SDK',
      'Vector Databases': 'Vektorli Maʼlumotlar Bazasi',
      'API Orchestration': 'API Orkestratsiyasi',
      'Git & Version Control': 'Git va Versiyalarni Boshqarish',
      'CI/CD Pipelines': 'CI/CD Konveyerlari',
      'Cloud Deployment': 'Bulutli Joylashtirish',
      'Global Scaling': 'Global Masshtablash',
      'Data Structures & Algorithms': 'Maʼlumotlar Tuzilmasi va Algoritmlar',
      'Object-Oriented Programming': 'Obyektga Yoʻnaltirilgan Dasturlash',
      'Memory Management': 'Xotirani Boshqarish',
      'Discrete Math': 'Diskret Matematika',
      'System Design': 'Tizim Dizayni (System Design)',
      'Database Architecture': 'Maʼlumotlar Bazasi Arxitekturasi',
      'Clean Code Principles': 'Toza Kod Tamoyillari',
      'Testing & Debugging': 'Testlash va Xatolarni Tuzatish',
      'Algorithm Optimization': 'Algoritmni Optimallashtirish',
      'Open Source Contribution': 'Ochiq Kodli Loyihalarga Hissa',
      'Technical Writing': 'Texnik Yozuvchilik',
      'Problem Solving': 'Muammolarni Hal Qilish'
    }
  }
};

const DreamCareer = ({ defaultLang = 'en' }) => {
  const [currentLang, setCurrentLang] = useState(defaultLang);
  const [targetTrack, setTargetTrack] = useState('AI Full-Stack Developer');
  const [unlockedSkills, setUnlockedSkills] = useState({
    'React & Vite': true,
    'Tailwind CSS': true,
    'JavaScript ES6+': true,
  });

  const t = translations[currentLang] || translations.en;

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
    <div className="max-w-4xl mx-auto text-[#0a0a0a]">
      
      {/* Built-in Language Switcher Toolbar */}
      <div className="flex justify-end gap-2 mb-6">
        {[
          { code: 'en', label: 'EN' },
          { code: 'ru', label: 'RU' },
          { code: 'uz', label: "UZ" }
        ].map((lang) => (
          <button
            key={lang.code}
            onClick={() => setCurrentLang(lang.code)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              currentLang === lang.code 
                ? 'bg-[#0a0a0a] text-white border-[#0a0a0a] shadow-sm' 
                : 'bg-black/2 text-black/60 border-black/8 hover:bg-black/5 hover:text-[#0a0a0a]'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-[#0a0a0a] text-[11px] font-bold uppercase tracking-widest mb-4 inline-block">
          {t.badge}
        </span>
        <h2 className="font-['Barlow_Condensed'] text-[clamp(40px,7vw,64px)] font-black uppercase tracking-tight mb-3">
          {t.title}
        </h2>
        <p className="text-black/50 text-sm max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Track Selector & Live Stats Bar */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-black/2 border border-black/8 flex flex-col justify-between">
          <span className="text-[11px] text-black/40 uppercase tracking-wider mb-3 font-bold">{t.selectTrack}</span>
          <div className="flex gap-2">
            {Object.keys(skillTree).map(track => (
              <button
                key={track}
                onClick={() => { setTargetTrack(track); setUnlockedSkills({}); }}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${targetTrack === track ? 'bg-[#0a0a0a] text-white shadow-sm' : 'bg-black/5 text-black/50 hover:bg-black/10 hover:text-[#0a0a0a]'}`}
              >
                {t.tracks[track] || track}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-black/2 border border-black/8 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-black/40 uppercase tracking-wider block mb-1 font-bold">{t.skillsMastered}</span>
            <span className="font-['Barlow_Condensed'] text-3xl font-black text-[#0a0a0a]">{completedCount} <span className="text-sm text-black/30 font-normal">/ {totalSkillsCount}</span></span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-[#0a0a0a] font-bold border border-black/10">
            ⚡
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-black/2 border border-black/8 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-black/40 uppercase tracking-wider block mb-1 font-bold">{t.careerReadiness}</span>
            <span className="font-['Barlow_Condensed'] text-3xl font-black text-[#0a0a0a]">{readinessScore}%</span>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-black/10 border-t-[#0a0a0a] flex items-center justify-center text-xs font-bold text-[#0a0a0a]">
            {readinessScore}%
          </div>
        </div>
      </div>

      {/* Dynamic Skill Tree Grid */}
      <div className="space-y-6">
        {skillTree[targetTrack].map((section, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-black/2 border border-black/8">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-['Barlow_Condensed'] text-[22px] font-black uppercase m-0 tracking-wide text-[#0a0a0a]">
                {t.categories[section.category] || section.category}
              </h3>
              <span className="text-[10px] font-bold text-black/50 uppercase tracking-widest px-3 py-1 rounded-full bg-black/5 border border-black/10">
                {t.levels[section.level] || section.level}
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
                        ? 'bg-[#0a0a0a] border-[#0a0a0a] text-white shadow-md' 
                        : 'bg-white border-black/10 text-black/60 hover:border-black/20 hover:bg-black/2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${isUnlocked ? 'bg-white text-[#0a0a0a]' : 'bg-black/5 text-transparent'}`}>
                        ✓
                      </div>
                      <span className="font-semibold text-sm">{t.skills[skill] || skill}</span>
                    </div>
                    <span className={`text-[11px] font-semibold tracking-wider uppercase ${isUnlocked ? 'text-[#f4a819]' : 'text-black/30'}`}>
                      {isUnlocked ? t.mastered : t.learn}
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