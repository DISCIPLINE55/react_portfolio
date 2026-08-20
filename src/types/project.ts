export type ProjectTier = "flagship" | "secondary" | "archive";

export type ProjectStatus =
  | "Active Development"
  | "Production MVP"
  | "Institutional Platform"
  | "Product Concept"
  | "Academic Prototype"
  | "Archived";

export interface ProjectArchitectureLayer {
  title: string;
  description: string;
  technologies: string[];
}

export interface ProjectCaseStudy {
  slug: string;
  overview: string;
  context: string;
  problem: string;
  targetUsers: string[];
  goals: string[];
  constraints?: string[];
  solution: string;
  architectureLayers: ProjectArchitectureLayer[];
  keyTechnicalDecisions: {
    decision: string;
    rationale: string;
    tradeoff?: string;
  }[];
  uxAndHciDecisions: string[];
  accessibilityConsiderations: string[];
  aiGovernance?: {
    principle: string;
    implementation: string;
  };
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  lessonsLearned: string[];
  currentStatus: string;
  futureEnhancements: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  tier: ProjectTier;
  status: ProjectStatus;
  featured: boolean;
  image: string;
  tags: string[];
  role: string;
  timeline: string;
  highlights: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    mobile?: string[];
    database?: string[];
    ai?: string[];
    tools?: string[];
  };
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
    demoVideo?: string;
  };
  hasCaseStudy: boolean;
  caseStudyData?: ProjectCaseStudy;
}
