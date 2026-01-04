
import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-[90vh] md:h-screen min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background with academic architecture imagery */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20000ms] scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08759df9a13?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B5C]/95 via-[#003B5C]/85 to-[#003B5C]/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-10">
        <div className="animate-fade-up">
          <div className="mb-4 inline-block bg-[#FFB81C]/20 backdrop-blur-md border border-[#FFB81C]/40 px-5 py-1.5 rounded-full text-[#FFB81C] font-bold text-[10px] md:text-sm tracking-[0.15em] uppercase shadow-lg">
            Universidad de Sonora Campus Navojoa
          </div>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-white text-[11px] md:text-xl font-medium mb-4 opacity-90 tracking-[0.3em]">
           TRABAJO SOCIAL
          </h2>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl mb-6 leading-[1.1] text-white">
            II Encuentro <br />
            <span className="text-[#FFB81C] italic">Interdisciplinario</span>
          </h1>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-white text-sm md:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed opacity-80 px-4">
            “Prácticas en contextos de diversidad, desafíos y transformación social”
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <Calendar className="text-[#FFB81C] mx-auto mb-2 w-5 h-5 md:w-8 md:h-8" />
            <p className="text-white font-bold text-[10px] md:text-lg">29-31 Ene</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <MapPin className="text-[#FFB81C] mx-auto mb-2 w-5 h-5 md:w-8 md:h-8" />
            <p className="text-white font-bold text-[10px] md:text-lg">Campus</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <Users className="text-[#FFB81C] mx-auto mb-2 w-5 h-5 md:w-8 md:h-8" />
            <p className="text-white font-bold text-[10px] md:text-lg">Registro</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '1s' }}>
          <a 
            href="#acerca" 
            className="group inline-flex items-center justify-center px-10 py-4 bg-[#FFB81C] text-[#003B5C] font-black rounded-full hover:brightness-110 transition-all shadow-xl uppercase tracking-wider text-[11px] w-full sm:w-auto"
          >
            Saber más
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
