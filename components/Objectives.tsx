
import React from 'react';
import { OBJECTIVES } from '../constants';
import { Target, CheckCircle, Sparkles } from 'lucide-react';

const Objectives: React.FC = () => {
  return (
    <section id="objetivos" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center justify-center p-4 bg-unison-gold/10 rounded-3xl text-unison-gold mb-6 animate-float">
            <Target size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-unison-blue mb-6">Ejes de Acción</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg italic">
            Nuestros objetivos estratégicos definen el impacto que buscamos generar en la formación de líderes sociales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OBJECTIVES.map((obj, idx) => (
            <div 
              key={obj.id} 
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group reveal"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 bg-unison-blue/5 rounded-2xl flex items-center justify-center text-unison-blue mb-8 group-hover:bg-unison-blue group-hover:text-white transition-all duration-500">
                  <span className="font-serif text-2xl font-bold">0{idx + 1}</span>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 leading-relaxed font-medium text-lg mb-6">
                    {obj.text}
                  </p>
                </div>
                <div className="flex items-center text-unison-gold opacity-0 group-hover:opacity-100 transition-opacity space-x-2">
                  <Sparkles size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Excelencia Académica</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-unison-blue p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between text-white md:col-span-2 lg:col-span-1 group overflow-hidden reveal">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-[2000ms]">
                <Target size={150} />
             </div>
             <div className="relative z-10">
               <h3 className="text-3xl font-serif mb-6 text-unison-gold leading-tight">Mística Universitaria</h3>
               <p className="text-blue-100 text-sm leading-loose mb-10">
                 "El saber de mis hijos hará mi gloria." Un lema que cobra vida en cada proyecto de intervención que nace en este campus.
               </p>
             </div>
             <div className="relative z-10 border-t border-white/10 pt-6 mt-auto">
               <p className="text-xs opacity-60 uppercase tracking-[0.3em] font-bold">UNISON CAMPUS NAVOJOA</p>
             </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-unison-gold/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-unison-blue/5 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default Objectives;
