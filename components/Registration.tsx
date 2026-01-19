
import React from 'react';
import { ClipboardList, Sparkles } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <section id="registro" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F9FAFB] to-white z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center space-x-3 text-[#FFB81C] mb-4">
            <ClipboardList size={28} />
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em]">Inscripción</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#003B5C] mb-6">Registro en Línea</h2>
          <p className="text-[#003B5C] text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            Completa el siguiente formulario para asegurar tu asistencia al II Encuentro Interdisciplinario.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden reveal">
          <div className="bg-[#003B5C] py-4 px-6 flex items-center justify-between">
             <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <span className="text-white/50 text-[10px] uppercase tracking-widest font-black">Formulario Oficial</span>
          </div>
          <div className="relative w-full h-[1800px] md:h-[1400px]">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdyecieghXWiGYoZKAwfFTd29nEp1LVk9La4eKantizHWYcCA/viewform?embedded=true" 
              className="absolute inset-0 w-full h-full border-0"
              title="Formulario de Registro"
            >
              Cargando…
            </iframe>
          </div>
        </div>

        <div className="mt-8 text-center reveal">
           <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
             <Sparkles size={14} className="text-[#FFB81C]" />
             Si tienes problemas para visualizar el formulario, <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyecieghXWiGYoZKAwfFTd29nEp1LVk9La4eKantizHWYcCA/viewform" target="_blank" rel="noopener noreferrer" className="text-[#003B5C] font-bold underline hover:text-[#FFB81C] transition-colors">haz clic aquí</a>.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
