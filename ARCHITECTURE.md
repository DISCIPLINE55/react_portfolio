# Architecture & Design Decision Document (Portfolio 2.0)

**Project Owner:** Ismail Ibrahim Mensah  
**Brand Identity:** DISCIPLINE / DISCIPLINE55  
**Version:** 2.0.0  

---

## 1. Architectural Philosophy & Goals

Portfolio 2.0 is designed as a maintainable, extensible, and accessible frontend system that accurately communicates Ismail Ibrahim Mensah's unique identity as a **Software Developer & EdTech Builder** with an academic background in **BSc Information Technology Education (USTED, Ghana)** and active learning in **AI & Machine Learning (Next Path Ghana)**.

### Core Architectural Axioms:
1. **Separation of Concerns:** Content and data live in typed, deterministic datasets (`src/data/*`). UI components consume data rather than hardcoding copy.
2. **Single Responsibility Principle:** Every component has one distinct responsibility (e.g. `ProjectSearch` handles search input with keyboard reset; `ProjectFilters` manages category pill states; `ProjectGrid` renders the responsive layout with empty states; `ProjectCard` renders an individual project; `ProjectArchive` manages the collapsed archive of earlier work; `ThemeToggle` handles theme state).
3. **No Manufactured Claims (Truthful Content):** Zero fabricated testimonials, zero arbitrary percentage bars, zero fictitious metrics.
4. **Accessible by Default (WCAG 2.1 AA):** High-contrast color ratios, visible focus indicators, skip-to-content links, screen reader landmarks, focus trap and restoration in modals, and strict `prefers-reduced-motion` compliance.
5. **Human-in-the-Loop AI Governance:** In educational systems like EduArabic, architecture enforces *"AI assists. Teachers decide."*

---

## 2. Layered Data & Component Flow

```
+-------------------------------------------------------------+
|                        Data Layer                           |
|  projects.ts | case-studies.ts | skills.ts | education.ts   |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                     Domain Types Layer                      |
|   project.ts | skill.ts | journey.ts | article.ts | common.ts |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                      Feature Modules                        |
|  hero | about | projects | case-studies | skills | etc.     |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                    Layout & Common UI                       |
|   Navbar | Footer | Container | SectionHeading | TechBadge  |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                       Pages & Router                        |
| Index | ProjectsPage | CaseStudyPage | ArticlesPage | Admin |
+-------------------------------------------------------------+
```

---

## 3. Visual Identity & Token System

The design system moves away from generic starter themes to a refined, editorial technology aesthetic:

- **Wine / Burgundy (`#721832`, `hsl(348, 65%, 28%)`):** Establishes mature, distinctive brand authority.
- **Refined Gold (`#D4AF37`, `hsl(42, 68%, 52%)`):** Applied as an intentional accent for credentials, highlights, and milestones.
- **Deep Obsidian (`#0F0E11`, `hsl(250, 8%, 6%)`):** Used for dark theme canvas and elevated card surfaces.
- **Warm Alabaster (`#FAF8F5`, `hsl(40, 20%, 98%)`):** Used for light theme canvas to avoid sterile white glare.
- **Warm White (`#F6F4EE`, `hsl(40, 20%, 95%)`):** Provides readable, high-contrast typography in dark mode.

---

## 4. Flagship Projects & Governance Strategy

| Project | Domain | Key Architecture Highlight | Status |
|---|---|---|---|
| **EduArabic** | EdTech / AI | Offline-first PWA, IndexedDB local queue, Web Audio API, teacher-governed AI review queue (*"AI assists. Teachers decide."*) | Active Development |
| **Khulafasco Digital Platform** | School Management | Supabase PostgreSQL, Row-Level Security, sub-second student search index | Institutional Platform |
| **DisciNet** | FinTech Concept | Deterministic financial computation engine, compound savings visualizer, habit scoring | Product Concept |
| **Mobile Quran Institute** | Mobile EdTech | React Native touch-first navigation, preloaded audio buffers, spaced repetition | Academic Prototype |
| **Alkhulafau SHS Enrollment** | Administrative Utility | Fast multi-criteria search, BECE index collision prevention, printable admission slips | Institutional Platform |
| **PedagoLog** | Teacher Education | Gibbs' Reflective Cycle prompts, auto-saving journaling canvas, competency radar | Academic Prototype |

---

## 5. Maintenance Simulation & Developer Experience

### Scenario A: Adding a new Flagship Project
1. Add project metadata to `src/data/projects.ts` under `flagshipProjects`.
2. Add the architectural deep-dive to `src/data/case-studies.ts`.
3. Add the slug to `flagshipRoutes` in `src/config/navigation.ts`.
4. *Result:* The project card automatically renders on the homepage, all projects directory, and dynamic `/projects/:slug` case study route without touching any UI component.

### Scenario B: Updating Technical Skills
1. Open `src/data/skills.ts`.
2. Add or edit items within the appropriate category (`frontend`, `backend-data`, `mobile`, `ai-ml`, `design-hci`, `tools-workflow`).
3. *Result:* The categorized skill grid updates immediately with contextual descriptions.

---

## 6. Performance & Build Verification

- **TypeScript:** Strict type checking with `0` type errors (`npx tsc --noEmit`).
- **ESLint:** Strict linting conformance (`npm run lint`).
- **Build Output:** Code splitting with manual vendor chunks (`vendor-react`, `vendor-query`, `vendor-icons`), dynamic lazy routes, and PWA Service Worker caching.
