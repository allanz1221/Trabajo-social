
import React from 'react';
import { Info, BookOpen, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="acerca" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div className="relative reveal order-2 lg:order-1">
            <div className="relative z-10 aspect-square md:aspect-[4/5] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop" 
                alt="Libros y educación" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-40 h-40 md:w-64 md:h-64 bg-[#003B5C] rounded-3xl rotate-6 -z-10 opacity-10"></div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="flex items-center space-x-2 text-[#FFB81C] mb-4">
              <Info size={24} />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">Introducción</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-[#003B5C] mb-6 md:mb-8 leading-tight">
              Excelencia en <span className="text-[#FFB81C] italic">Trabajo Social</span>
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Este segundo encuentro interdisciplinario es la respuesta de la Universidad de Sonora ante la necesidad de formar profesionales con una visión crítica y humana, capaces de transformar sus comunidades.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="bg-[#003B5C]/10 p-2 rounded-lg text-[#003B5C] shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Misión Institucional</h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Promover la justicia social a través de la educación de calidad.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="bg-[#003B5C]/10 p-2 rounded-lg text-[#003B5C] shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Vinculación Estratégica</h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Conexión directa con organismos de impacto social y comunitario.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
