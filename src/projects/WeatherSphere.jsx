import React, { useState, useEffect } from 'react';

const WeatherSphere = () => {
  const [cityInput, setCityInput] = useState('Tashkent');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const cleanInput = cityName.trim();
      const lowerInput = cleanInput.toLowerCase();

      // Clothing & Weather Adjective Easter Eggs
      if (lowerInput === 'good boy') {
       throw new Error("I'm a weather app bro 😭.");
      }
      if (lowerInput === 'jacket') {
        throw new Error("Jacket? Bro, the forecast isn't THAT cold 💀.");
      }
      if (lowerInput === 'umbrella') {
        throw new Error("Umbrella? Damn bro, you came prepared ☔.");
      }
      if (lowerInput === 'shorts') {
        throw new Error("Shorts? Check the forecast first, warrior 😭.");
      }
      if (lowerInput === 'coat') {
        throw new Error("Coat? Bro thinks winter is coming 💀.");
      }
      if (lowerInput === 'sunglasses') {
        throw new Error("Sunglasses detected. Bro is expecting a cinematic sunrise 😎.");
      }
      if (lowerInput === 'snow') {
        throw new Error("You typed snow. That's not a location, bro 😭.");
      }
      if (lowerInput === 'rain') {
        throw new Error("Rain isn't a city 💀. Nice attempt though.");
      }
      if (lowerInput === 'hot') {
        throw new Error("Hot? Bro, I need a LOCATION, not your opinion.");
      }
      if (lowerInput === 'cold') {
        throw new Error("Cold? Bro gave me a weather review instead of a location 😭.");
      }

      // Ultra-Chaotic Savage Easter Eggs
      if (lowerInput === 'minecraft' || lowerInput === 'mc') {
        throw new Error("Weather in Minecraft? Bro, ask a creeper. I'm dealing with Earth.");
      }
      if (lowerInput === 'mars' || lowerInput === 'moon') {
        throw new Error("Nice try, astronaut. This app only handles Earth locations.");
      }
      if (lowerInput === 'antartica' || lowerInput === 'antarctica') {
        throw new Error("Bro wants the weather where penguins have better jackets than him.");
      }
      if (lowerInput === 'area 51') {
        throw new Error("Weather data unavailable. The government said no.");
      }
      if (lowerInput === 'the backrooms' || lowerInput === 'backrooms') {
        throw new Error("No signal detected. You might wanna find Level 0 first.");
      }
      if (lowerInput === 'google' || lowerInput === 'chatgpt') {
        throw new Error("Bro is asking a weather app to search for another app 💀.");
      }
      if (lowerInput === 'my school' || lowerInput === 'school') {
        throw new Error("Forecast: 100% chance of homework. Temperature: absolutely unbearable.");
      }
      if (lowerInput === 'work' || lowerInput === 'office') {
        throw new Error("Forecast: cloudy with a high chance of 'I don't wanna be here'.");
      }
      if (lowerInput === 'sleep' || lowerInput === 'bed') {
        throw new Error("Weather report: GO TO SLEEP BRO 😭.");
      }
      if (lowerInput === 'toilet' || lowerInput === 'bathroom') {
        throw new Error("Bro really tried to get the bathroom forecast 💀.");
      }
      if (lowerInput === 'the sun' || lowerInput === 'sun') {
        throw new Error("Forecast: hot. Very hot. What the hell did you expect?");
      }
      if (lowerInput === 'weather') {
        throw new Error("Bro... you're already IN the weather app. 😭");
      }
      if (cleanInput.length < 2 || !/[a-zA-Z]/.test(cleanInput)) {
        throw new Error("That looks like total gibberish, not a city. Try typing an actual place.");
      }

      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cleanInput)}&count=1`);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error(`"${cleanInput}"? Never heard of it. Is that a made-up country or did you smash your keyboard?`);
      }

      const { latitude, longitude, name, country, admin1 } = geoData.results[0];

      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        region: admin1 || country,
        country: country,
        temp: Math.round(weatherData.current.temperature_2m),
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m,
        daily: weatherData.daily.time.slice(1, 4).map((date, idx) => ({
          date: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
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
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
          Global Live Meteorological Hub
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white tracking-tight">WeatherSphere</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Search live climate conditions for <span className="text-blue-400 font-semibold">any real city or country</span> worldwide.
        </p>
      </div>

      {/* Search Bar & Quick Buttons */}
      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 mb-8">
        <form onSubmit={handleSearch} className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search any city or country..."
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs uppercase tracking-wider text-white transition-all cursor-pointer shadow-lg shadow-blue-500/20 disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="text-xs text-slate-400 font-semibold flex items-center mr-2">Quick Select:</span>
          {['Tashkent', 'New York', 'London', 'Tokyo', 'Dubai', 'Seoul'].map((c) => (
            <button
              key={c}
              onClick={() => { setCityInput(c); fetchWeather(c); }}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 transition-all cursor-pointer border border-white/5"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Error or Savage Response State */}
      {error && (
        <div className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20 text-center text-red-300 font-semibold animate-fadeIn">
          {error}
        </div>
      )}

      {/* Weather Display Card */}
      {weather && !error && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-8 rounded-3xl bg-linear-to-br from-blue-900/30 to-purple-900/30 border border-white/10 backdrop-blur-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-500/30">
                Live Data Active
              </span>
              <h3 className="text-4xl md:text-6xl font-extrabold text-white mt-3">{weather.temp}°C</h3>
              <p className="text-slate-300 text-sm mt-1 font-medium">📍 {weather.city}, {weather.region}</p>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <div className="flex-1 md:flex-initial p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Humidity</span>
                <span className="text-lg font-bold text-white mt-1 block">{weather.humidity}%</span>
              </div>
              <div className="flex-1 md:flex-initial p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Wind Speed</span>
                <span className="text-lg font-bold text-white mt-1 block">{weather.wind} km/h</span>
              </div>
            </div>
          </div>

          {/* 3-Day Forecast */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">3-Day Extended Forecast</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {weather.daily.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">{f.date}</span>
                    <span className="text-sm font-bold text-white mt-1 block">Forecast</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-blue-400">{f.maxTemp}°C</span>
                    <span className="text-xs text-slate-500 block">Low: {f.minTemp}°C</span>
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