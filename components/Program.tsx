
import React, { useState } from 'react';
import { PROGRAM } from '../constants.tsx';
import { Clock, MapPin, User, ChevronRight } from 'lucide-react';

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PROGRAM[0].id);
  const currentDay = PROGRAM.find(day => day.id === activeTab);

  return (
    <section id="programa" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-[#003B5C] mb-4">Cronograma Académico</h2>
          <p className="text-gray-800 font-black uppercase tracking-widest text-[10px] md:text-xs">Enero 2026 - Campus Navojoa</p>
        </div>

        <div className="flex flex-wrap justify-center mb-10 gap-2 md:gap-3 reveal">
          {PROGRAM.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveTab(day.id)}
              className={`px-5 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all ${
                activeTab === day.id 
                  ? 'bg-[#003B5C] text-white shadow-xl scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm'
              }`}
            >
              {day.id === 'thursday' ? 'DÍA 1' : day.id === 'friday' ? 'DÍA 2' : 'DÍA 3'}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-2xl reveal border border-gray-100 overflow-hidden">
          <div className="mb-10 pb-6 border-b border-gray-200">
            <h3 className="text-2xl md:text-3xl font-serif text-[#003B5C] mb-1">{currentDay?.date}</h3>
            <div className="flex items-center gap-2 text-[#FFB81C] font-black uppercase text-[10px] md:text-xs tracking-[0.2em]">
              <ChevronRight size={16} />
              <span>{currentDay?.theme}</span>
            </div>
          </div>

          <div className="space-y-12">
            {currentDay?.activities.map((act, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-10 group">
                <div className="md:w-32 shrink-0">
                  <div className="flex items-center gap-2 text-[#003B5C] font-black text-[11px] md:text-sm bg-gray-100 px-4 py-1.5 md:p-0 md:bg-transparent rounded-full w-fit">
                    <Clock size={16} className="text-[#FFB81C]" />
                    <span>{act.time}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#003B5C] transition-colors">
                    {act.title}
                  </h4>
                  {act.speaker && (
                    <div className="text-[#003B5C] text-xs md:text-sm mb-3 flex items-center gap-2 font-bold bg-[#003B5C]/5 w-fit px-3 py-1 rounded-lg">
                      <User size={14} /> {act.speaker}
                    </div>
                  )}
                  {act.location && (
                    <div className="text-gray-700 text-[10px] md:text-xs mb-3 flex items-center gap-2 font-medium">
                      <MapPin size={14} className="text-[#FFB81C]" /> {act.location}
                    </div>
                  )}
                  {act.description && (
                    <p className="text-gray-800 text-[11px] md:text-base leading-relaxed mb-4 p-4 bg-gray-50 rounded-2xl border-l-4 border-[#FFB81C]">
                      {act.description}
                    </p>
                  )}
                  {act.details && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {act.details.map((detail, dIdx) => (
                        <div key={dIdx} className="text-[10px] md:text-xs text-gray-700 bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3 shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFB81C] shrink-0"></div>
                          <span className="font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
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
