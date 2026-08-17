import { useState } from 'react';

const WeatherSphere = ({ lang = 'en', onLanguageChange = () => {} }) => {
  const [cityInput, setCityInput] = useState('Tashkent');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const translations = {
    en: {
      badge: 'Global Live Meteorological Hub',
      title: 'WeatherSphere',
      subtitle: 'Search live climate conditions for any real city or country worldwide.',
      placeholder: 'Search any city or country...',
      searchBtn: 'Search',
      searchingBtn: 'Searching...',
      quickSelect: 'Quick Select:',
      liveActive: 'Live Data Active',
      humidity: 'Humidity',
      windSpeed: 'Wind Speed',
      forecastTitle: '3-Day Extended Forecast',
      forecastLabel: 'Forecast',
      low: 'Low',
      errors: {
        'good boy': "I'm a weather app bro 😭.",
        'jacket': "Jacket? Bro, the forecast isn't THAT cold 💀.",
        'umbrella': "Umbrella? Damn bro, you came prepared ☔.",
        'shorts': "Shorts? Check the forecast first, warrior 😭.",
        'coat': "Coat? Bro thinks winter is coming 💀.",
        'sunglasses': "Sunglasses detected. Bro is expecting a cinematic sunrise 😎.",
        'snow': "You typed snow. That's not a location, bro 😭.",
        'rain': "Rain isn't a city 💀. Nice attempt though.",
        'hot': "Hot? Bro, I need a LOCATION, not your opinion.",
        'cold': "Cold? Bro gave me a weather review instead of a location 😭.",
        'minecraft': "Weather in Minecraft? Bro, ask a creeper. I'm dealing with Earth.",
        'mc': "Weather in Minecraft? Bro, ask a creeper. I'm dealing with Earth.",
        'mars': "Nice try, astronaut. This app only handles Earth locations.",
        'moon': "Nice try, astronaut. This app only handles Earth locations.",
        'antartica': "Bro wants the weather where penguins have better jackets than him.",
        'antarctica': "Bro wants the weather where penguins have better jackets than him.",
        'area 51': "Weather data unavailable. The government said no.",
        'the backrooms': "No signal detected. You might wanna find Level 0 first.",
        'backrooms': "No signal detected. You might wanna find Level 0 first.",
        'google': "Bro is asking a weather app to search for another app 💀.",
        'chatgpt': "Bro is asking a weather app to search for another app 💀.",
        'my school': "Forecast: 100% chance of homework. Temperature: absolutely unbearable.",
        'school': "Forecast: 100% chance of homework. Temperature: absolutely unbearable.",
        'work': "Forecast: cloudy with a high chance of 'I don't wanna be here'.",
        'office': "Forecast: cloudy with a high chance of 'I don't wanna be here'.",
        'sleep': "Weather report: GO TO SLEEP BRO 😭.",
        'bed': "Weather report: GO TO SLEEP BRO 😭.",
        'toilet': "Bro really tried to get the bathroom forecast 💀.",
        'bathroom': "Bro really tried to get the bathroom forecast 💀.",
        'the sun': "Forecast: hot. Very hot. What the hell did you expect?",
        'sun': "Forecast: hot. Very hot. What the hell did you expect?",
        'weather': "Bro... you're already IN the weather app. 😭",
        'gibberish': "That looks like total gibberish, not a city. Try typing an actual place.",
        'notFound': (c) => `"${c}"? Never heard of it. Is that a made-up country or did you smash your keyboard?`
      }
    },
    ru: {
      badge: 'Глобальный Метеорологический Хаб',
      title: 'WeatherSphere',
      subtitle: 'Ищите актуальные погодные условия для любого реального города или страны мира.',
      placeholder: 'Введите город или страну...',
      searchBtn: 'Поиск',
      searchingBtn: 'Поиск...',
      quickSelect: 'Быстрый выбор:',
      liveActive: 'Живые данные',
      humidity: 'Влажность',
      windSpeed: 'Скорость ветра',
      forecastTitle: 'Прогноз на 3 дня',
      forecastLabel: 'Прогноз',
      low: 'Мин',
      errors: {
        'good boy': "Я вообще-то приложение погоды, бро 😭.",
        'jacket': "Куртка? Бро, прогноз не НАСТОЛЬКО холодный 💀.",
        'umbrella': "Зонт? Нифига себе ты подготовился ☔.",
        'shorts': "Шорты? Сначала проверь прогноз, воитель 😭.",
        'coat': "Пальто? Бро думает, что зима близко 💀.",
        'sunglasses': "Солнцезащитные очки? Ждешь кинематографичный рассвет 😎.",
        'snow': "Ты написал «снег». Это не локация, бро 😭.",
        'rain': "Дождь — это не город 💀. Попытка засчитана, но нет.",
        'hot': "Жарко? Бро, мне нужна ЛОКАЦИЯ, а не твое мнение.",
        'cold': "Холодно? Бро выдал рецензию на погоду вместо локации 😭.",
        'minecraft': "Погода в Майнкрафте? Спроси у крипера. Я тут Землей занимаюсь.",
        'mc': "Погода в Майнкрафте? Спроси у крипера. Я тут Землей занимаюсь.",
        'mars': "Неплохая попытка, астронавт. Это приложение работает только с Землей.",
        'moon': "Неплохая попытка, астронавт. Это приложение работает только с Землей.",
        'antartica': "Бро хочет погоду там, где у пингвинов куртки круче твоей.",
        'antarctica': "Бро хочет погоду там, где у пингвинов куртки круче твоей.",
        'area 51': "Данные о погоде недоступны. Правительство запретило.",
        'the backrooms': "Нет сигнала. Сначала найди Уровень 0.",
        'backrooms': "Нет сигнала. Сначала найди Уровень 0.",
        'google': "Бро просит приложение погоды искать другое приложение 💀.",
        'chatgpt': "Бро просит приложение погоды искать другое приложение 💀.",
        'my school': "Прогноз: 100% шанс домашней работы. Температура: невыносимо.",
        'school': "Прогноз: 100% шанс домашней работы. Температура: невыносимо.",
        'work': "Прогноз: облачно с высокой вероятностью «я не хочу здесь находиться».",
        'office': "Прогноз: облачно с высокой вероятностью «я не хочу здесь находиться».",
        'sleep': "Прогноз погоды: ИДИ СПАТЬ БРО 😭.",
        'bed': "Прогноз погоды: ИДИ СПАТЬ БРО 😭.",
        'toilet': "Бро реально попытался узнать прогноз для туалета 💀.",
        'bathroom': "Бро реально попытался узнать прогноз для туалета 💀.",
        'the sun': "Прогноз: жарко. Очень жарко. Чего ты ожидал?",
        'sun': "Прогноз: жарко. Очень жарко. Чего ты ожидал?",
        'weather': "Бро... ты уже НАХОДИШЬСЯ в приложении погоды. 😭",
        'gibberish': "Похоже на набор символов, а не на город. Введите реальное место.",
        'notFound': (c) => `«${c}»? Никогда не слышал. Это вымышленная страна или ты ударил по клавиатуре?`
      }
    },
    uz: {
      badge: 'Global Ob-havo Markazi',
      title: 'WeatherSphere',
      subtitle: 'Dunyoning istalgan shahri yoki mamlakati uchun jonli ob-havo sharoitlarini qidiring.',
      placeholder: 'Shahar yoki mamlakatni kiriting...',
      searchBtn: 'Qidirish',
      searchingBtn: 'Qidirilmoqda...',
      quickSelect: 'Tezkor tanlov:',
      liveActive: 'Jonli Maʼlumot Faol',
      humidity: 'Namlik',
      windSpeed: 'Shamol Tezligi',
      forecastTitle: '3 Kunlik Ob-havo Prognozi',
      forecastLabel: 'Prognoz',
      low: 'Past',
      errors: {
        'good boy': "Men ob-havo ilovasiman, bratchi 😭.",
        'jacket': "Kurtka? Do'st, ob-havo u qadar sovuq emas 💀.",
        'umbrella': "Soyabon? Voy-bo', tayyorgarlik yaxshi ekan ☔.",
        'shorts': " Kalta ishton? Avval prognozni tekshir, botir 😭.",
        'coat': "Palto? Do'stimiz qish yaqinlashyapti deb o'ylayapti 💀.",
        'sunglasses': "Quyosh ko'zoynagi aniqlandi. Kinodagidek tongni kutayapsanmi 😎.",
        'snow': "Qor deb yozding. Bu manzil emas-ku, do'st 😭.",
        'rain': "Yomg'ir shahar emas 💀. Harakatga gap yo'q lekin.",
        'hot': "Issiqmi? Menga MANZIL kerak, sening fikring emas.",
        'cold': "Sovuqmi? Do'stimiz manzil o'rniga ob-havo sharhini berdi 😭.",
        'minecraft': "Maynkraftdagi ob-havo? Kriperdan so'ra. Men Yer bilan bandman.",
        'mc': "Maynkraftdagi ob-havo? Kriperdan so'ra. Men Yer bilan bandman.",
        'mars': "Yaxshi urinish, astronavt. Bu ilova faqat Yer bilan ishlaydi.",
        'moon': "Yaxshi urinish, astronavt. Bu ilova faqat Yer bilan ishlaydi.",
        'antartica': "Pingvinlar senikidan zo'r kurtka kiygan yerni ob-havosini so'rayapsanmi.",
        'antarctica': "Pingvinlar senikidan zo'r kurtka kiygan yerni ob-havosini so'rayapsanmi.",
        'area 51': "Ob-havo ma'lumotlari mavjud emas. Hukumat ruxsat bermadi.",
        'the backrooms': "Signal yo'q. Avval 0-darajani topish kerakdir.",
        'backrooms': "Signal yo'q. Avval 0-darajani topish kerakdir.",
        'google': "Ob-havo ilovasidan boshqa ilovani qidirishni so'rayapsan 💀.",
        'chatgpt': "Ob-havo ilovasidan boshqa ilovani qidirishni so'rayapsan 💀.",
        'my school': "Prognoz: 100% uyga vazifa. Harorat: chidab bo'lmas darajada.",
        'school': "Prognoz: 100% uyga vazifa. Harorat: chidab bo'lmas darajada.",
        'work': "Prognoz: bulutli, «bu yerda bo'lgim kelmayapti» ehtimoli yuqori.",
        'office': "Prognoz: bulutli, «bu yerda bo'lgim kelmayapti» ehtimoli yuqori.",
        'sleep': "Ob-havo xabarnomasi: UXLASHGA BOR DO'ST 😭.",
        'bed': "Ob-havo xabarnomasi: UXLASHGA BOR DO'ST 😭.",
        'toilet': "Hojatxona prognozini olmoqchi bo'ldingmi 💀.",
        'bathroom': "Hojatxona prognozini olmoqchi bo'ldingmi 💀.",
        'the sun': "Prognoz: issiq. Juda issiq. Nimani kutganding o'zi?",
        'sun': "Prognoz: issiq. Juda issiq. Nimani kutganding o'zi?",
        'weather': "Do'st... sen allaqachon ob-havo ilovasidasa-ku. 😭",
        'gibberish': "Bu shahar emas, shunchaki harflar aralashmasiga o'xshaydi. Haqiqiy joyni kiriting.",
        'notFound': (c) => `"${c}"? Hech eshitmaganman. Bu xayoliy davlatmi yoki klaviaturani bosib yubordingmi?`
      }
    }
  };

  const t = translations[lang] || translations.en;

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const cleanInput = cityName.trim();
      const lowerInput = cleanInput.toLowerCase();

      const errMap = t.errors;

      if (errMap[lowerInput]) {
        throw new Error(errMap[lowerInput]);
      }

      if (cleanInput.length < 2 || !/[a-zA-Zа-яА-ЯўғқҳЎҒҚҲ]/.test(cleanInput)) {
        throw new Error(errMap['gibberish']);
      }

      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cleanInput)}&count=1`);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error(typeof errMap['notFound'] === 'function' ? errMap['notFound'](cleanInput) : `"${cleanInput}" not found.`);
      }

      const { latitude, longitude, name, country, admin1 } = geoData.results[0];

      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);
      const weatherData = await weatherRes.json();

      const localeMap = { en: 'en-US', ru: 'ru-RU', uz: 'uz-UZ' };

      setWeather({
        city: name,
        region: admin1 || country,
        country: country,
        temp: Math.round(weatherData.current.temperature_2m),
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m,
        daily: weatherData.daily.time.slice(1, 4).map((date, idx) => ({
          date: new Date(date).toLocaleDateString(localeMap[lang] || 'en-US', { weekday: 'short' }),
          maxTemp: Math.round(weatherData.daily.temperature_2m_max[idx + 1]),
          minTemp: Math.round(weatherData.daily.temperature_2m_min[idx + 1]),
        }))
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather('Tashkent');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!cityInput.trim()) return;
    fetchWeather(cityInput);
  };

  return (
    <div className="max-w-4xl mx-auto text-[#0a0a0a]">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-between mb-4">
          <span className="px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-[#0a0a0a] text-[11px] font-bold uppercase tracking-widest inline-block">
            {t.badge}
          </span>
          <div className="flex items-center gap-1 bg-black/5 border border-black/10 rounded-full p-1 text-[11px] font-bold">
            {['en', 'ru', 'uz'].map(l => (
              <button
                key={l}
                onClick={() => onLanguageChange(l)}
                className={`px-2.5 py-1 rounded-full uppercase transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${lang === l ? 'bg-[#0a0a0a] text-white shadow-sm' : 'text-black/50 hover:text-[#0a0a0a]'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <h2 className="font-['Barlow_Condensed'] text-[clamp(40px,7vw,64px)] font-black uppercase tracking-tight mb-3">
          {t.title}
        </h2>
        <p className="text-black/50 text-sm max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Search Bar & Quick Buttons */}
      <div className="p-6 rounded-3xl bg-black/2 border border-black/8 space-y-4 mb-8">
        <form onSubmit={handleSearch} className="flex gap-3">
          <input 
            type="text" 
            placeholder={t.placeholder}
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            className="flex-1 px-4 py-3 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm font-medium placeholder:text-black/30 focus:outline-none focus:border-[#0a0a0a] transition-all"
          />
          <button 
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-2xl bg-[#0a0a0a] hover:bg-black/80 font-bold text-xs uppercase tracking-wider text-white transition-all cursor-pointer shadow-md disabled:opacity-50"
          >
            {loading ? t.searchingBtn : t.searchBtn}
          </button>
        </form>

        <div className="flex flex-wrap gap-2 pt-2 items-center">
          <span className="text-xs text-black/40 font-bold uppercase tracking-wider mr-1">{t.quickSelect}</span>
          {['Tashkent', 'New York', 'London', 'Tokyo', 'Dubai', 'Seoul'].map((c) => (
            <button
              key={c}
              onClick={() => { setCityInput(c); fetchWeather(c); }}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-black/5 text-xs font-bold text-black/70 transition-all cursor-pointer border border-black/10 shadow-xs"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Error or Savage Response State */}
      {error && (
        <div className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20 text-center text-red-600 font-semibold text-sm">
          {error}
        </div>
      )}

      {/* Weather Display Card */}
      {weather && !error && (
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-[#0a0a0a] text-white border border-black/10 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-white/10 text-[#f4a819] text-[10px] font-bold uppercase tracking-widest border border-white/15 inline-block">
                {t.liveActive}
              </span>
              <h3 className="font-['Barlow_Condensed'] text-5xl md:text-7xl font-black mt-3 tracking-tight">{weather.temp}°C</h3>
              <p className="text-white/60 text-sm mt-1 font-medium">📍 {weather.city}, {weather.region}</p>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <div className="flex-1 md:flex-initial p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold">{t.humidity}</span>
                <span className="font-['Barlow_Condensed'] text-2xl font-black text-white mt-1 block">{weather.humidity}%</span>
              </div>
              <div className="flex-1 md:flex-initial p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-[10px] text-white/40 uppercase tracking-wider block font-bold">{t.windSpeed}</span>
                <span className="font-['Barlow_Condensed'] text-2xl font-black text-white mt-1 block">{weather.wind} <span className="text-xs font-normal">km/h</span></span>
              </div>
            </div>
          </div>

          {/* 3-Day Forecast */}
          <div>
            <h4 className="font-['Barlow_Condensed'] text-2xl font-black uppercase tracking-wide text-[#0a0a0a] mb-4">{t.forecastTitle}</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {weather.daily.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-black/2 border border-black/8 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-black/40 font-bold block">{f.date}</span>
                    <span className="text-sm font-bold text-[#0a0a0a] mt-1 block">{t.forecastLabel}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-['Barlow_Condensed'] text-2xl font-black text-[#0a0a0a]">{f.maxTemp}°C</span>
                    <span className="text-xs text-black/40 block font-medium">{t.low}: {f.minTemp}°C</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherSphere;
