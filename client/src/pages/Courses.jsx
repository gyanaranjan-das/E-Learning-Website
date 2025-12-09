import React from 'react';
import CourseCard from '../components/common/CourseCard';
import { Search } from 'lucide-react';

// Mock Data (We will replace this with API data later)
const MOCK_COURSES = [
  {
    id: 1,
    title: "Complete React Native Bootcamp",
    description: "Build 5 real-world iOS and Android apps using React Native and Expo.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "Mobile Dev",
    rating: 4.8,
    lessons: 42
  },
  {
    id: 2,
    title: "Advanced Backend with Node.js",
    description: "Master Microservices, Redis, Docker, and Kubernetes in this advanced guide.",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    category: "Backend",
    rating: 4.9,
    lessons: 56
  },
  {
    id: 3,
    title: "Three.js 3D Web Animation",
    description: "Create stunning 3D websites using React Three Fiber and GSAP.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    category: "Design",
    rating: 4.7,
    lessons: 28
  }
];

const Courses = () => {
  return (
    <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto pb-20">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Explore Courses</h1>
          <p className="text-secondary">Master new skills with our project-based learning path.</p>
        </div>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search for Python, React, AI..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COURSES.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;