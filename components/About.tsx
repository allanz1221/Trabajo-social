
import React from 'react';
import { Info, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="acerca" className="py-20 md:py-32 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <div className="relative reveal order-2 lg:order-1">
            <div className="relative z-10 aspect-square md:aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop" 
                alt="Libros y herramientas educativas" 
                className="object-cover w-full h-full transform transition-transform duration-[3000ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-serif text-2xl md:text-3xl italic">"Ciencia y Compromiso"</p>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-80 md:h-80 bg-[#FFB81C] rounded-[3rem] -z-10 opacity-20 animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#003B5C] rounded-full -z-10 opacity-5"></div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="flex items-center space-x-3 text-[#FFB81C] mb-6">
              <div className="h-0.5 w-10 bg-[#FFB81C]"></div>
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em]">Naturaleza del Evento</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-5 p-6 rounded-3xl bg-white border border-gray-200 shadow-sm group hover:shadow-md transition-all">
                <div className="bg-[#003B5C] text-white p-3 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[#003B5C] text-sm md:text-lg mb-1 uppercase tracking-tighter">Liderazgo Académico</h4>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">Fomentamos la excelencia mediante el diálogo constante entre especialistas y estudiantes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-5 p-6 rounded-3xl bg-white border border-gray-200 shadow-sm group hover:shadow-md transition-all">
                <div className="bg-[#FFB81C] text-[#003B5C] p-3 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[#003B5C] text-sm md:text-lg mb-1 uppercase tracking-tighter">Compromiso Comunitario</h4>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">Nuestros proyectos buscan impactar directamente en el bienestar de las familias mexicanas.</p>
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
