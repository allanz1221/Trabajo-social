
import React from 'react';
import { 
  Users, 
  Target, 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  Globe 
} from 'lucide-react';
import { Objective, ProgramDay, ImpactItem } from './types';

export const OBJECTIVES: Objective[] = [
  { id: 1, text: "Fortalecer la identidad y el sentido de pertenencia profesional de las y los estudiantes de la Licenciatura en Trabajo Social." },
  { id: 2, text: "Visibilizar prácticas, programas y proyectos de intervención social desarrollados en el sector gubernamental y en otras instituciones públicas y sociales." },
  { id: 3, text: "Promover el intercambio de conocimientos, experiencias y buenas prácticas entre el ámbito académico y el ejercicio profesional." },
  { id: 4, text: "Impulsar el desarrollo de competencias socioemocionales, particularmente el manejo de crisis y de las emociones, fundamentales para la intervención social." },
  { id: 5, text: "Favorecer la articulación entre la teoría y la práctica, contribuyendo a una formación crítica, reflexiva y socialmente comprometida." }
];

export const IMPACTS: { institutional: ImpactItem; social: ImpactItem } = {
  institutional: {
    title: "Impacto Institucional",
    points: [
      "Fortalecimiento de la calidad académica mediante la incorporación de espacios de reflexión crítica.",
      "Consolidación de la vinculación interinstitucional con dependencias gubernamentales y organismos sociales.",
      "Impulso al trabajo colaborativo entre campus (Navojoa y Hermosillo), favoreciendo la integración académica.",
      "Posicionamiento de la Universidad de Sonora como una institución comprometida con la formación ética e inclusiva."
    ]
  },
  social: {
    title: "Impacto Social",
    points: [
      "Sensibilización del estudiantado ante la diversidad social, cultural y humana.",
      "Fortalecimiento de prácticas de intervención social orientadas a la equidad y la justicia social.",
      "Mejora de la atención brindada por futuras y futuros profesionales en instituciones públicas y comunitarias.",
      "Generación de propuestas y reflexiones que contribuyen a la transformación social y al bienestar comunitario."
    ]
  }
};

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
      { 
        time: "12:30 – 14:00 h", 
        title: "Taller: Intervención en crisis y manejo de emociones",
        speaker: "Mtra. Migdalia Valenzuela Noriega"
      },
      { time: "14:00 h", title: "Cierre de actividades del día" },
      { time: "15:30 h", title: "Traslado a Álamos, Sonora", description: "Evento cultural: Noche de Gala UNISON." },
      { time: "21:00 h", title: "Regreso a Navojoa" }
    ]
  },
  {
    id: "friday",
    date: "Viernes 30 de enero de 2026",
    theme: "Galería de Socialización de Proyectos",
    activities: [
      { 
        time: "09:30 – 10:30 h", 
        title: "Conferencia (Virtual): Gestión de proyectos y procesos de organización social",
        description: "Enfoque en el profesional del Trabajo Social."
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

export const ICONS = {
  Users: <Users className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Shield: <ShieldCheck className="w-6 h-6" />,
  Graduation: <GraduationCap className="w-6 h-6" />,
  Heart: <HeartHandshake className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />
};
