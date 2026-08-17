import { useState } from 'react';

const translations = {
  en: {
    badge: "Productivity & Task Management",
    subtitle: "Manage your daily engineering tasks, university goals, and development milestones with a high-performance workspace.",
    totalTasks: "Total Tasks",
    completed: "Completed",
    prodRate: "Productivity Rate",
    newDescLabel: "New Task Description",
    placeholder: "e.g. Code WeatherSphere search component...",
    catLabel: "Category",
    priorityLabel: "Priority",
    addTaskBtn: "+ Add Task",
    categories: {
      All: "All",
      Frontend: "Frontend",
      Studies: "Studies",
      Startup: "Startup",
      "CS Prep": "CS Prep"
    },
    priorities: {
      High: "High Priority",
      Medium: "Medium Priority",
      Low: "Low Priority"
    },
    priorityText: {
      High: "• High Priority",
      Medium: "• Medium Priority",
      Low: "• Low Priority"
    },
    noTasks: "No tasks found in this category. Add a new task above!",
    delete: "Delete"
  },
  ru: {
    badge: "Управление задачами и продуктивность",
    subtitle: "Управляйте ежедневными инженерными задачами, университетскими целями и вехами разработки в высокопроизводительном пространстве.",
    totalTasks: "Всего задач",
    completed: "Выполнено",
    prodRate: "Продуктивность",
    newDescLabel: "Описание новой задачи",
    placeholder: "напр., Написать компонент поиска WeatherSphere...",
    catLabel: "Категория",
    priorityLabel: "Приоритет",
    addTaskBtn: "+ Добавить задачу",
    categories: {
      All: "Все",
      Frontend: "Фронтенд",
      Studies: "Учеба",
      Startup: "Стартап",
      "CS Prep": "Подготовка к CS"
    },
    priorities: {
      High: "Высокий приоритет",
      Medium: "Средний приоритет",
      Low: "Низкий приоритет"
    },
    priorityText: {
      High: "• Высокий приоритет",
      Medium: "• Средний приоритет",
      Low: "• Низкий приоритет"
    },
    noTasks: "В этой категории нет задач. Добавьте новую задачу выше!",
    delete: "Удалить"
  },
  uz: {
    badge: "Mahsuldorlik va Vazifalarni Boshqarish",
    subtitle: "Kundalik muhandislik vazifalaringiz, universitet maqsadlaringiz va dasturlash bosqichlaringizni yuqori unumdorlikdagi ishchi muhitda boshqaring.",
    totalTasks: "Jami vazifalar",
    completed: "Bajarilgan",
    prodRate: "Mahsuldorlik darajasi",
    newDescLabel: "Yangi vazifa tavsifi",
    placeholder: "masalan: WeatherSphere qidiruv komponentini yozish...",
    catLabel: "Kategoriya",
    priorityLabel: "Ustuvorlik",
    addTaskBtn: "+ Vazifa qo'shish",
    categories: {
      All: "Barchasi",
      Frontend: "Frontend",
      Studies: "O'qish",
      Startup: "Startap",
      "CS Prep": "CS Tayyorgarlik"
    },
    priorities: {
      High: "Yuqori ustuvorlik",
      Medium: "O'rta ustuvorlik",
      Low: "Past ustuvorlik"
    },
    priorityText: {
      High: "• Yuqori ustuvorlik",
      Medium: "• O'rta ustuvorlik",
      Low: "• Past ustuvorlik"
    },
    noTasks: "Bu kategoriyada vazifalar topilmadi. Yuqoridan yangi vazifa qo'shing!",
    delete: "O'chirish"
  }
};

