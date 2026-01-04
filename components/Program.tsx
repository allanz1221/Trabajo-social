
import React, { useState } from 'react';
import { PROGRAM } from '../hooks/constants.tsx';
import { Clock, MapPin, User, ChevronRight } from 'lucide-react';

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PROGRAM[0].id);
  const currentDay = PROGRAM.find(day => day.id === activeTab);

  return (
    <section id="programa" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-serif text-[#003B5C] mb-4">Agenda Académica</h2>
          <p className="text-[#003B5C] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs opacity-70">Cronograma Oficial de Actividades</p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-3 reveal">
          {PROGRAM.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveTab(day.id)}
              className={`px-6 md:px-10 py-3 md:py-4 rounded-2xl text-[10px] md:text-xs font-black tracking-widest transition-all shadow-md active:scale-95 ${
                activeTab === day.id 
                  ? 'bg-[#003B5C] text-white border-b-4 border-[#FFB81C]' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {day.id === 'thursday' ? 'DÍA 01' : day.id === 'friday' ? 'DÍA 02' : 'DÍA 03'}
            </button>
          ))}
        </div>

        <div className="bg-[#F9FAFB] rounded-[2.5rem] p-8 md:p-16 shadow-2xl reveal border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB81C] opacity-10 rounded-full -mr-16 -mt-16"></div>
          
          <div className="mb-12 pb-8 border-b-2 border-gray-200">
            <h3 className="text-3xl md:text-4xl font-serif text-[#003B5C] mb-2">{currentDay?.date}</h3>
            <div className="flex items-center gap-2 text-[#FFB81C] font-black uppercase text-xs md:text-sm tracking-widest">
              <ChevronRight size={18} />
              <span>{currentDay?.theme}</span>
            </div>
          </div>

          <div className="space-y-12">
            {currentDay?.activities.map((act, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 group reveal" style={{ transitionDelay: `${idx * 0.05}s` }}>
                <div className="md:w-40 shrink-0">
                  <div className="flex items-center gap-3 text-white font-black text-xs md:text-sm bg-[#003B5C] px-5 py-2.5 rounded-full shadow-lg group-hover:scale-110 transition-transform w-fit">
                    <Clock size={18} className="text-[#FFB81C]" />
                    <span>{act.time}</span>
                  </div>
                </div>
                <div className="flex-grow pt-1">
                  <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-[#003B5C] transition-colors">
                    {act.title}
                  </h4>
                  {act.speaker && (
                    <div className="text-[#003B5C] text-sm md:text-base mb-4 flex items-center gap-2 font-black bg-[#FFB81C]/20 w-fit px-4 py-1.5 rounded-xl border border-[#FFB81C]/30">
                      <User size={16} /> 
                      <span className="uppercase tracking-tighter">{act.speaker}</span>
                    </div>
                  )}
                  {act.location && (
                    <div className="text-gray-900 text-xs md:text-sm mb-4 flex items-center gap-2 font-bold opacity-60">
                      <MapPin size={16} className="text-[#FFB81C]" /> {act.location}
                    </div>
                  )}
                  {act.description && (
                    <p className="text-gray-900 text-sm md:text-lg leading-relaxed mb-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm font-medium">
                      {act.description}
                    </p>
                  )}
                  {act.details && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {act.details.map((detail, dIdx) => (
                        <div key={dIdx} className="text-xs md:text-sm text-gray-900 bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-4 shadow-sm group/item hover:border-[#FFB81C] transition-colors">
                          <div className="w-2 h-2 rounded-full bg-[#FFB81C] shrink-0 group-hover/item:scale-150 transition-transform"></div>
                          <span className="font-bold opacity-80 leading-snug">{detail}</span>
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
