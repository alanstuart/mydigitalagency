import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'TechVision Rebrand',
    category: 'Web Development & SEO',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete digital transformation for a software company, including new website, SEO strategy, and content marketing.',
    results: [
      '156% increase in organic traffic within 6 months',
      '42% improvement in lead quality',
      '3.2x ROI on digital marketing spend'
    ],
    link: '#',
  },
  {
    id: 2,
    title: 'GreenEarth E-commerce',
    category: 'Web Development & Copywriting',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Custom e-commerce solution with strategic product descriptions and conversion-focused user experience.',
    results: [
      '87% increase in conversion rate',
      '£24,000 additional monthly revenue',
      '35% reduction in cart abandonment'
    ],
    link: '#',
  },
  {
    id: 3,
    title: 'MindfulHealth Local SEO',
    category: 'SEO & Content Strategy',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive local SEO campaign for a wellness clinic, including content strategy and local citation building.',
    results: [
      '314% increase in Google Business profile views',
      '215% more website bookings in 3 months',
      'First page rankings for 28 targeted local keywords'
    ],
    link: '#',
  },
];

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Our <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-300">
            We don't just build websites — we create digital assets that measurably improve your business performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project Selector Sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                    activeProject.id === project.id
                      ? 'bg-indigo-900/30 border-l-4 border-indigo-500'
                      : 'bg-gray-800/30 hover:bg-gray-800/50'
                  }`}
                >
                  <h3 className={`font-semibold mb-1 ${
                    activeProject.id === project.id ? 'text-white' : 'text-gray-300'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.category}</p>
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="btn btn-secondary w-full">
                Discuss Your Project <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-8">
            <div className="card overflow-hidden h-full flex flex-col">
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{activeProject.title}</h3>
                  <p className="text-indigo-300">{activeProject.category}</p>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-gray-300 mb-6">{activeProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Measurable Results:</h4>
                  <ul className="space-y-2">
                    {activeProject.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={activeProject.link} 
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full case study <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;