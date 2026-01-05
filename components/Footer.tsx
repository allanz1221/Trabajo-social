
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003B5C] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative SVG background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFB81C" d="M45.7,-65.2C58.1,-58.5,66.4,-44.6,71.7,-30.2C77,-15.8,79.2,-0.9,76.5,13.6C73.8,28.1,66.1,42.2,54.8,53.2C43.5,64.2,28.7,72.1,13,75.1C-2.7,78.1,-19.4,76.2,-34.2,69.5C-49,62.8,-61.9,51.3,-69.3,37.3C-76.7,23.3,-78.6,6.8,-75.4,-8.6C-72.2,-24,-63.9,-38.4,-51.9,-45.3C-39.9,-52.3,-24.1,-51.8,-10.1,-63.1C3.9,-74.4,28,-97.6,45.7,-65.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 border-b border-white/10 pb-20">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <img 
                src="https://i.ibb.co/Z653QdBg/Nice-Png-feliz-ao-nuevo-2017-4124259.png" 
                alt="Logo UNISON" 
                className="h-16 md:h-20 transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col group cursor-pointer">
                <span className="font-serif font-black text-3xl group-hover:text-[#FFB81C] transition-colors">UNISON</span>
                <div className="h-1.5 w-full bg-[#FFB81C] rounded-full my-1"></div>
                <span className="text-[#FFB81C] text-[10px] uppercase tracking-[0.4em] font-black">Campus Navojoa</span>
              </div>
            </div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
              El II Encuentro de Trabajo Social es un espacio académico vital para la reflexión, el aprendizaje y la transformación social en el Noroeste de México.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-[#FFB81C] font-black uppercase tracking-[0.3em] text-sm md:text-base">Información de Contacto</h3>
            <ul className="space-y-5">
              <li className="flex items-center space-x-4 text-white group cursor-pointer">
                <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-[#FFB81C] group-hover:text-[#003B5C] transition-all">
                  <Mail size={22} />
                </div>
                <span className="font-bold text-sm md:text-base group-hover:translate-x-2 transition-transform">lilia.anaya@unison.mx</span>
              </li>
              <li className="flex items-center space-x-4 text-white group cursor-pointer">
                <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-[#FFB81C] group-hover:text-[#003B5C] transition-all">
                  <Phone size={22} />
                </div>
                <span className="font-bold text-sm md:text-base group-hover:translate-x-2 transition-transform">+52 (642) 425 9954</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-[#FFB81C] font-black uppercase tracking-[0.3em] text-sm md:text-base">Vínculos Institucionales</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://www.unison.mx" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/70 hover:text-[#FFB81C] transition-all font-bold group">
                  <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm md:text-base">Portal UNISON Principal</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/70 hover:text-[#FFB81C] transition-all font-bold group">
                  <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm md:text-base">Departamento de Ciencias Sociales</span>
                </a>
              </li>
              <li>
                <a href="https://navojoa.unison.mx" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/70 hover:text-[#FFB81C] transition-all font-bold group">
                  <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm md:text-base">Unidad Regional Sur</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="h-[1px] w-8 md:w-16 bg-[#FFB81C]/40"></div>
            <p className="text-[#FFB81C] text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">El saber de mis hijos hará mi grandeza</p>
            <div className="h-[1px] w-8 md:w-16 bg-[#FFB81C]/40"></div>
          </div>
          <p className="text-white/40 text-[9px] md:text-[11px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Universidad de Sonora - Unidad Regional Sur. <br className="md:hidden" /> Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
