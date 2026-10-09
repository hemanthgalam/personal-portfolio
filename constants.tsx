import { WorkExperience, Education, Project, SkillCategory, Achievement, PersonalInfo, Reference } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Hemanth Kumar Galam",
  title: "Backend Engineer | Distributed Systems",
  location: "Stuttgart, Germany",
  email: "hemanthkumargalam@gmail.com",
  phone: "+49 176 77879034",
  github: "https://github.com/hemanthkumargalam", 
  linkedin: "https://linkedin.com/in/hemanthkumargalam",
  meetingUrl: "https://calendar.google.com/calendar/u/0/r/appointment",
  languages: ["German (A2)", "English (C1 - Fluent)"],
  primarySkills: ["JavaScript", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Kubernetes", "AWS", "AI Tools (Claude & Codex)"]
};

export const WORK_HISTORY: WorkExperience[] = [
  {
    role: "Backend Engineer Part-time",
    company: "SS&C Intralinks (via Ensar Solutions)",
    location: "Remote / Germany",
    period: "May 2023 – Present",
    summary: "Developed core backend features for VIA V2, the modern successor to a 15-year-old legacy platform, including transactional REST API middleware, RBAC, MFA, and notification/alerting services.",
    description: [
      "Developed core backend features for VIA V2, the modern successor to a 15-year-old legacy platform, including transactional REST API middleware, RBAC, MFA, and notification and alerting services.",
      "Migrated over 300 TB of files from NFS to AWS using an asynchronous pipeline powered by Argo Workflows across multiple data centers.",
      "Architected an event-driven design with asynchronous processing using RabbitMQ to efficiently distribute system load under high concurrency.",
      "Implemented Inbox and Outbox event-driven patterns to guarantee transactional consistency and idempotency across distributed microservices.",
      "Led API design and documentation initiatives, facilitating seamless integration and onboarding for global enterprise customers such as Barclays, AXA, and Bank of America."
    ],
    skills: ["Node.js", "Express.js", "RabbitMQ", "AWS", "Argo Workflows", "JWT", "RBAC", "MFA", "REST APIs", "Microservices"],
    referenceEmail: "kminnika@intralinks.com"
  },
  {
    role: "Software Engineer (Research Assistant)",
    company: "Fraunhofer IPA",
    location: "Stuttgart, Germany",
    period: "Jan 2024 – Mar 2026",
    summary: "Developed a Full-stack Node.js application for real-time visualization of robotic inference data, bridging the gap between ROS2 and web-based monitoring.",
    description: [
      "Developed a Full-stack Node.js application for real-time visualization of robotic inference data, bridging the gap between ROS2 and web-based monitoring.",
      "Architected a WebSocket-driven pipeline to stream high-frequency skeletal data, achieving low-latency live inference display in an Angular frontend.",
      "Designed the backend database architecture and data schemas to optimize the storage and retrieval of real-time robotic telemetry for long-term analysis."
    ],
    skills: ["Node.js", "WebSockets", "ROS2", "Angular", "PostgreSQL", "TypeScript"],
    referenceEmail: "sharathbhushan18@gmail.com",
    presentationUrl: "/Fraunhofer_Exp.pdf"
  },
  {
    role: "Software Engineer Intern",
    company: "Rohde & Schwarz GmbH",
    location: "Munich, Germany",
    period: "Apr 2023 – Sep 2023",
    summary: "Developed a custom RL-encoding compression package in JavaScript, reducing map-loading latency by 40%.",
    description: [
      "Developed a custom RL-encoding compression package in JavaScript, reducing map-loading latency by 40%.",
      "Engineered UI features for the MAP application utilizing Node.js and Angular.",
      "Followed Agile/Scrum methodologies with a focus on Clean Code and maintained 95% test coverage using Jest."
    ],
    skills: ["JavaScript", "Node.js", "Angular", "Jest", "Agile", "Scrum", "Clean Code"],
    referenceEmail: "markus.winter@rohde-schwarz.com",
    presentationUrl: "/Reference.pdf"
  },
  {
    role: "Senior Software Engineer",
    company: "Ensar Solutions Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Dec 2020 – Apr 2023",
    summary: "Designed and developed the system architecture for access management and CRM workflows serving 200,000+ daily active users.",
    description: [
      "Designed and developed the system architecture for access management and CRM workflows serving 200,000+ daily active users.",
      "Practiced Agile/Scrum for iterative delivery and managed 40+ REST APIs optimized for high-concurrency workloads.",
      "Optimized PostgreSQL queries and indexing strategies, reducing API response times by 40%."
    ],
    skills: ["System Architecture", "Access Management", "CRM Workflows", "REST APIs", "PostgreSQL", "Agile", "Scrum"]
  }
];

