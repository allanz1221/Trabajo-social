
import React from 'react';
import { OBJECTIVES } from '../constants.tsx';
import { Target } from 'lucide-react';

const Objectives: React.FC = () => {
  return (
    <section id="objetivos" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20 reveal">
          <h2 className="text-3xl md:text-6xl font-serif text-unison-blue mb-4 md:mb-6">Ejes de Acción</h2>
          <div className="w-16 h-1 bg-unison-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg italic px-4">
            Definimos el rumbo de nuestra intervención a través de objetivos claros y socialmente responsables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {OBJECTIVES.map((obj, idx) => (
            <div 
              key={obj.id} 
              className="bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all reveal group relative"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-unison-blue text-white rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-8 font-bold text-lg group-hover:bg-unison-gold transition-colors">
                {idx + 1}
              </div>
              <p className="text-gray-700 leading-relaxed font-medium text-sm md:text-base">
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
