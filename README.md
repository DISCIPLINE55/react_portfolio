# Ismail Ibrahim Mensah — Portfolio 2.0
**Software Developer & EdTech Builder** | **Brand:** DISCIPLINE / DISCIPLINE55  
**Academic Background:** BSc Information Technology Education — University of Skills Training and Entrepreneurial Development (USTED), Ghana  
**AI/ML Growth:** Next Path Ghana — AI & Machine Learning, Cohort 1 (2026)  
**Live Site:** [https://ismailmensah.vercel.app](https://ismailmensah.vercel.app)

---

## 🏛️ Overview & Positioning

Portfolio 2.0 is a modern, modular, accessible, and high-performance developer portfolio representing Ismail Ibrahim Mensah. It bridges software development, educational pedagogy, human-computer interaction (HCI), and emerging artificial intelligence.

Rather than a generic developer template, this platform is engineered with strict separation of concerns, domain-driven types, structured data layers, and dedicated deep-dive architectural case studies.

### Core Flagship Projects:
1. **EduArabic**: AI-assisted Islamic, Arabic learning & Quran memorization (Tahfidh) platform. Architecture: Offline-first PWA, IndexedDB, Web Audio API, Supabase PostgreSQL with strict educator governance: *"AI assists. Teachers decide."*
2. **Khulafasco Digital Platform**: Centralized school information and digital transformation system for Al-khulafau Arashiduun Islamic Senior High School, Ghana.
3. **DisciNet**: Disciplined digital wealth management and financial habit product concept.
4. **Mobile Quran Institute**: Touch-optimized mobile learning application with spaced repetition memorization schedules.
5. **Alkhulafau SHS Student Search & Enrollment**: Sub-second administrative student record querying and admission validation utility.
6. **PedagoLog**: Pedagogical reflection log and teacher-trainee practicum competency tracker.

---

## 🛠️ Technology Ecosystem

- **Frontend:** React 18, TypeScript, Tailwind CSS, Radix UI Primitives, Lucide Icons.
- **Backend & Data:** Supabase, PostgreSQL, Row-Level Security (RLS), RESTful APIs.
- **Offline & Storage:** Progressive Web App (PWA), Service Workers, IndexedDB / Dexie, LocalStorage.
- **AI & ML (Active Growth):** Python, AI API integrations, phonetic alignment pipelines, Next Path Ghana (Cohort 1 — 2026).
- **Design & HCI:** Custom Wine/Burgundy (`#721832`) & Refined Gold (`#D4AF37`) palette, Obsidian dark surfaces, WCAG 2.1 AA keyboard accessibility, reduced-motion support.
- **Tooling:** Vite, ESLint, TypeScript Compiler, npm, Vercel.

---

## 📁 Codebase Architecture

```
src/
├── config/
│   ├── site.ts                     # Centralized metadata, identity, verified links, heroBadges
│   ├── navigation.ts               # Navigation items, flagship routes, page links
│   └── seo.ts                      # Default SEO schema, OpenGraph, JSON-LD structured data builder
│
├── types/
│   ├── project.ts                  # Project, CaseStudy, ArchitectureLayer, Status types
│   ├── skill.ts                    # Categorized skill models
│   ├── journey.ts                  # Education, Credentials, and AI/ML journey models
│   ├── article.ts                  # Technical notes and essay types
│   └── common.ts                   # Generic UI types and contact form payloads
│
├── data/
│   ├── projects.ts                 # Flagship (6) and archived (5) project datasets
│   ├── case-studies.ts             # In-depth architectural case studies for the 6 flagship systems
│   ├── skills.ts                   # Categorized tech stack (Frontend, Backend, Mobile, AI/ML, HCI, Tools)
│   ├── ai-journey.ts               # Next Path Ghana curriculum, experimentation & ethics
│   ├── education.ts                # USTED BSc IT Education, verified credentials
│   ├── methodology.ts              # "How I Build" engineering & HCI principles
│   └── articles.ts                 # Technical essays and engineering insights
│
├── components/
│   ├── layout/                     # Navbar, Footer, SkipToContent, Container
│   ├── ui/                         # Radix UI / shadcn primitive wrappers
│   ├── common/                     # SectionHeading, TechBadge, SocialLinks, ThemeToggle, ArchitectureFlow, StatCard
│   └── Seo.tsx                     # Dynamic head & JSON-LD structured data manager
│
├── features/
│   ├── hero/                       # HeroSection
│   ├── about/                      # AboutSection
│   ├── projects/                   # ProjectsSection, ProjectCard, ProjectGrid, ProjectSearch, ProjectFilters, ProjectArchive
│   ├── case-studies/               # CaseStudyDetail (with bidirectional navigation & image fallbacks)
│   ├── skills/                     # SkillsSection (grouped by engineering domain)
│   ├── how-i-build/                # HowIBuildSection (architecture principles)
│   ├── ai-journey/                 # AIJourneySection (Next Path Ghana)
│   ├── education/                  # EducationSection (USTED + credentials)
│   ├── articles/                   # ArticlesSection (with accessible preview modal)
│   └── contact/                    # ContactSection (composed with useContactForm hook)
│
├── hooks/
│   ├── useContactForm.ts           # Contact form state, Zod validation, sanitization, mailto dispatch
│   ├── useReducedMotion.ts         # prefers-reduced-motion accessibility hook
│   ├── useIntersectionObserver.ts  # Viewport scroll-reveal observer hook
│   ├── useMediaQuery.ts            # Viewport media query matcher with semantic breakpoints
│   ├── useScrollProgress.ts        # Vertical scroll depth tracker (0–100%)
│   ├── use-mobile.tsx              # Mobile breakpoint detection
│   └── use-toast.ts                # Toast notification system
│
├── lib/
│   ├── utils.ts                    # cn() helper
│   ├── analytics.ts                # Plausible-compatible custom event tracker
│   └── validation.ts               # Shared validation utilities (email, url, sanitize, clamp)
│
├── pages/
│   ├── Index.tsx                   # Curated Homepage narrative flow
│   ├── ProjectsPage.tsx            # All projects directory with category filter and search
│   ├── CaseStudyPage.tsx           # Dynamic case study route (/projects/:slug)
│   ├── ArticlesPage.tsx            # Technical notes index (/articles)
│   ├── ArticleDetailPage.tsx       # Dedicated reading route (/articles/:slug)
│   ├── NotFound.tsx                # 404 handler
│   ├── Admin.tsx                   # Supabase CMS manager
│   └── Auth.tsx                    # Authentication
│
├── App.tsx                         # Central router & query provider (lazy loaded)
├── main.tsx                        # Application entry point
└── index.css                       # Semantic CSS variables & design tokens
```

---

## ⚡ Quick Start & Development

### 1. Clone & Install
```bash
git clone https://github.com/DISCIPLINE55/portfolio.git
cd portfolio
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Verify Code Quality & Build
```bash
npx tsc --noEmit   # Type check (strict)
npm run lint       # ESLint check
npm run build      # Production bundle & PWA service worker generation
```

---

## 📖 Maintenance Guide

- **Add a Project**: Add entry to `src/data/projects.ts` (and `src/data/case-studies.ts` if flagship).
- **Add an Article**: Add entry to `src/data/articles.ts`.
- **Update Skills**: Modify entries in `src/data/skills.ts`.
- **Update Identity / Contacts**: Modify `src/config/site.ts`.
- **Update Navigation**: Modify `src/config/navigation.ts`.
