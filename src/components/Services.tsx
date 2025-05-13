import React from 'react';
import { Globe, Layout, Lightbulb, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} />,
    title: 'Simple Websites',
    description: 'Clean, modern websites that work perfectly for small businesses and personal projects.',
    benefits: [
      'Easy to update content',
      'Mobile-friendly design',
      'Contact forms',
      'Social media links'
    ]
  },
  {
    icon: <Layout size={32} />,
    title: 'Business Websites',
    description: 'Professional websites that help your business look great online.',
    benefits: [
      'Professional design',
      'Product showcases',
      'Business hours',
      'Location maps'
    ]
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Website Updates',
    description: 'Keep your existing website fresh and working well with regular updates and improvements.',
    benefits: [
      'Content updates',
      'New features',
      'Performance fixes',
      'Regular maintenance'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Clean, Modern <span className="gradient-text">Websites</span>
          </h2>
          <p className="text-gray-300">
            We build simple, effective websites that work well and look great.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card p-8 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-indigo-500/10"
            >
              <div className="w-16 h-16 rounded-lg bg-indigo-900/50 flex items-center justify-center mb-6 text-indigo-400">
                {service.icon}
              </div>
              <h3 className="heading-sm mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <h4 className="font-semibold text-indigo-400 mb-3">Features:</h4>
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Learn more <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-primary">
            Start Your Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;