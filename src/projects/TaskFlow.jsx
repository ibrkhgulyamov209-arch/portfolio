import React, { useState } from 'react';

const TaskFlow = () => {
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
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
          Productivity & Task Management
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white tracking-tight">TaskFlow</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Manage your daily engineering tasks, university goals, and development milestones with a high-performance workspace.
        </p>
      </div>

      {/* Progress Dashboard Card */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Total Tasks</span>
            <span className="text-2xl font-bold text-white">{tasks.length}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
            📋
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Completed</span>
            <span className="text-2xl font-bold text-green-400">{completedCount}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 font-bold border border-green-500/20">
            ✓
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-linear-to-br from-blue-900/20 to-purple-900/20 border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Productivity Rate</span>
            <span className="text-2xl font-bold text-purple-400">{progressPercentage}%</span>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-purple-500/20 border-t-purple-500 flex items-center justify-center text-xs font-bold text-white">
            {progressPercentage}%
          </div>
        </div>
      </div>

      {/* Add Task Form */}
      <form onSubmit={addTask} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-3">
            <label className="block text-xs font-semibold text-slate-300 mb-1">New Task Description</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Code WeatherSphere search component..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="Frontend">Frontend</option>
              <option value="Studies">Studies</option>
              <option value="Startup">Startup</option>
              <option value="CS Prep">CS Prep</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </div>

          <div className="flex items-end">
            <button 
              type="submit" 
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-all cursor-pointer shadow-lg shadow-blue-500/20"
            >
              + Add Task
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
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center text-slate-400">
            No tasks found in this category. Add a new task above!
          </div>
        ) : (
          filteredTasks.map(task => (
            <div 
              key={task.id} 
              className={`p-4 rounded-2xl border flex items-center justify-between gap-4 transition-all ${
                task.completed ? 'bg-white/2 border-white/5 opacity-60' : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                    task.completed ? 'bg-green-500 text-white' : 'bg-white/10 text-transparent hover:bg-white/20'
                  }`}
                >
                  ✓
                </button>
                <div>
                  <p className={`text-sm font-medium text-white ${task.completed ? 'line-through text-slate-400' : ''}`}>
                    {task.text}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider border border-purple-500/20">
                      {task.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      task.priority === 'High' ? 'text-red-400' : task.priority === 'Medium' ? 'text-amber-400' : 'text-blue-400'
                    }`}>
                      • {task.priority} Priority
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold transition-all cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskFlow;