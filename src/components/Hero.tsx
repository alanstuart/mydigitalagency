import React from 'react';
import { ArrowRight, Monitor, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-700/50 text-indigo-400 text-sm mb-6">
              <span className="animate-pulse-slow mr-2 h-2 w-2 rounded-full bg-indigo-500"></span>
              Web Development
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="block">We build</span> 
              <span className="gradient-text">clean, modern</span> 
              <span className="block">websites that</span>
              <span className="gradient-text">just work</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="btn btn-primary">
                Start Your Project <ArrowRight size={20} className="ml-2" />
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                View Portfolio
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <Monitor className="text-indigo-400" size={20} />
                <span className="text-gray-300">Clean Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="text-indigo-400" size={20} />
                <span className="text-gray-300">Modern Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-indigo-400" size={20} />
                <span className="text-gray-300">Fast Loading</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-900/40 mix-blend-overlay" />
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8369520/pexels-photo-8369520.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-70" />
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-indigo-500/20 backdrop-blur-sm rounded-xl border border-indigo-500/30 animate-float-slow"></div>
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-500/30 animate-float"></div>
              <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-cyan-500/20 backdrop-blur-sm rounded-xl border border-cyan-500/30 animate-float-fast"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;