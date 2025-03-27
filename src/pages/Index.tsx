
import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import CoursesSection from '../components/courses/CoursesSection';
import FeaturesSection from '../components/features/FeaturesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import CtaSection from '../components/cta/CtaSection';
import Footer from '../components/footer/Footer';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && document.querySelector(link.hash)) {
        e.preventDefault();
        
        const section = document.querySelector(link.hash);
        
        if (section) {
          window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    
    return () => document.removeEventListener('click', handleHashLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CoursesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
