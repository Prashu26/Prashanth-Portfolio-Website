export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  features: string[];
  technologies: string[];
  category: 'AI / ML' | 'Full-Stack' | 'Blockchain' | 'DevOps';
  myContribution: string;
  githubUrl: string;
  liveDemoUrl?: string;
  achievementBadge?: string;
  architectureDetails?: {
    components: string[];
    workflow: string;
    metrics?: string;
  };
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    iconName?: string;
    badge?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  award: string;
  description: string;
  year: string;
  category: 'Hackathon' | 'Leadership' | 'Academic';
  icon: string;
}

export const PERSONAL_INFO = {
  name: "Prashanth H M",
  roleTitle: "Computer Science Engineer | Software Developer | AI & Backend Enthusiast",
  shortIntro: "I enjoy building scalable applications, developing intelligent systems, and solving real-world problems through software engineering. I work across backend development, full-stack applications, AI-powered solutions, and cloud technologies.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "University Visvesvaraya College of Engineering (UVCE)",
    location: "Bengaluru, Karnataka, India",
    graduationYear: "2027",
    cgpa: "8.67 / 10",
  },
  status: "Available for Summer 2025 / 2026 Internships",
  socialLinks: {
    github: "https://github.com/prashu26",
    linkedin: "https://www.linkedin.com/in/prashanth-h-m-6a3735271/",
    email: "prashugowda179@gmail.com",
    resume: "https://drive.google.com/file/d/1BNW0fMWVpoMNRn6JaFC0n0KVXcaJ6cHn/view?usp=sharing"
  },
  interests: [
    "Backend Systems & REST APIs",
    "AI/LLM Applications & Inference",
    "Full-Stack Web Development",
    "Cloud Infrastructure & DevOps",
    "Distributed Systems & Reliability"
  ],
  stats: [
    { label: "CGPA (UVCE)", value: "8.67/10" },
    { label: "Graduation", value: "2027" },
    { label: "Hackathon Finals", value: "National & State" },
    { label: "Core Focus", value: "Backend & AI" }
  ]
};

