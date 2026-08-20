export interface ArchitecturePillar {
  number: string;
  title: string;
  summary: string;
  details: string;
  badge: string;
}

export const architecturePillars: ArchitecturePillar[] = [
  {
    number: "01",
    title: "Modular Feature Architecture",
    summary: "Colocate types, business logic, state, and presentation by domain feature to guarantee long-term maintainability.",
    details:
      "Avoid monolithic components and sprawling single-file state. Modules should possess single responsibilities, clear public interfaces, and separated data layers so features can be extended or replaced without cascading regressions.",
    badge: "Architecture",
  },
  {
    number: "02",
    title: "Accessibility as a Foundation, Not a Checklist",
    summary: "Engineer semantic, keyboard-first, screen-reader-friendly interfaces targeting WCAG 2.1 AA from the first line of code.",
    details:
      "High-contrast ratios, visible keyboard focus indicators, logical heading hierarchies, and aria-expanded state handling ensure systems are genuinely usable for everyone, including users with visual, motor, or cognitive impairments.",
    badge: "Accessibility / HCI",
  },
  {
    number: "03",
    title: "Offline-First Resilience Where Connectivity Fails",
    summary: "Design educational and productivity software to work seamlessly through network drops using Service Workers and IndexedDB.",
    details:
      "In regions with intermittent electricity and bandwidth constraints, web applications must cache vital instructional assets and queue user actions locally, automatically reconciling data once connectivity is restored.",
    badge: "Reliability",
  },
  {
    number: "04",
    title: "Human-in-the-Loop AI: 'AI Assists. Humans Decide.'",
    summary: "Deploy artificial intelligence as an assistive amplifier for teachers and professionals, never an opaque judge.",
    details:
      "In high-stakes educational contexts (such as Quranic recitation assessment or student grading), AI should generate transparent hints and diagnostic flags, preserving final authority strictly in the hands of trained educators.",
    badge: "Responsible AI",
  },
  {
    number: "05",
    title: "Cognitive Ergonomics & Educational UX",
    summary: "Structure interfaces to minimize extraneous cognitive load, allowing learners to focus entirely on mastery.",
    details:
      "Drawing from educational psychology and HCI, layout density, progressive disclosure, distraction-free reading modes, and contextual cues are tuned to reduce anxiety and support deep learning sessions.",
    badge: "UX Design",
  },
  {
    number: "06",
    title: "Security by Design & Row-Level Authorization",
    summary: "Protect student bio-data and institutional records through strict database policies, normalized schemas, and sanitized inputs.",
    details:
      "Enforce PostgreSQL Row-Level Security (RLS) so multi-tenant boundaries are impenetrable at the database engine level, pairing with client-side honeypots and strict Zod runtime schema validation.",
    badge: "Security",
  },
];
