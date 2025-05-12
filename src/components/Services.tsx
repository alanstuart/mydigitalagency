import React from 'react';
import { Globe, Workflow, Lightbulb, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    description: 'We craft responsive, performance-optimized websites that serve as powerful business tools, not just digital brochures.',
    benefits: [
      'Faster load times for better user experience and SEO',
      'Device-responsive designs that work on all screen sizes',
      'Strategic UX that guides visitors toward conversion',
      'Built-in analytics to track user behavior'
    ]
  },
  {
    icon: <Workflow size={32} />,
    title: 'SEO Strategy',
    description: 'Our data-driven approach targets high-intent keywords to attract qualified traffic that\'s ready to convert.',
    benefits: [
      'Targeted keyword research based on business goals',
      'Technical SEO for improved search visibility',
      'Local SEO optimization for geographic targeting',
      'Regular performance reporting with actionable insights'
    ]
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Conversion Copywriting',
    description: 'We create compelling content that speaks directly to your ideal customers, addressing their pain points and motivating action.',
    benefits: [
      'Messaging that resonates with your target audience',
      'Clear value propositions that differentiate your business',
      'Strategic calls-to-action that increase conversion rates',
      'Brand voice consistency across all platforms'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Complete <span className="gradient-text">Digital Solutions</span> for Business Growth
          </h2>
          <p className="text-gray-300">
            Our integrated approach ensures all elements of your digital presence work together to achieve measurable business results.
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
              
              <h4 className="font-semibold text-indigo-400 mb-3">Business Impact:</h4>
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#packages" 
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Learn more <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#packages" className="btn btn-primary">
            Explore Our Service Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;