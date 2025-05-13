import React, { useState } from 'react';
import { ArrowRight, ExternalLink, ShoppingCart, Code, Rocket } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'BM Supernelo E-commerce',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A modern e-commerce website for BM Supernelo, a supermarket in Costa Rica. The website allows customers to browse products and place orders online.',
    features: [
      'Online product catalog',
      'Shopping cart functionality',
      'Responsive design for all devices',
      'Modern user interface'
    ],
    status: 'In Development',
    link: '#',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'My personal portfolio website showcasing my journey as a web developer and the projects I\'ve worked on.',
    features: [
      'React.js implementation',
      'Responsive design',
      'Modern animations',
      'Project showcase'
    ],
    status: 'Completed',
    link: '#',
  }
];

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300">
            While I'm early in my development journey, I'm passionate about creating impactful web solutions. Here are some of the projects I'm working on.
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
                Start Your Project <ArrowRight size={16} className="ml-2" />
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
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {activeProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-indigo-400">Status: {activeProject.status}</span>
                  {activeProject.status === 'Completed' && (
                    <a 
                      href={activeProject.link} 
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;