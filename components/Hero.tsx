
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('https://picsum.photos/id/160/1920/1080?grayscale')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/90 to-[#003B5C]/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-6 inline-block bg-unison-gold/20 backdrop-blur-sm border border-unison-gold px-4 py-1 rounded-full text-unison-gold font-bold text-sm tracking-widest uppercase">
          Universidad de Sonora Campus Navojoa
        </div>
        
        <h2 className="text-xl md:text-2xl font-medium mb-2 opacity-90">Licenciatura en Educación & Trabajo Social</h2>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          II Encuentro de <br />
          <span className="text-unison-gold">Trabajo Social</span>
        </h1>
        
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-12 italic font-light">
          “Prácticas en contextos de diversidad, desafíos y transformación social”
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-full mb-3">
              <Calendar className="text-unison-gold" size={24} />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-unison-gold mb-1">Fecha</span>
            <p className="font-medium text-lg">29, 30 y 31 de Enero, 2026</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-full mb-3">
              <MapPin className="text-unison-gold" size={24} />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-unison-gold mb-1">Lugar</span>
            <p className="font-medium text-lg">Navojoa, Sonora, México</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-full mb-3">
              <Users className="text-unison-gold" size={24} />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-unison-gold mb-1">Participantes</span>
            <p className="font-medium text-lg">Docentes, Estudiantes y Profesionales</p>
          </div>
        </div>

        <div className="mt-16">
          <a 
            href="#acerca" 
            className="inline-flex items-center px-8 py-4 bg-unison-gold text-unison-blue font-bold rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Saber Más
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
