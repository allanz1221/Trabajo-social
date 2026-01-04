
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Objectives from './components/Objectives.tsx';
import Impact from './components/Impact.tsx';
import Program from './components/Program.tsx';
import MapSection from './components/MapSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
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
