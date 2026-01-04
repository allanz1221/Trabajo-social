
import React from 'react';
import { MapPin, Navigation, Info, ExternalLink } from 'lucide-react';

const MapSection: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11520.457859345388!2d-109.4398188179269!3d27.078427951336423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba6113b69416b5%3A0xc6668740c030d322!2sUniversidad%20de%20Sonora%2C%20Unidad%20Regional%20Sur!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx";
  const directionsUrl = "https://maps.app.goo.gl/P4K9iT8w6h8D9K8C7";

  return (
    <section id="ubicacion" className="py-20 md:py-32 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center space-x-3 text-[#FFB81C] mb-4">
            <MapPin size={28} />
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em]">Localización Académica</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#003B5C] mb-6">¿Cómo Llegar?</h2>
          <p className="text-gray-900 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed font-medium opacity-80 italic">
            El encuentro se llevará a cabo en las modernas instalaciones de la Unidad Regional Sur de la Universidad de Sonora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-4 reveal order-2 lg:order-1">
            <div className="bg-white p-10 rounded-[3rem] border-2 border-gray-100 h-full shadow-2xl flex flex-col justify-between">
              <div className="space-y-10">
                <div className="flex items-start space-x-5 group">
                  <div className="bg-[#003B5C] text-white p-4 rounded-2xl shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#003B5C] mb-2 uppercase tracking-tight text-lg">Nuestra Dirección</h4>
                    <p className="text-gray-900 text-sm md:text-base leading-relaxed font-bold opacity-70">
                      Blvd. Lázaro Cárdenas No. 100, Col. Centro, Navojoa, Sonora, C.P. 85800.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="bg-[#FFB81C] text-[#003B5C] p-4 rounded-2xl shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                    <Info size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#003B5C] mb-2 uppercase tracking-tight text-lg">Punto de Encuentro</h4>
                    <p className="text-gray-900 text-sm md:text-base leading-relaxed font-bold opacity-70">
                      Centro de Convenciones & Gimnasio Universitario UNISON.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t-2 border-gray-100">
                  <a 
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-4 w-full py-5 bg-[#003B5C] text-white font-black rounded-3xl hover:brightness-110 transition-all shadow-xl text-xs md:text-sm uppercase tracking-widest active:scale-95"
                  >
                    <Navigation size={20} className="animate-pulse" />
                    <span>Iniciar Navegación</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 reveal order-1 lg:order-2">
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white h-[400px] md:h-[550px]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-95 contrast-105 grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              <div className="absolute top-6 left-6 bg-[#003B5C] text-white px-6 py-2 rounded-full shadow-2xl flex items-center space-x-3 text-[10px] md:text-xs font-black uppercase tracking-widest border border-white/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Campus Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
