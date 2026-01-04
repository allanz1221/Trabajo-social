
import React from 'react';
import { OBJECTIVES } from '../hooks/constants.tsx';
import { Target, Sparkles } from 'lucide-react';

const Objectives: React.FC = () => {
  return (
    <section id="objetivos" className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24 reveal">
          <div className="inline-flex items-center space-x-3 text-[#FFB81C] mb-4">
            <Target size={24} />
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em]">Metas Estratégicas</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#003B5C] mb-8">Ejes de Acción</h2>
          <p className="text-gray-900 max-w-2xl mx-auto text-sm md:text-xl font-medium opacity-70">
            Nuestros objetivos definen el impacto que buscamos generar en la sociedad y la academia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {OBJECTIVES.map((obj, idx) => (
            <div 
              key={obj.id} 
              className="bg-[#F9FAFB] p-8 md:p-12 rounded-[2.5rem] border border-gray-200 hover:border-[#FFB81C] hover:shadow-2xl transition-all duration-500 reveal group relative overflow-hidden"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#FFB81C]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#003B5C] text-white rounded-2xl flex items-center justify-center mb-8 font-black text-xl md:text-2xl shadow-lg group-hover:bg-[#FFB81C] group-hover:text-[#003B5C] transition-all duration-500">
                {idx + 1}
              </div>
              <h4 className="text-[#003B5C] font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles size={14} className="text-[#FFB81C]" />
                Objetivo
              </h4>
              <p className="text-gray-900 leading-relaxed font-bold text-sm md:text-lg">
                {obj.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB81C]/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003B5C]/5 rounded-full blur-3xl -z-0"></div>
    </section>
  );
};

export default Objectives;
