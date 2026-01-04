
import React, { useState } from 'react';
import { PROGRAM } from '../constants.tsx';
import { Clock, MapPin, User } from 'lucide-react';

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PROGRAM[0].id);
  const currentDay = PROGRAM.find(day => day.id === activeTab);

  return (
    <section id="programa" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-unison-blue mb-4">Programa Académico</h2>
          <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Enero 2026</p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-3 reveal">
          {PROGRAM.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveTab(day.id)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === day.id 
                  ? 'bg-unison-blue text-white shadow-xl scale-105' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {day.id === 'thursday' ? 'Día 1' : day.id === 'friday' ? 'Día 2' : 'Día 3'}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl reveal border border-gray-100">
          <div className="mb-10 pb-6 border-b border-gray-100">
            <h3 className="text-2xl font-serif text-unison-blue mb-2">{currentDay?.date}</h3>
            <p className="text-unison-gold font-bold uppercase text-xs tracking-[0.2em]">{currentDay?.theme}</p>
          </div>

          <div className="space-y-10">
            {currentDay?.activities.map((act, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 shrink-0">
                  <div className="flex items-center gap-2 text-unison-blue font-bold text-sm">
                    <Clock size={16} className="text-unison-gold" />
                    <span>{act.time}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{act.title}</h4>
                  {act.speaker && (
                    <p className="text-unison-blue text-sm mb-2 flex items-center gap-2">
                      <User size={14} /> {act.speaker}
                    </p>
                  )}
                  {act.description && <p className="text-gray-600 text-sm italic">{act.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
