import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import TechHeader from './components/TechHeader';
import TechHero from './components/TechHero';
import TechServices from './components/TechServices';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechBackground from './components/TechBackground';
import ErrorFallback from './components/ErrorFallback';
import './styles/tech-theme.css';

const App: React.FC = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    document.title = "AlephSpark | Modern Web Development Solutions";
    // Delay background initialization
    const timer = setTimeout(() => {
      setShowBackground(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-inter text-white min-h-screen overflow-x-hidden relative" style={{ background: 'var(--primary-bg)' }}>
      {showBackground && (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload()}
        >
          <TechBackground />
        </ErrorBoundary>
      )}
      <div className="relative z-10">
        <TechHeader />
        <main>
          <TechHero />
          <TechServices />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;