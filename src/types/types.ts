// src/types/types.ts

export interface Speaker {
    name: string;
    title: string;
    photo: string;
    country?: string;
    bio?: string;
    socialLinks?: { platform: string; url: string }[];
  }

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
  