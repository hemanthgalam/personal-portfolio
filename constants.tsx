
import { WorkExperience, Education, Project, SkillCategory, Achievement, PersonalInfo } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Hemanth Kumar Galam",
  title: "Senior Software Engineer & M.Sc. Electrical Engineering",
  location: "Stuttgart, Germany",
  email: "hemanthkumargalam@gmail.com",
  phone: "+49 17677879034",
  github: "https://github.com/hemanthkumargalam", 
  linkedin: "https://linkedin.com/in/hemanthkumargalam",
  meetingUrl: "https://calendar.google.com/calendar/u/0/r/appointment", // Placeholder for actual booking link
  languages: ["English (C1)", "German (B1 - Learning)", "Hindi (Fluent)", "Telugu (Native)"],
  primarySkills: ["JavaScript", "Node.js", "Python", "TensorFlow", "ROS2", "Docker", "AWS", "SQL", "Git"]
};

export const WORK_HISTORY: WorkExperience[] = [
  {
    role: "Research Assistant",
    company: "Fraunhofer IPA",
    location: "Stuttgart, Germany",
    period: "01.2024 – Present",
    summary: "Engineered a real-time computer vision system for human action recognition, deploying it on edge devices with live, interactive web-based visualization using WebSockets.",
    description: [
      "Developed a ROS2 package for real-time human action recognition using skeleton, gaze, and speed-tracking computer vision models.",
      "Deployed the system on an NVIDIA Jetson edge device and streamed live inference results via WebSockets to a web platform for interactive visualisation.",
      "Dockerized a web platform for real-time AI model visualisation and data streaming."
    ],
    skills: ["Typescript", "Python", "Angular", "Express", "Node.js", "ROS2", "PostgreSQL", "Gitlab", "Docker"],
    presentationUrl: "https://drive.google.com/file/d/10OFOgpGRuqPThiFRfxk9VnkECSwezpVA/preview",
  },
  {
    role: "Master Thesis",
    company: "Fraunhofer IPA",
    location: "Stuttgart, Germany",
    period: "05.2025 – 11.2025",
    summary: "Led research on synthetic data generation for industrial robotics, developing an end-to-end action recognition pipeline and significantly reducing inference latency on edge hardware.",
    description: [
      "Created a synthetic dataset of industrial human actions using NVIDIA Isaac Sim.",
      "Developed an end-to-end action recognition pipeline for a UR10e robot.",
      "Benchmarked deep learning models, achieving an accuracy of 87% on synthetic data.",
      "Developed a ROS2 package for live data streaming and reduced model inference latency from 125 ms to 15 ms using TensorRT optimisation on NVIDIA Orin Nano.",
      "Performed Sim2Real evaluation and achieved 68% accuracy on a fully synthetic dataset.",
      "Augmented the synthetic dataset with real-world and AI-generated samples, improving Sim2Real accuracy from 68% to 84%."
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "NVIDIA Isaac SIM", "ROS2", "YOLO", "RVIZ"],
    presentationUrl: "https://drive.google.com/file/d/10OFOgpGRuqPThiFRfxk9VnkECSwezpVA/preview",
  },
  {
    role: "Research Thesis",
    company: "IPV - University of Stuttgart",
    location: "Stuttgart, Germany",
    period: "08.2024 – 01.2025",
    summary: "Designed a real-time ML system for automotive safety, creating novel deep learning models for thermal monitoring that surpassed state-of-the-art performance in temperature prediction.",
    description: [
      "Grade: 1.0",
      "Built a real-time ML system for automotive thermal monitoring and safety.",
      "Developed a CNN–LSTM model surpassing SOTA in temperature prediction.",
      "Created a custom dataset and trained a YOLOv11M model for thermal hotspot detection.",
      "Deployed low-latency inference on an automotive ECU using TensorRT."
    ],
    skills: ["Python", "TensorFlow", "YOLO", "Data Analysis", "Feature Engineering"],
    presentationUrl: "https://drive.google.com/file/d/1r-KDs-dEnaohGf8FDhPl4ypD_OeaGKcT/preview",
  },
  {
    role: "Software Developer - Intern",
    company: "Rohde and Schwarz Gmbh",
    location: "Germany",
    period: "04.2023 – 09.2023",
    summary: "Improved map rendering performance by developing a custom compression algorithm, reducing loading times by 40% while strictly adhering to SOLID and Clean Code principles.",
    description: [
      "Designed and implemented an RL-encoding compression package that reduced map-loading latency by more than 40% for large tile datasets.",
      "Achieved 95% test coverage using Jest and strictly followed SOLID, DRY & Clean Code Principles.",
      "Evaluated Autoencoders for tile data compression.",
      "Utilised JIRA & Confluence following agile development practices."
    ],
    skills: ["JavaScript", "TypeScript", "Python", "Node.js", "TensorFlow", "Gitlab", "Jira", "Agile"],
    presentationUrl: "https://drive.google.com/file/d/10OFOgpGRuqPThiFRfxk9VnkECSwezpVA/preview",
  },
  {
    role: "Senior Software Engineer",
    company: "Ensar Solutions Pvt Limited",
    location: "Hyderabad, India",
    period: "12.2020 – 04.2023",
    summary: "Spearheaded backend development for a high-traffic fintech platform, optimizing database performance and building scalable microservices to support over 200,000 daily users.",
    description: [
      "Developed core platform modules like Access Management, User Invitation and CRM workflows in a Syndication lending platform.",
      "Developed 40+ REST APIs in Node.js with RabbitMQ-based event handling.",
      "Designed high-scale document workflows and optimised database queries to reliably support 200,000+ daily users while reducing load on the application server.",
      "Resolved critical production and pre-production issues to improve platform stability.",
      "Maintained high code quality with 95% test coverage using Jest, conducting peer code reviews."
    ],
    skills: ["JavaScript", "TypeScript", "Angular", "Node.js", "Postgres", "MongoDB", "AWS", "Docker", "RabbitMQ"],
    presentationUrl: "https://drive.google.com/file/d/10OFOgpGRuqPThiFRfxk9VnkECSwezpVA/preview",
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Sc Electrical & Computer Science Engineering",
    institution: "University of Stuttgart, Germany",
    period: "10.2022 – 11.2025"
  },
  {
    degree: "B.Tech Electrical & Electronics Engineering",
    institution: "Jawaharlal Nehru Technological University - Kakinada, India",
    period: "07.2017 – 03.2021"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "Python", "Angular", "Express", "Node.js"]
  },
  {
    category: "Database & Deployment",
    items: ["Postgres", "MongoDB", "Docker", "AWS (RDS, S3, Lambda)", "Github", "Gitlab", "RabbitMQ"]
  },
  {
    category: "Machine Learning & Robotics",
    items: ["TensorFlow", "Computer Vision", "Pandas", "NumPy", "YOLO", "ROS2", "NVIDIA Omniverse", "Isaac Sim", "PyTorch"]
  },
  {
    category: "Management & OS",
    items: ["Agile", "Jira", "Confluence", "Linux", "MacOS", "Windows"]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "TODO Gpt",
    description: "A calendar driven day to day personal AI Agent using Node.js and FastAPI.",
    tags: ["Node.js", "FastAPI", "AI Agent", "JavaScript"]
  },
  {
    name: "Migrator",
    description: "An ETL API for seamless data migration from SQL to NoSQL databases.",
    tags: ["Node.js", "ETL", "SQL", "NoSQL", "API"]
  },
  {
    name: "Multi-llm-API",
    description: "NPM package to connect multiple open source LLMs to web interfaces.",
    tags: ["NPM", "Node.js", "LLM", "Open Source"]
  },
  {
    name: "E-SearchAgent",
    description: "Semantic search to categorize e-commerce results based on user prompts.",
    tags: ["Semantic Search", "E-commerce", "AI"]
  }
];

export const FREELANCE_PROJECTS: Project[] = [
  {
    name: "RealEstate Agent",
    description: "An intelligent property management platform featuring automated lead generation, tenant communication, and AI-driven market analysis.",
    tags: ["Node.js", "React", "MongoDB", "AI Integration", "AWS"]
  },
  {
    name: "EduGPT",
    description: "An adaptive learning assistant utilizing Large Language Models to create personalized study plans and provide instant tutoring.",
    tags: ["OpenAI API", "Node.js", "Next.js", "EdTech", "Tailwind"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Winner",
    event: "sustainATHON 2023",
    location: "Stuttgart, Germany"
  },
  {
    title: "3rd Place",
    event: "Bayerwald Hackathon 2023",
    location: "Deggendorf, Germany"
  },
  {
    title: "3rd Place",
    event: "Smart India Hackathon 2021",
    location: "Hyderabad, India"
  }
];
