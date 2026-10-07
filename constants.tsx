import { WorkExperience, Education, Project, SkillCategory, Achievement, PersonalInfo, Publication } from './types';

// All content on the site comes from this file. Keep it consistent with the CVs.

export const SITE_URL = "https://hemanthgalam.github.io/personal-portfolio/";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Hemanth Kumar Galam",
  tagline: "Software engineer across backend systems, robotics and machine learning",
  location: "Stuttgart, Germany",
  email: "hemanthkumargalam@gmail.com",
  github: "https://github.com/hemanthgalam",
  githubLabel: "github.com/hemanthgalam",
  linkedin: "https://www.linkedin.com/in/hemanthgalam",
  linkedinLabel: "linkedin.com/in/hemanthgalam",
  languages: ["English C1 (degrees taught in English)", "German A2"],
  bio: "5+ years of production software engineering (Node.js/TypeScript and Python, distributed and event-driven systems) plus two years of applied ML and robotics research at Fraunhofer IPA (ROS 2, synthetic data, sim-to-real, edge AI on NVIDIA Jetson). I take systems from design to delivery.",
  primarySkills: ["TypeScript", "Node.js", "Python", "C++", "RabbitMQ", "MongoDB", "AWS", "ROS 2", "NVIDIA Isaac Sim", "TensorRT", "PyTorch"]
};