export const WHAT_I_ENJOY_BUILDING = [
  {
    title: "Backend Systems & REST APIs",
    description: "Designing resilient server-side architectures, RESTful API contracts, relational and NoSQL schemas, and secure authentication flows that scale seamlessly.",
    icon: "Server",
    tags: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accent: "text-blue-400"
  },
  {
    title: "AI-Powered Applications & LLMs",
    description: "Building intelligent applications leveraging modern LLM APIs, semantic search with Sentence-BERT & cosine similarity, embeddings, and optimized on-device inference.",
    icon: "Brain",
    tags: ["Gemini API", "Sentence-BERT", "Embeddings", "ONNX Runtime", "Vector Search"],
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    accent: "text-purple-400"
  },
  {
    title: "Full-Stack Web Applications",
    description: "Crafting end-to-end web experiences with modern React frontends, robust state management, responsive developer-first design systems, and real-time WebSockets.",
    icon: "Layout",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "WebSockets", "JWT / OAuth"],
    gradient: "from-cyan-500/20 via-emerald-500/10 to-transparent",
    accent: "text-cyan-400"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Automating workflows with Docker containers, Compose topologies, CI/CD pipelines, local cloud simulations, and infrastructure provisioning.",
    icon: "Cloud",
    tags: ["Docker", "Docker Compose", "Terraform", "Jenkins", "Linux", "AWS"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "text-emerald-400"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems, scripting, and backend logic",
    skills: [
      { name: "Python", badge: "Core" },
      { name: "Java", badge: "OOP" },
      { name: "JavaScript", badge: "ES6+" },
      { name: "SQL", badge: "Relational" }
    ]
  },
  {
    title: "Backend & Database",
    description: "Server runtime environments, API design, and data storage",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "PostgreSQL" }
    ]
  },
  {
    title: "Frontend Development",
    description: "Component architectures, responsive styling, and modern UI",
    skills: [
      { name: "React.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Embeddings, LLMs, neural networks, and inference runtime",
    skills: [
      { name: "LLM APIs" },
      { name: "Google Gemini API" },
      { name: "Sentence-BERT" },
      { name: "Embeddings" },
      { name: "Semantic Search" },
      { name: "Cosine Similarity" },
      { name: "ONNX Runtime" }
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Containerization, infrastructure automation, and environments",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "Terraform" },
      { name: "Jenkins" },
      { name: "Linux" },
      { name: "Virtual Machines" },
      { name: "Git & GitHub" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-specialist-chatbot",
    title: "AI-Powered Specialist Recommendation & Chatbot",
    subtitle: "Conversational Triage, Specialist Matching & Real-Time Anonymous Consultation",
    description: "Developed an intelligent application that helps users identify suitable specialists through AI-powered conversations and recommendations.",
    problemSolved: "Users experiencing subtle or ambiguous symptoms often struggle to know which medical or domain specialist to consult, leading to delayed care and misdiagnosis. This system bridges the gap through structured conversational AI reasoning.",
    features: [
      "AI-powered conversational assistant for dynamic symptom and requirement discovery",
      "Intelligent specialist recommendation engine matching user profiles to medical disciplines",
      "Integrated wellness and fitness tracking metrics",
      "Real-time anonymous consultation chat powered by bi-directional WebSockets",
      "Scalable backend REST API integration for session persistence"
    ],
    technologies: ["Python", "JavaScript", "Node.js", "AI APIs", "WebSockets", "MongoDB"],
    category: "AI / ML",
    myContribution: "Architected the WebSocket communication layer to enable privacy-first anonymous chat rooms; integrated conversational LLM prompt pipelines; designed MongoDB document models for session states and recommendation scoring.",
    githubUrl: "https://github.com/prashu26",
    liveDemoUrl: "https://github.com/prashu26",
    accentColor: "from-purple-500/20 to-blue-500/20",
    architectureDetails: {
      components: [
        "Natural Language Dialogue Agent (LLM Engine)",
        "Specialist Disambiguation Engine",
        "Bi-directional WebSocket Gateway",
        "MongoDB Encrypted Session Store"
      ],
      workflow: "User prompts -> AI Intent & Symptom Extractor -> Specialist Vector Score -> WebSocket Chat Channel"
    }
  },
  {
    id: "homehub-rental-platform",
    title: "HomeHub – Home Rental Platform",
    subtitle: "End-to-End Property Discovery, Rental Management & Verification",
    description: "A full-stack home rental platform designed to simplify property discovery and rental management.",
    problemSolved: "Rental property searches are frequently hindered by cluttered interfaces, inaccurate availability status, and fragmented landlord-tenant communications.",
    features: [
      "User authentication using JWT and Google OAuth 2.0 with secure session tokens",
      "Property listing, filtering, and comprehensive landlord management dashboard",
      "Real-time updates on listing availability and inquiries",
      "Modular, reusable React component architecture with fluid responsive styling",
      "Robust REST API integration with input sanitization and error handling",
      "MongoDB database integration with schema indexing for rapid geographical search"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    category: "Full-Stack",
    myContribution: "Engineered secure JWT & Google OAuth authentication middleware; built core RESTful CRUD controllers in Express; designed responsive React search filters with debounced queries; optimized MongoDB indices.",
    githubUrl: "https://github.com/Prashu26/Final_Project",
    liveDemoUrl: "https://github.com/Prashu26/Final_Project",
    accentColor: "from-blue-500/20 to-cyan-500/20",
    architectureDetails: {
      components: [
        "React SPA with Context API State Management",
        "Express REST Server with JWT Auth Guards",
        "MongoDB Atlas Clustered Database",
        "Cloud Image Upload & Asset CDN"
      ],
      workflow: "OAuth Login -> JWT Issue -> Geo-Filtered Property Queries -> Interactive Booking Lifecycle"
    }
  },
  {
    id: "blockchain-credential-verification",
    title: "Blockchain-Based Credential Verification System",
    subtitle: "Tamper-Proof Academic & Professional Credential Attestation on Ethereum",
    description: "A blockchain-based credential management and verification platform developed for the Smart India Hackathon.",
    problemSolved: "Credential forgery and sluggish manual background verification in academic and corporate hiring. Mitigates fraud by recording cryptographic verification hashes permanently on-chain.",
    features: [
      "Cryptographically secure credential issuance and management",
      "Strict Role-Based Access Control (RBAC) separating Institutes, Students, and Third-Party Verifiers",
      "Blockchain-backed instant credential verification via smart contract lookups",
      "Secure REST API integration mediating decentralized transactions and database state",
      "Docker-based containerized development and deployment environment"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Ethereum", "Docker"],
    category: "Blockchain",
    achievementBadge: "Smart India Hackathon – National Finalist",
    myContribution: "Co-authored Ethereum smart contracts for credential hashing; integrated Web3/Ethers.js bridge in Node.js backend; built the role-based verification interface in React; containerized services using Docker Compose.",
    githubUrl: "https://github.com/Prashu26/SIH_Project",
    liveDemoUrl: "https://github.com/Prashu26/SIH_Project",
    accentColor: "from-amber-500/20 to-emerald-500/20",
    architectureDetails: {
      components: [
        "Ethereum Smart Contracts (Solidity)",
        "Ethers.js / Web3 Integration Microservice",
        "Role-Based Access Controller (RBAC)",
        "Dockerized MongoDB & Node.js Cluster"
      ],
      workflow: "Institution Signs Doc Hash -> Smart Contract Mints Verification Proof -> Instant QR/Hash Verification"
    }
  },
  {
    id: "driver-monitoring-system",
    title: "Driver Monitoring System",
    subtitle: "Real-Time Computer Vision Fatigue & Distraction Detection at the Edge",
    description: "An intelligent driver monitoring system designed to identify signs of driver fatigue and improve road safety.",
    problemSolved: "Driver fatigue and micro-sleep events cause tens of thousands of highway accidents annually. This vision system continuously identifies early warning signs and provides instantaneous auditory and visual alerts.",
    features: [
      "PERCLOS (Percentage of Eye Closure) real-time calculation and eyelid tracking",
      "Mouth Aspect Ratio (MAR) yawning detection and frequency analysis",
      "Head pose estimation for detecting driver distraction and gaze drift",
      "Steering behavior pattern correlation to corroborate drowsiness signals",
      "Deep learning-based hybrid fatigue detection using CNN spatial and LSTM temporal sequences",
      "ONNX-based inference optimization achieving low-latency processing on resource-constrained hardware"
    ],
    technologies: ["Python", "OpenCV", "CNN", "LSTM", "ONNX Runtime"],
    category: "AI / ML",
    myContribution: "Implemented facial landmark extraction pipelines via OpenCV; engineered PERCLOS and MAR mathematical feature extractors; trained sequential CNN-LSTM networks; converted models to ONNX runtime reducing inference latency by over 60%.",
    githubUrl: "https://github.com/Prashu26/AI_Project",
    liveDemoUrl: "https://github.com/Prashu26/AI_Project",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    architectureDetails: {
      components: [
        "OpenCV Video Capture & Facial Mesh Extractor",
        "PERCLOS / MAR Mathematical Feature Compute Engine",
        "CNN-LSTM Temporal Sequence Classifier",
        "ONNX Runtime Optimized Hardware Acceleration Engine"
      ],
      workflow: "Video Stream -> 68-Point Mesh -> Geometric Metrics (PERCLOS/MAR) -> Temporal LSTM -> Alert Trigger"
    }
  },
  {
    id: "local-devops-pipeline",
    title: "Local DevOps Deployment Pipeline",
    subtitle: "Containerized Microservices Architecture & AWS Cloud Simulation on Ubuntu",
    description: "A local AWS-like development and deployment environment using Docker Compose on Ubuntu.",
    problemSolved: "High cloud expenses during early-stage development and disparities between local machine environments and production cloud architectures ('works on my machine' syndrome).",
    features: [
      "Containerized multi-tier application deployment mirroring AWS ECS and VPC topologies",
      "Local cloud infrastructure simulation including simulated S3 storage, API gateways, and databases",
      "Isolated environments for development, testing, and continuous integration",
      "Automated service discovery, health monitoring, and log aggregation",
      "One-click repeatable deployment, migration, and teardown scripts"
    ],
    technologies: ["Docker", "Docker Compose", "Linux", "Python", "AWS concepts"],
    category: "DevOps",
    myContribution: "Architected Docker Compose topologies with isolated networking subnets; created healthcheck probes and reverse proxy routing; authored Python automation scripts for environment bootstrapping, database seeding, and graceful teardowns.",
    githubUrl: "https://github.com/prashu26",
    liveDemoUrl: "https://github.com/prashu26",
    accentColor: "from-cyan-500/20 to-blue-500/20",
    architectureDetails: {
      components: [
        "Docker Engine & Multi-Container Compose Topologies",
        "Nginx Reverse Proxy & Load Balancer",
        "Python Health Daemon & Provisioning Automator",
        "Volume-Backed Persistent Stores & Networks"
      ],
      workflow: "Git Trigger -> Compose Multi-Stage Build -> Health Ping Validation -> Network Subnet Linking"
    }
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "MERN Stack Developer Intern",
    company: "Shishira Softbiz Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "January 2024 – April 2024",
    type: "Internship",
    description: [
      "Developed and maintained full-stack business applications utilizing MongoDB, Express.js, React.js, and Node.js.",
      "Engineered secure, RESTful API endpoints for seamless frontend-backend data synchronization.",
      "Architected reusable, high-performance React UI components adhering to modern component lifecycles.",
      "Optimized database schemas, aggregation pipelines, and indexing in MongoDB for high-throughput queries.",
      "Actively resolved bugs, performed unit testing, and implemented feature enhancements across the application lifecycle.",
      "Collaborated with cross-functional engineering teams utilizing Git, GitHub, pull request reviews, and Agile methodologies."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "Agile / Scrum"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "sih",
    title: "Smart India Hackathon (SIH)",
    organization: "Ministry of Education & AICTE, Govt. of India",
    award: "National Finalist",
    description: "Selected as National Finalist in India's prestigious nationwide hackathon for building a tamper-proof Blockchain-Based Credential Verification System.",
    year: "2024",
    category: "Hackathon",
    icon: "ShieldCheck"
  },
  {
    id: "bit-n-build",
    title: "Google Bit N Build Hackathon",
    organization: "Google Developer Student Clubs (GDSC)",
    award: "Top 4 at State Level",
    description: "Secured a top 4 position across Karnataka state for developing high-impact tech solutions addressing pressing community challenges using modern web and cloud tech.",
    year: "2024",
    category: "Hackathon",
    icon: "Trophy"
  },
  {
    id: "evolve-explore",
    title: "Evolve & Explore Hackathon",
    organization: "Technical Innovation Forum",
    award: "Best Performer",
    description: "Awarded Best Performer accolade for demonstrating outstanding rapid software prototyping, robust system architecture, and technical execution.",
    year: "2023",
    category: "Hackathon",
    icon: "Award"
  },
  {
    id: "ieee-organizer",
    title: "IEEE Technical Event Organizer",
    organization: "IEEE Student Branch, UVCE",
    award: "Leadership & Management",
    description: "Organized and coordinated college-wide technical symposia, coding hackathons, and developer workshops, mentoring junior participants and managing logistics.",
    year: "2023 – Present",
    category: "Leadership",
    icon: "Users"
  }
];

export const GITHUB_REPOS_STATIC = [
  {
    name: "SIH_Project",
    fullName: "Prashu26/SIH_Project",
    description: "Smart India Hackathon National Finalist project: Blockchain-based credential issuance, role-based access, and tamper-proof verification system.",
    language: "JavaScript",
    stars: 8,
    forks: 3,
    url: "https://github.com/Prashu26/SIH_Project",
    topics: ["blockchain", "ethereum", "react", "nodejs", "smart-contracts", "sih2024"]
  },
  {
    name: "Final_Project",
    fullName: "Prashu26/Final_Project",
    description: "HomeHub - Full-stack MERN home rental platform with JWT & Google OAuth authentication, dynamic property filtering, and landlord management.",
    language: "JavaScript",
    stars: 6,
    forks: 2,
    url: "https://github.com/Prashu26/Final_Project",
    topics: ["mern-stack", "react", "express", "mongodb", "oauth", "rental-platform"]
  },
  {
    name: "AI_Project",
    fullName: "Prashu26/AI_Project",
    description: "Real-time Driver Monitoring System using computer vision, PERCLOS eye monitoring, mouth aspect ratio, and ONNX Runtime optimized deep learning.",
    language: "Python",
    stars: 12,
    forks: 4,
    url: "https://github.com/Prashu26/AI_Project",
    topics: ["computer-vision", "opencv", "drowsiness-detection", "onnx", "deep-learning"]
  },
  {
    name: "AI-Specialist-Recommendation",
    fullName: "prashu26/AI-Specialist-Recommendation",
    description: "AI-powered conversational triage agent with specialist recommendation, fitness tracking, and real-time anonymous WebSocket consultation.",
    language: "Python",
    stars: 5,
    forks: 1,
    url: "https://github.com/prashu26",
    topics: ["ai-agent", "websockets", "nlp", "fastapi", "healthtech"]
  }
];