export const RESEARCH_HISTORY: WorkExperience[] = [
  {
    role: "Research Assistant (Master Thesis)",
    company: "Fraunhofer IPA",
    location: "Stuttgart, Germany",
    period: "May 2025 – Nov 2025",
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
    referenceEmail: "andrey.morozov@ias.uni-stuttgart.de"
  },
  {
    role: "Research Assistant (Research Thesis)",
    company: "IPV - University of Stuttgart",
    location: "Stuttgart, Germany",
    period: "Aug 2024 – Jan 2025",
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
    referenceEmail: "ankush.mukherjee@ipv.uni-stuttgart.de"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Science in Electrical and Computer Engineering",
    institution: "University of Stuttgart, Germany",
    period: "Oct 2022 – Aug 2026",
    details: [
      "Master Thesis (Grade: 1.3): \"Domain-Specific Action Recognition for HRC using Synthetic Data.\"",
      "Developed a real-time pipeline on edge devices using GCN and Transformers for industrial collaboration.",
      "Research Thesis (Grade: 1.0): \"ML-based Predictive Modeling for Thermal Runaway.\"",
      "Integrated Regression, Classification, and YOLO-based detection for battery safety monitoring.",
      "Focus: Machine Learning and Deep Learning (GPA: 2.1 / Good)."
    ]
  },
  {
    degree: "Bachelor of Technology in Electrical and Electronics Engineering",
    institution: "Jawaharlal Nehru Technological University, India",
    period: "Jul 2017 – Mar 2021"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Runtimes",
    items: ["JavaScript", "TypeScript", "Python", "Node.js", "Express.js", "FastAPI"]
  },
  {
    category: "AI & Assisted Engineering",
    items: ["Claude AI", "OpenAI Codex", "Prompt Engineering", "AI Workflows", "Automated Testing", "Efficient Delivery"]
  },
  {
    category: "Databases, Caching & Queue Brokers",
    items: ["PostgreSQL", "MongoDB", "Redis", "REST APIs", "WebSockets", "RabbitMQ"]
  },
  {
    category: "Cloud, DevOps & Telemetry",
    items: ["AWS (Lambda, S3, RDS)", "Docker", "Kubernetes", "CI/CD", "Splunk", "Prometheus", "Grafana", "Linux", "Git"]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "ProxiHuman — Local-First 3D Motion Studio",
    description: "A local-first anatomical character and motion studio for industrial and human-robot-collaboration (HRC) contexts — runs entirely in the browser with zero cloud dependencies, no account, and no installation.",
    link: "https://proxihuman.proxihuman.workers.dev",
    tags: ["C99", "WebAssembly (Wasm)", "Zig", "WebGL", "JavaScript", "OpenUSD", "Python", "Cloudflare Workers"],
    details: [
      "Procedural Motion Engine: Features 41 procedural motion clips ranging from warehouse operations (push cart, bin pick, shelf place, pallet stack) to Human-Robot-Collaboration gestures (handoff, signal, robot acknowledge, guide robot).",
      "Anatomical Body & Dexterous Hands: Continuous male/female meshes with a 27-joint skeleton and 5 individually posable fingers per hand, offering precision pinch, tripod grasp, twist grip, and bounded IK two-handed spacing.",
      "Dual Deployment Architecture: Same unmodified C99 simulation core compiles to a 2.2 MB Wasm binary and a native executable, validated with 246+ native/Wasm parity checks and zero heap allocation (fixed 6 MiB footprint).",
      "Standards-Based OpenUSD Export: Supports UsdSkel (geometry, skeleton, skinning weights checked against OpenUSD toolchain) and JSON joint-dataset export at configurable frame rates."
    ]
  },
  {
    name: "Migrator ETL Tool",
    description: "Architected a scalable ETL tool for high-integrity, seamless data migration between SQL (PostgreSQL) and NoSQL (MongoDB) systems.",
    tags: ["SQL", "NoSQL", "PostgreSQL", "MongoDB", "ETL", "Node.js"]
  },
  {
    name: "TO-DO GPT",
    description: "Developed an AI-powered task management application utilizing GPT models to automate task categorization and prioritization based on natural language input.",
    tags: ["GPT Models", "AI Agent", "Python", "Node.js", "NLP"]
  },
  {
    name: "Multi-LLM FastAPI",
    description: "Built a high-performance FastAPI backend that integrates multiple Large Language Models (LLMs) via a single unified interface for optimized prompt routing.",
    tags: ["FastAPI", "LLM", "Python", "API", "Prompt Routing"]
  }
];

