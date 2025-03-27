
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo py-4',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent'
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-inclusion-900 font-display font-bold text-xl tracking-tight"
        >
          Inclusion<span className="text-accent-blue-500">Learn</span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          <a href="#courses" className="nav-link">
            Courses
          </a>
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#testimonials" className="nav-link">
            Testimonials
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="px-4 py-2 text-inclusion-700 hover:text-inclusion-900 transition-colors"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-accent-blue-500 text-white rounded-md hover:bg-accent-blue-600 transition-colors shadow-sm"
          >
            Sign up
          </a>
        </div>

        <button
          className="block md:hidden text-inclusion-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-300 ease-out-expo pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container px-4 mx-auto flex flex-col space-y-6 items-center text-center">
          <a
            href="#courses"
            className="text-xl font-medium text-inclusion-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </a>
          <a
            href="#features"
            className="text-xl font-medium text-inclusion-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-xl font-medium text-inclusion-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-xl font-medium text-inclusion-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>

          <div className="pt-6 flex flex-col space-y-4 w-full max-w-xs">
            <a
              href="/login"
              className="w-full px-4 py-3 text-center border border-inclusion-200 text-inclusion-700 rounded-md hover:bg-inclusion-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </a>
            <a
              href="/signup"
              className="w-full px-4 py-3 text-center bg-accent-blue-500 text-white rounded-md hover:bg-accent-blue-600 transition-colors shadow-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
