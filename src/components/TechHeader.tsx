import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Zap } from 'lucide-react';
import FuturisticToggle from './FuturisticToggle';

const TechHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass glow-blue py-2 md:py-4' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-3 md:py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="relative">
              <Terminal size={24} className="md:w-8 md:h-8 text-electric-blue group-hover:text-neon-green transition-colors duration-300" />
              <div className="absolute inset-0 bg-electric-blue opacity-20 blur-lg group-hover:bg-neon-green transition-all duration-300"></div>
            </div>
            <span className="text-lg md:text-2xl font-bold tracking-tight font-mono">
              <span className="text-white">Aleph</span>
              <span className="text-electric-blue group-hover:text-neon-green transition-colors duration-300">Spark</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-electric-blue transition-all duration-300 font-medium tracking-wide group text-sm xl:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-purple group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <FuturisticToggle onToggle={(isDayMode) => console.log('Mode:', isDayMode ? 'Day' : 'Night')} />
              </div>
              <button className="cyber-btn text-sm">
                <Zap size={16} className="inline mr-2" />
                Initialize
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none p-1.5 md:p-2 rounded-lg border border-electric-blue/30 hover:border-electric-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass border-t border-electric-blue/20">
          <div className="container mx-auto px-4 md:px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-electric-blue py-2 border-b border-gray-800 transition-colors font-medium text-sm md:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="cyber-btn mt-4 w-full text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Zap size={16} className="inline mr-2" />
                Initialize
              </button>
              <div className="mt-4 flex justify-center">
                <FuturisticToggle onToggle={(isDayMode) => console.log('Mode:', isDayMode ? 'Day' : 'Night')} />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default TechHeader;