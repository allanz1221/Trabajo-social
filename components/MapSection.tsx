
import React from 'react';
import { MapPin, Navigation, Info, ExternalLink } from 'lucide-react';

const MapSection: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11520.457859345388!2d-109.4398188179269!3d27.078427951336423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba6113b69416b5%3A0xc6668740c030d322!2sUniversidad%20de%20Sonora%2C%20Unidad%20Regional%20Sur!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx";
  const directionsUrl = "https://maps.app.goo.gl/P4K9iT8w6h8D9K8C7";

  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center space-x-2 text-[#FFB81C] mb-4">
            <MapPin size={24} />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Sede Oficial</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#003B5C] mb-4">Ubicación del Evento</h2>
          <p className="text-gray-800 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Te esperamos en las instalaciones de la Unidad Regional Sur de la Universidad de Sonora, Campus Navojoa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 reveal order-2 lg:order-1">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-200 h-full shadow-md flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#003B5C] text-white p-3 rounded-2xl shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Dirección</h4>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Blvd. Lázaro Cárdenas No. 100, Col. Centro, Navojoa, Sonora, C.P. 85800.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFB81C] text-[#003B5C] p-3 rounded-2xl shrink-0">
                    <Info size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Espacios Sede</h4>
                    <p className="text-gray-800 text-sm leading-relaxed font-medium">
                      Centro de Convenciones & Gimnasio Universitario.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <a 
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 w-full py-4 bg-[#003B5C] text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-lg text-sm uppercase tracking-wider"
                  >
                    <Navigation size={18} />
                    <span>Ver en Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 reveal order-1 lg:order-2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 md:border-8 border-white h-[350px] md:h-[500px]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-95 contrast-105"
              ></iframe>
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 text-[10px] font-bold text-[#003B5C] border border-gray-100 uppercase tracking-tighter">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Campus Principal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
