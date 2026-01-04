
import React from 'react';
import { MapPin, Navigation, Info, ExternalLink } from 'lucide-react';

const MapSection: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11520.457859345388!2d-109.4398188179269!3d27.078427951336423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba6113b69416b5%3A0xc6668740c030d322!2sUniversidad%20de%20Sonora%2C%20Unidad%20Regional%20Sur!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx";
  const directionsUrl = "https://maps.app.goo.gl/P4K9iT8w6h8D9K8C7"; // Placeholder for actual maps link

  return (
    <section id="ubicacion" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center space-x-2 text-unison-gold mb-4">
            <MapPin size={24} />
            <span className="text-sm font-bold uppercase tracking-widest">Sede del Encuentro</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-unison-blue mb-4">Ubicación y Accesos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Te esperamos en las instalaciones de la Universidad de Sonora, Campus Navojoa, punto de reunión para la transformación social en el sur de Sonora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Info Card */}
          <div className="lg:col-span-4 space-y-6 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full shadow-sm">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-unison-blue text-white p-3 rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Dirección</h4>
                    <p className="text-gray-600 text-sm">Blvd. Lázaro Cárdenas No. 100, Col. Centro, Navojoa, Sonora, C.P. 85800.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-unison-gold text-unison-blue p-3 rounded-2xl">
                    <Info size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Edificios Sede</h4>
                    <p className="text-gray-600 text-sm italic">Centro de Convenciones & Gimnasio Universitario</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <a 
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 w-full py-4 bg-unison-blue text-white font-bold rounded-2xl hover:bg-unison-blue/90 transition-all transform hover:scale-[1.02] shadow-xl group"
                  >
                    <Navigation size={20} className="group-hover:rotate-12 transition-transform" />
                    <span>Cómo llegar con GPS</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-8 reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white h-[450px] group">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-gray-200 rounded-3xl"></div>
              {/* Overlay for aesthetic */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 text-xs font-bold text-unison-blue border border-gray-100">
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
