import React, { useState } from 'react';

const universityDatabase = [
  { name: "Massachusetts Institute of Technology (MIT)", location: "Cambridge, USA", minAge: 17 },
  { name: "Stanford University", location: "Stanford, USA", minAge: 17 },
  { name: "Technical University of Munich", location: "Munich, Germany", minAge: 18 },
  { name: "National University of Singapore", location: "Singapore", minAge: 17 },
  { name: "ETH Zurich", location: "Zurich, Switzerland", minAge: 18 },
  { name: "University of Tokyo", location: "Tokyo, Japan", minAge: 18 },
  { name: "Oxford University", location: "Oxford, UK", minAge: 18 }
];

const translations = {
  en: {
    badge: "UniPath Admissions Hub",
    title: "University Admission Simulator",
    subtitle: "Evaluate your profile and get an instant reality check for top global universities.",
    fullNamePlaceholder: "Full Name",
    agePlaceholder: "Current Age",
    achievementsPlaceholder: "List your current achievements",
    submitBtn: "Get The Savage Verdict →",
    assessmentResult: "Assessment Result",
    tryAgainBtn: "Try again (if you dare)",
    realityCheckTitle: "The Reality Check",
    profileTitle: "Your Profile",
    verdictTitle: "The Verdict",
    messages: {
      dead: "Aren't you dead already? Go rest in peace, not in a lecture hall.",
      senior: "Why do you need uni now? Go get a job or retire, grandpa/grandma.",
      late: "You're a bit late to the party, but it's okay—you can still catch up if you work twice as hard.",
      young: "Go play, lil boy! You shouldn't even be thinking about admissions yet.",
      perfect: "You are at the perfect age. Let's build your path!"
    },
    advice: {
      focusOther: "Advice: Focus on other things.",
      dontMess: "Advice: Don't mess this up."
    }
  },
  ru: {
    badge: "Центр поступления UniPath",
    title: "Симулятор поступления в университет",
    subtitle: "Оцените свой профиль и получите моментальную проверку реальности для ведущих мировых университетов.",
    fullNamePlaceholder: "ФИО",
    agePlaceholder: "Текущий возраст",
    achievementsPlaceholder: "Перечислите ваши текущие достижения",
    submitBtn: "Получить жесткий вердикт →",
    assessmentResult: "Результат оценки",
    tryAgainBtn: "Попробовать снова (если осмелитесь)",
    realityCheckTitle: "Проверка реальностью",
    profileTitle: "Ваш профиль",
    verdictTitle: "Вердикт",
    messages: {
      dead: "Вы случайно не мертвы? Идите покоиться с миром, а не в лекционный зал.",
ень: "Зачем вам универ сейчас? Идите работать или на пенсию, дедушка/бабушка.",
      late: "Вы немного опоздали к празднику, но ничего — еще можно догнать, если работать в два раза усерднее.",
      young: "Иди играй, малыш! Тебе еще рано думать о поступлении.",
      perfect: "Вы в идеальном возрасте. Давайте построим ваш путь!"
    },
    advice: {
      focusOther: "Совет: Сосредоточьтесь на других вещах.",
      dontMess: "Совет: Не испортите это."
    }
  },
  uz: {
    badge: "UniPath Qabul Markazi",
    title: "Universitetga Qabul Simulyatori",
    subtitle: "Profilingizni baholang va dunyoning eng yaxshi universitetlari uchun tezkor haqiqat tekshiruvini oling.",
    fullNamePlaceholder: "To'liq Ism",
    agePlaceholder: "Joriy Yosh",
    achievementsPlaceholder: "Hozirgi yutuqlaringizni kiriting",
    submitBtn: "Aёвsiz hukmni olish →",
    assessmentResult: "Baholash Natijasi",
    tryAgainBtn: "Qayta urinish (agar jur'at etsangiz)",
    realityCheckTitle: "Haqiqat Tekshiruvi",
    profileTitle: "SizningProfilingiz",
    verdictTitle: "Hukm",
    messages: {
      dead: "Siz allaqachon o'lib bo'lmadingizmi? Ma'ruza zalida emas, tinchgina dam oling.",
      senior: "Sizga hozir nima keragi bor universitet? Ishga boring yoki nafaqaga chiqing, bobo/buvi.",
      late: "Bayramga biroz kechikdingiz, lekin hammasi joyida — agar ikki baravar ko'proq ishlasangiz, hali ham yetib olasiz.",
      young: "Borib o'yna, kenjaoy! Hali qabul haqida o'ylashingizga erta.",
      perfect: "Siz mukammal yoshdasiz. Keling, yo'lingizni quramiz!"
    },
    advice: {
      focusOther: "Maslahat: Boshqa narsalarga e'tibor qarating.",
      dontMess: "Maslahat: Buni buzib qo'ymang."
    }
  }
};

