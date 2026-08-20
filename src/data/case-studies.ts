import { ProjectCaseStudy } from "@/types/project";

export const caseStudies: Record<string, ProjectCaseStudy> = {
  "edu-arabic": {
    slug: "edu-arabic",
    overview:
      "EduArabic is a comprehensive, offline-first educational platform combining Arabic language acquisition, Quran memorization (Tahfidh), Tajweed recitation assessment, and institutional classroom management. Designed for students, teachers, and madrasahs in both bandwidth-constrained and modern environments.",
    context:
      "Traditional Arabic and Quran memorization instruction relies heavily on intensive one-on-one teacher recitation listening and manual tracking. In many African and global Islamic institutions, high student-to-teacher ratios and unreliable internet access create severe bottlenecks for student practice and teacher evaluation.",
    problem:
      "Learners lack structured daily recitation practice with immediate phonetic and syllabic feedback outside the classroom, while teachers spend excessive instructional time on routine repetitive checks rather than focused pedagogical intervention. Furthermore, standard web applications fail in low-connectivity areas.",
    targetUsers: [
      "Tahfidh & Arabic Students (seeking guided memorization, verse repetition, and audio playback)",
      "Teachers & Instructors (requiring student recitation review, syllabus pacing, and audio feedback)",
      "Madrasah & School Administrators (managing cohorts, multi-tenancy, and academic analytics)",
    ],
    goals: [
      "Deliver an offline-first Progressive Web App (PWA) with local Quran text, audio caching, and sync.",
      "Implement teacher-governed AI recitation assistance where AI provides phonetic cues while teachers retain absolute evaluation authority.",
      "Support multi-tenant institutional administration with role-based access control.",
      "Provide accessible, high-contrast Arabic typography with full diacritics and RTL layout support.",
    ],
    constraints: [
      "Must function seamlessly in low or intermittent internet connectivity environments.",
      "Strict cultural and religious sensitivity regarding Quranic text accuracy (Uthmani script standards).",
      "Low latency for audio recording and waveform visualization on mid-range mobile devices.",
    ],
    solution:
      "Engineered an offline-first web platform using React, TypeScript, IndexedDB, and Web Audio APIs, backed by Supabase with Row-Level Security. Built modular student memorization workflows, audio recitation recording with teacher review queues, and AI-assisted phonetic alignment.",
    architectureLayers: [
      {
        title: "Presentation & HCI Layer",
        description: "Mobile-first responsive UI built with Tailwind CSS, supporting RTL layout, Uthmani Arabic typography, audio waveforms, and WCAG 2.1 AA accessible contrast.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Web Audio API"],
      },
      {
        title: "Client-Side Offline & Storage Layer",
        description: "Service Worker cache strategy for core application assets and Surah audio files, coupled with IndexedDB for local memorization logs, bookmarks, and draft recordings.",
        technologies: ["Progressive Web App (PWA)", "IndexedDB / Dexie", "Service Workers", "Cache API"],
      },
      {
        title: "Backend & Multi-Tenancy Layer",
        description: "Supabase PostgreSQL backend featuring Row-Level Security (RLS) for tenant isolation, secure user authentication, and institutional cohort schema.",
        technologies: ["Supabase", "PostgreSQL", "RLS Policies", "RESTful Endpoints"],
      },
      {
        title: "AI-Assisted Processing & Governance Layer",
        description: "Teacher-initiated audio transcription and phonetic alignment API providing assistive hints, strictly governed by teacher review and final validation.",
        technologies: ["Audio Processing API", "Phonetic Alignment", "Teacher Review Gate"],
      },
    ],
    keyTechnicalDecisions: [
      {
        decision: "Adopted IndexedDB and Service Worker caching for offline-first resilience.",
        rationale: "Students in regional communities experience frequent network outages. Storing active Surah data and recording queues locally ensures zero disruption to daily memorization routines.",
        tradeoff: "Required complex background sync conflict-resolution logic when re-establishing internet connection.",
      },
      {
        decision: "Enforced strict 'AI assists. Teachers decide.' architectural boundary.",
        rationale: "Automated Quran grading risks theological errors and demotivates students. AI is strictly constrained to audio analysis and flag generation for teacher verification.",
      },
      {
        decision: "Custom Arabic typography optimization with specialized Uthmanic font rendering.",
        rationale: "Standard system fonts frequently clip Arabic Tashkeel (diacritics) and miss Tajweed rules. Specialized font subsets and dynamic sizing were integrated for precision.",
      },
    ],
    uxAndHciDecisions: [
      "RTL-first navigation layout with seamless toggle between Arabic and English interfaces.",
      "Distraction-free memorization mode with configurable verse looping, ayah masking for self-testing, and large tap targets for mobile use.",
      "Audio recording interface with immediate waveform visual feedback and one-tap re-record.",
    ],
    accessibilityConsiderations: [
      "Scalable Arabic typography up to 200% without layout disruption.",
      "High-contrast color modes compliant with WCAG 2.1 AA.",
      "Full keyboard accessibility for audio playback controls (Space to Play/Pause, Arrow keys for Ayah stepping).",
    ],
    aiGovernance: {
      principle: "AI assists. Teachers decide.",
      implementation:
        "AI models provide automated transcription diffs, silent pause flags, and Tajweed hint overlays. The platform explicitly forbids automated grade assignment; marks and progression approvals require explicit teacher sign-off.",
    },
    challengesAndSolutions: [
      {
        challenge: "Synchronizing high-fidelity audio recitations with Quranic verse text in offline mode.",
        solution: "Implemented timestamped Ayah metadata stored in JSON, synced with HTML5 Audio current-time listeners to highlight verses in real-time.",
      },
      {
        challenge: "Managing storage limitations on mobile devices with extensive audio recordings.",
        solution: "Utilized Opus audio compression on client-side recordings before local IndexedDB storage, paired with automated cache pruning for completed review queues.",
      },
    ],
    lessonsLearned: [
      "Offline-first UX requires clear visual status indicators so users understand when data is cached versus synced.",
      "Domain-specific typography (Arabic diacritics) demands dedicated layout testing across multiple rendering engines.",
      "Human-in-the-loop AI significantly increases trust among educational institutions compared to autonomous grading.",
    ],
    currentStatus: "Core PWA MVP & Audio Review Engine in Active Development.",
    futureEnhancements: [
      "Native mobile companion app using React Native & Expo.",
      "Peer-to-peer memorization practice rooms with teacher monitoring.",
      "Fine-tuned lightweight on-device phonetic alignment model.",
    ],
  },

  "khulafasco": {
    slug: "khulafasco",
    overview:
      "A centralized school digital platform engineered for Al-khulafau Arashiduun Islamic Senior High School in Ghana. Streamlines student information workflows, admission verification, academic record tracking, and administrative operations.",
    context:
      "Al-khulafau Arashiduun Islamic Senior High School previously managed student admissions, bio-data records, and academic progress via fragmented manual paperwork and spreadsheets, leading to data loss risks, slow lookups, and administrative delays during term enrollment.",
    problem:
      "School administrators and teachers faced excessive friction when looking up student records, verifying admission credentials, managing course allocations, and communicating academic standing to stakeholders.",
    targetUsers: [
      "School Administrators & Headmasters (managing admissions, class lists, and staff accounts)",
      "Teachers & Academic Staff (recording grades and tracking student enrollment status)",
      "Students & Guardians (verifying admission placement and institutional notices)",
    ],
    goals: [
      "Digitize the institutional student registry with fast indexing and search capabilities.",
      "Provide secure, role-based administrative dashboards with Supabase authentication.",
      "Eliminate paper-based admission queues through digital enrollment verification.",
      "Ensure fast load times on low-bandwidth school network connections.",
    ],
    solution:
      "Built a modern, responsive web application using React, TypeScript, and Supabase. Features a searchable student directory, secure auth, bulk data import/export utilities, and optimized database queries with PostgreSQL Row-Level Security.",
    architectureLayers: [
      {
        title: "Frontend Application Layer",
        description: "Responsive Single Page Application with dynamic data tables, instant search filtering, modal forms, and role-based view routing.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "React Router", "Lucide Icons"],
      },
      {
        title: "Data Access & State Layer",
        description: "TanStack Query (React Query) for performant caching, optimistic updates, and background refetching of institutional records.",
        technologies: ["TanStack Query", "Zod Validation", "React Hook Form"],
      },
      {
        title: "Backend & Database Layer",
        description: "Supabase PostgreSQL instance featuring normalized student schemas, admission verification tables, and strict RLS policies.",
        technologies: ["Supabase", "PostgreSQL", "Row-Level Security", "JWT Authentication"],
      },
    ],
    keyTechnicalDecisions: [
      {
        decision: "Built on Supabase PostgreSQL with strict Row-Level Security (RLS).",
        rationale: "School records contain sensitive personal data. RLS guarantees that staff can only access authorized cohorts, while public queries are restricted strictly to admission lookup endpoints.",
      },
      {
        decision: "Client-side fuzzy searching paired with indexed PostgreSQL search queries.",
        rationale: "Enables administrative staff to rapidly find students by index number, first name, surname, or program without page reloads.",
      },
    ],
    uxAndHciDecisions: [
      "High-density data tables with customizable columns for desktop administrative staff.",
      "Mobile-optimized lookup cards for staff using smartphones on school grounds.",
      "Clear status badges (Active, Enrolled, Pending Verification, Graduated).",
    ],
    accessibilityConsiderations: [
      "Full keyboard navigation through student lists and form controls.",
      "High-contrast color palette conforming to WCAG 2.1 AA.",
      "Screen-reader friendly form validation errors and confirmation alerts.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling erratic internet connectivity in school administrative offices.",
        solution: "Integrated aggressive TanStack Query caching with stale-while-revalidate strategies, allowing staff to view previously loaded lists without internet interruption.",
      },
    ],
    lessonsLearned: [
      "Understanding institutional workflows through direct stakeholder interviews is essential before designing database schemas.",
      "Input validation and bulk import error handling prevent corrupt data entry when onboarding hundreds of student records.",
    ],
    currentStatus: "Institutional Digital Platform & Enrollment Portal deployed for school operations.",
    futureEnhancements: [
      "Automated terminal report card generator with PDF download.",
      "SMS notification gateway for parent alerts.",
    ],
  },

  "discinet": {
    slug: "discinet",
    overview:
      "DisciNet is a modern digital financial management and disciplined wealth habit product concept. Focuses on personal savings goals, budget discipline, bill scheduling, and visual wealth habit guidance.",
    context:
      "Young professionals and students frequently struggle to establish consistent financial habits, monitor recurring bills, and stick to savings targets due to overly complex, institutional banking apps that lack intuitive goal-oriented design.",
    problem:
      "Most financial applications focus on raw transactions rather than behavioral habits, behavioral psychology, and actionable financial planning.",
    targetUsers: [
      "Students & Early Career Professionals (seeking structured budgeting and savings habits)",
      "Freelancers & Developers (managing irregular cash flow and bill schedules)",
    ],
    goals: [
      "Design an intuitive, human-centered financial dashboard emphasizing habits and discipline.",
      "Provide visual savings goal projections and budget allocation breakdowns.",
      "Implement interactive financial habit metrics and calendar bill alerts.",
    ],
    solution:
      "Crafted a comprehensive product prototype with React, TypeScript, Tailwind CSS, and Recharts. Built structured modules for income allocation (50/30/20 rule), milestone savings trackers, expense category visualizations, and habit scoring.",
    architectureLayers: [
      {
        title: "Product UI / Interaction Layer",
        description: "Editorial dark-themed financial interface with responsive stat cards, smooth interactive charts, and quick-action modals.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Lucide Icons"],
      },
      {
        title: "State & Computation Engine",
        description: "Deterministic financial calculation utilities for compound interest projections, budget allocation ratios, and habit compliance scoring.",
        technologies: ["TypeScript Domain Models", "Local Storage State Engine"],
      },
    ],
    keyTechnicalDecisions: [
      {
        decision: "Accurate mathematical modeling of compound savings and budget distributions.",
        rationale: "Ensures users receive exact numerical feedback on savings velocity rather than generic estimates.",
      },
      {
        decision: "Zero-dependency client-side architecture for fast prototype demonstration.",
        rationale: "Kept the concept fast, secure, and easily interactive for user testing without requiring third-party banking API credentials.",
      },
    ],
    uxAndHciDecisions: [
      "Color-coded visual hierarchy distinguishing savings velocity from recurring debt/bills.",
      "Interactive slider controls for simulating monthly savings contributions and timelines.",
    ],
    accessibilityConsiderations: [
      "Accessible charts with tabular alternative views for screen readers.",
      "Distinct color contrasts avoiding reliance solely on red/green for financial health indicators.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Presenting complex financial data without overwhelming users with numerical clutter.",
        solution: "Created progressive disclosure cards: top-level summary metrics with expandable deep-dive breakdowns.",
      },
    ],
    lessonsLearned: [
      "Financial tools succeed based on UX clarity and behavioral encouragement rather than sheer feature density.",
    ],
    currentStatus: "Product Concept & Interactive Prototype.",
    futureEnhancements: [
      "Exportable financial summaries in PDF and CSV format.",
      "Multi-currency support for West African CFA and Ghanaian Cedi.",
    ],
  },

  "mobile-quran-institute": {
    slug: "mobile-quran-institute",
    overview:
      "A mobile-first Islamic educational application designed for intuitive Quran learning, spaced repetition memorization tracking, and on-the-go recitation audio playback.",
    context:
      "Mobile devices are the primary computing platform for millions of Quran learners across West Africa and globally. Traditional desktop-oriented learning platforms fail to provide smooth touch-first recitation and audio navigation.",
    problem:
      "Learners need a lightweight, responsive mobile interface that allows quick audio playback, verse-by-verse repetition, and offline progress logging during daily commutes or study circles.",
    targetUsers: [
      "Mobile Quran Students",
      "Youth & Adult Learners seeking structured memorization schedules",
    ],
    goals: [
      "Deliver a touch-optimized mobile experience with smooth audio playback.",
      "Implement spaced-repetition memorization reminders and Ayah bookmarking.",
      "Optimize bundle size for fast installation and low memory usage.",
    ],
    solution:
      "Designed and developed mobile interfaces utilizing React Native / Expo concepts and modern responsive web PWA patterns with modular audio controls and localized Surah index.",
    architectureLayers: [
      {
        title: "Mobile UI / UX Layer",
        description: "Touch-optimized interface featuring bottom navigation, swipe gestures for verse navigation, and high-readability typography.",
        technologies: ["React Native / Expo Patterns", "Tailwind CSS / NativeWind", "TypeScript"],
      },
      {
        title: "Audio & Caching Engine",
        description: "Background audio playback support with Surah download management.",
        technologies: ["Web Audio / Expo AV", "Local Cache Storage"],
      },
    ],
    keyTechnicalDecisions: [
      {
        decision: "Bottom-navigation architecture tailored for single-handed mobile usage.",
        rationale: "Maximizes thumb-reach accessibility on modern tall mobile screens.",
      },
    ],
    uxAndHciDecisions: [
      "Night-mode optimized high-contrast dark theme for comfortable low-light recitation.",
      "One-tap audio loop selector for memorization repetition.",
    ],
    accessibilityConsiderations: [
      "Minimum 48px touch targets across all interactive buttons.",
      "Dynamic type scaling for elderly users.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Smooth audio playback transitions between consecutive Quranic verses.",
        solution: "Preloaded adjacent verse audio buffers to eliminate audible latency during continuous recitation.",
      },
    ],
    lessonsLearned: [
      "Mobile HCI requires ruthless elimination of unnecessary desktop UI clutter.",
    ],
    currentStatus: "Mobile Application Prototype & PWA Concept.",
    futureEnhancements: [
      "Push notifications for scheduled revision sessions.",
      "Offline audio pack manager with bandwidth saver mode.",
    ],
  },

  "alkhulafau-enrollment": {
    slug: "alkhulafau-enrollment",
    overview:
      "A dedicated, high-speed student search, verification, and enrollment system built for school administration to validate student admissions in seconds.",
    context:
      "During annual school admission periods, hundreds of incoming students and parents arrive at the campus to confirm admission letters and program placements, leading to crowded administrative offices.",
    problem:
      "Staff struggled with slow paper binders and unindexed files to verify whether a student had been placed and officially enrolled.",
    targetUsers: [
      "School Admissions Officers",
      "Department Heads and Registration Clerks",
    ],
    goals: [
      "Sub-second student record lookup by index number, BECE placement, or student name.",
      "Instant admission letter validation and enrollment status toggling.",
      "Fast CSV export of verified student cohorts for Ghana Education Service reporting.",
    ],
    solution:
      "Developed a focused web application with real-time indexing, instant query filtering, print-ready confirmation cards, and secure administrative status updates.",
    architectureLayers: [
      {
        title: "Search & Filtering Layer",
        description: "Optimized client-side indexing engine capable of searching thousands of records instantly without lag.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Data & Export Layer",
        description: "Structured record schema with CSV import/export capabilities and Supabase backend synchronization.",
        technologies: ["Supabase", "PostgreSQL", "CSV Parser"],
      },
    ],
    keyTechnicalDecisions: [
      {
        decision: "Debounced multi-criteria search filtering.",
        rationale: "Eliminates unnecessary API calls while providing instant UI feedback as the clerk types.",
      },
    ],
    uxAndHciDecisions: [
      "High-contrast verification badges (Verified, Pending, Flagged) for rapid identification.",
      "Keyboard shortcut (Cmd/Ctrl + K) to jump directly into search input from anywhere.",
    ],
    accessibilityConsiderations: [
      "ARIA live regions announcing search result counts to screen readers.",
      "Print stylesheet formatted specifically for official admission slips.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Preventing duplicate registrations during peak admission rush.",
        solution: "Unique database constraint on National BECE Index Numbers with real-time collision warnings.",
      },
    ],
    lessonsLearned: [
      "Administrative tools must prioritize keyboard efficiency and quick visual scanning above all else.",
    ],
    currentStatus: "Production Utility in Institutional Use.",
    futureEnhancements: [
      "Barcode/QR code scanning on printed admission notices.",
    ],
  },

  "pedagolog": {
    slug: "pedagolog",
    overview:
      "An educational technology tool and pedagogical reflection log designed for teacher-trainees and educators to record lesson observations, instructional strategies, and practicum competencies.",
    context:
      "As a BSc Information Technology Education student at USTED, teacher-trainees undergo rigorous practicum teaching where continuous pedagogical reflection is required by curriculum standards.",
    problem:
      "Trainee teachers often use unstructured physical notebooks for practicum reflections, making it difficult to track competency development, link theory to classroom reality, and receive structured feedback from supervisors.",
    targetUsers: [
      "Teacher-Trainees & Student Teachers",
      "Practicum Supervisors & Education Mentors",
    ],
    goals: [
      "Structured logging framework aligned with National Teacher Education Standards.",
      "Categorized tagging for pedagogy, classroom management, assessment, and inclusive education.",
      "Offline-capable journaling with exportable practicum portfolios.",
    ],
    solution:
      "Engineered a digital reflection notebook and competency tracker featuring structured prompt templates, tag-based learning journals, and progress analytics.",
    architectureLayers: [
      {
        title: "Journal & Reflection UI",
        description: "Clean writing canvas with markdown support, structured reflection prompts (What went well, What was challenging, Action step), and competency tag selector.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Markdown Parser"],
      },
      {
        title: "Local Persistence Layer",
        description: "IndexedDB local storage ensuring teachers never lose uncommitted journal entries during classroom teaching.",
        technologies: ["IndexedDB", "Local Storage", "JSON Export"],
      },
    ],
    keyTechnicalDecisions: [
      {
        decision: "Auto-saving journal draft engine.",
        rationale: "Protects educators from losing thoughtful reflection notes during busy classroom periods.",
      },
    ],
    uxAndHciDecisions: [
      "Minimalist writing interface with distraction-free mode and soft warm lighting palette.",
      "Visual competency radar displaying coverage across diverse teaching standards.",
    ],
    accessibilityConsiderations: [
      "Full keyboard navigability for text editor and tag selection.",
      "High readability typography with generous line height for extended writing.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Designing structured prompts that encourage genuine deep reflection rather than rote summary.",
        solution: "Integrated Gibbs' Reflective Cycle framework as guided question steps.",
      },
    ],
    lessonsLearned: [
      "Combining educational theory directly with software design yields significantly higher domain utility.",
    ],
    currentStatus: "Academic Project & Educational Tool Prototype.",
    futureEnhancements: [
      "Supervisor review and annotation sharing.",
      "Automated practicum portfolio compilation to PDF.",
    ],
  },
};
