
import React from 'react';
import { IMPACTS } from '../constants.tsx';
import { Building2, Globe2, ChevronRight } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section id="impacto" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-unison-blue mb-16 text-center reveal">Impacto del Evento</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Institutional Impact */}
          <div className="bg-gray-50 rounded-3xl p-10 reveal border border-gray-100">
            <h3 className="text-2xl font-bold text-unison-blue mb-8 uppercase tracking-tighter flex items-center gap-3">
              <Building2 className="text-unison-gold" />
              {IMPACTS.institutional.title}
            </h3>
            <ul className="space-y-4">
              {IMPACTS.institutional.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <ChevronRight size={18} className="text-unison-gold mt-1 shrink-0" />
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Impact */}
          <div className="bg-[#003B5C] text-white rounded-3xl p-10 reveal shadow-2xl">
            <h3 className="text-2xl font-bold text-unison-gold mb-8 uppercase tracking-tighter flex items-center gap-3">
              <Globe2 />
              {IMPACTS.social.title}
            </h3>
            <ul className="space-y-4">
              {IMPACTS.social.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <ChevronRight size={18} className="text-unison-gold mt-1 shrink-0" />
                  <p className="text-blue-50">{point}</p>
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
