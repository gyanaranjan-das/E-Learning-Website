import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { CheckCircle, Play, Lock, ChevronLeft, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursePlayer = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock Curriculum Data
  const course = {
    title: "Complete React Native Bootcamp",
    modules: [
      {
        title: "Getting Started",
        lessons: [
          { id: 1, title: "Introduction to React Native", duration: "10:05", isLocked: false },
          { id: 2, title: "Setting up the Environment", duration: "15:20", isLocked: false },
        ]
      },
      {
        title: "Core Components",
        lessons: [
          { id: 3, title: "View, Text & Image", duration: "12:30", isLocked: true },
          { id: 4, title: "Styling & Flexbox", duration: "20:00", isLocked: true },
        ]
      }
    ]
  };

  return (
    <div className="h-screen flex bg-background overflow-hidden">
      
      {/* Sidebar - Lesson List */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} bg-card border-r border-border transition-all duration-300 flex-shrink-0 relative`}>
        <div className="p-6 border-b border-border">
          <Link to="/courses" className="flex items-center gap-2 text-sm text-secondary hover:text-white mb-4">
            <ChevronLeft size={16} /> Back to Courses
          </Link>
          <h2 className="font-bold text-lg leading-tight">{course.title}</h2>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-140px)]">
          {course.modules.map((module, mIdx) => (
            <div key={mIdx} className="mb-2">
              <div className="px-6 py-3 bg-white/5 text-sm font-semibold text-secondary uppercase tracking-wider">
                {module.title}
              </div>
              <div>
                {module.lessons.map((lesson, lIdx) => (
                  <button 
                    key={lesson.id}
                    onClick={() => { setActiveModule(mIdx); setActiveLesson(lIdx); }}
                    className={`w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors ${
                      activeModule === mIdx && activeLesson === lIdx ? 'bg-primary/10 border-r-4 border-primary' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {lesson.isLocked ? <Lock size={16} className="text-gray-500" /> : <Play size={16} className={activeModule === mIdx && activeLesson === lIdx ? "text-primary" : "text-gray-400"} />}
                      <span className={`text-sm ${activeModule === mIdx && activeLesson === lIdx ? 'text-primary font-medium' : 'text-gray-300'}`}>
                        {lesson.title}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{lesson.duration}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Video Player */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top Bar */}
        <div className="h-16 border-b border-border flex items-center px-6 justify-between bg-background z-10 sticky top-0">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg">
            <Menu size={20} />
          </button>
          <div className="flex gap-4">
             <button className="text-sm font-semibold text-secondary hover:text-white">Previous</button>
             <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-bold">Next Lesson</button>
          </div>
        </div>

        {/* Video Area */}
        <div className="w-full aspect-video bg-black relative">
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
                width="100%" 
                height="100%" 
                controls={true}
                playing={false}
            />
        </div>

        {/* Lesson Details */}
        <div className="p-8 max-w-4xl mx-auto w-full">
            <h1 className="text-3xl font-bold mb-4">{course.modules[activeModule].lessons[activeLesson].title}</h1>
            <p className="text-secondary leading-relaxed">
                In this lesson, we will cover the fundamentals of the topic. Ensure you have your development environment ready.
                We will go through the installation steps and verify that everything is working correctly.
            </p>
            
            <div className="mt-8 p-6 glass rounded-xl">
                <h3 className="font-bold mb-2">Resources</h3>
                <ul className="list-disc list-inside text-primary underline">
                    <li><a href="#">Source Code (GitHub)</a></li>
                    <li><a href="#">Official Documentation</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;