export const FREELANCE_PROJECTS: Project[] = [];

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
  }
];

export const REFERENCES: Reference[] = [
  {
    name: "Sharath Bhushan",
    role: "Research Engineer / Supervisor",
    company: "Fraunhofer IPA",
    relation: "Research Assistant Reference",
    contact: "sharathbhushan18@gmail.com"
  },
  {
    name: "Prof. Dr. Andrey Morozov",
    role: "Institute of Automation & Software Engineering (IAS)",
    company: "University of Stuttgart",
    relation: "Master Thesis Supervisor",
    contact: "andrey.morozov@ias.uni-stuttgart.de"
  },
  {
    name: "Ankush Mukherjee",
    role: "Institute for Photovoltaics (IPV)",
    company: "University of Stuttgart",
    relation: "Research Thesis Supervisor",
    contact: "ankush.mukherjee@ipv.uni-stuttgart.de"
  },
  {
    name: "Karthik Minnikanti",
    role: "Lead Software Engineer",
    company: "SS&C Intralinks",
    relation: "Professional Engineering Reference",
    contact: "kminnika@intralinks.com"
  },
  {
    name: "Markus Winter",
    role: "Engineering Manager / Supervisor",
    company: "Rohde & Schwarz GmbH",
    relation: "Internship Engineering Reference",
    contact: "markus.winter@rohde-schwarz.com"
  }
];

export const ROBOTICS_PERSONAL_INFO: PersonalInfo = {
  name: "Hemanth Kumar Galam",
  title: "Robotics Software Engineer | AI & Machine Learning",
  location: "Stuttgart, Germany",
  email: "hemanthkumargalam@gmail.com",
  phone: "+49 176 77879034",
  github: "https://github.com/hemanthkumargalam", 
  linkedin: "https://linkedin.com/in/hemanthkumargalam",
  meetingUrl: "https://calendar.google.com/calendar/u/0/r/appointment",
  languages: ["German (A2)", "English (C1 - Fluent)"],
  primarySkills: ["ROS2", "C++", "Python", "NVIDIA Isaac Sim", "Sim2Real", "TensorRT", "PyTorch", "GCNs & Transformers", "Edge AI Inference", "Docker"]
};

