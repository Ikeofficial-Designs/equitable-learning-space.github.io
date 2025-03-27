
import React from 'react';
import { Clock, Users, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  duration: string;
  students: number;
  modules: number;
  featured?: boolean;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  category,
  image,
  duration,
  students,
  modules,
  featured = false,
  className,
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden shadow-card card-hover bg-white",
        featured && "border-2 border-accent-blue-100 shadow-elevated",
        className
      )}
    >
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 bg-inclusion-100 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <div className="badge badge-primary">Featured</div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/60 to-transparent">
          <div className="badge badge-secondary">{category}</div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-inclusion-900 mb-2 line-clamp-1">{title}</h3>
        <p className="text-inclusion-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-4 text-xs text-inclusion-500 mb-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1 text-inclusion-400" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1 text-inclusion-400" />
            {students} students
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1 text-inclusion-400" />
            {modules} modules
          </div>
        </div>
        
        <div className="pt-4 border-t border-inclusion-100">
          <a 
            href="#" 
            className="inline-flex items-center text-accent-blue-600 font-medium text-sm hover:text-accent-blue-700 transition-colors"
          >
            View Course Details
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
