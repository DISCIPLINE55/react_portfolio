import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, performant, accessible web interfaces with modern frameworks and type safety.",
    skills: [
      { name: "React", focus: "Component architecture, hooks, state management, SPA routing", iconName: "React" },
      { name: "Next.js", focus: "App router, SSR/SSG patterns, API routes, performance optimization", iconName: "Next" },
      { name: "TypeScript", focus: "Strict type modeling, generics, interfaces, domain-driven contracts", iconName: "TypeScript" },
      { name: "JavaScript (ES6+)", focus: "Async/await, DOM APIs, modern ECMAScript standards", iconName: "JavaScript" },
      { name: "Tailwind CSS", focus: "Utility-first design systems, custom theme configuration, responsive grids", iconName: "Tailwind" },
      { name: "HTML5 & CSS3", focus: "Semantic markup, modern layout models (Flexbox, Grid), CSS variables", iconName: "HTML" },
      { name: "Progressive Web Apps", focus: "Service workers, Cache API, offline-first architectures", iconName: "PWA" },
    ],
  },
  {
    id: "backend-data",
    title: "Backend & Data Systems",
    description: "Architecting secure database schemas, Row-Level Security, authentication, and REST APIs.",
    skills: [
      { name: "Supabase", focus: "PostgreSQL, Row-Level Security (RLS), Auth, Realtime listeners", iconName: "Supabase" },
      { name: "PostgreSQL / MySQL", focus: "Relational schema design, normalization, indexed query optimization", iconName: "Database" },
      { name: "Node.js", focus: "Server-side logic, API endpoint creation, environment security", iconName: "Node" },
      { name: "REST APIs", focus: "Resource routing, structured JSON schemas, error handling", iconName: "API" },
      { name: "Firebase", focus: "Authentication, Firestore, client-side SDK integration", iconName: "Firebase" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    description: "Developing cross-platform mobile experiences with native capabilities and touch-first usability.",
    skills: [
      { name: "React Native", focus: "Component lifecycles, cross-platform layouts, state sharing", iconName: "Mobile" },
      { name: "Expo", focus: "Fast prototyping, mobile builds, Expo AV audio handling", iconName: "Expo" },
      { name: "Touch HCI", focus: "Single-handed thumb reach, tactile feedback, gesture navigation", iconName: "Touch" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning (Active Growth)",
    description: "Undertaking structured learning with Next Path Ghana; applying responsible AI in educational workflows.",
    skills: [
      { name: "Python for AI", focus: "Core Python, scripting, data manipulation with NumPy & Pandas", iconName: "Python" },
      { name: "ML Fundamentals", focus: "Supervised learning concepts, evaluation metrics, feature engineering", iconName: "ML" },
      { name: "AI API Integration", focus: "LLM prompts, audio transcription, phonetic alignment pipelines", iconName: "AI" },
      { name: "Responsible AI Governance", focus: "Human-in-the-loop systems ('AI assists. Teachers decide.')", iconName: "Governance" },
      { name: "Next Path Ghana Cohort 1", focus: "Structured cohort-based machine learning curriculum (2026)", iconName: "Cohort" },
    ],
  },
  {
    id: "design-hci",
    title: "HCI, UX & Accessibility",
    description: "Combining IT Education pedagogy with human-computer interaction to build inclusive, intuitive systems.",
    skills: [
      { name: "WCAG 2.1 AA Accessibility", focus: "Semantic hierarchy, screen reader support, keyboard trapping", iconName: "A11y" },
      { name: "UI/UX Design", focus: "Information architecture, design systems, editorial layouts", iconName: "Design" },
      { name: "Educational Ergonomics", focus: "Distraction-free learning modes, high-contrast Arabic diacritics", iconName: "Education" },
      { name: "Responsive Strategy", focus: "Intentional mobile, tablet, and multi-screen viewport adaptations", iconName: "Responsive" },
    ],
  },
  {
    id: "tools-workflow",
    title: "Developer Tools & Workflow",
    description: "Leveraging modern development environments, version control, and continuous deployment.",
    skills: [
      { name: "Git & GitHub", focus: "Branching strategies, code reviews, open-source workflow", iconName: "Git" },
      { name: "VS Code & PyCharm", focus: "Debugging, linting, developer productivity tooling", iconName: "Editor" },
      { name: "Vercel", focus: "Continuous deployment, preview branches, edge performance", iconName: "Vercel" },
      { name: "npm / Bun", focus: "Dependency management, script automation, build pipelines", iconName: "NPM" },
    ],
  },
];
