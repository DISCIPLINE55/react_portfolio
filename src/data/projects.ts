import { Project } from "@/types/project";
import { caseStudies } from "./case-studies";

export const flagshipProjects: Project[] = [
  {
    id: "edu-arabic",
    slug: "edu-arabic",
    title: "EduArabic",
    tagline: "AI-Assisted Islamic, Arabic Learning & Quran Memorization Platform",
    summary:
      "A flagship, offline-first educational platform combining Arabic language acquisition, Tahfidh memorization tracking, Tajweed recitation audio review, and multi-tenant institutional administration. Built on the core governance principle: 'AI assists. Teachers decide.'",
    category: "EdTech / AI Platform",
    tier: "flagship",
    status: "Active Development",
    featured: true,
    image: "/assets/ass-haabul.png",
    tags: ["React / Next.js", "TypeScript", "Offline-First PWA", "Supabase", "Web Audio API", "AI Governance"],
    role: "Lead Architect & Developer",
    timeline: "2024 — Present",
    highlights: [
      "Offline-first PWA architecture with local verse audio caching and sync",
      "Teacher-guided recitation review queue with waveform audio visualization",
      "Responsible AI integration with strict educator sign-off governance",
      "RTL Arabic typography with full Tashkeel diacritics support",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Web Audio API"],
      backend: ["Supabase", "PostgreSQL", "Row-Level Security (RLS)"],
      tools: ["IndexedDB / Dexie", "Service Workers", "Vercel"],
      ai: ["Audio Analysis & Phonetic Alignment APIs (Teacher-governed)"],
    },
    links: {
      live: "https://ass-haabul-qur-ancom.vercel.app",
      github: "https://github.com/DISCIPLINE55/ass-haabul-quran",
      caseStudy: "/projects/edu-arabic",
    },
    hasCaseStudy: true,
    caseStudyData: caseStudies["edu-arabic"],
  },
  {
    id: "khulafasco",
    slug: "khulafasco",
    title: "Khulafasco Digital Platform",
    tagline: "Institutional School Management & Digital Transformation System",
    summary:
      "A centralized school information platform for Al-khulafau Arashiduun Islamic Senior High School in Ghana, digitizing student bio-data, academic records, enrollment status, and administrative workflows.",
    category: "School Management System",
    tier: "flagship",
    status: "Institutional Platform",
    featured: true,
    image: "/assets/portfolio.png",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "TanStack Query"],
    role: "Full-Stack Developer",
    timeline: "2024",
    highlights: [
      "Digitized student registry with sub-second search and multi-criteria filtering",
      "Secure role-based access control with PostgreSQL Row-Level Security",
      "Eliminated paper admission bottlenecks during school enrollment periods",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Lucide React"],
      backend: ["Supabase", "PostgreSQL", "RLS Policies"],
      tools: ["TanStack Query", "Zod", "Vercel"],
    },
    links: {
      github: "https://github.com/DISCIPLINE55/portfolio",
      caseStudy: "/projects/khulafasco",
    },
    hasCaseStudy: true,
    caseStudyData: caseStudies["khulafasco"],
  },
  {
    id: "discinet",
    slug: "discinet",
    title: "DisciNet",
    tagline: "Disciplined Digital Wealth Management & Financial Habit Product Concept",
    summary:
      "A user-centered financial management concept focusing on structured savings goals, budget discipline (50/30/20 allocation), recurring bill tracking, and habit compliance scoring.",
    category: "FinTech Product Concept",
    tier: "flagship",
    status: "Product Concept",
    featured: true,
    image: "/assets/task-manager.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Product Design", "HCI"],
    role: "Product Designer & Frontend Engineer",
    timeline: "2024",
    highlights: [
      "Deterministic compound interest and budget distribution computation engine",
      "Editorial dark-mode dashboard with interactive savings velocity charts",
      "Progressive disclosure UI minimizing financial data clutter",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      tools: ["Vite", "Local Storage Engine"],
    },
    links: {
      github: "https://github.com/DISCIPLINE55/portfolio",
      caseStudy: "/projects/discinet",
    },
    hasCaseStudy: true,
    caseStudyData: caseStudies["discinet"],
  },
  {
    id: "mobile-quran-institute",
    slug: "mobile-quran-institute",
    title: "Mobile Quran Institute",
    tagline: "Mobile-First Islamic Learning & Spaced Repetition Memorization App",
    summary:
      "A touch-optimized mobile learning application designed for on-the-go Quran recitation, spaced repetition memorization schedules, interactive verse audio looping, and offline chapter access.",
    category: "Mobile EdTech",
    tier: "secondary",
    status: "Academic Prototype",
    featured: false,
    image: "/assets/ass-haabul.png",
    tags: ["React Native", "Expo", "TypeScript", "Mobile HCI", "Audio API"],
    role: "Mobile Developer & UI Designer",
    timeline: "2024",
    highlights: [
      "Bottom-navigation single-handed touch accessibility architecture",
      "Preloaded audio buffer strategy for zero-latency verse playback transitions",
      "Spaced repetition scheduling algorithm for long-term retention",
    ],
    technologies: {
      mobile: ["React Native", "Expo", "TypeScript"],
      frontend: ["Tailwind CSS / NativeWind"],
      tools: ["Web Audio API", "Expo AV"],
    },
    links: {
      github: "https://github.com/DISCIPLINE55/ass-haabul-quran",
      caseStudy: "/projects/mobile-quran-institute",
    },
    hasCaseStudy: true,
    caseStudyData: caseStudies["mobile-quran-institute"],
  },
  {
    id: "alkhulafau-enrollment",
    slug: "alkhulafau-enrollment",
    title: "Alkhulafau SHS Student Search & Enrollment",
    tagline: "High-Speed Student Record Verification & Admission Utility",
    summary:
      "A high-speed administrative tool engineered for rapid student admission validation, index number querying, enrollment status toggling, and Ghana Education Service cohort exports.",
    category: "Administrative Web Utility",
    tier: "secondary",
    status: "Institutional Platform",
    featured: false,
    image: "/assets/portfolio.png",
    tags: ["React", "TypeScript", "Supabase", "Fast Indexing", "CSV Export"],
    role: "Developer",
    timeline: "2024",
    highlights: [
      "Sub-second debounced multi-criteria search filtering",
      "Unique database constraint preventing duplicate student registrations",
      "Print-formatted admission verification slips",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Supabase", "PostgreSQL"],
    },
    links: {
      github: "https://github.com/DISCIPLINE55/portfolio",
      caseStudy: "/projects/alkhulafau-enrollment",
    },
    hasCaseStudy: true,
    caseStudyData: caseStudies["alkhulafau-enrollment"],
  },
  {
    id: "pedagolog",
    slug: "pedagolog",
    title: "PedagoLog",
    tagline: "Pedagogical Reflection Log & Practicum Competency Tracker",
    summary:
      "A specialized digital reflection journal and competency tracking tool for teacher-trainees and educators, aligning classroom observations and lesson reflections with national teacher standards.",
    category: "Teacher Education / EdTech",
    tier: "secondary",
    status: "Academic Prototype",
    featured: false,
    image: "/assets/task-manager.png",
    tags: ["React", "TypeScript", "Educational HCI", "IndexedDB", "Markdown"],
    role: "Creator & Developer",
    timeline: "2024 — 2025",
    highlights: [
      "Integrated Gibbs' Reflective Cycle framework for guided reflection prompts",
      "Offline-first auto-save journaling canvas protecting uncommitted reflections",
      "Competency coverage visualization aligned with teacher education curricula",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Markdown"],
      tools: ["IndexedDB", "Vite"],
    },
    links: {
      github: "https://github.com/DISCIPLINE55/portfolio",
      caseStudy: "/projects/pedagolog",
    },
    hasCaseStudy: true,
    caseStudyData: caseStudies["pedagolog"],
  },
];

