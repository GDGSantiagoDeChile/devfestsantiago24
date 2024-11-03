// src/types/types.ts

export interface Session {
    code: string;
    start: string;
    end: string;
    duration?: string;
    title: string;
    description?: string;
    speaker?: string;
    photo?: string;
    speakerTitle?: string;
    presentationType?: string;
  }
  