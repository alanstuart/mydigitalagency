import React from 'react';
import { Globe, Layers, Zap, ArrowUpRight, Code, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    description: 'Cutting-edge web applications built with modern frameworks and optimized for performance.',
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'PWA Support'],
    color: 'electric-blue',
    delay: '0s'
  },
  {
    icon: <Database size={32} />,
    title: 'Backend Systems',
    description: 'Scalable server architectures and APIs designed for high-performance applications.',
    features: ['Node.js/Python', 'Microservices', 'Cloud Integration', 'Real-time Data'],
    color: 'neon-green',
    delay: '0.2s'
  },
  {
    icon: <Shield size={32} />,
    title: 'Security Solutions',
    description: 'Enterprise-grade security implementations to protect your digital assets.',
    features: ['Authentication', 'Data Encryption', 'Vulnerability Testing', 'Compliance'],
    color: 'cyber-purple',
    delay: '0.4s'
  }
];

const TechServices: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass glow-blue mb-6">
            <Code size={16} className="text-electric-blue mr-2" />
            <span className="text-electric-blue font-mono text-sm tracking-wider">SERVICES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Advanced </span>
            <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            Leveraging cutting-edge technologies to build scalable, secure, and high-performance solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`glass p-8 rounded-xl transition-all duration-500 hover:scale-105 group cursor-pointer glow-${service.color}`}
              style={{ animationDelay: service.delay }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-${service.color}`}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-1 h-1 bg-${service.color} rounded-full mr-3`}></div>
                    <span className="text-gray-400 font-mono text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className={`flex items-center text-${service.color} group-hover:text-white transition-colors duration-300`}>
                <span className="font-mono text-sm tracking-wider">EXPLORE</span>
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-xl max-w-2xl mx-auto holographic">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 mb-6">Let's discuss your next project and bring your vision to life.</p>
            <button className="cyber-btn bg-gradient-to-r from-electric-blue to-cyber-purple border-none text-white">
              <Zap size={16} className="mr-2" />
              Start Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechServices;