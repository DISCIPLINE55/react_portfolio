import { ArticleItem } from "@/types/article";

export const articlesData: ArticleItem[] = [
  {
    id: "building-edu-arabic-edtech",
    slug: "building-edu-arabic-edtech",
    title: "Engineering EduArabic: Lessons in Offline-First Architecture & EdTech Ergonomics",
    summary:
      "A deep dive into how we engineered a multi-tenant Islamic learning and Quran memorization platform using IndexedDB, Web Audio APIs, and PWA caching to survive real-world bandwidth constraints in Ghana.",
    category: "EdTech",
    readTime: "6 min read",
    publishedDate: "2024",
    content: `Building educational software for real-world classrooms across West Africa requires a fundamental shift in engineering assumptions. In developer hubs with fiber internet, we often take persistent connections for granted. In Ghanaian classrooms and madrasahs, connectivity is intermittent, data is costly, and devices range from modern laptops to entry-level Android phones.

### The Problem with Cloud-Only EdTech
When building EduArabic—a platform designed for Arabic language learning and Quran memorization (Tahfidh)—a student whose recitation recording fails due to a dropped WebSocket packet will lose focus, confidence, and valuable study time. We realized early that the platform had to be offline-first by default.

### Key Architecture Strategy
1. **PWA & Cache Hierarchy**: We implemented a Service Worker caching strategy dividing resources into static application shells (pre-cached during install) and audio/text chapters (cached on-demand as users select Surahs).
2. **IndexedDB Local Recording Queue**: When a student records a recitation for their teacher, the compressed audio blob and timestamped metadata are saved directly to IndexedDB via Dexie.js. An optimistic UI updates the student's progress dashboard immediately.
3. **Background Synchronization**: When the browser detects an online event, a background sync service worker negotiates upload to our Supabase storage bucket, reconciling offline queue tokens with database records.

### Arabic Typography and Cultural Sensitivity
Rendering Arabic text accurately is far more complex than setting an \`rtl\` direction on a \`<div>\`. The Quranic text requires specific Uthmanic script fonts that render diacritical vowels (Tashkeel) without clipping vertical ascenders and descenders. We engineered custom CSS font-feature settings and baseline adjustments to ensure legibility across all screen densities.`,
    keyTakeaways: [
      "Offline-first is an equity requirement in educational technology, not merely a luxury feature.",
      "IndexedDB paired with background sync prevents data loss for student audio submissions.",
      "Domain-specific typography (such as Arabic diacritics) demands dedicated layout rendering tests.",
    ],
  },
  {
    id: "ai-assists-teachers-decide",
    slug: "ai-assists-teachers-decide",
    title: "Responsible AI in Education: Why 'AI Assists. Teachers Decide.' Matters",
    summary:
      "Why autonomous AI grading in specialized educational domains creates dangerous failure modes, and how human-in-the-loop governance protects pedagogical integrity.",
    category: "AI & Governance",
    readTime: "5 min read",
    publishedDate: "2024",
    content: `As artificial intelligence models become increasingly integrated into consumer software, there is an aggressive push to automate educational grading. However, in sensitive domains such as language phonetics, mathematical reasoning, and Quranic recitation (Tajweed), fully autonomous AI assessment introduces critical risks: false penalties, opaque scoring, and the erosion of the teacher-student relationship.

### The Failure Mode of Autonomous Scoring
An automated model evaluating a young student's Arabic pronunciation may flag an authentic regional dialect or subtle vocal timbre as an 'error'. If the software automatically lowers the student's grade without human review, the student experiences anxiety and distrust.

### The Governance Architectural Gate
In our software systems, we enforce a strict architectural boundary:
- **What AI Does**: Transcribes audio, aligns timestamps with reference verse text, detects long pauses, and generates visual hint overlays for the teacher.
- **What AI NEVER Does**: Assigns final grades, advances curriculum stages, or communicates definitive failure to the student.
- **The Teacher Review Gate**: The instructor opens a dedicated dashboard displaying the student's audio waveform, the AI-generated flags, and the source text. The teacher listens, validates or dismisses the flags, adds personalized voice/text feedback, and submits the official assessment.

This model preserves educator agency, accelerates review velocity by 60%, and maintains high pedagogical trust.`,
    keyTakeaways: [
      "AI should act as a diagnostic amplifier for educators, never an autonomous judge.",
      "Human-in-the-loop design eliminates algorithmic bias from penalizing diverse student accents.",
      "Educational institutions adopt software significantly faster when teacher authority is explicitly protected.",
    ],
  },
  {
    id: "practical-accessibility-web-apps",
    slug: "practical-accessibility-web-apps",
    title: "Designing for Cognitive & Motor Accessibility: Beyond the Checkbox",
    summary:
      "How my academic studies in Information Technology Education at USTED shaped a practical, keyboard-first, low-cognitive-load approach to frontend accessibility.",
    category: "Accessibility",
    readTime: "5 min read",
    publishedDate: "2024",
    content: `Accessibility (a11y) is frequently treated as an end-of-project compliance audit rather than an architectural design pillar. Studying Information Technology Education at USTED provided me with deep exposure to educational psychology and cognitive ergonomics, making it clear that accessibility is fundamentally about how humans interact with technology under varied physical and mental constraints.

### The Three Core Pillars of Accessible Frontends
1. **Keyboard-First Navigation Flow**: Every modal, dropdown, interactive card, and audio controller must be fully operable using \`Tab\`, \`Enter\`, \`Space\`, and \`Escape\`. Focus rings must be visibly distinct and high-contrast rather than suppressed with \`outline: none\`.
2. **Cognitive Load Reduction**: Educational dashboards should avoid visual clutter. We use progressive disclosure—presenting high-level summaries first and allowing users to expand detailed metrics on demand.
3. **Semantic Hierarchy**: Assistive technologies (like screen readers) depend on honest heading structures (\`<h1>\` through \`<h6>\`) and appropriate ARIA landmarks (\`<main>\`, \`<nav>\`, \`<aside>\`). Using semantic tags natively provides 90% of accessibility for free.

### Respecting User Preferences
Supporting \`prefers-reduced-motion\` ensures that users with vestibular disorders are not subjected to disorienting parallax or aggressive sliding animations. In our design system, motion is subtle, intentional, and easily bypassed.`,
    keyTakeaways: [
      "Accessible frontends require semantic HTML and visible keyboard focus states as non-negotiable baselines.",
      "Progressive disclosure reduces anxiety and cognitive load for student and administrative users.",
      "Reduced motion queries should be natively built into component design tokens.",
    ],
  },
  {
    id: "modular-frontend-architecture",
    slug: "modular-frontend-architecture",
    title: "Refactoring from Monoliths to Feature-Based Architecture in React",
    summary:
      "Why colocating types, data models, and UI components by domain feature creates maintainable applications that scale without developer fatigue.",
    category: "Architecture",
    readTime: "5 min read",
    publishedDate: "2024",
    content: `One of the most common anti-patterns in early React development is the monolithic component: a single 1,500-line file that fetches data, manages complex local state, contains raw copy strings, and renders intricate nested UI elements. While fast to prototype initially, this approach becomes unmaintainable within months.

### The Principle of Colocation
In modern frontend engineering, we structure codebases around domain features rather than arbitrary technical folders. Instead of a generic \`/components\` folder holding 80 unrelated components:
\`\`\`
src/features/projects/
├── components/       # ProjectCard, ProjectFilter, ProjectArchive
├── data/             # projects.ts (isolated data layer)
├── hooks/            # useProjectFilter.ts
└── types/            # project.ts
\`\`\`

### Key Benefits
- **Single Responsibility**: Updating project copy or adding a new case study requires editing only \`src/data/projects.ts\`. The UI component is entirely decoupled from the content.
- **Fast Developer Onboarding**: When returning to a codebase six months later, you know exactly where a feature lives without searching the entire project.
- **Isolated Testing & Refactoring**: A bug in the contact form or search filter can be diagnosed and fixed without touching unrelated hero or education modules.`,
    keyTakeaways: [
      "Content and data should always be separated from presentational React components.",
      "Feature-based folder structures provide clear ownership and high maintainability.",
      "Single responsibility components lead to cleaner, testable, and reusable codebases.",
    ],
  },
];

export function getArticleBySlug(slug: string): ArticleItem | undefined {
  return articlesData.find((a) => a.slug === slug);
}
