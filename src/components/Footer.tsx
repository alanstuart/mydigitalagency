import React from 'react';
import { Code, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="container mx-auto">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code size={32} className="text-indigo-500" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Dev</span>
                <span className="text-indigo-500">Studio</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming ideas into powerful web applications. We build modern, scalable solutions that drive real business growth.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-indigo-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-indigo-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-indigo-400 transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-indigo-400 transition-colors">Technical Consulting</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-indigo-400 transition-colors">API Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-indigo-400 transition-colors">Custom Solutions</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={16} className="text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:hello@devstudio.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  hello@devstudio.com
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="inline-block px-4 py-2 bg-indigo-600/20 text-indigo-400 rounded-lg border border-indigo-600/40 hover:bg-indigo-600/30 transition-all"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8"></div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DevStudio. All rights reserved.
          </p>
          
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;