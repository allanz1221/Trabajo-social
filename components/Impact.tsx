
import React from 'react';
import { IMPACTS } from '../constants';
import { Building2, Globe2, ChevronRight } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section id="impacto" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-unison-blue mb-4">Impacto Trascendental</h2>
            <p className="text-gray-600 text-lg">
              El Encuentro no solo forma profesionales, sino que fortalece a nuestra institución y contribuye activamente al bienestar de la sociedad sonorense.
            </p>
          </div>
          <div className="h-1 flex-grow mx-8 bg-gray-100 hidden md:block rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Institutional Impact */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-unison-blue group-hover:scale-110 transition-transform duration-500">
              <Building2 size={120} />
            </div>
            
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-unison-blue rounded-xl text-white">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-unison-blue uppercase tracking-tight">
                {IMPACTS.institutional.title}
              </h3>
            </div>
            
            <ul className="space-y-4 relative z-10">
              {IMPACTS.institutional.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3 group/li">
                  <div className="mt-1 flex-shrink-0">
                    <ChevronRight size={18} className="text-unison-gold group-hover/li:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Impact */}
          <div className="bg-[#003B5C] rounded-3xl p-8 md:p-12 relative overflow-hidden group text-white">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-white group-hover:scale-110 transition-transform duration-500">
              <Globe2 size={120} />
            </div>
            
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-unison-gold rounded-xl text-unison-blue">
                <Globe2 size={24} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight">
                {IMPACTS.social.title}
              </h3>
            </div>
            
            <ul className="space-y-4 relative z-10">
              {IMPACTS.social.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3 group/li">
                  <div className="mt-1 flex-shrink-0">
                    <ChevronRight size={18} className="text-unison-gold group-hover/li:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-blue-50 leading-relaxed">{point}</p>
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
