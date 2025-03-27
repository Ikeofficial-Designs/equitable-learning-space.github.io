
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="badge badge-primary mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>Inclusive Education Platform</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-inclusion-900 leading-tight tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Learning that embraces <span className="text-accent-blue-500">everyone</span>
            </h1>
            <p className="text-lg text-inclusion-600 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              An interactive platform designed to support educators, parents, and students in creating inclusive learning environments where every student can thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#courses" 
                className="px-6 py-3 bg-accent-blue-500 text-white rounded-md hover:bg-accent-blue-600 transition-all shadow-sm hover:shadow-md flex items-center justify-center sm:justify-start"
              >
                Explore Courses
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#features" 
                className="px-6 py-3 border border-inclusion-200 text-inclusion-700 rounded-md hover:bg-inclusion-50 transition-colors flex items-center justify-center sm:justify-start"
              >
                Learn More
              </a>
            </div>
            
            <div className="mt-8 flex items-center space-x-2 text-sm text-inclusion-500 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-inclusion-200 border-2 border-white flex items-center justify-center text-xs text-inclusion-700">JD</div>
                <div className="w-8 h-8 rounded-full bg-inclusion-200 border-2 border-white flex items-center justify-center text-xs text-inclusion-700">KL</div>
                <div className="w-8 h-8 rounded-full bg-inclusion-200 border-2 border-white flex items-center justify-center text-xs text-inclusion-700">AS</div>
              </div>
              <span>Join 2,000+ educators already enrolled</span>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 bg-white rounded-xl shadow-elevated overflow-hidden animate-float">
              <div className="aspect-w-16 aspect-h-9 bg-inclusion-100">
                <div className="w-full h-full bg-gradient-to-br from-accent-blue-50 to-accent-teal-50 flex items-center justify-center">
                  <div className="w-full max-w-md mx-auto px-8 py-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue-500"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-inclusion-900 mb-2">Inclusive Learning Dashboard</h3>
                    <p className="text-sm text-inclusion-600">Track progress, access resources, and connect with inclusive education experts.</p>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-inclusion-900">Featured Modules</h3>
                  <span className="text-xs text-inclusion-500">4 of 12</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center p-3 rounded-lg bg-inclusion-50 transition-colors hover:bg-inclusion-100">
                    <div className="w-8 h-8 rounded-full bg-accent-blue-100 flex items-center justify-center text-accent-blue-600 mr-3">1</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-inclusion-900">Inclusive Teaching Strategies</h4>
                      <div className="flex items-center mt-1">
                        <div className="h-1.5 w-3/4 bg-accent-blue-500 rounded-full"></div>
                        <span className="text-xs text-inclusion-500 ml-2">75%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg transition-colors hover:bg-inclusion-50">
                    <div className="w-8 h-8 rounded-full bg-accent-teal-100 flex items-center justify-center text-accent-teal-600 mr-3">2</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-inclusion-900">Cultural Sensitivity</h4>
                      <div className="flex items-center mt-1">
                        <div className="h-1.5 w-1/2 bg-accent-teal-500 rounded-full"></div>
                        <span className="text-xs text-inclusion-500 ml-2">50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-blue-200 rounded-full opacity-20 blur-3xl animate-pulse-subtle"></div>
            <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-accent-teal-200 rounded-full opacity-20 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 -left-5 w-20 h-20 border-2 border-accent-blue-200 rounded-xl opacity-60 animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-10 -right-3 w-12 h-12 border-2 border-accent-teal-200 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
