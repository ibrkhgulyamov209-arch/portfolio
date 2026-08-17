import { useState } from 'react';

const universityDatabase = [
  { 
    id: 1, 
    name: "Global Tech Institute", 
    city: "Boston, Massachusetts", 
    country: "USA", 
    matchField: "Computer Science", 
    minGPA: 3.5, 
    minIELTS: 7.0,
    scholarship: "Full Tuition Waiver", 
    tier: "Top 10",
    mapQuery: "Global+Tech+Institute+Boston+MA"
  },
  { 
    id: 2, 
    name: "European University of Engineering", 
    city: "Munich, Bavaria", 
    country: "Germany", 
    matchField: "Engineering", 
    minGPA: 3.2, 
    minIELTS: 6.5,
    scholarship: "Erasmus Stipend", 
    tier: "Top 50",
    mapQuery: "Technical+University+of+Munich+Germany"
  },
  { 
    id: 3, 
    name: "Asia Science Hub", 
    city: "Clementi", 
    country: "Singapore", 
    matchField: "AI & Tech", 
    minGPA: 3.8, 
    minIELTS: 7.5,
    scholarship: "Merit-based 80%", 
    tier: "Top 15",
    mapQuery: "National+University+of+Singapore"
  },
  { 
    id: 4, 
    name: "Silicon Valley Innovation College", 
    city: "San Jose, California", 
    country: "USA", 
    matchField: "Frontend Development", 
    minGPA: 3.0, 
    minIELTS: 6.0,
    scholarship: "Partial Grant", 
    tier: "Top 25",
    mapQuery: "San+Jose+State+University+California"
  },
  { 
    id: 5, 
    name: "Oxford Global Academy", 
    city: "Oxford, Oxfordshire", 
    country: "UK", 
    matchField: "Computer Science", 
    minGPA: 3.9, 
    minIELTS: 8.0,
    scholarship: "Rhodes Scholarship", 
    tier: "Ivy Equivalent",
    mapQuery: "University+of+Oxford+UK"
  }
];

const translations = {
  en: {
    badge: "Advanced University & Location Matcher",
    subtitle: "Input your exact GPA, IELTS score, and technical achievements to discover global universities with integrated map lookups.",
    fieldLabel: "Preferred Field of Study",
    fields: {
      "Computer Science": "Computer Science",
      "Engineering": "Engineering",
      "AI & Tech": "AI & Tech",
      "Frontend Development": "Frontend Development"
    },
    gpaLabel: "Current GPA (max 4.0)",
    ieltsLabel: "IELTS Score",
    portfolioLabel: "Portfolio & Coding Achievements",
    portfolioOptions: {
      "Yes": "Built Multiple Web Apps & Portfolios",
      "Hackathon": "Hackathon Participant / Winner",
      "General": "General Academic Background"
    },
    submitBtn: "Calculate Eligibility & Map Locations →",
    resultsHeading: "Matching Institutions",
    noResults: "No matching institutions found for your specific GPA and IELTS filters. Try adjusting your score thresholds!",
    scholarship: "Scholarship",
    req: "Req",
    viewOnMap: "View on Map",
    apply: "Apply",
    alertMsg: (name, city) => `Application query generated for ${name} in ${city}!`
  },
  ru: {
    badge: "Продвинутый подбор университетов и локаций",
    subtitle: "Введите свой GPA, балл IELTS и технические достижения, чтобы найти мировые университеты с интегрированными картами.",
    fieldLabel: "Предпочтительное направление",
    fields: {
      "Computer Science": "Компьютерные науки",
      "Engineering": "Инженерия",
      "AI & Tech": "ИИ и технологии",
      "Frontend Development": "Фронтенд-разработка"
    },
    gpaLabel: "Текущий GPA (макс. 4.0)",
    ieltsLabel: "Балл IELTS",
    portfolioLabel: "Портфолио и навыки программирования",
    portfolioOptions: {
      "Yes": "Создано несколько веб-приложений и портфолио",
      "Hackathon": "Участник / победитель хакатонов",
      "General": "Общий академический бэкграунд"
    },
    submitBtn: "Рассчитать соответствие и карты →",
    resultsHeading: "Подходящие учебные заведения",
    noResults: "Не найдено подходящих учебных заведений по вашим фильтрам GPA и IELTS. Попробуйте скорректировать пороги баллов!",
    scholarship: "Стипендия",
    req: "Треб",
    viewOnMap: "На карте",
    apply: "Подать заявку",
    alertMsg: (name, city) => `Заявка сгенерирована для ${name} в г. ${city}!`
  },
  uz: {
    badge: "Ilg'or universitet va joylashuv tanlash tizimi",
    subtitle: "Global universitetlarni xaritalar bilan topish uchun aniq GPA, IELTS bali va texnik yutuqlaringizni kiriting.",
    fieldLabel: "Afzal ko'rilgan yo'nalish",
    fields: {
      "Computer Science": "Kompyuter fanlari",
      "Engineering": "Muhandislik",
      "AI & Tech": "Sun'iy intellekt va texnologiya",
      "Frontend Development": "Frontend dasturlash"
    },
    gpaLabel: "Joriy GPA (maks. 4.0)",
    ieltsLabel: "IELTS bali",
    portfolioLabel: "Portfolio va dasturlash yutuqlari",
    portfolioOptions: {
      "Yes": "Bir nechta veb-ilova va portfoliolar yaratilgan",
      "Hackathon": "Hakaton ishtirokchisi / g'olibi",
      "General": "Umumiy akademik ma'lumot"
    },
    submitBtn: "Moslikni hisoblash va xaritani ko'rish →",
    resultsHeading: "Mos keluvchi muassasalar",
    noResults: "GPA va IELTS filtrlaringizga mos keluvchi muassasalar topilmadi. Ballar chegarasini o'zgartirib ko'ring!",
    scholarship: "Stipendiya",
    req: "Talab",
    viewOnMap: "Xaritada ko'rish",
    apply: "Ariza topshirish",
    alertMsg: (name, city) => `${name} (${city}) uchun ariza so'rovi yaratildi!`
  }
};

