import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechVision',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'Quantnex transformed our online presence completely. Within 6 months of launching our new website and implementing their SEO strategy, we saw a 156% increase in organic traffic and a 42% improvement in lead quality.',
    rating: 5,
    highlight: '156% increase in organic traffic',
  },
  {
    id: 2,
    name: 'Michael Torres',
    position: 'Founder, GreenEarth',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'The ROI we\'ve seen from Quantnex\'s work has been incredible. Their strategic approach to our e-commerce site redesign and product descriptions led to an 87% increase in conversion rate and an additional £24,000 in monthly revenue.',
    rating: 5,
    highlight: '£24,000 additional monthly revenue',
  },
  {
    id: 3,
    name: 'Jessica Chen',
    position: 'Director, MindfulHealth',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'What sets Quantnex apart is their focus on measurable results. Their local SEO campaign increased our Google Business profile views by 314% and website bookings by 215% in just 3 months. We\'re seeing a 3x return on our digital investment.',
    rating: 5,
    highlight: '3x return on digital investment',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section bg-gray-950/50 relative">
      <div className="container mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            The <span className="gradient-text">Results</span> Speak For Themselves
          </h2>
          <p className="text-gray-300">
            Don\'t just take our word for it. Here\'s what our clients have to say about the measurable impact of our work.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-8 -top-8">
            <Quote size={64} className="text-indigo-600/20" />
          </div>
          
          <div className="glass-card p-8 md:p-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Client Avatar & Info */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-indigo-500 p-1">
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{currentTestimonial.name}</h3>
                <p className="text-gray-400 mb-3">{currentTestimonial.position}</p>
                <div className="flex space-x-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-3 mt-2">
                  <p className="text-indigo-300 font-medium text-center">
                    "{currentTestimonial.highlight}"
                  </p>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="md:col-span-8">
                <blockquote className="text-gray-300 text-lg leading-relaxed italic mb-6">
                  {currentTestimonial.quote}
                </blockquote>
                
                <div className="flex justify-between items-center mt-8">
                  <p className="text-gray-400">
                    {currentIndex + 1} of {testimonials.length}
                  </p>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={goToPrevious}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-indigo-600 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button 
                      onClick={goToNext}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-indigo-600 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn btn-primary">
            Join Our Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;