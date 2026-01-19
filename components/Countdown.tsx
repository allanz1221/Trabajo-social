import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Fecha objetivo: 29 de Enero de 2026
    const difference = +new Date("2026-01-29T09:00:00") - +new Date();
    
    let timeLeft: TimeLeft = {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0
    };

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-[#F9FAFB] pt-8 pb-16 px-6 relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#003B5C] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-4 border-white reveal transform -translate-y-12 md:-translate-y-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-[#FFB81C] mb-2">
                <Timer className="animate-pulse" />
                <span className="font-black uppercase tracking-[0.2em] text-xs">Tiempo Restante</span>
              </div>
              <h3 className="text-white font-serif text-2xl md:text-3xl leading-tight">
                Nos vemos en el <br />
                <span className="italic text-[#FFB81C]">II Encuentro en</span>
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-3 md:gap-6 w-full md:w-auto">
              {Object.entries(timeLeft).map(([label, value]) => {
                const numValue = value as number;
                return (
                  <div key={label} className="flex flex-col items-center">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-3 shadow-inner">
                      <span className="text-2xl md:text-4xl font-serif font-bold text-white tabular-nums">
                        {numValue < 10 ? `0${numValue}` : numValue}
                      </span>
                    </div>
                    <span className="text-[#FFB81C] text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;