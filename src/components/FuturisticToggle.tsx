import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

interface FuturisticToggleProps {
  onToggle?: (isDayMode: boolean) => void;
  initialMode?: boolean; // true for day, false for night
}

const FuturisticToggle: React.FC<FuturisticToggleProps> = ({ 
  onToggle, 
  initialMode = false 
}) => {
  const [isDayMode, setIsDayMode] = useState(initialMode);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Handle toggle with sound effect simulation
  const handleToggle = () => {
    const newMode = !isDayMode;
    setIsDayMode(newMode);
    setIsPressed(true);
    
    // Simulate futuristic sound effect
    if ('AudioContext' in window) {
      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(newMode ? 800 : 400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(newMode ? 1200 : 200, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    setTimeout(() => setIsPressed(false), 150);
    onToggle?.(newMode);
  };

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  // Particle animation effect
  const ParticleEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 rounded-full animate-pulse ${
            isDayMode ? 'bg-yellow-300' : 'bg-blue-300'
          }`}
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2s'
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="futuristic-toggle-container">
      {/* Main Toggle Button */}
      <button
        className={`futuristic-toggle ${isDayMode ? 'day-mode' : 'night-mode'} ${
          isHovered ? 'hovered' : ''
        } ${isPressed ? 'pressed' : ''}`}
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={handleKeyDown}
        aria-label={`Switch to ${isDayMode ? 'night' : 'day'} mode`}
        aria-pressed={isDayMode}
        role="switch"
        tabIndex={0}
      >
        {/* Background Gradient */}
        <div className="toggle-background">
          <div className="gradient-layer"></div>
          <div className="holographic-layer"></div>
          <ParticleEffect />
        </div>

        {/* Sliding Track */}
        <div className="toggle-track">
          <div className="track-glow"></div>
          
          {/* Slider Thumb */}
          <div className={`toggle-thumb ${isDayMode ? 'day-position' : 'night-position'}`}>
            <div className="thumb-glow"></div>
            <div className="thumb-inner">
              {isDayMode ? (
                <Sun size={16} className="icon sun-icon" />
              ) : (
                <Moon size={16} className="icon moon-icon" />
              )}
            </div>
            
            {/* Trailing Effect */}
            <div className="thumb-trail"></div>
          </div>

          {/* Mode Indicators */}
          <div className="mode-indicators">
            <div className={`indicator day-indicator ${isDayMode ? 'active' : ''}`}>
              <Sparkles size={12} />
            </div>
            <div className={`indicator night-indicator ${!isDayMode ? 'active' : ''}`}>
              <div className="star-field">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="star" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status Text */}
        <div className="status-text">
          <span className="mode-label">
            {isDayMode ? 'DAY MODE' : 'NIGHT MODE'}
          </span>
        </div>
      </button>

      {/* Ambient Glow Effect */}
      <div className={`ambient-glow ${isDayMode ? 'day-glow' : 'night-glow'}`}></div>
    </div>
  );
};

export default FuturisticToggle;