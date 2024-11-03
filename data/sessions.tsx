import { Session } from '../src/types/types';

const sessions: Session[] = [
  {
    code: "Apertura",
    start: "9:00",
    end: "9:30",
    title: "Registro / Inicio / Apertura",
  },
  {
    code: "Bienvenida",
    start: "9:30",
    end: "10:00",
    duration: "30 min",
    title: "Presentación GDGs, WTM y sponsors",
  },
  {
    code: "Slot 2",
    start: "10:05",
    end: "10:35",
    duration: "30 min",
    speaker: "Felipe Velasquez (GDE)",
    photo: "felipe-velasquez.jpg",
    title: "Ok, AI everywhere but what about security...",
    description: "We will understand the main risks working with AI, Prompt Injection, Jailbreak, Directives Exposure and more...",
    speakerTitle: "Ingeniero de software",
    presentationType: "talk"
  },
  {
    code: "Slot 3",
    start: "10:40",
    end: "11:10",
    duration: "30 min",
    speaker: "Elegardo Valdés",
    photo: "elegardo-valdes.png",
    title: "IA Responsable en el Desarrollo: Técnicas que te permitan mantener el control",
    description: "Explora cómo la IA Generativa puede ser utilizada como una herramienta responsable en el desarrollo de software...",
    speakerTitle: "Desarrollador de Software",
    presentationType: "talk"
  },
  {
    code: "Slot 5",
    start: "11:15",
    end: "11:25",
    duration: "10 min",
    speaker: "Alvaro M. Varela A.",
    photo: "alvaro-varela.jpg",
    title: "Cómo la documentación salvó al mundo.",
    description: "Una breve serie de anécdotas que muestran cómo la documentación es esencial...",
    speakerTitle: "Desarrollador de Software",
    presentationType: "lighting"
  },
  {
    code: "Slot 5",
    start: "11:25",
    end: "11:35",
    duration: "10 min",
    speaker: "Pablo Cruz",
    photo: "pablo-cruz.jpg",
    title: "De la Población a la Programación",
    description: "Historia relacionada con la movilidad social, para inspirar a jóvenes recién egresados...",
    speakerTitle: "Desarrollador de Software",
    presentationType: "lighting"
  },
  {
    code: "Slot 5",
    start: "11:35",
    end: "11:45",
    duration: "10 min",
    speaker: "Vladimir Draguicevic",
    photo: "vladimir-draguicevic.jpeg",
    title: "Como con la tecnologías web, podemos accesibilizar espacios físicos",
    description: "Hablaremos sobre cómo con tecnología NFC y la web estamos volviendo accesibles espacios físicos...",
    speakerTitle: "Diseñador UX y Programador",
    presentationType: "lighting"
  },
  {
    code: "Slot 4",
    start: "11:50",
    end: "12:20",
    duration: "30 min",
    speaker: "Roberto Benjamin Sepulveda",
    photo: "roberto-sepulveda.png",
    title: "De Paladín a Hechicero: Potenciando Bash con Inteligencia Artificial",
    description: "Bash es una herramienta poderosa para los informáticos, y ahora combinada con IA ofrece nuevas posibilidades...",
    speakerTitle: "Ingeniero Informático",
    presentationType: "talk"
  },
  {
    code: "Slot 1",
    start: "12:25",
    end: "12:55",
    duration: "30 min",
    speaker: "Camilla Martins (GDE)",
    photo: "camila-martins.jpg",
    title: "DevOps, Gemini y cultura: que esperar del futuro?",
    description: "Reflexión sobre cómo las herramientas y la cultura tecnológica se integran en el ecosistema actual...",
    speakerTitle: "GDE Cloud y Senior SRE | Storyblok",
    presentationType: "talk"
  },
  {
    code: "Break",
    start: "13:00",
    end: "14:15",
    duration: "1 hora 30 min",
    title: "Break (Ir a almorzar)",
    description: "",
    speakerTitle: ""
  },
  {
    code: "Slot 8",
    start: "14:30",
    end: "15:00",
    duration: "30 min",
    speaker: "Kevin Morales",
    photo: "kevin-morales.png",
    title: "Distribute Apps with Firebase Distribution",
    description: "Hablaremos sobre la integración de Firebase Distribution en aplicaciones Android y iOS...",
    speakerTitle: "Mobile Developer y Presentador Podcast Devlokos",
    presentationType: "talk"
  },
  {
    code: "Slot 6",
    start: "15:05",
    end: "15:15",
    duration: "10 min",
    speaker: "Erasmo Hernandez",
    photo: "erasmo-hernandez.jpeg",
    title: "Is never too late to start learning something new",
    description: "Cómo cambiar de carrera y construir una carrera sin importar la ubicación o situación...",
    speakerTitle: "Líder Técnico para British Airways @ Globant",
    presentationType: "lighting"
  },
  {
    code: "Slot 6",
    start: "15:15",
    end: "15:25",
    duration: "10 min",
    speaker: "Gabriel Enrique Romero Canelon",
    photo: "gabriel-romero.png",
    title: "Transformando la Creación de Contenido con Inteligencia Artificial: Publicaciones del Futuro",
    description: "Exploraremos cómo la inteligencia artificial está revolucionando el mundo editorial...",
    speakerTitle: "Ingeniero de software",
    presentationType: "lighting"
  },
  {
    code: "Slot 6",
    start: "15:25",
    end: "15:35",
    duration: "10 min",
    speaker: "Diego Manriquez",
    photo: "placeholder.webp",
    title: "Proto AI",
    description: "ProtoAI es un proyecto de código abierto desarrollado en el Hackathon OpenAI de Chile 2024...",
    speakerTitle: "Ingeniero de Datos e Investigador AI",
    presentationType: "lighting"
  },
  {
    code: "Slot 7",
    start: "15:40",
    end: "16:10",
    duration: "30 min",
    speaker: "Lesly Zerna (GDE)",
    photo: "lesly-zerna.jpg",
    title: "De escribir prompts a prototipar apps: Gemini API y Vertex AI",
    description: "Explora la multimodalidad para crear prototipos de aplicaciones GenAI...",
    speakerTitle: "GDE Machine Learning y Curriculum Developer en DeepLearning.AI",
    presentationType: "talk"
  },
  {
    code: "Slot 9",
    start: "16:15",
    end: "16:45",
    duration: "30 min",
    speaker: "Joel Humberto Gomez Paredes (GDE)",
    photo: "joel-gomez.jpg",
    title: "Navegación instantánea en la web usando Speculation API",
    description: "Analizaremos la implementación de Speculation API para mejorar la carga de una web...",
    speakerTitle: "GDE Web Technologies y Google Maps Platform. Frontend Developer en Platzi",
    presentationType: "talk"
  },
  {
    code: "Cierre",
    start: "16:50",
    end: "17:00",
    title: "Cierre",
  }
];

export default sessions;
