
import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-[95vh] md:h-auto md:min-h-screen flex items-center md:items-start justify-center overflow-hidden">
      {/* Background Image: Mural Vitral Universidad de Sonora */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/pDYJbLk/IMG-20260118-WA0007.jpg')" }}
      >
        {/* Predominant Blue Overlay - Increased opacity to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B5C]/90 via-[#003B5C]/75 to-[#003B5C]/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-40 md:pt-60 pb-12 md:pb-32">
        <div className="animate-fade-up">
          <div className="mb-6 inline-block bg-[#FFB81C]/90 backdrop-blur-md border border-[#FFB81C] px-6 py-2 rounded-full text-[#003B5C] font-black text-[10px] md:text-sm tracking-[0.2em] uppercase shadow-2xl">
            Sede Universidad de Sonora Campus Navojoa
          </div>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-white text-[10px] md:text-xl font-medium mb-4 drop-shadow-md tracking-[0.4em] uppercase bg-[#003B5C]/30 inline-block px-4 py-1 rounded-lg backdrop-blur-sm">
            Facultad Interdisciplinaria de Ciencias Sociales <br />Departamento de Ciencias Sociales campus Navojoa 
            <br />Departamento de Trabajo Social campus Hermosillo <br /><br />
             <span className="text-[#FFB81C] italic">invitan al </span>
          </h2>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl mb-8 leading-[1.1] text-white drop-shadow-2xl shadow-black">
            II Encuentro <br />
            <span className="text-[#FFB81C] italic drop-shadow-md">Interdisciplinario de Trabajo Social</span>
          </h1>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-white text-sm md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg px-4 italic bg-[#003B5C]/20 rounded-xl py-2 backdrop-blur-sm">
            “Prácticas en contextos de diversidad, desafíos y transformación social”
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-4xl mx-auto mb-14 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-[#003B5C]/60 backdrop-blur-md p-4 md:p-8 rounded-3xl border border-white/20 shadow-xl group hover:border-[#FFB81C]/50 transition-all hover:bg-[#003B5C]/80">
            <Calendar className="text-[#FFB81C] mx-auto mb-2 md:mb-4 w-6 h-6 md:w-10 md:h-10 animate-float" />
            <p className="text-white font-black text-[10px] md:text-xl drop-shadow-md">29-31</p>
            <p className="text-[#FFB81C] text-[8px] md:text-xs font-bold uppercase tracking-widest">Enero 2026</p>
          </div>
          
          <div className="bg-[#003B5C]/60 backdrop-blur-md p-4 md:p-8 rounded-3xl border border-white/20 shadow-xl group hover:border-[#FFB81C]/50 transition-all hover:bg-[#003B5C]/80">
            <MapPin className="text-[#FFB81C] mx-auto mb-2 md:mb-4 w-6 h-6 md:w-10 md:h-10 animate-float" style={{ animationDelay: '0.5s' }} />
            <p className="text-white font-black text-[10px] md:text-xl uppercase drop-shadow-md">Campus</p>
            <p className="text-[#FFB81C] text-[8px] md:text-xs font-bold uppercase tracking-widest">Navojoa</p>
          </div>
          
          <a href="#registro" className="block bg-[#003B5C]/60 backdrop-blur-md p-4 md:p-8 rounded-3xl border border-white/20 shadow-xl group hover:border-[#FFB81C]/50 transition-all hover:bg-[#003B5C]/80 cursor-pointer">
            <Users className="text-[#FFB81C] mx-auto mb-2 md:mb-4 w-6 h-6 md:w-10 md:h-10 animate-float" style={{ animationDelay: '1s' }} />
            <p className="text-white font-black text-[10px] md:text-xl uppercase drop-shadow-md">Abierto</p>
            <p className="text-[#FFB81C] text-[8px] md:text-xs font-bold uppercase tracking-widest group-hover:underline">Registro</p>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-up px-6" style={{ animationDelay: '1s' }}>
          <a 
            href="#programa" 
            className="group inline-flex items-center justify-center px-10 py-5 bg-[#FFB81C] text-[#003B5C] font-black rounded-full hover:brightness-110 transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest text-[11px] w-full sm:w-auto border-2 border-[#FFB81C]"
          >
            Ver Programa
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </div>
      </div>
      
      {/* Animated bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[1]">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,120V0Z" fill="#F9FAFB" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#F9FAFB" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#F9FAFB"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
