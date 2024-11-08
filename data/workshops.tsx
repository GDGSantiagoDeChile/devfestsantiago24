import { Session } from '../src/types/types';

const workshops: Session[] = [
  {
    code: "Slot 2",
    start: "11:00",
    end: "12:30",
    duration: "1 hora 30 min",
    speaker: "Cristina Cares",
    photo: "cristina-cares.jpg",
    title: "Primeros pasos en Android con Jetpack compose",
    description: "Cristina te guiará paso a paso para que construyas tu primera aplicación desde cero utilizando Jetpack Compose. Aprende de manera práctica y entretenida sobre desarrollo mobile con una experta",
    speakerTitle: "Android Mobile Developer",
    presentationType: "workshop"
  },
  {
    code: "Slot 3",
    start: "14:30",
    end: "16:00",
    duration: "1 hora 30 min",
    speaker: "Lesly Zerna",
    photo: "lesly-zerna.jpg",
    title: "De Preguntar al Chatbot, a Escribir Prompts con Código y con Estilo",
    description: "Aprende a llevar tus habilidades con prompts al siguiente nivel. Una oportunidad imperdible para sumergirte en el mundo de la IA con una experta en la materia",
    speakerTitle: "GDE Machine Learning y Curriculum Developer en DeepLearning.AI",
    presentationType: "workshop"
  }
];

export default workshops;
