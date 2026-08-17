import React, { useState, useMemo } from 'react';
import {
  Search, Globe, Phone, Mail, MapPin, Award, BookOpen,
  ChevronRight, Download, Users, Landmark, Sprout, TrendingUp,
  Briefcase, CheckCircle, ArrowRight, Star, X, Calendar, User,
  Shield, MessageSquare, Menu, Send, LogIn, ChevronDown, Award as GraduationCap
} from 'lucide-react';

// Tarjimalar ma'lumotlar bazasi (Yangi Hero matnlari bilan)
const translations = {
  uz: {
    heroTitle: "O'zbekiston agro kelajagini birga yaratamiz!",
    heroSub: "Innovatsion yechimlar va zamonaviy texnologiyalar yordamida fermerlar uchun samarali, qulay va barqaror tizim yaratamiz.",
    statFarmer: "ta fermer",
    statGektar: "gektar",
    statSom: "so'm",
    statBitiruvchi: "bitiruvchi",
    registerBtn: "Fermer bo'lib ro'yxatdan o'tish",
    statsBtn: "Platforma statistikasi",
    searchPlaceholder: "Ekinlar, darslar yoki fermerlarni izlang...",
    navHome: "Bosh sahifa",
    navAbout: "Biz haqimizda",
    navMap: "Statistika",
    navLeaders: "Faol Fermerlar",
    navAcademy: "Fermerlar maktabi",
    navMarket: "Bozor",
    navContact: "Aloqa",
    mapTitle: "O'zbekiston hududlari bo'yicha agro-tahlil",
    mapSub: "Viloyatni tanlang va o'sha hududdagi yosh fermerlar hamda ekin maydonlari haqida batafsil ma'lumotga ega bo'ling",
    totalLand: "Jami ekin maydoni (ga)",
    activeFarmers: "Faol yosh fermerlar",
    leadingCrop: "Asosiy ekin turi",
    coordinator: "Mas'ul rahbar",
    marketTitle: "Agro-Bozor mahsulotlari",
    marketSub: "Yosh fermerlarimiz tomonidan yetishtirilgan sifatli va ekologik toza mahsulotlar",
    all: "Hammasi",
    fruits: "Mevalar",
    vegetables: "Sabzavotlar",
    greenhouse: "Issiqxona",
    cotton: "Paxtachilik",
    orderBtn: "Buyurtma berish / Bog'lanish",
    academyTitle: "Yosh Fermer Akademiyasi",
    academySub: "Sohaga oid eng ilg'or amaliy va nazariy bilimlar jamlanmasi",
    graduates: "Bitiruvchilar",
    onlineCourses: "Onlayn darslar",
    grants: "Ajratilgan grantlar",
    applyNow: "O'qishga ariza topshirish",
    leaderboardTitle: "Respublika eng faol yosh fermerlari",
    leaderboardSub: "Yuqori hosildorlik va innovatsion yondashuv bilan ajralib turgan yetakchilar",
    feedbackTitle: "Mutaxassis konsultatsiyasiga yozilish",
    feedbackSub: "Savollaringiz bormi? Ma'lumotlaringizni qoldiring va biz siz bilan bog'lanamiz",
    footerText: "O'zbekiston Yosh Fermerlar Kengashi © 2026. Barcha huquqlar himoyalangan.",
    loginText: "Kirish",
    langLabel: "O'zbek"
  },
  en: {
    heroTitle: "Creating Uzbekistan's agricultural future together!",
    heroSub: "We create an efficient, convenient, and sustainable system for farmers with the help of innovative solutions and modern technologies.",
    statFarmer: "farmers",
    statGektar: "hectares",
    statSom: "soums",
    statBitiruvchi: "graduates",
    registerBtn: "Register as a Farmer",
    statsBtn: "Platform Statistics",
    searchPlaceholder: "Search crops, lessons, or farmers...",
    navHome: "Home",
    navAbout: "About Us",
    navMap: "Statistics",
    navLeaders: "Top Farmers",
    navAcademy: "Farmers School",
    navMarket: "Market",
    navContact: "Contact",
    mapTitle: "Agricultural Analysis of Uzbek Regions",
    mapSub: "Select a region to view detailed statistics on young farmers and cultivated land areas",
    totalLand: "Cultivated Area (ha)",
    activeFarmers: "Active Young Farmers",
    leadingCrop: "Leading Crop Type",
    coordinator: "Regional Director",
    marketTitle: "Agro-Market Products",
    marketSub: "High-quality, eco-friendly produce grown by our young farmers",
    all: "All",
    fruits: "Fruits",
    vegetables: "Vegetables",
    greenhouse: "Greenhouse",
    cotton: "Cotton",
    orderBtn: "Order / Get in Touch",
    academyTitle: "Young Farmers Academy",
    academySub: "A collection of the most advanced practical and theoretical knowledge in agriculture",
    graduates: "Graduates",
    onlineCourses: "Online Courses",
    grants: "Grants Issued",
    applyNow: "Apply for Academy",
    leaderboardTitle: "Most Active Young Farmers of the Republic",
    leaderboardSub: "Leaders distinguished by high productivity and innovative approaches",
    feedbackTitle: "Sign Up for Expert Consultation",
    feedbackSub: "Have questions? Leave your details and we will get back to you shortly",
    footerText: "Young Farmers Council of Uzbekistan © 2026. All rights reserved.",
    loginText: "Login",
    langLabel: "English"
  },
  ru: {
    heroTitle: "Создаем агро-будущее Узбекистана вместе!",
    heroSub: "Мы создаем эффективную, удобную и устойчивую систему для фермеров с помощью инновационных решений и современных технологий.",
    statFarmer: "фермеров",
    statGektar: "гектаров",
    statSom: "сум",
    statBitiruvchi: "выпускников",
    registerBtn: "Зарегистрироваться как фермер",
    statsBtn: "Статистика платформы",
    searchPlaceholder: "Искать культуры, уроки или фермеров...",
    navHome: "Главная",
    navAbout: "О нас",
    navMap: "Статистика",
    navLeaders: "Лидеры",
    navAcademy: "Школа фермеров",
    navMarket: "Рынок",
    navContact: "Контакты",
    mapTitle: "Агроанализ регионов Узбекистана",
    mapSub: "Выберите область, чтобы получить подробную информацию о молодых фермерах и посевных площадях",
    totalLand: "Площадь посевов (га)",
    activeFarmers: "Активные молодые фермеры",
    leadingCrop: "Основная культура",
    coordinator: "Ответственный руководитель",
    marketTitle: "Продукция Агро-Рынка",
    marketSub: "Качественная, экологически чистая продукция, выращенная нашими молодыми фермерами",
    all: "Все",
    fruits: "Фрукты",
    vegetables: "Овощи",
    greenhouse: "Теплица",
    cotton: "Хлопководство",
    orderBtn: "Заказать / Связаться",
    academyTitle: "Академия Молодых Фермеров",
    academySub: "Сборник самых передовых практических и теоретических знаний в области сельского хозяйства",
    graduates: "Выпускники",
    onlineCourses: "Онлайн курсы",
    grants: "Выданные гранты",
    applyNow: "Подать заявку на обучение",
    leaderboardTitle: "Самые активные молодые фермеры Республики",
    leaderboardSub: "Лидеры, отличающиеся высокой урожайностью и инновационным подходом",
    feedbackTitle: "Записаться на консультацию специалиста",
    feedbackSub: "Есть вопросы? Оставьте свои данные, и мы свяжемся с вами в ближайшее время",
    footerText: "Совет молодых фермеров Узбекистана © 2026. Все права защищены.",
    loginText: "Войти",
    langLabel: "Русский"
  }
};