const EduLink = ({ lang = 'en', onLanguageChange = () => {} }) => {
  const [field, setField] = useState('Computer Science');
  const [gpa, setGpa] = useState('3.6');
  const [ielts, setIelts] = useState('7.0');
  const [codingProjects, setCodingProjects] = useState('Yes');
  const [results, setResults] = useState(null);

  const t = translations[lang];

  const handleFindMatches = (e) => {
    e.preventDefault();
    const matched = universityDatabase.filter(uni => 
      uni.matchField === field && 
      uni.minGPA <= parseFloat(gpa) &&
      uni.minIELTS <= parseFloat(ielts)
    );
    setResults(matched);
  };

  return (
    <div className="max-w-4xl mx-auto text-[#0a0a0a]">
      {/* Language Switcher */}
      <div className="flex justify-end mb-6">
        <div className="inline-flex p-1 rounded-2xl bg-black/5 border border-black/10 gap-1">
          {['en', 'ru', 'uz'].map((l) => (
            <button
              key={l}
              onClick={() => onLanguageChange(l)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                lang === l 
                  ? 'bg-[#0a0a0a] text-white shadow-xs' 
                  : 'text-black/60 hover:text-[#0a0a0a]'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-[#0a0a0a] text-[11px] font-bold uppercase tracking-widest mb-4 inline-block">
          {t.badge}
        </span>
        <h2 className="font-['Barlow_Condensed'] text-[clamp(40px,7vw,64px)] font-black uppercase tracking-tight mb-3">
          EduLink
        </h2>
        <p className="text-black/50 text-sm max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleFindMatches} className="p-8 rounded-3xl bg-black/2 border border-black/8 space-y-6 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">{t.fieldLabel}</label>
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all cursor-pointer"
            >
              <option value="Computer Science">{t.fields["Computer Science"]}</option>
              <option value="Engineering">{t.fields["Engineering"]}</option>
              <option value="AI & Tech">{t.fields["AI & Tech"]}</option>
              <option value="Frontend Development">{t.fields["Frontend Development"]}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">{t.gpaLabel}</label>
            <input
              type="number"
              step="0.1"
              max="4.0"
              min="2.0"
              required
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">{t.ieltsLabel}</label>
            <select
              value={ielts}
              onChange={(e) => setIelts(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all cursor-pointer"
            >
              <option value="6.0">6.0</option>
              <option value="6.5">6.5</option>
              <option value="7.0">7.0</option>
              <option value="7.5">7.5</option>
              <option value="8.0">8.0+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">{t.portfolioLabel}</label>
          <select
            value={codingProjects}
            onChange={(e) => setCodingProjects(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all cursor-pointer"
          >
            <option value="Yes">{t.portfolioOptions["Yes"]}</option>
            <option value="Hackathon">{t.portfolioOptions["Hackathon"]}</option>
            <option value="General">{t.portfolioOptions["General"]}</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-[#0a0a0a] hover:bg-black/80 font-bold text-xs uppercase tracking-widest text-white transition-all shadow-md cursor-pointer"
        >
          {t.submitBtn}
        </button>
      </form>

      {/* Results Section */}
      {results !== null && (
        <div className="space-y-4">
          <h3 className="font-['Barlow_Condensed'] text-2xl font-black uppercase tracking-wide text-[#0a0a0a] mb-4">
            {t.resultsHeading} ({results.length} found)
          </h3>

          {results.length === 0 ? (
            <div className="p-8 rounded-3xl bg-black/2 border border-black/8 text-center text-black/50 text-sm font-medium">
              {t.noResults}
            </div>
          ) : (
            results.map((uni) => (
              <div 
                key={uni.id}
                className="p-6 rounded-3xl bg-black/2 border border-black/8 hover:border-black/20 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-3 py-0.5 rounded-full bg-black/5 text-[#0a0a0a] text-[10px] font-bold uppercase tracking-widest border border-black/10">
                      {uni.tier}
                    </span>
                    <span className="text-xs text-black/50 font-medium">📍 {uni.city}, {uni.country}</span>
                  </div>
                  <h4 className="font-['Barlow_Condensed'] text-2xl font-black text-[#0a0a0a]">{uni.name}</h4>
                  <p className="text-xs text-black/60 mt-1 font-medium">
                    <strong className="text-[#0a0a0a]">{t.scholarship}:</strong> {uni.scholarship} | <strong className="text-[#0a0a0a]">{t.req}:</strong> IELTS {uni.minIELTS}+, GPA {uni.minGPA}+
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${uni.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-black/5 text-[#0a0a0a] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-black/15 shadow-xs"
                  >
                    <span>🗺️</span> {t.viewOnMap}
                  </a>
                  <button 
                    onClick={() => alert(t.alertMsg(uni.name, uni.city))}
                    className="px-4 py-2.5 rounded-xl bg-[#0a0a0a] hover:bg-black/80 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    {t.apply}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default EduLink;
