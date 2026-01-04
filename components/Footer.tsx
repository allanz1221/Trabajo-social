
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-unison-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-white/10 pb-16">
          
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-bold text-2xl">UNISON</span>
              <span className="text-unison-gold text-sm uppercase tracking-widest font-semibold">Campus Navojoa</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              II Encuentro de Trabajo Social: Prácticas en contextos de diversidad, desafíos y transformación social.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-unison-gold font-bold uppercase tracking-widest text-sm">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-blue-50">
                <Mail size={18} className="text-unison-gold" />
                <span>contacto@unison.mx</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-blue-50">
                <Phone size={18} className="text-unison-gold" />
                <span>+52 (642) 425 9954</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-unison-gold font-bold uppercase tracking-widest text-sm">Vínculos Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.unison.mx" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-blue-100 hover:text-unison-gold transition-colors">
                  <ExternalLink size={14} />
                  <span>Universidad de Sonora</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-blue-100 hover:text-unison-gold transition-colors">
                  <ExternalLink size={14} />
                  <span>Aviso de Privacidad</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-blue-100 hover:text-unison-gold transition-colors">
                  <ExternalLink size={14} />
                  <span>Directorio Institucional</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-blue-300 text-xs">
            © {new Date().getFullYear()} Universidad de Sonora - Campus Navojoa. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-blue-400 mt-2 uppercase tracking-tighter">
            Licenciatura en Educación & Trabajo Social
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
