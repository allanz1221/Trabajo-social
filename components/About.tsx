
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
                src="https://images.unsplash.com/photo-1544928147-7972fc535992?q=80&w=1974&auto=format&fit=crop" 
                alt="Enfoque social" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-unison-blue/90 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 right-10 reveal" style={{ transitionDelay: '0.4s' }}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <p className="text-white text-lg font-serif italic leading-relaxed">
                    "La educación es el arma más poderosa para cambiar el mundo, y el Trabajo Social es su brazo ejecutor en la realidad."
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-unison-gold rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-unison-blue rounded-3xl rotate-12 -z-0"></div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center space-x-2 text-unison-gold mb-4">
              <Info size={24} className="animate-float" />
              <span className="text-sm font-black uppercase tracking-[0.2em]">Sobre el Encuentro</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-unison-blue mb-8 leading-tight">
              Construyendo <span className="text-unison-gold italic">Comunidad</span> desde la Academia
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-unison-gold pl-6 py-2 bg-gray-50 rounded-r-2xl italic">
              Este segundo encuentro representa la madurez de nuestra facultad, integrando la Licenciatura en Educación con la práctica real del Trabajo Social.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-unison-blue/5 p-2 rounded-lg text-unison-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Reflexión Crítica</h4>
                  <p className="text-gray-600 text-sm">Análisis profundo de los contextos de diversidad actuales.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-unison-blue/5 p-2 rounded-lg text-unison-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Transformación Real</h4>
                  <p className="text-gray-600 text-sm">Proyectos orientados al impacto directo en la sociedad sonorense.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-unison-blue p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -mr-8 -mt-8 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
               <div className="flex items-center space-x-2 text-unison-gold mb-2 font-bold uppercase text-xs tracking-widest">
                  <BookOpen size={16} />
                  <span>Nuestra Misión</span>
               </div>
               <p className="text-sm text-blue-100 leading-loose">
                  Consolidar un puente entre la teoría del aula y la complejidad del campo de acción, asegurando que nuestros futuros profesionales posean no solo el conocimiento, sino la empatía y la resiliencia necesaria para el cambio social.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
