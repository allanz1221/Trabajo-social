
import React from 'react';
import { Info, BookOpen, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="acerca" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative reveal">
            <div className="relative z-10 aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Colaboración académica" 
                className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-unison-blue/90 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-unison-blue rounded-3xl rotate-12 -z-0"></div>
          </div>

          <div className="reveal">
            <div className="flex items-center space-x-2 text-unison-gold mb-4">
              <Info size={24} />
              <span className="text-sm font-black uppercase tracking-[0.2em]">Introducción</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-unison-blue mb-8 leading-tight">
              Un espacio para la <span className="text-unison-gold italic">Reflexión</span> y el Aprendizaje
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Este encuentro representa el compromiso de la Universidad de Sonora con la excelencia en Trabajo Social y Educación, fomentando el diálogo entre la teoría y la práctica profesional.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-unison-blue/10 p-2 rounded-lg text-unison-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Vinculación Real</h4>
                  <p className="text-gray-600 text-sm">Conexión directa con dependencias gubernamentales y sociales.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-unison-blue/10 p-2 rounded-lg text-unison-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Formación Integral</h4>
                  <p className="text-gray-600 text-sm">Talleres de intervención en crisis y manejo emocional.</p>
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
