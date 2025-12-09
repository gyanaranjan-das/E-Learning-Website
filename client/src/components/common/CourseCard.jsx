import React from 'react';
import { PlayCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="group relative glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
      {/* Thumbnail */}
      <div className="h-48 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="px-2 py-1 bg-primary text-xs font-bold rounded uppercase tracking-wider">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{course.title}</h3>
        <p className="text-secondary text-sm mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <PlayCircle size={16} />
            <span>{course.lessons} Lessons</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;