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

const UniPath = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: '', age: '', targetUni: universityDatabase[0].name, currentAchievements: '' });
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = parseInt(data.age);
    let message = "";

    // The Savage Logic
    if (age > 100) {
      message = "Aren't you dead already? Go rest in peace, not in a lecture hall.";
    } else if (age >= 30) {
      message = "Why do you need uni now? Go get a job or retire, grandpa/grandma.";
    } else if (age >= 18) {
      message = "You're a bit late to the party, but it's okay—you can still catch up if you work twice as hard.";
    } else if (age < 14) {
      message = "Go play, lil boy! You shouldn't even be thinking about admissions yet.";
    } else {
      message = "You are at the perfect age. Let's build your path!";
    }

    setResult({
      status: message,
      roadmap: [
        { title: "The Reality Check", desc: `Applying to: ${data.targetUni}` },
        { title: "Your Profile", desc: `Achievements: ${data.currentAchievements}` },
        { title: "The Verdict", desc: age < 14 || age >= 30 ? "Advice: Focus on other things." : "Advice: Don't mess this up." }
      ]
    });
    setStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto text-[#0a0a0a]">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-[#0a0a0a] text-[11px] font-bold uppercase tracking-widest mb-4 inline-block">
          UniPath Admissions Hub
        </span>
        <h2 className="font-['Barlow_Condensed'] text-[clamp(40px,7vw,64px)] font-black uppercase tracking-tight mb-3">
          University Admission Simulator
        </h2>
        <p className="text-black/50 text-sm max-w-xl mx-auto leading-relaxed">
          Evaluate your profile and get an instant reality check for top global universities.
        </p>
      </div>
      
      {step === 1 ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
            className="w-full p-4 rounded-2xl bg-black/2 border border-black/15 text-[#0a0a0a] placeholder:text-black/30 text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all" 
            onChange={e => setData({...data, name: e.target.value})} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="number" 
              placeholder="Current Age" 
              required 
              className="p-4 rounded-2xl bg-black/2 border border-black/15 text-[#0a0a0a] placeholder:text-black/30 text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all" 
              onChange={e => setData({...data, age: e.target.value})} 
            />
            <select 
              className="p-4 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm font-medium focus:outline-none focus:border-[#0a0a0a] cursor-pointer transition-all" 
              onChange={e => setData({...data, targetUni: e.target.value})}
            >
              {universityDatabase.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
            </select>
          </div>
          <textarea 
            placeholder="List your current achievements" 
            required 
            rows={4}
            className="w-full p-4 rounded-2xl bg-black/2 border border-black/15 text-[#0a0a0a] placeholder:text-black/30 text-sm font-medium focus:outline-none focus:border-[#0a0a0a] transition-all resize-none" 
            onChange={e => setData({...data, currentAchievements: e.target.value})}
          />
          <button className="w-full p-4 rounded-2xl bg-[#0a0a0a] text-white font-bold text-sm tracking-wider uppercase cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md">
            Get The Savage Verdict →
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-[#0a0a0a] text-white border border-black/10 shadow-lg">
            <span className="text-[10px] font-bold text-[#f4a819] uppercase tracking-widest block mb-1">Assessment Result</span>
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
            Try again (if you dare)
          </button>
        </div>
      )}
    </div>
  );
};

export default UniPath;