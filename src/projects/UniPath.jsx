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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-white mb-2">UniPath Admissions Hub</h2>
      
      {step === 1 ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white" onChange={e => setData({...data, name: e.target.value})} />
          <div className="grid grid-cols-2 gap-4">
            <input type="number" placeholder="Current Age" required className="p-4 rounded-xl bg-white/5 border border-white/10 text-white" onChange={e => setData({...data, age: e.target.value})} />
            <select className="p-4 rounded-xl bg-slate-900 border border-white/10 text-white" onChange={e => setData({...data, targetUni: e.target.value})}>
              {universityDatabase.map(u => <option key={u.name}>{u.name}</option>)}
            </select>
          </div>
          <textarea placeholder="List your current achievements" required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white" onChange={e => setData({...data, currentAchievements: e.target.value})}></textarea>
          <button className="w-full p-4 rounded-xl bg-blue-600 font-bold text-white cursor-pointer">Get The Savage Verdict →</button>
        </form>
      ) : (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-red-600/20 border border-red-500/30 text-red-200">
            <h3 className="font-bold text-lg">{result.status}</h3>
          </div>
          <div className="grid gap-4">
            {result.roadmap.map((r, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-blue-400 font-bold">{r.title}</h4>
                <p className="text-slate-300 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setStep(1)} className="w-full p-4 rounded-xl bg-white/10 text-white font-bold cursor-pointer">Try again (if you dare)</button>
        </div>
      )}
    </div>
  );
};

export default UniPath;