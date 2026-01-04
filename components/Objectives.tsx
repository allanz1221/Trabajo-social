
import React from 'react';
import { OBJECTIVES } from '../constants';
import { Target, CheckCircle } from 'lucide-react';

const Objectives: React.FC = () => {
  return (
    <section id="objetivos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-unison-gold/20 rounded-full text-unison-gold mb-4">
            <Target size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-unison-blue mb-4">Objetivos del Encuentro</h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            Ejes rectores que guiarán nuestras actividades y aprendizajes durante estos tres días.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OBJECTIVES.map((obj, idx) => (
            <div 
              key={obj.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="text-unison-gold group-hover:scale-110 transition-transform" size={24} />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {obj.text}
                </p>
              </div>
            </div>
          ))}
          
          <div className="bg-unison-blue p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center text-white md:col-span-2 lg:col-span-1">
             <h3 className="text-2xl font-serif mb-4 text-unison-gold">Transformación Social</h3>
             <p className="text-sm opacity-80 uppercase tracking-widest font-bold">UNISON CAMPUS NAVOJOA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
