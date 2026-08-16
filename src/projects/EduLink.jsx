import React, { useState } from 'react';

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

const EduLink = () => {
  const [field, setField] = useState('Computer Science');
  const [gpa, setGpa] = useState('3.6');
  const [ielts, setIelts] = useState('7.0');
  const [codingProjects, setCodingProjects] = useState('Yes');
  const [results, setResults] = useState(null);

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
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
          Advanced University & Location Matcher
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white tracking-tight">EduLink</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Input your exact GPA, IELTS score, and technical achievements to discover global universities with integrated map lookups.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleFindMatches} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-6 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Preferred Field of Study</label>
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="AI & Tech">AI & Tech</option>
              <option value="Frontend Development">Frontend Development</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Current GPA (max 4.0)</label>
            <input
              type="number"
              step="0.1"
              max="4.0"
              min="2.0"
              required
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">IELTS Score</label>
            <select
              value={ielts}
              onChange={(e) => setIelts(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
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
          <label className="block text-xs font-semibold text-slate-300 mb-2">Portfolio & Coding Achievements</label>
          <select
            value={codingProjects}
            onChange={(e) => setCodingProjects(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="Yes">Built Multiple Web Apps & Portfolios</option>
            <option value="Hackathon">Hackathon Participant / Winner</option>
            <option value="General">General Academic Background</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-bold text-xs uppercase tracking-widest text-white transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
        >
          Calculate Eligibility & Map Locations →
        </button>
      </form>

      {/* Results Section */}
      {results !== null && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-xl font-bold text-white mb-4">
            Matching Institutions ({results.length} found)
          </h3>

          {results.length === 0 ? (
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center text-slate-400">
              No matching institutions found for your specific GPA and IELTS filters. Try adjusting your score thresholds!
            </div>
          ) : (
            results.map((uni) => (
              <div 
                key={uni.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                      {uni.tier}
                    </span>
                    <span className="text-xs text-slate-400">• 📍 {uni.city}, {uni.country}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">{uni.name}</h4>
                  <p className="text-xs text-purple-400 mt-1">Scholarship: {uni.scholarship} | Req: IELTS {uni.minIELTS}+, GPA {uni.minGPA}+</p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${uni.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-blue-300 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>🗺️</span> View on Map
                  </a>
                  <button 
                    onClick={() => alert(`Application query generated for ${uni.name} in ${uni.city}!`)}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Apply
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