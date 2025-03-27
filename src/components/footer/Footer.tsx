
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-inclusion-950 text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-4">
              Inclusion<span className="text-accent-blue-400">Learn</span>
            </h3>
            <p className="text-inclusion-300 mb-4">
              An interactive platform dedicated to supporting educators, parents, and students in creating inclusive learning environments.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-inclusion-800 hover:bg-accent-blue-600 transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <SocialIcon type={social} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              {['Courses', 'Resources', 'Community', 'Events', 'Blog', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-inclusion-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Mission', 'Team', 'Careers', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-inclusion-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Subscribe</h4>
            <p className="text-inclusion-300 mb-4">
              Stay updated with the latest inclusive education resources and news.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-inclusion-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent-blue-500 w-full"
              />
              <button
                type="submit"
                className="bg-accent-blue-600 px-4 py-2 rounded-r-md hover:bg-accent-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-inclusion-800 text-center">
          <p className="text-inclusion-400 text-sm">
            &copy; {new Date().getFullYear()} InclusionLearn. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6 text-sm">
            <a href="#" className="text-inclusion-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-inclusion-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-inclusion-400 hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ type }) => {
  switch (type) {
    case 'twitter':
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 4.84c-.8.36-1.66.6-2.56.71.92-.55 1.62-1.42 1.95-2.46-.86.51-1.81.88-2.83 1.08-.81-.86-1.97-1.4-3.25-1.4-2.46 0-4.46 2-4.46 4.46 0 .35.04.69.12 1.02C7.56 8.1 4.74 6.32 2.65 3.7c-.38.66-.6 1.42-.6 2.23 0 1.55.79 2.91 1.99 3.71-.73-.02-1.42-.22-2.02-.55v.06c0 2.16 1.54 3.97 3.58 4.38-.37.1-.77.15-1.17.15-.29 0-.56-.03-.84-.08.57 1.77 2.22 3.06 4.17 3.09-1.53 1.2-3.45 1.91-5.55 1.91-.36 0-.72-.02-1.07-.06 1.98 1.27 4.32 2.01 6.84 2.01 8.21 0 12.7-6.8 12.7-12.7 0-.19 0-.39-.01-.58.87-.63 1.63-1.42 2.23-2.32z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.9 4.9 0 0 0-1.77 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.77 4.9 4.9 0 0 0 1.77 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.77-1.153 4.9 4.9 0 0 0 1.153-1.77c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.77 4.9 4.9 0 0 0-1.77-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.208 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.136.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.208 1.505-.344 1.858-.182.466-.399.8-.748 1.15-.35.35-.684.566-1.15.748-.353.136-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.208-1.858-.344a3.097 3.097 0 0 1-1.15-.748 3.097 3.097 0 0 1-.748-1.15c-.136-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.208-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.136.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 11.531a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm0-8.468a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm6.538-.203a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;