export const archivedProjects: Project[] = [
  {
    id: "taskmaster-pro",
    slug: "taskmaster-pro",
    title: "TaskMaster Pro",
    tagline: "Advanced Task Management & Productivity Application",
    summary:
      "A client-side task organization tool with multi-level priority tagging, due date tracking, local storage persistence, and data export/import capabilities.",
    category: "Productivity Tool",
    tier: "archive",
    status: "Archived",
    featured: false,
    image: "/assets/task-manager.png",
    tags: ["JavaScript", "HTML5", "CSS3", "Local Storage API"],
    role: "Developer",
    timeline: "2024",
    highlights: ["Priority filtering", "Local Storage persistence", "Data export/import"],
    technologies: {
      frontend: ["Vanilla JavaScript", "HTML5", "CSS3"],
      tools: ["Local Storage API", "Vercel"],
    },
    links: {
      live: "https://taskmaster-two-eta.vercel.app/",
      github: "https://github.com/DISCIPLINE55/taskmaster-pro",
    },
    hasCaseStudy: false,
  },
  {
    id: "age-calculator",
    slug: "age-calculator",
    title: "Advanced Age Calculator",
    tagline: "Multi-Language Precision Chronological Date Utility",
    summary:
      "A date calculation utility with multi-language support (English and Spanish), leap year arithmetic, and printable summary exports.",
    category: "Utility Tool",
    tier: "archive",
    status: "Archived",
    featured: false,
    image: "/assets/age-calculator.png",
    tags: ["JavaScript", "HTML5", "CSS3", "Date Arithmetic", "i18n"],
    role: "Developer",
    timeline: "2024",
    highlights: ["Leap year calculation", "Multi-language toggle", "Print CSS styling"],
    technologies: {
      frontend: ["Vanilla JavaScript", "HTML5", "CSS3"],
      tools: ["Date API", "Vercel"],
    },
    links: {
      live: "https://age-calculator-zeta-tawny.vercel.app/",
      github: "https://github.com/DISCIPLINE55/age-calculator",
    },
    hasCaseStudy: false,
  },
  {
    id: "weather-dashboard",
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    tagline: "Real-Time Weather & 5-Day Forecast Application",
    summary:
      "Real-time weather application consuming OpenWeatherMap API with geolocation detection, multi-city tracking, and responsive weather visualizations.",
    category: "Web Application",
    tier: "archive",
    status: "Archived",
    featured: false,
    image: "/assets/weather_app.png",
    tags: ["JavaScript", "Tailwind CSS", "OpenWeatherMap API", "Geolocation"],
    role: "Developer",
    timeline: "2023",
    highlights: ["Geolocation API integration", "5-day forecast visualization"],
    technologies: {
      frontend: ["JavaScript", "HTML5", "Tailwind CSS"],
      tools: ["OpenWeatherMap API", "Geolocation API"],
    },
    links: {
      github: "https://github.com/DISCIPLINE55/weather-dashboard",
    },
    hasCaseStudy: false,
  },
  {
    id: "veggie-grocery",
    slug: "veggie-grocery",
    title: "Veggie Grocery App",
    tagline: "Modern E-Commerce Grocery Interface",
    summary:
      "Front-end grocery e-commerce catalog featuring shopping cart management, product filtering, and client-side email dispatch.",
    category: "E-Commerce",
    tier: "archive",
    status: "Archived",
    featured: false,
    image: "/assets/veggie-banner.png",
    tags: ["React", "Tailwind CSS", "Email.js", "Shopping Cart"],
    role: "Developer",
    timeline: "2023",
    highlights: ["Interactive cart state", "Client-side order email dispatch"],
    technologies: {
      frontend: ["React", "Tailwind CSS", "JavaScript"],
      tools: ["Email.js", "Vercel"],
    },
    links: {
      live: "https://veggie-nine.vercel.app/",
      github: "https://github.com/DISCIPLINE55/portfolio",
    },
    hasCaseStudy: false,
  },
  {
    id: "efia-classic",
    slug: "efia-classic",
    title: "Sister Efia Classic Boutique",
    tagline: "Fashion Catalog & Retail Showcase",
    summary:
      "A retail fashion showcase application with product categorizations, shopping cart workflows, and responsive aesthetics.",
    category: "E-Commerce",
    tier: "archive",
    status: "Archived",
    featured: false,
    image: "/assets/efia-classic.png",
    tags: ["React", "JavaScript", "CSS3", "Catalog UI"],
    role: "Frontend Developer",
    timeline: "2024",
    highlights: ["Product showcase catalog", "Responsive luxury theme"],
    technologies: {
      frontend: ["React", "JavaScript", "CSS3"],
      tools: ["Vercel"],
    },
    links: {
      live: "https://sister-efia-classic.vercel.app/",
      github: "https://github.com/DISCIPLINE55/sister-efia-classic",
    },
    hasCaseStudy: false,
  },
];

export const allProjects: Project[] = [...flagshipProjects, ...archivedProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getFlagshipProjects(): Project[] {
  return flagshipProjects;
}

export function getArchivedProjects(): Project[] {
  return archivedProjects;
}
