export const siteConfig = {
  name: "Ismail Ibrahim Mensah",
  shortName: "Ismail Mensah",
  brand: "DISCIPLINE / DISCIPLINE55",
  title: "Software Developer & EdTech Builder",
  headline: "I build practical web, mobile, and AI-powered applications focused on education, usability, and real-world problems.",
  description:
    "Portfolio of Ismail Ibrahim Mensah — Software Developer and BSc IT Education student at USTED Ghana. Crafting accessible, offline-first educational platforms, full-stack applications, and exploring practical AI/ML.",
  url: "https://ismailmensah.vercel.app",
  ogImage: "/images/og.jpg",
  location: {
    city: "Mankessim",
    region: "Central Region",
    country: "Ghana",
  },
  institution: {
    name: "University of Skills Training and Entrepreneurial Development (USTED)",
    formerName: "AAMUSTED",
    program: "BSc Information Technology Education",
    level: "Level 300 / Final-Year Progression",
    expectedGraduation: 2027,
  },
  aiJourney: {
    program: "Next Path Ghana",
    track: "AI & Machine Learning",
    cohort: "Cohort 1 — 2026",
    status: "Active Learning & Practical Experimentation",
  },
  contact: {
    email: "ismail.mensah.info@gmail.com",
    phone: "+233 53 647 8673",
    whatsapp: "+233 55 885 2609",
    whatsappUrl: "https://wa.me/233558852609",
    calendly: "",
  },
  socialLinks: {
    github: "https://github.com/DISCIPLINE55",
    linkedin: "https://www.linkedin.com/in/ismail-ibrahim-mensah-81a920312",
    twitter: "https://x.com/MensahIsmail",
  },
  resume: {
    pdfPath: "/docs/Ismail_Ibrahim_Mensah.pdf",
    lastUpdated: "2025 / 2026",
  },
  /** Core technology identifiers displayed in the Hero section.
   * Update here to change the tech stack badges — no component changes needed. */
  heroBadges: [
    "React",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Tailwind CSS",
    "Python",
    "PWA",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
