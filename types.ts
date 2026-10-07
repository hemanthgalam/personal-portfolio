// Focus areas used by the Experience/Projects filter
export type Area = 'backend' | 'robotics' | 'ml';

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  areas: Area[];
  description: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
  note?: string;
}

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  details?: string[];
  tags: string[];
  areas: Area[];
  link: string;
  linkLabel: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  event: string;
  location: string;
  description: string;
}

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  doi: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  githubLabel: string;
  linkedin: string;
  linkedinLabel: string;
  languages: string[];
  bio: string;
  primarySkills: string[];
}
