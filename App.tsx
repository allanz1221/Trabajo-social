
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Program from './components/Program.tsx';
import MapSection from './components/MapSection.tsx';
import Footer from './components/Footer.tsx';
import { useReveal } from './hooks/useReveal.ts';

const App: React.FC = () => {
  // Fix: Initialize scroll reveal animations for elements with the .reveal class
  useReveal();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Program />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
