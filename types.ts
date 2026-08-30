
export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  description: string[];
  skills: string[];
  slides?: string[];
  presentationUrl?: string; // Link to the full PDF/PPT download
  videoUrl?: string; // Link to video presentation
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  // ... existing education fields
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  slides?: string[];
  presentationUrl?: string;
  videoUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  event: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  meetingUrl?: string;
  languages: string[];
  primarySkills: string[];
}