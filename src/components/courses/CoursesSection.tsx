
import React from 'react';
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Inclusive Teaching Strategies",
      description: "Learn practical strategies to create inclusive learning environments that support all students regardless of abilities.",
      category: "Teaching",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "8 weeks",
      students: 1245,
      modules: 12,
      featured: true
    },
    {
      id: 2,
      title: "Cultural Sensitivity in Education",
      description: "Develop skills to recognize and address cultural differences in the classroom, creating a respectful learning environment.",
      category: "Diversity",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "6 weeks",
      students: 890,
      modules: 9,
      featured: false
    },
    {
      id: 3,
      title: "Supporting Students with Disabilities",
      description: "Comprehensive guide on supporting students with various disabilities and creating accessible learning resources.",
      category: "Accessibility",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "10 weeks",
      students: 1050,
      modules: 15,
      featured: false
    },
    {
      id: 4,
      title: "Equity in Learning Assessment",
      description: "Learn how to design fair and inclusive assessments that accurately measure learning for diverse student populations.",
      category: "Assessment",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "5 weeks",
      students: 780,
      modules: 8,
      featured: false
    }
  ];

  return (
    <section id="courses" className="py-20 bg-inclusion-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <div className="badge badge-primary mb-4">Featured Courses</div>
          <h2 className="section-heading">Expand Your Knowledge of Inclusive Education</h2>
          <p className="section-subheading">
            Comprehensive courses designed by experts to help educators, parents, and students create more inclusive learning environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={course.id} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-slide-up">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 bg-accent-blue-500 text-white rounded-md hover:bg-accent-blue-600 transition-colors shadow-sm"
          >
            View All Courses
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
