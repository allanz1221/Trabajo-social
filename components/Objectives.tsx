
import React from 'react';
import { OBJECTIVES } from '../constants.tsx';
import { Target, Sparkles } from 'lucide-react';

const Objectives: React.FC = () => {
  return (
    <section id="objetivos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-6xl font-serif text-unison-blue mb-6">Ejes de Acción</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg italic">
            Nuestros objetivos estratégicos definen el impacto que buscamos generar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OBJECTIVES.map((obj, idx) => (
            <div 
              key={obj.id} 
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all reveal group"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-unison-blue text-white rounded-xl flex items-center justify-center mb-8 font-bold text-xl group-hover:bg-unison-gold transition-colors">
                {idx + 1}
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                {obj.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