const TaskFlow = ({ lang = 'en', onLanguageChange = () => {} }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish portfolio React integration & deployment", category: "Frontend", priority: "High", completed: true },
    { id: 2, text: "Prepare IELTS vocabulary & speaking practice", category: "Studies", priority: "High", completed: false },
    { id: 3, text: "Structure GlobalUni admissions platform requirements", category: "Startup", priority: "Medium", completed: false },
    { id: 4, text: "Review data structures & algorithms concepts", category: "CS Prep", priority: "Medium", completed: false }
  ]);

  const [input, setInput] = useState('');
  const [category, setCategory] = useState('Frontend');
  const [priority, setPriority] = useState('Medium');
  const [filter, setFilter] = useState('All');

  const t = translations[lang];

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      category,
      priority,
      completed: false
    };

    setTasks([newTask, ...tasks]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(t => t.category === filter);
  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercentage = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

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
          TaskFlow
        </h2>
        <p className="text-black/50 text-sm max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Progress Dashboard Card */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-black/2 border border-black/8 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-black/40 uppercase tracking-wider block mb-1 font-bold">{t.totalTasks}</span>
            <span className="font-['Barlow_Condensed'] text-3xl font-black text-[#0a0a0a]">{tasks.length}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-[#0a0a0a] font-bold border border-black/10">
            📋
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-black/2 border border-black/8 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-black/40 uppercase tracking-wider block mb-1 font-bold">{t.completed}</span>
            <span className="font-['Barlow_Condensed'] text-3xl font-black text-[#0a0a0a]">{completedCount}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-[#0a0a0a] font-bold border border-black/10">
            ✓
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-black/2 border border-black/8 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-black/40 uppercase tracking-wider block mb-1 font-bold">{t.prodRate}</span>
            <span className="font-['Barlow_Condensed'] text-3xl font-black text-[#0a0a0a]">{progressPercentage}%</span>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-black/10 border-t-[#0a0a0a] flex items-center justify-center text-xs font-bold text-[#0a0a0a]">
            {progressPercentage}%
          </div>
        </div>
      </div>

      {/* Add Task Form */}
      <form onSubmit={addTask} className="p-6 rounded-3xl bg-black/2 border border-black/8 space-y-4 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-3">
            <label className="block text-xs font-bold text-black/70 mb-1 uppercase tracking-wider">{t.newDescLabel}</label>
            <input 
              type="text" 
              required
              placeholder={t.placeholder} 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm placeholder:text-black/30 focus:outline-none focus:border-[#0a0a0a] transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-black/70 mb-1 uppercase tracking-wider">{t.catLabel}</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm font-medium focus:outline-none focus:border-[#0a0a0a] cursor-pointer transition-all"
            >
              <option value="Frontend">{t.categories["Frontend"]}</option>
              <option value="Studies">{t.categories["Studies"]}</option>
              <option value="Startup">{t.categories["Startup"]}</option>
              <option value="CS Prep">{t.categories["CS Prep"]}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-black/70 mb-1 uppercase tracking-wider">{t.priorityLabel}</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-black/15 text-[#0a0a0a] text-sm font-medium focus:outline-none focus:border-[#0a0a0a] cursor-pointer transition-all"
            >
              <option value="High">{t.priorities["High"]}</option>
              <option value="Medium">{t.priorities["Medium"]}</option>
              <option value="Low">{t.priorities["Low"]}</option>
            </select>
          </div>

          <div className="flex items-end">
            <button 
              type="submit" 
              className="w-full py-3 rounded-2xl bg-[#0a0a0a] hover:bg-black/80 text-xs font-bold text-white tracking-wider uppercase transition-all cursor-pointer shadow-md"
            >
              {t.addTaskBtn}
            </button>
          </div>
        </div>
      </form>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['All', 'Frontend', 'Studies', 'Startup', 'CS Prep'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === cat 
                ? 'bg-[#0a0a0a] text-white shadow-sm' 
                : 'bg-black/5 text-black/50 hover:bg-black/10 hover:text-[#0a0a0a]'
            }`}
          >
            {t.categories[cat]}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="p-8 rounded-2xl bg-black/2 border border-black/8 text-center text-black/40 text-sm font-medium">
            {t.noTasks}
          </div>
        ) : (
          filteredTasks.map(task => (
            <div 
              key={task.id} 
              className={`p-4 rounded-2xl border flex items-center justify-between gap-4 transition-all ${
                task.completed ? 'bg-black/2 border-black/5 opacity-60' : 'bg-white border-black/10 shadow-sm hover:border-black/20'
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                    task.completed ? 'bg-[#0a0a0a] text-white' : 'bg-black/5 text-transparent hover:bg-black/10'
                  }`}
                >
                  ✓
                </button>
                <div>
                  <p className={`text-sm font-semibold text-[#0a0a0a] ${task.completed ? 'line-through text-black/40' : ''}`}>
                    {task.text}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-black/5 text-black/60 text-[10px] font-bold uppercase tracking-wider border border-black/10">
                      {t.categories[task.category] || task.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      task.priority === 'High' ? 'text-red-600' : task.priority === 'Medium' ? 'text-[#f4a819]' : 'text-black/50'
                    }`}>
                      {t.priorityText[task.priority] || `• ${task.priority} Priority`}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-600 text-xs font-semibold transition-all cursor-pointer"
              >
                {t.delete}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskFlow;
