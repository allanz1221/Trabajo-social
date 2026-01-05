
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Programa', href: '#programa' },
    { name: 'Sede', href: '#ubicacion' },
  ];

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src="https://i.ibb.co/Z653QdBg/Nice-Png-feliz-ao-nuevo-2017-4124259.png" 
              alt="Logotipo Universidad de Sonora" 
              className={`h-12 md:h-14 transition-all duration-300 ${!scrolled ? 'brightness-0 invert' : ''}`}
            />
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg md:text-xl transition-colors duration-300 ${scrolled ? 'text-[#003B5C]' : 'text-white'}`}>
                UNISON
              </span>
              <div className="h-0.5 w-full bg-[#FFB81C] rounded-full"></div>
              <span className={`text-[8px] uppercase tracking-[0.2em] font-black ${scrolled ? 'text-[#003B5C]' : 'text-[#FFB81C]'}`}>
                Navojoa
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-black uppercase tracking-widest transition-all duration-300 hover:text-[#FFB81C] relative group ${scrolled ? 'text-[#003B5C]' : 'text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB81C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="lg:hidden relative z-[110]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-full transition-all shadow-lg ${isOpen ? 'bg-[#FFB81C] text-[#003B5C]' : (scrolled ? 'bg-[#003B5C] text-white' : 'bg-white/20 backdrop-blur-md text-white border border-white/30')}`}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 bg-[#003B5C] transition-all duration-500 ease-in-out lg:hidden z-[105] flex flex-col items-center justify-center p-8 ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        <div className="w-full max-w-sm flex flex-col items-center space-y-8">
          <div className="text-center mb-8">
            <img 
              src="https://www.unison.mx/wp-content/themes/unison/img/unison-logo.png" 
              alt="Logo UNISON" 
              className="h-20 mx-auto mb-6 brightness-0 invert"
            />
            <span className="text-[#FFB81C] font-serif text-5xl block mb-2">II Encuentro</span>
            <div className="h-1 w-24 bg-[#FFB81C] mx-auto rounded-full mb-4"></div>
            <span className="text-white/60 text-xs uppercase tracking-[0.5em] font-black">Navojoa 2026</span>
          </div>
          
          <nav className="flex flex-col items-center space-y-4 w-full">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-white hover:text-[#FFB81C] transition-colors py-3 border-b border-white/10 w-full text-center active:scale-95 transform duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-12 text-center">
            <p className="text-[#FFB81C] text-[10px] uppercase tracking-widest font-black">Universidad de Sonora</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
