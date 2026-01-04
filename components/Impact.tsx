
import React from 'react';
import { IMPACTS } from '../constants.tsx';
import { Building2, Globe2, ChevronRight } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section id="impacto" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-unison-blue mb-4">Alcance e Impacto</h2>
          <p className="text-gray-500 text-sm md:text-base uppercase tracking-widest font-bold">Generando cambios estructurales</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Institutional Impact */}
          <div className="bg-gray-50 rounded-[2rem] p-6 md:p-10 reveal border border-gray-100 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-unison-blue mb-6 uppercase tracking-tighter flex items-center gap-3">
              <div className="p-2 bg-unison-gold/10 rounded-lg">
                <Building2 className="text-unison-gold w-6 h-6 md:w-7 md:h-7" />
              </div>
              {IMPACTS.institutional.title}
            </h3>
            <ul className="space-y-4">
              {IMPACTS.institutional.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <ChevronRight size={16} className="text-unison-gold mt-1 shrink-0" />
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Impact */}
          <div className="bg-[#003B5C] text-white rounded-[2rem] p-6 md:p-10 reveal shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 text-white/5 group-hover:scale-110 transition-transform duration-1000">
               <Globe2 size={200} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-unison-gold mb-6 uppercase tracking-tighter flex items-center gap-3 relative z-10">
              <div className="p-2 bg-white/10 rounded-lg">
                <Globe2 className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              {IMPACTS.social.title}
            </h3>
            <ul className="space-y-4 relative z-10">
              {IMPACTS.social.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <ChevronRight size={16} className="text-unison-gold mt-1 shrink-0" />
                  <p className="text-blue-50 text-xs md:text-sm leading-relaxed">{point}</p>
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