const UniPath = ({ lang = 'en', onLanguageChange = () => {} }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: '', age: '', targetUni: universityDatabase[0].name, currentAchievements: '' });
  const [result, setResult] = useState(null);

  const t = translations[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = parseInt(data.age);
    let message = "";

    // The Savage Logic
    if (age > 100) {
      message = t.messages.dead;
    } else if (age >= 30) {
      message = t.messages.senior;
    } else if (age >= 18) {
      message = t.messages.late;
    } else if (age < 14) {
      message = t.messages.young;
    } else {
      message = t.messages.perfect;
    }

    setResult({
      status: message,
      roadmap: [
        { title: t.realityCheckTitle, desc: `${t.realityCheckTitle === "The Reality Check" ? "Applying to" : t.realityCheckTitle === "Проверка реальностью" ? "Подача заявки в" : "Ariza topshirilmoqda"}: ${data.targetUni}` },
        { title: t.profileTitle, desc: `${t.profileTitle === "Your Profile" ? "Achievements" : t.profileTitle === "Ваш профиль" ? "Достижения" : "Yutuqlar"}: ${data.currentAchievements}` },
        { title: t.verdictTitle, desc: age < 14 || age >= 30 ? t.advice.focusOther : t.advice.dontMess }
      ]
    });
    setStep(2);
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
          {t.title}
        </h2>
        <p className="text-black/50 text-sm max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>
      
      {step === 1 ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input 
            type="text" 
            placeholder={t.fullNamePlaceholder} 
            required 
            className="w-full p-4 rounded-2xl bg-black/2 border border-black/15 text-[#0a0a0a] placeholder:text-black/30 text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all" 
            onChange={e => setData({...data, name: e.target.value})} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="number" 
              placeholder={t.agePlaceholder} 
              required 
              className="p-4 rounded-2xl bg-black/2 border border-black/15 text-[#0a0a0a] placeholder:text-black/30 text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all" 
              onChange={e => setData({...data, age: e.target.value})} 
            />
            <select 
              className="p-4 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm font-medium focus:outline-none focus:border-[#0a0a0a] cursor-pointer transition-all" 
              onChange={e => setData({...data, targetUni: e.target.value})}
            >
              {universityDatabase.map(u => <option key={u.name} value={u.name}>{u.name} ({u.location})</option>)}
            </select>
          </div>
          <textarea 
            placeholder={t.achievementsPlaceholder} 
            required 
            rows={4}
            className="w-full p-4 rounded-2xl bg-black/2 border border-black/15 text-[#0a0a0a] placeholder:text-black/30 text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all resize-none" 
            onChange={e => setData({...data, currentAchievements: e.target.value})}
          />
          <button className="w-full p-4 rounded-2xl bg-[#0a0a0a] text-white font-bold text-sm tracking-wider uppercase cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md">
            {t.submitBtn}
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-[#0a0a0a] text-white border border-black/10 shadow-lg">
            <span className="text-[10px] font-bold text-[#f4a819] uppercase tracking-widest block mb-1">{t.assessmentResult}</span>
            <h3 className="font-['Barlow_Condensed'] text-2xl font-black uppercase">{result.status}</h3>
          </div>
          <div className="grid gap-4">
            {result.roadmap.map((r, i) => (
              <div key={i} className="p-5 rounded-2xl bg-black/2 border border-black/8">
                <h4 className="font-['Barlow_Condensed'] text-xl font-black uppercase text-[#0a0a0a] mb-1">{r.title}</h4>
                <p className="text-black/60 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setStep(1)} 
            className="w-full p-4 rounded-2xl bg-transparent border-[1.5px] border-black/20 text-[#0a0a0a] font-bold text-sm tracking-wider uppercase cursor-pointer hover:bg-[#0a0a0a] hover:text-white transition-all"
          >
            {t.tryAgainBtn}
          </button>
        </div>
      )}
    </div>
  );
};

export default UniPath;
