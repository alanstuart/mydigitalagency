import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ErrorFallback from './components/ErrorFallback';

const App: React.FC = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    document.title = "AlephSpark | Modern Web Development Solutions";
    // Delay particle background initialization
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-space-grotesk text-white bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 min-h-screen overflow-hidden relative">
      {showParticles && (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload()}
        >
          <ParticleBackground />
        </ErrorBoundary>
      )}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;