
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import Impact from './components/Impact';
import Program from './components/Program';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Re-initialize intersection observer for dynamic reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Objectives />
        <Impact />
        <Program />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