export const ROBOTICS_WORK_HISTORY: WorkExperience[] = [
  {
    role: "Research Assistant -- ML & Robotics Engineer",
    company: "Fraunhofer IPA",
    location: "Stuttgart, Germany",
    period: "Jan 2024 – Mar 2026",
    summary: "Architected low-latency perception systems for Human-Robot Collaboration, combining NVIDIA Isaac Sim synthetic data pipelines with TensorRT edge deployment on Jetson Orin Nano.",
    description: [
      "Generated synthetic datasets in NVIDIA Isaac Sim and trained GCN/Transformer models, achieving 87% accuracy on human action recognition.",
      "Boosted Sim2Real transfer accuracy from 68% to 84% through domain randomization and targeted synthetic-to-real data augmentation.",
      "Reduced inference latency by 88% (125 ms to 15 ms) using TensorRT optimization on Jetson Orin Nano, integrated directly into a ROS2 package.",
      "Architected and Dockerized a real-time ROS2 perception pipeline streaming skeleton telemetry to an Angular UI via WebSockets with <100 ms latency.",
      "Evaluated OpenVLA foundation models on edge compute nodes to benchmark real-time inference feasibility for industrial Human-Robot Collaboration."
    ],
    skills: ["ROS2", "C++", "Python", "NVIDIA Isaac Sim", "TensorRT", "PyTorch", "GCNs", "Transformers", "WebSockets", "Docker"],
    referenceEmail: "sharathbhushan18@gmail.com",
    presentationUrl: "/Fraunhofer_Exp.pdf"
  },
  {
    role: "Software Engineer Intern",
    company: "Rohde & Schwarz GmbH",
    location: "Munich, Germany",
    period: "Apr 2023 – Sep 2023",
    summary: "Developed a custom RL-encoding compression package in JavaScript, reducing map-loading latency by 40% for large spatial datasets.",
    description: [
      "Developed a custom RL-encoding compression package in JavaScript, reducing map-loading latency by 40%.",
      "Evaluated Autoencoders for map tile compression by preparing custom spatial datasets, achieving a 60% reduction in tile size.",
      "Maintained 95% test coverage using Jest within an Agile/Scrum team structure."
    ],
    skills: ["JavaScript", "Node.js", "Angular", "Jest", "Agile", "Scrum", "Autoencoders"],
    referenceEmail: "markus.winter@rohde-schwarz.com",
    presentationUrl: "/Reference.pdf"
  },
  {
    role: "Senior Software Engineer",
    company: "Ensar Solutions Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Dec 2020 – Apr 2023",
    summary: "Designed high-concurrency access management architecture for 200,000+ daily active users across 40+ REST APIs.",
    description: [
      "Designed high-concurrency access management architecture for 200,000+ daily active users across 40+ REST APIs.",
      "Optimized PostgreSQL queries and indexing strategies, reducing API response times by 40%."
    ],
    skills: ["System Architecture", "Access Management", "CRM Workflows", "REST APIs", "PostgreSQL", "Agile", "Scrum"]
  }
];

export const ROBOTICS_RESEARCH_HISTORY: WorkExperience[] = [
  {
    role: "Master Thesis (Grade: 1.3)",
    company: "Fraunhofer IPA / Univ. of Stuttgart",
    location: "Stuttgart, Germany",
    period: "May 2025 – Nov 2025",
    summary: "Domain-Specific Action Recognition for HRC using Synthetic Data. Developed real-time edge perception pipeline using GCN and Transformers.",
    description: [
      "Grade: 1.3 -- Domain-Specific Action Recognition for HRC using Synthetic Data.",
      "Created a synthetic dataset of industrial human actions using NVIDIA Isaac Sim.",
      "Benchmarked deep learning models, achieving an accuracy of 87% on synthetic data.",
      "Developed ROS2 package for live streaming and reduced latency from 125 ms to 15 ms via TensorRT on NVIDIA Orin Nano.",
      "Sim2Real evaluation achieved 84% accuracy after synthetic data augmentation."
    ],
    skills: ["ROS2", "NVIDIA Isaac Sim", "TensorRT", "GCNs", "Transformers", "PyTorch", "Sim2Real"],
    referenceEmail: "andrey.morozov@ias.uni-stuttgart.de",
    presentationUrl: "https://drive.google.com/file/d/10OFOgpGRuqPThiFRfxk9VnkECSwezpVA/preview"
  },
  {
    role: "Research Thesis (Grade: 1.0)",
    company: "IPV - University of Stuttgart",
    location: "Stuttgart, Germany",
    period: "Aug 2024 – Jan 2025",
    summary: "ML-based Predictive Modeling for Thermal Runaway in battery safety monitoring.",
    description: [
      "Grade: 1.0 -- ML-based Predictive Modeling for Thermal Runaway.",
      "Built a real-time ML system for automotive thermal monitoring and safety.",
      "Developed a CNN–LSTM model surpassing SOTA in temperature prediction.",
      "Trained a YOLOv11M model for thermal hotspot detection and deployed via TensorRT."
    ],
    skills: ["Python", "TensorFlow", "YOLO", "TensorRT", "CNN-LSTM", "Data Analysis"],
    referenceEmail: "ankush.mukherjee@ipv.uni-stuttgart.de",
    presentationUrl: "https://drive.google.com/file/d/1r-KDs-dEnaohGf8FDhPl4ypD_OeaGKcT/preview"
  }
];