// Viloyatlar ma'lumotlari
const regionsData = [
  { id: 'Tashkent', nameUz: 'Toshkent viloyati', nameEn: 'Tashkent Region', nameRu: 'Ташкентская область', land: 34500, active: 1240, crop: 'Sabzavot va Uzumchilik', leader: 'Anvarov Jasur' },
  { id: 'Samarkand', nameUz: 'Samarqand viloyati', nameEn: 'Samarkand Region', nameRu: 'Самаркандская область', land: 42000, active: 1890, crop: 'Bog\'dorchilik va Bug\'doy', leader: 'Karimov Shavkat' },
  { id: 'Fergana', nameUz: 'Farg\'ona viloyati', nameEn: 'Fergana Region', nameRu: 'Ферганская область', land: 29800, active: 2150, crop: 'Paxtachilik va Gilos', leader: 'Yusupov Elyor' },
  { id: 'Andijan', nameUz: 'Andijon viloyati', nameEn: 'Andijan Region', nameRu: 'Андижанская область', land: 22400, active: 1980, crop: 'Meva-sabzavot, Gʻalla', leader: 'Rustamov Bobur' },
  { id: 'Namangan', nameUz: 'Namangan viloyati', nameEn: 'Namangan Region', nameRu: 'Наманганская область', land: 26100, active: 1450, crop: 'Gullar va Sitrus mevalar', leader: 'Ismoilov Doniyor' },
  { id: 'Bukhara', nameUz: 'Buxoro viloyati', nameEn: 'Bukhara Region', nameRu: 'Бухарская область', land: 51000, active: 1100, crop: 'Paxta va Gʻallachilik', leader: 'Sodiqov Ulugbek' },
  { id: 'Khorezm', nameUz: 'Xorazm viloyati', nameEn: 'Khorezm Region', nameRu: 'Хорезмская область', land: 18900, active: 920, crop: 'Sholichilik va Qovun', leader: 'Matniyozov Farhod' },
  { id: 'Karakalpakstan', nameUz: 'Qoraqalpogʻiston', nameEn: 'Karakalpakstan', nameRu: 'Каракалпакстан', land: 68000, active: 1350, crop: 'Sholi va Chorvachilik', leader: 'Ametov Erkin' },
  { id: 'Surxondaryo', nameUz: 'Surxondaryo viloyati', nameEn: 'Surxondaryo Region', nameRu: 'Сурхандарьинская область', land: 38200, active: 1670, crop: 'Eksportbop Erta Pishar Sabzavotlar', leader: 'Eshmurodov Sherzod' },
  { id: 'Kashkadaryo', nameUz: 'Qashqadaryo viloyati', nameEn: 'Kashkadaryo Region', nameRu: 'Кашкадарьинская область', land: 59000, active: 1820, crop: 'Gʻalla va Dorivor oʻsimliklar', leader: 'Turdiyev Mansur' },
  { id: 'Jizzakh', nameUz: 'Jizzax viloyati', nameEn: 'Jizzakh Region', nameRu: 'Джизакская область', land: 31200, active: 890, crop: 'Poliz ekinlari va Gʻalla', leader: 'Toshtemirov Oybek' },
  { id: 'Sirdaryo', nameUz: 'Sirdaryo viloyati', nameEn: 'Syrdarya Region', nameRu: 'Сырдарьинская область', land: 24500, active: 750, crop: 'Qovun va Paxtachilik', leader: 'Abduvaliyev Sardor' },
  { id: 'Navoiy', nameUz: 'Navoiy viloyati', nameEn: 'Navoiy Region', nameRu: 'Навоийская область', land: 48500, active: 810, crop: 'Chorvachilik va Issiqxona', leader: 'Hamroyev Bekzod' }
];

