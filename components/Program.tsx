
import React, { useState } from 'react';
import { PROGRAM } from '../constants';
import { Clock, MapPin, User, ChevronDown, ChevronUp } from 'lucide-react';

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PROGRAM[0].id);

  const currentDay = PROGRAM.find(day => day.id === activeTab);

  return (
    <section id="programa" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-unison-blue mb-4">Programa de Actividades</h2>
          <p className="text-gray-600 uppercase tracking-widest text-sm font-bold">Cronograma Oficial Enero 2026</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {PROGRAM.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveTab(day.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === day.id 
                  ? 'bg-unison-blue text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {day.id === 'thursday' ? 'Día 1' : day.id === 'friday' ? 'Día 2' : 'Día 3'}
              <span className="block text-[10px] uppercase font-light opacity-80 mt-1">{day.date.split(' de ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100">
          <div className="mb-8 pb-8 border-b border-gray-100">
            <h3 className="text-2xl font-serif text-unison-blue mb-2">{currentDay?.date}</h3>
            <p className="text-unison-gold font-bold uppercase tracking-widest text-xs">{currentDay?.theme}</p>
          </div>

          <div className="space-y-12">
            {currentDay?.activities.map((act, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                {/* Connector line for desktop */}
                {idx !== currentDay.activities.length - 1 && (
                  <div className="hidden md:block absolute left-[120px] top-[40px] bottom-[-40px] w-px bg-gray-100"></div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start">
                  {/* Time column */}
                  <div className="md:w-[120px] mb-2 md:mb-0 md:pr-8 flex-shrink-0">
                    <div className="flex items-center space-x-2 text-unison-gold font-bold text-sm">
                      <Clock size={16} />
                      <span>{act.time}</span>
                    </div>
                  </div>

                  {/* Marker dot */}
                  <div className="hidden md:block w-3 h-3 rounded-full bg-unison-blue border-4 border-white shadow-[0_0_0_1px_#eee] absolute left-[114px] mt-1 z-10"></div>

                  {/* Content column */}
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{act.title}</h4>
                    
                    {act.location && (
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <MapPin size={14} className="mr-1" />
                        <span>{act.location}</span>
                      </div>
                    )}

                    {act.speaker && (
                      <div className="flex items-center text-unison-blue text-sm mb-3 font-semibold">
                        <User size={14} className="mr-1" />
                        <span>Ponente: {act.speaker}</span>
                      </div>
                    )}

                    {act.description && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{act.description}</p>
                    )}

                    {act.details && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {act.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center space-x-2 text-xs text-gray-500 bg-gray-50 p-2 rounded-lg border border-gray-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-unison-gold"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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
