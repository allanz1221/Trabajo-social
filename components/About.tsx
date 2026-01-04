
import React from 'react';
import { Info, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="acerca" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-square bg-unison-blue rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/id/442/800/800" 
                alt="Social Work Students" 
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-unison-blue/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-xl font-serif italic">
                  "Promoviendo una formación integral, ética y comprometida con la transformación social."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-unison-gold rounded-full flex items-center justify-center border-4 border-white shadow-lg hidden md:flex">
              <span className="text-unison-blue font-bold text-center leading-none">II<br/>EDICIÓN</span>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 text-unison-gold mb-4">
              <Info size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Presentación General</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-unison-blue mb-6">
              Espacio Académico de Encuentro y Reflexión Crítica
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              El II Encuentro de Trabajo Social tiene como objetivo principal consolidar un espacio académico entre estudiantes, docentes y profesionales. Nos orientamos al análisis de experiencias reales de intervención social y al intercambio de saberes que respondan a los desafíos contemporáneos de la disciplina.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-unison-gold p-6 mb-8 rounded-r-xl">
              <div className="flex items-center space-x-2 text-unison-blue mb-2 font-bold uppercase tracking-wide text-sm">
                <BookOpen size={18} />
                <span>Justificación</span>
              </div>
              <p className="text-gray-600 italic">
                La formación en Trabajo Social requiere no solo de sólidos fundamentos teóricos, sino también del análisis crítico de experiencias reales, el intercambio de saberes interinstitucionales y el desarrollo de competencias socioemocionales.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              En este sentido, el Encuentro contribuye a la vinculación entre la universidad y las instituciones públicas y sociales, favoreciendo procesos de aprendizaje significativo y el fortalecimiento de la identidad profesional.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
