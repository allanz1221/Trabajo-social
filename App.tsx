
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import Impact from './components/Impact';
import Program from './components/Program';
import Footer from './components/Footer';

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
      </main>
      <Footer />
    </div>
  );
};

export default App;
