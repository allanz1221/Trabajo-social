
import React from 'react';
import { IMPACTS } from './hooks/constants.tsx';
import { Building2, Globe2, ChevronRight } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section id="impacto" className="py-20 md:py-32 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 md:mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-serif text-[#003B5C] mb-6">Trascendencia Institucional</h2>
          <p className="text-gray-900 text-xs md:text-sm uppercase tracking-[0.4em] font-black opacity-60">Generando cambios estructurales</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white rounded-[3rem] p-8 md:p-14 reveal border border-gray-200 shadow-xl group hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl md:text-3xl font-black text-[#003B5C] mb-10 uppercase tracking-tighter flex items-center gap-4">
              <div className="p-4 bg-[#FFB81C] rounded-2xl shadow-lg">
                <Building2 className="text-[#003B5C] w-7 h-7 md:w-9 md:h-9" />
              </div>
              {IMPACTS.institutional.title}
            </h3>
            <ul className="space-y-6">
              {IMPACTS.institutional.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <div className="mt-1.5 p-1 bg-[#003B5C] rounded-full shrink-0">
                    <ChevronRight size={14} className="text-white" />
                  </div>
                  <p className="text-gray-900 text-sm md:text-lg leading-relaxed font-bold opacity-80">{point}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#003B5C] text-white rounded-[3rem] p-8 md:p-14 reveal shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl md:text-3xl font-black text-[#FFB81C] mb-10 uppercase tracking-tighter flex items-center gap-4 relative z-10">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                <Globe2 className="w-7 h-7 md:w-9 md:h-9" />
              </div>
              {IMPACTS.social.title}
            </h3>
            <ul className="space-y-6 relative z-10">
              {IMPACTS.social.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <div className="mt-1.5 p-1 bg-[#FFB81C] rounded-full shrink-0">
                    <ChevronRight size={14} className="text-[#003B5C]" />
                  </div>
                  <p className="text-white/90 text-sm md:text-lg leading-relaxed font-bold">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
