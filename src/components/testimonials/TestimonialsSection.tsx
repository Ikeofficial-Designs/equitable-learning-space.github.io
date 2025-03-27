
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "This platform has transformed the way I approach teaching in my diverse classroom. The resources and strategies are practical, evidence-based, and easy to implement. My students are more engaged than ever!",
      name: "Sarah Johnson",
      title: "Elementary School Teacher",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5
    },
    {
      id: 2,
      content: "As a parent of a child with learning differences, I've found the resources on this platform invaluable. The courses on supporting students with disabilities have given me tools to better advocate for my child in school settings.",
      name: "Michael Rodriguez",
      title: "Parent & Education Advocate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5
    },
    {
      id: 3,
      content: "The AI-driven learning path feature is remarkable. It's helped our district provide personalized professional development to teachers based on their specific classroom demographics and challenges.",
      name: "Dr. Lisa Chen",
      title: "District Curriculum Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 4
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-inclusion-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="badge badge-primary mb-4">Testimonials</div>
          <h2 className="section-heading">What Our Community Says</h2>
          <p className="section-subheading">
            Hear from educators, parents, and administrators who have used our platform to create more inclusive learning environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-card relative animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="absolute top-0 -mt-6 left-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-6 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-inclusion-200'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.934L4.618 19 5.5 12.625 1 7.934l6.232-.908L10 2l2.768 5.026 6.232.908-4.5 4.691.882 6.375L10 15.934z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-inclusion-700 mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="mt-auto">
                <h4 className="font-medium text-inclusion-900">{testimonial.name}</h4>
                <p className="text-sm text-inclusion-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 md:p-12 bg-white rounded-2xl shadow-card text-center animate-slide-up">
          <h3 className="text-2xl font-bold text-inclusion-900 mb-6">Ready to transform your educational approach?</h3>
          <p className="text-inclusion-600 max-w-2xl mx-auto mb-8">
            Join thousands of educators and parents who are already using our platform to create more inclusive learning environments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="px-6 py-3 bg-accent-blue-500 text-white rounded-md hover:bg-accent-blue-600 transition-colors shadow-sm"
            >
              Get Started for Free
            </a>
            <a 
              href="#" 
              className="px-6 py-3 border border-inclusion-200 text-inclusion-700 rounded-md hover:bg-inclusion-50 transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
