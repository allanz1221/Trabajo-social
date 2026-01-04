
import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background con imagen profesional de alta calidad */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20000ms] scale-110 animate-[pulse_20s_infinite]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B5C]/95 via-[#003B5C]/70 to-[#003B5C]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="mb-6 inline-block bg-unison-gold/20 backdrop-blur-md border border-unison-gold/50 px-6 py-2 rounded-full text-unison-gold font-bold text-sm tracking-widest uppercase shadow-xl">
            Universidad de Sonora Campus Navojoa
          </div>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-white text-lg md:text-2xl font-light mb-4 opacity-90 tracking-widest">
            LICENCIATURA EN EDUCACIÓN & TRABAJO SOCIAL
          </h2>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 leading-none text-white drop-shadow-2xl">
            II Encuentro <br />
            <span className="text-unison-gold italic">Interdisciplinario</span>
          </h1>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <p className="text-white text-xl md:text-2xl max-w-4xl mx-auto mb-14 font-light leading-relaxed">
            “Prácticas en contextos de diversidad, desafíos y transformación social”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-unison-gold/50 transition-all group">
            <Calendar className="text-unison-gold mx-auto mb-3 animate-float" size={32} />
            <p className="text-white font-bold text-lg">29 - 31 Enero</p>
            <p className="text-white/60 text-xs uppercase tracking-widest">2026</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-unison-gold/50 transition-all group">
            <MapPin className="text-unison-gold mx-auto mb-3 animate-float" size={32} style={{ animationDelay: '0.5s' }} />
            <p className="text-white font-bold text-lg">Campus Navojoa</p>
            <p className="text-white/60 text-xs uppercase tracking-widest">Sonora, México</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-unison-gold/50 transition-all group">
            <Users className="text-unison-gold mx-auto mb-3 animate-float" size={32} style={{ animationDelay: '1s' }} />
            <p className="text-white font-bold text-lg">Presencial</p>
            <p className="text-white/60 text-xs uppercase tracking-widest">Cupo Limitado</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '1.1s' }}>
          <a 
            href="#acerca" 
            className="group inline-flex items-center px-10 py-5 bg-unison-gold text-unison-blue font-black rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider text-xs"
          >
            Saber más del encuentro
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a 
            href="#programa" 
            className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition-all transform hover:scale-105 uppercase tracking-wider text-xs"
          >
            Ver Cronograma
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