// Bozor mahsulotlari
const productsData = [
  { id: 1, nameUz: "Qizil Shirin Pomidor", nameEn: "Sweet Red Tomato", nameRu: "Сладкие красные томаты", category: "vegetables", price: "12,000 UZS/kg", region: "Tashkent", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=400&q=80", farmer: "Zilola Aliyeva" },
  { id: 2, nameUz: "Eksportbop Gilos", nameEn: "Export Cherry", nameRu: "Экспортная черешня", category: "fruits", price: "45,000 UZS/kg", region: "Fergana", image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&q=80", farmer: "Sherzod Olimov" },
  { id: 3, nameUz: "Issiqxona Bodringi", nameEn: "Greenhouse Cucumber", nameRu: "Тепличные огурцы", category: "greenhouse", price: "8,500 UZS/kg", region: "Bukhara", image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&q=80", farmer: "Sardorbek Jo'rayev" },
  { id: 4, nameUz: "Shirin Qovun (Mirzacho'l)", nameEn: "Sweet Melon", nameRu: "Сладкая дыня (Мирзачуль)", category: "fruits", price: "25,000 UZS/dona", region: "Jizzakh", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=400&q=80", farmer: "Mansur Eshov" },
  { id: 5, nameUz: "Farg'ona Yo'g'on Uzumi", nameEn: "Premium Grapes", nameRu: "Виноград премиум класса", category: "fruits", price: "18,000 UZS/kg", region: "Fergana", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=80", farmer: "Kamronbek Umarov" },
  { id: 6, nameUz: "Yirik Kartoshka", nameEn: "Large Potatoes", nameRu: "Крупный картофель", category: "vegetables", price: "6,000 UZS/kg", region: "Samarkand", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80", farmer: "Bekzod To'rayev" }
];

// Faol yosh fermerlar
const leadersData = [
  { id: 1, name: "Zuhra Sodiqova", age: 24, region: "Namangan", achievementUz: "10 gektar gidroponika issiqxonasini yaratib, 45 nafar yoshlarni ish bilan ta'minladi.", achievementEn: "Established a 10-hectare hydroponics greenhouse, employing 45 local youth.", achievementRu: "Создала 10 га гидропонных теплиц, обеспечив работой 45 молодых людей.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80", rank: "1" },
  { id: 2, name: "Azizbek Karimov", age: 27, region: "Tashkent", achievementUz: "Tomchilatib sug'orish tizimi orqali suv sarfini 60% ga qisqartirishga erishdi.", achievementEn: "Reduced water usage by 60% using smart drip irrigation systems.", achievementRu: "Снизил поребление воды на 60% благодаря капельному орошению.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80", rank: "2" },
  { id: 3, name: "Dilshodbek Ergashev", age: 29, region: "Samarkand", achievementUz: "Zavonaviy dorivor giyohlar eksport klasteri raisi.", achievementEn: "Head of a modern export cluster for organic medicinal herbs.", achievementRu: "Руководитель современного экспортного кластера лекарственных трав.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80", rank: "3" },
  { id: 4, name: "Madina Malikova", age: 22, region: "Bukhara", achievementUz: "Cho'l sharoitida zamonaviy tomchilatib sug'oriladigan bog' barpo etdi.", achievementEn: "Created a modern drip-irrigated orchard in desert climate conditions.", achievementRu: "Создала современный капельно-орошаемый сад в пустынной местности.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80", rank: "4" }
];

export default function App() {
  const [lang, setLang] = useState('uz');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(regionsData[0]);
  const [marketFilter, setMarketFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLeader, setActiveLeader] = useState(null);
  const [academyModalOpen, setAcademyModalOpen] = useState(false);
  const [orderModalProduct, setOrderModalProduct] = useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tezkor tarjimon funksiyasi
  const t = (key) => translations[lang][key] || key;

  // Qidiruv va saralash filtri
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesCategory = marketFilter === 'all' || product.category === marketFilter;
      const textToSearch = `${product.nameUz} ${product.nameEn} ${product.nameRu}`.toLowerCase();
      const matchesSearch = textToSearch.includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [marketFilter, searchQuery]);

  // Aktiv tilni o'zgartirish funksiyasi
  const handleLangChange = (newLang) => {
    setLang(newLang);
    setLangDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F7FF] text-slate-800 font-sans selection:bg-emerald-500 selection:text-white pb-12">
      {/* Project introduction — displayed before the original site content. */}
      <section className="bg-white text-center px-4 pt-8 pb-16 sm:pt-12 sm:pb-20">
        <h1 className="font-['Barlow_Condensed'] text-[clamp(44px,8vw,76px)] font-black uppercase tracking-tight leading-[0.9] text-[#0a0a0a]">
          YOSH FERMERS
        </h1>
        <p className="mt-6 text-black/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          A modern network and educational platform for young farmers. Connecting agriculture with technology.
        </p>
      </section>

      {/* HERO SECTION 
        Background gradient has a pt-24 md:pt-28 to offset the floating fixed header 
      */}
      <div
        className="relative min-h-165 md:min-h-185 lg:min-h-210 bg-cover bg-bottom bg-no-repeat flex flex-col justify-between pt-24 md:pt-28 pb-8 px-4 md:px-8 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(74, 144, 226, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80')`
        }}
      >

        {/* FIXED POSITION NAVBAR (Rasmga 100% mos va ekran bo'ylab qotirilgan) */}
        <header className="absolute top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl bg-white rounded-full shadow-lg border border-slate-100/85 px-3 sm:px-5 md:px-8 py-3.5 flex items-center justify-between z-50 transition-all duration-300">

          {/* Minimalist Yashil Barg Logotipi */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="74" r="10" fill="#31C48D" />
                <path d="M50 64C50 64 30 46 30 28C30 10 50 16 50 16C50 16 70 10 70 28C70 46 50 64 50 64Z" fill="#31C48D" />
                <path d="M50 64C50 64 42 50 42 38C42 26 50 24 50 24C50 24 58 26 58 38C58 50 50 64 50 64Z" fill="#FFFFFF" opacity="0.4" />
              </svg>
            </div>
          </a>

          {/* Navigatsiya Linklari */}
          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-800">
            <a href="#hero" className="hover:text-emerald-500 transition-colors py-1">{t('navHome')}</a>
            <a href="#about" className="hover:text-emerald-500 transition-colors py-1">{t('navAbout')}</a>
            <a href="#map" className="hover:text-emerald-500 transition-colors py-1">{t('navMap')}</a>
            <a href="#academy" className="hover:text-emerald-500 transition-colors py-1">{t('navAcademy')}</a>
            <a href="#market" className="hover:text-emerald-500 transition-colors py-1">{t('navMarket')}</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors py-1">{t('navContact')}</a>
          </nav>

          {/* O'ng tarafdagi interaktiv elementlar: Til va Kirish tugmasi */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Tillar Dropdown menyusi */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-full px-3 sm:px-4 py-2 flex items-center gap-2 text-xs font-semibold text-slate-700 transition"
              >
                <Globe className="w-4 h-4 text-slate-500" />
                <span>{lang.toUpperCase()} <span className="hidden sm:inline opacity-75">{t('langLabel')}</span></span>
                <ChevronDown className="hidden sm:block w-3.5 h-3.5 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-xl border border-slate-100 py-1 z-50 overflow-hidden animate-fadeIn">
                  <button onClick={() => handleLangChange('uz')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between">
                    <span>UZ O'zbek</span>
                    {lang === 'uz' && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                  </button>
                  <button onClick={() => handleLangChange('en')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between">
                    <span>EN English</span>
                    {lang === 'en' && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                  </button>
                  <button onClick={() => handleLangChange('ru')} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between">
                    <span>RU Русский</span>
                    {lang === 'ru' && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                  </button>
                </div>
              )}
            </div>

            {/* Kirish Tugmasi (Rasmga mutlaqo o'xshash) */}
            <button
              onClick={() => setLoginModalOpen(true)}
              className="bg-[#23C55E] hover:bg-[#1f9d4d] text-white font-bold py-2.5 px-4 sm:px-5 rounded-full flex items-center gap-2 text-sm shadow-md transition-all hover:shadow-lg active:scale-95"
            >
              <span>{t('loginText')}</span>
              <span className="font-light text-base">→</span>
            </button>

            {/* Mobil menyu tugmasi */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open navigation menu"
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-full transition"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Mobil menyu oynasi (Header fixed bo'lgani sababli u ham fixed holatga o'tkazildi) */}
        {mobileMenuOpen && (
          <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-150 p-6 z-50 animate-scaleUp">
            <nav className="flex flex-col gap-4 text-base font-bold text-slate-800">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-500 py-1">{t('navHome')}</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-500 py-1">{t('navAbout')}</a>
              <a href="#map" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-500 py-1">{t('navMap')}</a>
              <a href="#academy" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-500 py-1">{t('navAcademy')}</a>
              <a href="#market" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-500 py-1">{t('navMarket')}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-500 py-1">{t('navContact')}</a>
            </nav>
          </div>
        )}

        {/* Hero Main Content */}
        <div id="hero" className="grow flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 z-10 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] animate-fadeIn">
            {t('heroTitle')}
          </h1>
          <p className="text-white/95 text-sm md:text-base lg:text-lg font-medium mt-6 max-w-3xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {t('heroSub')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="#academy" className="bg-[#23C55E] hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              {t('registerBtn')}
            </a>
            <a href="#map" className="bg-white/20 hover:bg-white/35 text-white font-bold px-8 py-3.5 rounded-full border border-white/40 transition flex items-center justify-center gap-2 backdrop-blur-sm">
              <TrendingUp className="w-5 h-5" />
              {t('statsBtn')}
            </a>
          </div>
        </div>

        {/* Statistika Panel: Translucent overlay cards from bottom of image_c08444.jpg */}
        <div className="w-full max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Card 1: 0 ta fermer */}
            <div className="bg-[#0c1424]/65 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 flex items-center gap-3 text-white transition hover:bg-[#0c1424]/80">
              <div className="p-2.5 bg-white/10 rounded-xl">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold block leading-none">0</span>
                <span className="text-[11px] text-white/70 font-medium block mt-1">{t('statFarmer')}</span>
              </div>
            </div>

            {/* Card 2: 54 016 gektar */}
            <div className="bg-[#0c1424]/65 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 flex items-center gap-3 text-white transition hover:bg-[#0c1424]/80">
              <div className="p-2.5 bg-white/10 rounded-xl">
                <Sprout className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold block leading-none">54 016</span>
                <span className="text-[11px] text-white/70 font-medium block mt-1">{t('statGektar')}</span>
              </div>
            </div>

            {/* Card 3: 732.7 mlrd so'm */}
            <div className="bg-[#0c1424]/65 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 flex items-center gap-3 text-white transition hover:bg-[#0c1424]/80">
              <div className="p-2.5 bg-white/10 rounded-xl">
                <Landmark className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold block leading-none">732.7 mlrd</span>
                <span className="text-[11px] text-white/70 font-medium block mt-1">{t('statSom')}</span>
              </div>
            </div>

            {/* Card 4: 4 258 bitiruvchi */}
            <div className="bg-[#0c1424]/65 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 flex items-center gap-3 text-white transition hover:bg-[#0c1424]/80">
              <div className="p-2.5 bg-white/10 rounded-xl">
                <Users className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-bold block leading-none">4 258</span>
                <span className="text-[11px] text-white/70 font-medium block mt-1">{t('statBitiruvchi')}</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Biz Haqimizda Qisqacha Ma'lumot */}
      <section id="about" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80"
              alt="Yosh fermerlar hamkorligi"
              className="rounded-3xl shadow-xl w-full h-80 object-cover"
            />
          </div>
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full inline-block">BIZ HAQIMIZDA</span>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">Yurtimiz ertasi yosh agronom va tadbirkorlar qo'lida!</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              "Yosh Fermer" loyihasining bosh maqsadi — qishloq xo'jaligiga qiziqqan yoshlarni aniqlash, ularni zamonaviy darsliklar bilan o'qitish hamda o'z tomorqalari va agrobizneslarini tashkil qilishlarida ham huquqiy, ham moliyaviy tomondan ko'maklashishdan iboratdir.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Innovatsion agrotexnologiyalar</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Xalqaro eksport imkoniyati</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Imtiyozli kredit drayverlari</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Doimiy professional ustozlar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interaktiv Hududiy Agro-Tahlil va Xarita */}
      <section id="map" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">{t('mapTitle')}</h2>
          <p className="text-slate-500 text-xs md:text-sm mt-2">{t('mapSub')}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          <div className="lg:col-span-4 bg-white p-6 rounded-3xl shadow-md flex flex-col justify-between border border-slate-100">
            <div>
              <span className="text-[10px] font-bold tracking-wider text-emerald-600 uppercase block mb-1">TANLANGAN VILOYAT</span>
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="text-emerald-500 w-5 h-5" />
                {lang === 'uz' ? selectedRegion.nameUz : lang === 'en' ? selectedRegion.nameEn : selectedRegion.nameRu}
              </h3>

              <div className="space-y-3">
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold block">{t('totalLand')}</span>
                  <span className="text-lg font-black text-slate-800">{selectedRegion.land.toLocaleString()} ga</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold block">{t('activeFarmers')}</span>
                  <span className="text-lg font-black text-slate-800">{selectedRegion.active.toLocaleString()} nafar</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold block">{t('leadingCrop')}</span>
                  <span className="text-base font-black text-emerald-600">{selectedRegion.crop}</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold block">{t('coordinator')}</span>
                  <span className="text-sm font-bold text-slate-700">{selectedRegion.leader}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setAcademyModalOpen(true)}
              className="w-full bg-[#23C55E] hover:bg-green-600 text-white font-bold py-3 px-4 rounded-2xl mt-6 transition flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <Briefcase className="w-4 h-4" />
              {lang === 'uz' ? 'Imtiyoz va grantlar olish' : lang === 'en' ? 'Get benefits and grants' : 'Получить льготы и гранты'}
            </button>
          </div>

          {/* Interaktiv xarita bosish tugmalari paneli */}
          <div className="lg:col-span-8 bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-bold text-slate-500">Viloyatni tanlang:</span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">Respublika bo'yicha tahlillar</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {regionsData.map((reg) => {
                  const isSelected = selectedRegion.id === reg.id;
                  return (
                    <button
                      key={reg.id}
                      onClick={() => setSelectedRegion(reg)}
                      className={`text-left p-3.5 rounded-2xl border transition-all ${isSelected
                        ? 'bg-[#23C55E] border-[#23C55E] text-white shadow-md scale-102'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-100 text-slate-800'
                        }`}
                    >
                      <span className="text-[10px] block opacity-75 font-semibold truncate">{reg.crop}</span>
                      <span className="font-bold text-xs block mt-1 truncate">
                        {lang === 'uz' ? reg.nameUz : lang === 'en' ? reg.nameEn : reg.nameRu}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-6 text-center">
              * Ma'lumotlar Qishloq xo'jaligi vazirligi hamda Yoshlar ishlari agentligi bazasi bilan integratsiya qilingan.
            </p>
          </div>

        </div>
      </section>

      {/* Fermerlar Maktabi / Akademiya bo'limi */}
      <section id="academy" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
              {t('academyTitle')}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              {t('academySub')}
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Agrobiznesni boshlash, tomchilatib sug'orish, issiqxona boshqaruvi va ekinlarni eksportga tayyorlash bo'yicha eng tajribali xalqaro agronomlardan butunlay bepul saboq oling.
            </p>

            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-50">
                <span className="text-2xl font-black text-emerald-600 block">3,400+</span>
                <span className="text-[10px] text-slate-400 font-bold mt-1 block">{t('graduates')}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-50">
                <span className="text-2xl font-black text-emerald-600 block">45+</span>
                <span className="text-[10px] text-slate-400 font-bold mt-1 block">{t('onlineCourses')}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-50">
                <span className="text-2xl font-black text-emerald-600 block">120+</span>
                <span className="text-[10px] text-slate-400 font-bold mt-1 block">{t('grants')}</span>
              </div>
            </div>

            <button
              onClick={() => setAcademyModalOpen(true)}
              className="bg-[#23C55E] hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition flex items-center gap-2 text-sm"
            >
              <BookOpen className="w-4 h-4" />
              {t('applyNow')}
            </button>
          </div>

          <div className="md:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80"
              alt="Yosh fermerlar maktabi amaliy mashg'ulot"
              className="rounded-3xl w-full h-72 object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Agro-Bozor va Mahsulotlar */}
      <section id="market" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">{t('marketTitle')}</h2>
          <p className="text-slate-500 text-xs md:text-sm mt-2">{t('marketSub')}</p>
        </div>

        {/* Saralash va Qidiruv tugmalari */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-4 border-b border-slate-150">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { key: 'all', label: t('all') },
              { key: 'fruits', label: t('fruits') },
              { key: 'vegetables', label: t('vegetables') },
              { key: 'greenhouse', label: t('greenhouse') }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setMarketFilter(category.key)}
                className={`px-4.5 py-1.5 rounded-full font-bold text-xs transition ${marketFilter === category.key
                  ? 'bg-[#23C55E] text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-700 placeholder-slate-400 pl-9 pr-4 py-2 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
            />
          </div>
        </div>

        {/* Bozor Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.nameUz}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-emerald-800 font-extrabold px-3 py-1 rounded-full text-xs shadow-sm">
                    {product.price}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      {product.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {product.region}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-slate-900">
                    {lang === 'uz' ? product.nameUz : lang === 'en' ? product.nameEn : product.nameRu}
                  </h3>
                  <p className="text-xs text-slate-400">Fermer: {product.farmer}</p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <button
                  onClick={() => setOrderModalProduct(product)}
                  className="w-full bg-[#23C55E] hover:bg-green-600 text-white font-bold py-2.5 rounded-2xl transition text-xs flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  {t('orderBtn')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faol Yosh Fermerlar yetakchilari */}
      <section id="leaders" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">{t('leaderboardTitle')}</h2>
          <p className="text-slate-500 text-xs md:text-sm mt-2">{t('leaderboardSub')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadersData.map((leader) => (
            <div key={leader.id} className="bg-white rounded-3xl p-5 border border-slate-100 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative mb-4 h-40 overflow-hidden rounded-2xl">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-amber-400 text-slate-950 font-black w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-md">
                    #{leader.rank}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">{leader.region}</span>
                <h3 className="text-base font-black text-slate-900 mt-2">{leader.name}</h3>
                <p className="text-[10px] text-slate-400 mb-3">{leader.age} yoshda</p>
                <p className="text-xs text-slate-500 line-clamp-3">
                  {lang === 'uz' ? leader.achievementUz : lang === 'en' ? leader.achievementEn : leader.achievementRu}
                </p>
              </div>

              <button
                onClick={() => setActiveLeader(leader)}
                className="w-full bg-slate-100 hover:bg-[#23C55E] hover:text-white text-slate-700 font-bold py-2 rounded-xl mt-4 transition text-xs"
              >
                {lang === 'uz' ? 'Tanishish' : lang === 'en' ? 'View Bio' : 'Подробнее'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Aloqa / Konsultatsiya bo'limi */}
      <section id="contact" className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">

          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-black text-slate-900">{t('feedbackTitle')}</h2>
            <p className="text-slate-500 text-xs md:text-sm mt-1.5">{t('feedbackSub')}</p>
          </div>

          {feedbackSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-150 text-emerald-800 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold">Arizangiz qabul qilindi!</h3>
              <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                Tez orada mas'ul xodimlarimiz siz bilan ko'rsatilgan telefon raqami orqali bog'lanishadi.
              </p>
              <button onClick={() => setFeedbackSubmitted(false)} className="bg-[#23C55E] hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full text-xs">
                Yangi ariza qoldirish
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFeedbackSubmitted(true); }} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">To'liq ismingiz</label>
                  <input type="text" required placeholder="Masalan: Sardor Alimov" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Telefon raqamingiz</label>
                  <input type="tel" required placeholder="+998" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Murojaat matni</label>
                <textarea rows="4" required placeholder="Savollaringiz yoki agrobiznes taklifingiz..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>

              <button type="submit" className="w-full bg-[#23C55E] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-2xl text-xs transition shadow-md">
                Konsultatsiyaga yuborish
              </button>
            </form>
          )}

        </div>
      </section>

      {/* Footer Hamkorlar va Mualliflik Huquqlari */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 border-t border-slate-200/80 pt-10 mt-12 text-center text-slate-400 space-y-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs font-bold text-slate-500 opacity-75">
          <span>Qishloq Xo'jaligi Vazirligi</span>
          <span>O'zbekiston Yoshlar Ittifoqi</span>
          <span>AgroBank ATB</span>
          <span>Yosh Tadbirkorlar Kengashi</span>
        </div>
        <p className="text-[11px] font-semibold">{t('footerText')}</p>
      </footer>

      {/* --- INTERAKTIV MODAL OYNALAR (MODALS) --- */}

      {/* Kirish Modali */}
      {loginModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative overflow-hidden shadow-2xl animate-scaleUp">
            <button onClick={() => setLoginModalOpen(false)} className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-800 p-1 rounded-full">
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-4 pt-2">
              <div className="p-3 bg-emerald-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto text-emerald-600">
                <LogIn className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Platformaga kirish</h3>
              <p className="text-xs text-slate-400">Tizimga kirish uchun telefon raqamingiz va parolingizni kiriting</p>

              <form onSubmit={(e) => { e.preventDefault(); setLoginModalOpen(false); }} className="space-y-3 pt-2 text-left">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-1">Telefon raqam</label>
                  <input type="tel" placeholder="+998" required className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-1">Parol</label>
                  <input type="password" required className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <button type="submit" className="w-full bg-[#23C55E] hover:bg-green-600 text-white font-bold py-2.5 rounded-xl text-xs transition">
                  Tizimga kirish
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Yoshlar akademiyasiga ro'yxatdan o'tish modali */}
      {academyModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative overflow-hidden shadow-2xl animate-scaleUp">
            <button onClick={() => setAcademyModalOpen(false)} className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-800 p-1 rounded-full">
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Akademiyaga qabul</h3>
                  <p className="text-[10px] text-slate-400">Hujjatlarni topshirib tekin ta'lim oling</p>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setAcademyModalOpen(false); setFeedbackSubmitted(true); }} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">Ismingiz</label>
                    <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">Telefon</label>
                    <input type="tel" placeholder="+998" required className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-1">Yo'nalishingiz</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                    <option>Zamonaviy issiqxonachilik</option>
                    <option>Tomchilatib sug'orish tizimi</option>
                    <option>Meva-sabzavot eksporti</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-[#23C55E] hover:bg-green-600 text-white font-bold py-2.5 rounded-xl text-xs transition">
                  Arizani yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Mahsulotga buyurtma berish modali */}
      {orderModalProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative overflow-hidden shadow-2xl animate-scaleUp">
            <button onClick={() => setOrderModalProduct(null)} className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-800 p-1 rounded-full">
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <img src={orderModalProduct.image} alt={orderModalProduct.nameUz} className="w-12 h-12 object-cover rounded-xl" />
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                    {orderModalProduct.category}
                  </span>
                  <h3 className="text-sm font-black text-slate-900">
                    {lang === 'uz' ? orderModalProduct.nameUz : lang === 'en' ? orderModalProduct.nameEn : orderModalProduct.nameRu}
                  </h3>
                  <span className="text-xs font-bold text-amber-500">{orderModalProduct.price}</span>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setOrderModalProduct(null); setFeedbackSubmitted(true); }} className="space-y-3 pt-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-1">Sizning ismingiz</label>
                  <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-1">Telefon raqamingiz</label>
                  <input type="tel" required placeholder="+998" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <button type="submit" className="w-full bg-[#23C55E] hover:bg-green-600 text-white font-bold py-2.5 rounded-xl text-xs transition">
                  Buyurtma so'rovini tasdiqlash
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Faol fermer muvaffaqiyat hikoyasi modali */}
      {activeLeader && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative overflow-hidden shadow-2xl animate-scaleUp">
            <button onClick={() => setActiveLeader(null)} className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-800 p-1 rounded-full">
              <X className="w-4 h-4" />
            </button>
            <div className="text-center space-y-3 pt-2">
              <img src={activeLeader.img} alt={activeLeader.name} className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-emerald-500 shadow-md" />
              <div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">{activeLeader.region}</span>
                <h3 className="text-lg font-black text-slate-900 mt-2">{activeLeader.name}</h3>
                <p className="text-[10px] text-slate-400">{activeLeader.age} yoshda</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-2xl text-left border border-slate-100">
                {lang === 'uz' ? activeLeader.achievementUz : lang === 'en' ? activeLeader.achievementEn : activeLeader.achievementRu}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
