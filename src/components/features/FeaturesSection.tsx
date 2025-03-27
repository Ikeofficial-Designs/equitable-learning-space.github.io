
import React from 'react';
import { Video, BookOpen, Calendar, Users, Award, Brain, Globe, Headphones, 
  FileText, BarChart3, MessageSquare, PanelRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <div 
    className="bg-white rounded-xl p-6 shadow-card card-hover animate-fade-in" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-12 h-12 rounded-lg bg-accent-blue-50 flex items-center justify-center mb-4">
      <Icon className="text-accent-blue-600" size={24} />
    </div>
    <h3 className="text-xl font-bold text-inclusion-900 mb-2">{title}</h3>
    <p className="text-inclusion-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Interactive Video Lessons",
      description: "Engage with expert-led video content designed to improve understanding of inclusive practices.",
      delay: 0.1
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Access a library of downloadable resources, lesson plans, and implementation guides.",
      delay: 0.2
    },
    {
      icon: Award,
      title: "Interactive Quizzes & Assessments",
      description: "Test your knowledge and track progress with interactive quizzes that provide immediate feedback.",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with educators, parents, and experts to share experiences and best practices.",
      delay: 0.4
    },
    {
      icon: Brain,
      title: "AI-Driven Learning Paths",
      description: "Receive personalized course recommendations based on your goals and learning history.",
      delay: 0.5
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Access content in multiple languages to ensure global accessibility and inclusion.",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="badge badge-secondary mb-4">Platform Features</div>
          <h2 className="section-heading">Tools for Effective Inclusive Education</h2>
          <p className="section-subheading">
            Our platform offers a comprehensive suite of tools and resources designed to support educators, 
            parents, and students in creating inclusive learning environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-20 bg-inclusion-50 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center animate-slide-in-left">
              <div className="badge badge-primary mb-4">AI-Powered Learning</div>
              <h3 className="text-3xl font-bold text-inclusion-900 mb-4">Personalized Learning Paths</h3>
              <p className="text-inclusion-600 mb-6">
                Our platform uses advanced AI technology to analyze your learning style, goals, and progress 
                to create customized learning paths that adapt to your needs.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Intelligent content recommendations based on your interests",
                  "Adaptive assessments that adjust to your skill level",
                  "Progress tracking with detailed analytics",
                  "Custom resource suggestions to deepen understanding"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-accent-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-inclusion-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#" 
                className="inline-flex items-center text-accent-blue-600 font-medium hover:text-accent-blue-700 transition-colors"
              >
                Learn more about personalized learning
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="relative bg-inclusion-100 animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-500/10 to-accent-teal-500/10"></div>
              <div className="h-full flex items-center justify-center p-8">
                <div className="max-w-md w-full bg-white rounded-xl shadow-elevated p-6 relative">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-blue-500 rounded-full flex items-center justify-center text-white">
                    <PanelRight size={16} />
                  </div>
                  
                  <h4 className="font-medium text-inclusion-900 mb-4">Your Personalized Dashboard</h4>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-inclusion-50 rounded-lg flex items-center">
                      <CalendarIcon className="text-inclusion-500 mr-3" />
                      <div>
                        <h5 className="text-sm font-medium text-inclusion-900">Next Scheduled Session</h5>
                        <p className="text-xs text-inclusion-600">Cultural Sensitivity Workshop - Tomorrow, 10:00 AM</p>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-inclusion-50 rounded-lg flex items-center">
                      <BarChartIcon className="text-inclusion-500 mr-3" />
                      <div>
                        <h5 className="text-sm font-medium text-inclusion-900">Your Learning Progress</h5>
                        <div className="w-full bg-inclusion-200 rounded-full h-1.5 mt-1">
                          <div className="bg-accent-blue-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-inclusion-50 rounded-lg flex items-center">
                      <FileIcon className="text-inclusion-500 mr-3" />
                      <div>
                        <h5 className="text-sm font-medium text-inclusion-900">Recommended Resources</h5>
                        <p className="text-xs text-inclusion-600">3 new resources for "Inclusive Classroom Design"</p>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-inclusion-50 rounded-lg flex items-center">
                      <MessageIcon className="text-inclusion-500 mr-3" />
                      <div>
                        <h5 className="text-sm font-medium text-inclusion-900">Community Discussions</h5>
                        <p className="text-xs text-inclusion-600">5 unread messages in your discussion groups</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper icon components to ensure consistent styling
const CalendarIcon = ({ className = "" }) => (
  <div className={`w-8 h-8 rounded-full bg-accent-blue-100 flex items-center justify-center ${className}`}>
    <Calendar size={16} className="text-accent-blue-600" />
  </div>
);

const BarChartIcon = ({ className = "" }) => (
  <div className={`w-8 h-8 rounded-full bg-accent-teal-100 flex items-center justify-center ${className}`}>
    <BarChart3 size={16} className="text-accent-teal-600" />
  </div>
);

const FileIcon = ({ className = "" }) => (
  <div className={`w-8 h-8 rounded-full bg-inclusion-200 flex items-center justify-center ${className}`}>
    <FileText size={16} className="text-inclusion-700" />
  </div>
);

const MessageIcon = ({ className = "" }) => (
  <div className={`w-8 h-8 rounded-full bg-inclusion-200 flex items-center justify-center ${className}`}>
    <MessageSquare size={16} className="text-inclusion-700" />
  </div>
);

export default FeaturesSection;
