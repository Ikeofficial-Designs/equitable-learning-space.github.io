
import React from 'react';

const CtaSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-500/10 to-accent-teal-500/10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-accent-teal-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-elevated overflow-hidden animate-scale-in">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="badge badge-secondary mb-4">Get Started</div>
              <h2 className="text-3xl font-bold text-inclusion-900 mb-4">Join our community of inclusive educators</h2>
              <p className="text-inclusion-600 mb-8">
                Sign up today to access our platform's resources, courses, and community. Start your journey toward creating more inclusive learning environments.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-inclusion-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-inclusion-200 focus:outline-none focus:ring-2 focus:ring-accent-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-inclusion-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-inclusion-200 focus:outline-none focus:ring-2 focus:ring-accent-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-inclusion-700 mb-1">
                    Your Role
                  </label>
                  <select
                    id="role"
                    className="w-full px-4 py-2 rounded-md border border-inclusion-200 focus:outline-none focus:ring-2 focus:ring-accent-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="teacher">Teacher / Educator</option>
                    <option value="parent">Parent / Guardian</option>
                    <option value="admin">School Administrator</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent-blue-500 text-white rounded-md hover:bg-accent-blue-600 transition-colors shadow-sm"
                  >
                    Create Free Account
                  </button>
                </div>
                
                <p className="text-xs text-inclusion-500 text-center">
                  By signing up, you agree to our{' '}
                  <a href="#" className="text-accent-blue-600 hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-accent-blue-600 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
            
            <div className="bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Why Join InclusionLearn?</h3>
              
              <ul className="space-y-4">
                {[
                  "Access to premium inclusive education resources",
                  "Interactive courses developed by industry experts",
                  "Personalized learning paths with AI technology",
                  "Connect with a community of educators and parents",
                  "Regular webinars and professional development",
                  "Accessible content for diverse learning needs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <blockquote className="mt-8 border-l-4 border-white/30 pl-4 italic">
                "This platform has been transformational for our district's inclusion efforts. The resources and community support are invaluable."
                <footer className="mt-2 font-medium not-italic">
                  — Dr. James Wilson, District Superintendent
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
