import React, { useState, useEffect, useCallback } from 'react';
import { Power, Check, X } from 'lucide-react';

interface FunctionalToggleProps {
  /** Initial state of the toggle */
  initialState?: boolean;
  /** Callback function called when toggle state changes */
  onChange?: (isActive: boolean) => void;
  /** Label text for the toggle */
  label?: string;
  /** Size variant of the toggle */
  size?: 'small' | 'medium' | 'large';
  /** Color theme of the toggle */
  theme?: 'default' | 'success' | 'warning' | 'danger';
  /** Whether the toggle is disabled */
  disabled?: boolean;
  /** Custom class name */
  className?: string;
  /** Unique identifier */
  id?: string;
}

const FunctionalToggle: React.FC<FunctionalToggleProps> = ({
  initialState = false,
  onChange,
  label = 'Toggle',
  size = 'medium',
  theme = 'default',
  disabled = false,
  className = '',
  id
}) => {
  const [isActive, setIsActive] = useState(initialState);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Handle toggle state change
  const handleToggle = useCallback(() => {
    if (disabled) return;
    
    const newState = !isActive;
    setIsActive(newState);
    setIsPressed(true);
    
    // Call onChange callback if provided
    onChange?.(newState);
    
    // Create audio feedback
    if ('AudioContext' in window) {
      try {
        const audioContext = new AudioContext();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Different frequencies for on/off states
        oscillator.frequency.setValueAtTime(newState ? 800 : 400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(newState ? 1000 : 300, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      } catch (error) {
        // Silently fail if audio context is not available
        console.debug('Audio feedback not available');
      }
    }
    
    // Reset pressed state
    setTimeout(() => setIsPressed(false), 150);
  }, [isActive, disabled, onChange]);

  // Keyboard event handler
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  }, [handleToggle]);

  // Focus handlers
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Generate unique ID if not provided
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  // Size classes
  const sizeClasses = {
    small: 'functional-toggle--small',
    medium: 'functional-toggle--medium',
    large: 'functional-toggle--large'
  };

  // Theme classes
  const themeClasses = {
    default: 'functional-toggle--default',
    success: 'functional-toggle--success',
    warning: 'functional-toggle--warning',
    danger: 'functional-toggle--danger'
  };

  return (
    <div className={`functional-toggle-wrapper ${className}`}>
      {/* Toggle Button */}
      <button
        id={toggleId}
        className={`
          functional-toggle
          ${sizeClasses[size]}
          ${themeClasses[theme]}
          ${isActive ? 'functional-toggle--active' : 'functional-toggle--inactive'}
          ${isPressed ? 'functional-toggle--pressed' : ''}
          ${isFocused ? 'functional-toggle--focused' : ''}
          ${disabled ? 'functional-toggle--disabled' : ''}
        `.trim()}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        role="switch"
        aria-checked={isActive}
        aria-label={label}
        aria-describedby={`${toggleId}-description`}
        tabIndex={disabled ? -1 : 0}
      >
        {/* Background Track */}
        <div className="functional-toggle__track">
          <div className="functional-toggle__track-fill"></div>
        </div>

        {/* Sliding Thumb */}
        <div className="functional-toggle__thumb">
          <div className="functional-toggle__thumb-inner">
            {/* Icon based on state */}
            {isActive ? (
              <Check size={size === 'small' ? 12 : size === 'large' ? 20 : 16} />
            ) : (
              <X size={size === 'small' ? 12 : size === 'large' ? 20 : 16} />
            )}
          </div>
          
          {/* Ripple effect */}
          <div className="functional-toggle__ripple"></div>
        </div>

        {/* State indicators */}
        <div className="functional-toggle__indicators">
          <span className="functional-toggle__indicator functional-toggle__indicator--off">
            OFF
          </span>
          <span className="functional-toggle__indicator functional-toggle__indicator--on">
            ON
          </span>
        </div>
      </button>

      {/* Label */}
      <label 
        htmlFor={toggleId}
        className={`functional-toggle__label ${disabled ? 'functional-toggle__label--disabled' : ''}`}
      >
        {label}
      </label>

      {/* Screen reader description */}
      <div 
        id={`${toggleId}-description`}
        className="functional-toggle__description"
      >
        {isActive ? 'Currently enabled' : 'Currently disabled'}. Press Enter or Space to toggle.
      </div>
    </div>
  );
};

export default FunctionalToggle;