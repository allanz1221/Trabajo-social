
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

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Evento', href: '#acerca' },
    { name: 'Objetivos', href: '#objetivos' },
    { name: 'Impacto', href: '#impacto' },
    { name: 'Programa', href: '#programa' },
    { name: 'Sede', href: '#ubicacion' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <span className={`font-serif font-bold text-xl md:text-2xl transition-colors duration-300 ${scrolled ? 'text-[#003B5C]' : 'text-white'}`}>
              UNISON
            </span>
            <div className="h-0.5 w-full bg-[#FFB81C]"></div>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-black ${scrolled ? 'text-[#FFB81C]' : 'text-[#FFB81C]'}`}>
              Navojoa
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-[#FFB81C] relative group ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB81C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${scrolled ? 'text-[#003B5C] bg-gray-100' : 'text-white bg-white/20 backdrop-blur-sm'}`}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#003B5C] z-50 transition-all duration-300 ease-in-out lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} className="text-white p-2 bg-white/10 rounded-full">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 h-full pb-20">
          <div className="text-center mb-6">
            <span className="text-[#FFB81C] font-serif text-4xl block mb-2">II Encuentro</span>
            <span className="text-white/50 text-[10px] uppercase tracking-[0.4em] font-black">UNISON 2026</span>
          </div>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-white hover:text-[#FFB81C] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
