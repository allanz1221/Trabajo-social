
import React from 'react';
import { 
  Users, 
  Target, 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  Globe 
} from 'lucide-react';
// Fix: Corrected relative path to types.ts at root
import { Objective, ProgramDay } from '../types';

export const OBJECTIVES: Objective[] = [
  { id: 1, text: "Fortalecer la identidad y el sentido de pertenencia profesional de las y los estudiantes de la Licenciatura en Trabajo Social." },
  { id: 2, text: "Visibilizar prácticas, programas y proyectos de intervención social desarrollados en el sector gubernamental y en otras instituciones públicas y sociales." },
  { id: 3, text: "Promover el intercambio de conocimientos, experiencias y buenas prácticas entre el ámbito académico y el ejercicio profesional." },
  { id: 4, text: "Impulsar el desarrollo de competencias socioemocionales, particularmente el manejo de crisis y de las emociones, fundamentales para la intervención social." },
  { id: 5, text: "Favorecer la articulación entre la teoría y la práctica, contribuyendo a una formación crítica, reflexiva y socialmente comprometida." }
];

export const PROGRAM: ProgramDay[] = [
  {
    id: "thursday",
    date: "Jueves 29 de enero de 2026",
    theme: "Intercambio de Experiencias y Talleres",
    activities: [
      { time: "10:00 h", title: "Bienvenida oficial", location: "Centro de Convenciones, Campus Navojoa" },
      { time: "10:30 – 11:00 h", title: "Presentación cultural: Danza del Venado" },
      { 
        time: "11:00 – 12:30 h", 
        title: "Encuentro de intercambio de experiencias: Proyectos en el sector gubernamental",
        description: "Participación de estudiantes, egresados y directivos.",
        details: [
          "DIF Navojoa: Narconon, Desarrollo Comunitario, UBR, Subprocuraduría de Protección.",
          "SEDESOL Navojoa.",
          "ISTESSON, Hospital General – CISAME, Seguridad Pública."
        ]
      },
      { time: "12:30 h", title: "Presentación Mariachi UNISON" },
      { 
        time: "13:00 – 14:30 h", 
        title: "Taller: Intervención en crisis y manejo de emociones",
        speaker: "Mtra. Migdalia Valenzuela Noriega"
      },
      { time: "14:30 h", title: "Cierre de actividades del día" }
    ]
  },
  {
    id: "friday",
    date: "Viernes 30 de enero de 2026",
    theme: "Galería de Socialización de Proyectos",
    activities: [
      { 
        time: "09:30 – 10:30 h", 
        title: "Conferencia: Invstigación en trabajo social juridico como herramienta de transformación social en contextos de diversidad",
        speaker: "Dra. Marisela Rivera Montoya",
        description: "Enfoque en el profesional del Trabajo Social.",
        location: "Centro de Convenciones, Campus Navojoa"

      },
      { 
        time: "10:30 – 12:00 h", 
        title: "Exposición de proyectos de intervención social",
        description: "Presentación mediante carteles académicos, presentaciones visuales y material multimedia.",
        details: [
          "Exposición de proyectos elaborados por estudiantes.",
          "Presentación de objetivos, metodología y resultados.",
          "Análisis crítico y aprendizaje colectivo."
        ],
        location: "Centro de Convenciones, Campus Navojoa"
      },
    { time: "12:00 h", title: "Cierre de actividades académicas" },
    { time: "14:00 h", title: "Translado a la Cd. de Álamos" },
    { time: "16:00 h", 
      title: "Concierto de voz y piano UNIVERSIDAD DE SONORA, Bellas artes.",
              location: "Templo de la Purisima Concepción, Álamos, Son."

      }
    ]
  },
  {
    id: "saturday",
    date: "Sábado 31 de enero de 2026",
    theme: "Integración y Rally Estudiantil",
    activities: [
      { 
        time: "10:00 – 13:00 h", 
        title: "Intercambio de experiencias / Rally Estudiantil",
        location: "Gimnasio Universitario, UNISON Campus Navojoa",
        description: "Coordinado por alumnos y docentes de la Licenciatura.",
        details: [
          "Estaciones temáticas sobre el quehacer del Trabajo Social.",
          "Juegos cooperativos y retos académicos.",
          "Espacios de diálogo y experiencias significativas.",
          "Actividades recreativas e identidad estudiantil."
        ]
      },
      { time: "13:00 h", title: "Clausura de actividades" }
    ]
  }
];

// Fix: Added missing IMPACTS constant to support the Impact components
export const IMPACTS = {
  institutional: {
    title: "Trascendencia Institucional",
    points: [
      "Fortalecimiento de la identidad de la Licenciatura en Trabajo Social.",
      "Consolidación de vínculos con instituciones gubernamentales y sociales.",
      "Actualización de las prácticas de intervención desde la academia.",
      "Proyección de excelencia de la UNISON en el Noroeste del país."
    ]
  },
  social: {
    title: "Compromiso Social",
    points: [
      "Implementación de estrategias de intervención en contextos reales.",
      "Atención directa a problemáticas sociales en la región del Mayo.",
      "Fomento de una cultura de paz y bienestar comunitario.",
      "Empoderamiento de actores sociales mediante procesos organizativos."
    ]
  }
};

export const ICONS = {
  Users: <Users className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Shield: <ShieldCheck className="w-6 h-6" />,
  Graduation: <GraduationCap className="w-6 h-6" />,
  Heart: <HeartHandshake className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />
};