export const WORK_HISTORY: WorkExperience[] = [
  {
    role: "Backend Engineer (part-time)",
    company: "SS&C Intralinks (via Ensar Solutions)",
    location: "Remote, Germany",
    period: "Nov 2023 – Present",
    areas: ["backend"],
    description: [
      "Develop Node.js/TypeScript microservices for VIA V2, an M&A virtual data room used by global banks and insurers.",
      "Designed RabbitMQ event-driven alerting with idempotent consumers and retry queues for nearly 80,000 alerts a day.",
      "Implemented JWT-based MFA and RBAC for workspace access on an ISO 27701- and SOC 2-certified platform.",
      "Built transactional Node.js REST API middleware on MongoDB for consistent document and permission updates.",
      "Built a metadata migration service moving records from Oracle to MongoDB for over 250,000 users.",
      "Optimised MongoDB aggregation pipelines and compound indexes to reduce API latency.",
      "Led API design and documentation supporting integration and onboarding of global enterprise customers.",
      "Monitor production services with AWS CloudWatch, Splunk and Dynatrace.",
      "Use GitHub Copilot and Claude for test generation, scaffolding and pull-request reviews in a Scrum team, with every change reviewed and tested."
    ],
    skills: ["Node.js", "TypeScript", "RabbitMQ", "MongoDB", "Oracle", "REST", "JWT", "MFA", "RBAC", "AWS CloudWatch", "Splunk", "Dynatrace", "GitHub Copilot", "Claude"]
  },
  {
    role: "Research Assistant, ML & Robotics Engineering (part-time)",
    company: "Fraunhofer IPA",
    location: "Stuttgart, Germany",
    period: "Jan 2024 – Mar 2026",
    areas: ["robotics", "ml", "backend"],
    description: [
      "Designed and deployed a ROS 2 perception pipeline on NVIDIA Jetson Orin Nano for real-time human perception in industrial human-robot collaboration, including the interfaces between sensing, inference and downstream robot components.",
      "Optimised inference with TensorRT to 52 FPS (19.2 ms latency).",
      "Built OmniHRC-Sim: 4,500 synthetic samples in NVIDIA Isaac Sim with procedurally varied lighting, textures, camera poses and human motion.",
      "Trained a YOLO-Pose + MS-AGCN action-recognition model purely on synthetic data: 74.0% accuracy and 0.74 macro-F1 on 250 real test samples (50 per class).",
      "Benchmarked skeleton-tracking, gaze-estimation and action-recognition models on accuracy and runtime to select architectures for deployment.",
      "Evaluated the vision-language-action model OpenVLA on edge hardware.",
      "Calibrated Intel RealSense depth cameras and a lidar sensor for point-cloud mapping; worked on UR10e arm teleoperation.",
      "Designed and delivered a Node.js/Angular web platform that streamed live ROS 2 data (skeleton tracking, model outputs) to browsers over WebSockets, with Three.js and D3.js visualisations; containerised with Docker, shipped via GitLab CI/CD.",
      "Simulation tools used: Isaac Sim / Omniverse, Gazebo, MuJoCo."
    ],
    skills: ["ROS 2", "NVIDIA Jetson Orin Nano", "TensorRT", "NVIDIA Isaac Sim / Omniverse", "YOLO-Pose", "MS-AGCN", "OpenVLA", "Intel RealSense", "Lidar", "UR10e", "Gazebo", "MuJoCo", "Node.js", "Angular", "WebSockets", "Three.js", "D3.js", "Docker", "GitLab CI/CD"]
  },
  {
    role: "Software Engineer Intern",
    company: "Rohde & Schwarz GmbH",
    location: "Munich, Germany",
    period: "Apr 2023 – Sep 2023",
    areas: ["backend", "ml"],
    description: [
      "Developed a JavaScript run-length-encoding package for vector tiles served from MinIO, cutting map-loading latency by 40% in a MapLibre UI with custom map layers.",
      "Built a custom vector-tile dataset and trained autoencoder compression models, reducing tile size by up to 60%."
    ],
    skills: ["JavaScript", "MinIO", "MapLibre", "Vector tiles", "Autoencoders"]
  },
  {
    role: "Software Engineer",
    company: "Ensar Solutions Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Dec 2020 – Apr 2023",
    areas: ["backend"],
    description: [
      "Designed an access-management backend supporting 200,000+ daily active users across 40+ REST APIs.",
      "Built an asynchronous Argo Workflows pipeline migrating 300+ TB from NFS to AWS across multiple data centres.",
      "Implemented Inbox and Outbox patterns on RabbitMQ for consistent database updates and message processing.",
      "Maintained 95% test coverage with Jest in an Agile/Scrum team."
    ],
    skills: ["REST", "Argo Workflows", "AWS", "RabbitMQ", "Jest", "Agile/Scrum"]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "ProxiHuman",
    subtitle: "Procedural human motion and synthetic data tool",
    description: "Generates procedural human motion and exports it as synthetic data for Isaac Sim / Omniverse.",
    details: [
      "27-joint skeleton, 41 HRC and warehouse actions, bounded inverse kinematics and configurable body parameters.",
      "Exports temporally sampled USD/JSON joint sequences for Isaac Sim / Omniverse.",
      "C++ core compiled to native and WebAssembly."
    ],
    tags: ["C++", "WebAssembly", "USD"],
    areas: ["robotics", "ml"],
    link: "https://app.proxihuman-ai.com/synthD/",
    linkLabel: "Live app"
  },
  {
    name: "ROS 2 Multi-Robot Fleet Navigation",
    subtitle: "Multi-TurtleBot3 fleet with task dispatch",
    description: "Runs a namespaced multi-TurtleBot3 fleet with independent Nav2/SLAM stacks and isolated TF trees.",
    details: [
      "Namespaced multi-TurtleBot3 fleet with independent Nav2/SLAM stacks and isolated TF trees.",
      "Dispatcher for task allocation and reassignment of failed missions."
    ],
    tags: ["ROS 2", "Nav2", "TurtleBot3"],
    areas: ["robotics"],
    link: "https://github.com/hemanthgalam/ros2_fleet_nav",
    linkLabel: "GitHub"
  },
  {
    name: "ROS 2 Agentic Navigation for Autonomous Mobile Robots",
    subtitle: "Natural-language missions to navigation goals",
    description: "Uses an LLM with tool calling to turn natural-language mission requests into navigation goals.",
    details: [
      "LLM translates natural-language mission requests into navigation goals via tool calling.",
      "Geofence validation and human-in-the-loop approval before dispatch."
    ],
    tags: ["ROS 2 Humble", "Nav2", "slam_toolbox", "LLMs"],
    areas: ["robotics", "ml"],
    link: "https://github.com/hemanthgalam/ros2_agentic_nav",
    linkLabel: "GitHub"
  },
  {
    name: "Migrator",
    subtitle: "Async ETL platform",
    description: "Moves data between databases, files and APIs through a restart-safe job queue and worker pool.",
    details: [
      "Restart-safe job queue, worker pool with adjustable concurrency, back-off retries, cancellation and scheduling.",
      "Connectors: PostgreSQL, MySQL, SQL Server, MongoDB, CSV/JSONL, REST APIs; SQL table names validated against the database to block injection.",
      "Transform engine (filter, cast, rename, PII masking, dedupe) with live preview; 4-step pipeline builder with live run progress and logs.",
      "Benchmarks: 3.2M rows across 32 concurrent pipelines at up to 121K rows/sec (PostgreSQL to PostgreSQL); 2.3x speed-up from 1 to 4 workers; CPU-bound file pipelines above 210K rows/sec."
    ],
    tags: ["Node.js", "Express", "React", "Tailwind", "Playwright"],
    areas: ["backend"],
    link: "https://hemanthgalam.github.io/migrator/",
    linkLabel: "Project page"
  },
  {
    name: "SprintOps",
    subtitle: "Developer tooling",
    description: "Combines multi-LLM routing, AST-based static analysis, Jira integration and automated architecture diagrams.",
    details: [
      "Multi-LLM routing.",
      "AST-based static analysis.",
      "Jira integration.",
      "Automated architecture diagrams."
    ],
    tags: ["Node.js", "TypeScript", "Electron"],
    areas: ["backend"],
    link: "https://hemanthgalam.github.io/sprintOps/",
    linkLabel: "Project page"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "MSc Electrical Engineering",
    institution: "University of Stuttgart",
    period: "Oct 2022 – Aug 2026",
    details: [
      "Specialisation: Machine Learning and Deep Learning.",
      "Master's thesis (grade 1.3), at Fraunhofer IPA: \"Domain-Specific Action Recognition for Industrial Human-Robot Collaboration Using Synthetic Data\".",
      "Research project (grade 1.0), Institute for Photovoltaics: Random Forest and 1D-CNN + LSTM models on battery sensor time series (R² = 0.985, 98.13% classification accuracy) and a YOLOv11 thermal hotspot detection pipeline."
    ],
    note: "German grading scale: 1.0 is best."
  },
  {
    degree: "B.Tech Electrical and Electronics Engineering",
    institution: "QIS College of Engineering and Technology (JNTU Kakinada)",
    period: "Jul 2017 – Jul 2021",
    details: [
      "CGPA 8.66/10, First Class with Distinction.",
      "Bachelor's project (grade O, 10/10): led a team of four building a Raspberry Pi system that monitors a three-phase supply and sends SMS alerts through a GSM module within one minute of a fault."
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    authors: "H. K. Galam, S. Nataraj",
    title: "Sim-to-Real Domain-Specific Action Recognition for Human–Robot Collaboration with Edge Deployment",
    venue: "Preprint",
    doi: "10.5281/zenodo.22662894",
    url: "https://doi.org/10.5281/zenodo.22662894"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "2nd Prize",
    event: "sustainATHON Stuttgart 2023",
    location: "Stuttgart, Germany",
    description: "AI repair-assistance chatbot for consumer electronics with a community platform for reusable spare parts."
  },
  {
    title: "3rd Prize",
    event: "Bayerwald Hackathon 2023",
    location: "Deggendorf, Germany",
    description: "Run-length-encoding prototype for faster vector-tile map loading, the groundwork for my Rohde & Schwarz work."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++"] },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI", "REST", "WebSockets", "OpenAPI"] },
  { category: "Data & messaging", items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "MinIO", "AWS S3"] },
  { category: "Cloud & delivery", items: ["AWS (Lambda, S3, RDS)", "Docker", "Kubernetes", "Argo Workflows", "Jenkins", "GitLab CI/CD", "Linux", "Git"] },
  { category: "Observability", items: ["CloudWatch", "Splunk", "Dynatrace", "Prometheus", "Grafana"] },
  { category: "Security", items: ["OAuth2", "JWT", "MFA", "RBAC", "OWASP"] },
  { category: "Frontend", items: ["React", "Angular", "Tailwind", "Three.js", "D3.js"] },
  { category: "Robotics", items: ["ROS 2", "C++ ROS 2 API", "Nav2", "slam_toolbox", "TF", "SLAM", "UR10e"] },
  { category: "Perception & ML", items: ["PyTorch", "TensorFlow", "TensorRT", "YOLO / YOLO-Pose", "GCNs", "Transformers", "CNNs", "LSTMs"] },
  { category: "Simulation & synthetic data", items: ["NVIDIA Isaac Sim / Omniverse", "Gazebo", "MuJoCo", "USD", "Domain randomisation", "Sim-to-real"] },
  { category: "Hardware", items: ["NVIDIA Jetson Orin Nano", "Intel RealSense", "Lidar", "Raspberry Pi", "Soldering"] },
  { category: "AI tooling", items: ["LLM APIs and tool calling", "Multi-LLM routing", "GitHub Copilot", "Claude"] }
];
