import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { BookOpen, Clock, Award, PlayCircle } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuthStore();

  const stats = [
    { label: 'Courses Enrolled', value: '4', icon: BookOpen, color: 'text-blue-400' },
    { label: 'Hours Learned', value: '26h', icon: Clock, color: 'text-green-400' },
    { label: 'Certificates', value: '2', icon: Award, color: 'text-yellow-400' },
  ];

  return (
    <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto pb-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Student'} 👋</h1>
        <p className="text-secondary mt-2">Pick up where you left off.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default">
            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-secondary">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Current Progress Section */}
      <h2 className="text-xl font-bold mb-6">Continue Learning</h2>
      <div className="glass p-6 rounded-2xl border-l-4 border-primary flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-48 h-28 bg-gray-800 rounded-lg flex items-center justify-center relative group overflow-hidden">
             {/* Placeholder for Thumbnail */}
             <div className="absolute inset-0 bg-violet-600/20 group-hover:bg-violet-600/40 transition-all"></div>
             <PlayCircle className="relative z-10 w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
        </div>
        
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold">Advanced React Patterns</h3>
              <p className="text-sm text-secondary">Module 2: Higher Order Components</p>
            </div>
            <span className="text-primary font-bold">65%</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full w-[65%]"></div>
          </div>
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Dashboard;