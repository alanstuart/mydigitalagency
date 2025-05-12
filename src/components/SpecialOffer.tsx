import React, { useState, useEffect } from 'react';
import { BadgePercent, Clock } from 'lucide-react';

const SpecialOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    // Calculate immediately and then set interval
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-cta-pattern bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/70"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center glass-card p-8 md:p-12 border border-indigo-500/30 glow">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/50 text-indigo-300 mb-6">
            <BadgePercent size={18} className="mr-2" />
            Limited Time Offer
          </div>
          
          <h2 className="heading-lg mb-4">
            <span className="gradient-text">15% OFF</span> For The First 5 Clients
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Launch your next-level digital presence with our premium services at a special introductory rate. 
            This offer is limited to the first 5 clients only.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-8">
            <p className="text-gray-400 mb-3 flex items-center justify-center">
              <Clock size={18} className="mr-2" /> Offer Ends In:
            </p>
            <div className="flex justify-center space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold border border-indigo-500/30">
                    {value}
                  </div>
                  <p className="text-gray-400 text-xs mt-2 capitalize">{unit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#packages" className="btn btn-primary">
              View Packages
            </a>
            <a href="#contact" className="btn btn-secondary">
              Claim Your Discount
            </a>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            *Discount applies to all packages for the first 3 months of service
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;