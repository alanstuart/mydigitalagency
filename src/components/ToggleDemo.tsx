import React, { useState } from 'react';
import FunctionalToggle from './FunctionalToggle';

const ToggleDemo: React.FC = () => {
  const [toggleStates, setToggleStates] = useState({
    basic: false,
    notifications: true,
    darkMode: false,
    autoSave: true,
    bluetooth: false
  });

  const handleToggleChange = (key: string) => (isActive: boolean) => {
    setToggleStates(prev => ({
      ...prev,
      [key]: isActive
    }));
    
    // Log the change for demonstration
    console.log(`${key} toggled to:`, isActive);
  };

  return (
    <div className="toggle-demo">
      <div className="demo-container">
        <h2 className="demo-title">Functional Toggle Components</h2>
        
        <div className="demo-grid">
          {/* Basic Toggle */}
          <div className="demo-item">
            <h3>Basic Toggle</h3>
            <FunctionalToggle
              label="Enable Feature"
              initialState={toggleStates.basic}
              onChange={handleToggleChange('basic')}
              id="basic-toggle"
            />
          </div>

          {/* Different Sizes */}
          <div className="demo-item">
            <h3>Size Variants</h3>
            <div className="demo-row">
              <FunctionalToggle
                label="Small"
                size="small"
                initialState={true}
                onChange={handleToggleChange('small')}
              />
              <FunctionalToggle
                label="Medium"
                size="medium"
                initialState={true}
                onChange={handleToggleChange('medium')}
              />
              <FunctionalToggle
                label="Large"
                size="large"
                initialState={true}
                onChange={handleToggleChange('large')}
              />
            </div>
          </div>

          {/* Different Themes */}
          <div className="demo-item">
            <h3>Theme Variants</h3>
            <div className="demo-row">
              <FunctionalToggle
                label="Default"
                theme="default"
                initialState={true}
                onChange={handleToggleChange('default')}
              />
              <FunctionalToggle
                label="Success"
                theme="success"
                initialState={true}
                onChange={handleToggleChange('success')}
              />
              <FunctionalToggle
                label="Warning"
                theme="warning"
                initialState={true}
                onChange={handleToggleChange('warning')}
              />
              <FunctionalToggle
                label="Danger"
                theme="danger"
                initialState={true}
                onChange={handleToggleChange('danger')}
              />
            </div>
          </div>

          {/* Practical Examples */}
          <div className="demo-item">
            <h3>Practical Examples</h3>
            <div className="demo-settings">
              <FunctionalToggle
                label="Push Notifications"
                theme="default"
                initialState={toggleStates.notifications}
                onChange={handleToggleChange('notifications')}
              />
              <FunctionalToggle
                label="Dark Mode"
                theme="default"
                initialState={toggleStates.darkMode}
                onChange={handleToggleChange('darkMode')}
              />
              <FunctionalToggle
                label="Auto Save"
                theme="success"
                initialState={toggleStates.autoSave}
                onChange={handleToggleChange('autoSave')}
              />
              <FunctionalToggle
                label="Bluetooth"
                theme="default"
                initialState={toggleStates.bluetooth}
                onChange={handleToggleChange('bluetooth')}
              />
            </div>
          </div>

          {/* Disabled State */}
          <div className="demo-item">
            <h3>Disabled State</h3>
            <FunctionalToggle
              label="Disabled Toggle"
              disabled={true}
              initialState={false}
              onChange={handleToggleChange('disabled')}
            />
          </div>
        </div>

        {/* State Display */}
        <div className="demo-state">
          <h3>Current States:</h3>
          <pre>{JSON.stringify(toggleStates, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default ToggleDemo;