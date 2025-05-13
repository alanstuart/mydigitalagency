import React from 'react';
import { Code, Globe, Lightbulb, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} />,
    title: 'Basic Websites',
    description: 'Simple, effective websites perfect for small businesses and personal portfolios.',
    benefits: [
      'Clean, modern designs',
      'Mobile-friendly layouts',
      'Contact forms',
      'Easy to maintain'
    ]
  },
  {
    icon: <Code size={32} />,
    title: 'Advanced Development',
    description: 'Custom web applications and complex websites built with modern technologies.',
    benefits: [
      'Custom functionality',
      'Database integration',
      'API development',
      'Performance optimization'
    ]
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Technical Consulting',
    description: 'Expert guidance on technology choices and development best practices.',
    benefits: [
      'Technology recommendations',
      'Code review',
      'Performance audits',
      'Best practices guidance'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Expert <span className="gradient-text">Development Services</span>
          </h2>
          <p className="text-gray-300">
            From simple websites to complex web applications, I deliver solutions that match your needs and budget.
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
              
              <h4 className="font-semibold text-indigo-400 mb-3">Key Features:</h4>
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
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;