export const ROBOTICS_SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Robotics & ROS Frameworks",
    items: ["ROS2", "C++ ROS API", "NVIDIA Isaac Sim", "NVIDIA Omniverse", "RViz", "Sim2Real Workflows"]
  },
  {
    category: "AI, Deep Learning & Vision",
    items: ["PyTorch", "TensorFlow", "TensorRT", "GCNs", "Transformers", "Edge AI Inference"]
  },
  {
    category: "Languages & Runtimes",
    items: ["C++", "Python", "JavaScript", "TypeScript", "Node.js", "Express.js", "FastAPI"]
  },
  {
    category: "Cloud, DevOps & Robotics Infrastructure",
    items: ["Docker", "Kubernetes", "AWS (Lambda, S3, RDS)", "GitHub Actions", "CI/CD", "Linux", "Git"]
  }
];

export const ROBOTICS_PROJECTS: Project[] = [
  {
    name: "ProxiHuman — Local-First 3D Motion Studio",
    description: "A local-first anatomical character and motion studio for industrial and human-robot-collaboration (HRC) contexts — runs entirely in the browser with zero cloud dependencies, no account, and no installation.",
    link: "https://proxihuman.proxihuman.workers.dev",
    tags: ["C99", "WebAssembly (Wasm)", "Zig", "WebGL", "JavaScript", "OpenUSD", "Python", "Cloudflare Workers"],
    details: [
      "Procedural Motion Engine: Features 41 procedural motion clips ranging from warehouse operations (push cart, bin pick, shelf place, pallet stack) to Human-Robot-Collaboration gestures (handoff, signal, robot acknowledge, guide robot).",
      "Anatomical Body & Dexterous Hands: Continuous male/female meshes with a 27-joint skeleton and 5 individually posable fingers per hand, offering precision pinch, tripod grasp, twist grip, and bounded IK two-handed spacing.",
      "Dual Deployment Architecture: Same unmodified C99 simulation core compiles to a 2.2 MB Wasm binary and a native executable, validated with 246+ native/Wasm parity checks and zero heap allocation (fixed 6 MiB footprint).",
      "Standards-Based OpenUSD Export: Supports UsdSkel (geometry, skeleton, skinning weights checked against OpenUSD toolchain) and JSON joint-dataset export at configurable frame rates."
    ]
  },
  {
    name: "Sim2Real HRC Perception Pipeline (ROS2 & Isaac Sim)",
    description: "Built an end-to-end synthetic data generation pipeline in NVIDIA Isaac Sim, training GCNs & Transformers for real-time edge action recognition on Jetson Orin hardware.",
    tags: ["ROS2", "NVIDIA Isaac Sim", "TensorRT", "Jetson Orin", "PyTorch", "Sim2Real"]
  },
  {
    name: "Migrator ETL Tool",
    description: "Architected a scalable ETL tool for high-integrity, zero-loss data migration between SQL (PostgreSQL) and NoSQL (MongoDB) databases.",
    tags: ["SQL", "NoSQL", "PostgreSQL", "MongoDB", "ETL", "Node.js"]
  },
  {
    name: "Multi-LLM FastAPI & Model Router",
    description: "Built a high-performance FastAPI backend integrating multiple open-source LLMs via a unified interface with optimized prompt routing.",
    tags: ["FastAPI", "LLM", "Python", "API", "Prompt Routing"]
  }
];
