import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Compass,
  Layers,
  Shield,
  Sparkles,
  UserCheck,
  Code2,
} from "lucide-react";
import { Project } from "@/types/project";
import ArchitectureFlow from "@/components/common/ArchitectureFlow";
import { flagshipRoutes } from "@/config/navigation";

interface CaseStudyDetailProps {
  project: Project;
}

export default function CaseStudyDetail({ project }: CaseStudyDetailProps) {
  const [imageError, setImageError] = useState(false);
  const caseStudy = project.caseStudyData;

  if (!caseStudy) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold text-foreground">Case study in preparation.</h2>
        <Link to="/projects" className="text-primary hover:underline mt-4 inline-block">
          ← Return to Projects
        </Link>
      </div>
    );
  }

  const currentIndex = flagshipRoutes.findIndex((r) => r.slug === project.slug);
  const prevProject =
    currentIndex > 0
      ? flagshipRoutes[currentIndex - 1]
      : flagshipRoutes[flagshipRoutes.length - 1];
  const nextProject =
    currentIndex >= 0 && currentIndex < flagshipRoutes.length - 1
      ? flagshipRoutes[currentIndex + 1]
      : flagshipRoutes[0];

  return (
    <article className="py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="mb-12 space-y-4 border-b border-border/80 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {project.category}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-primary dark:text-wine-light">
            {project.tagline}
          </p>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2">
            {caseStudy.overview}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
            <div className="rounded-lg border border-border/80 bg-card/60 p-3">
              <span className="text-muted-foreground block mb-0.5">Role</span>
              <span className="font-semibold text-foreground">{project.role}</span>
            </div>
            <div className="rounded-lg border border-border/80 bg-card/60 p-3">
              <span className="text-muted-foreground block mb-0.5">Timeline</span>
              <span className="font-semibold text-foreground">{project.timeline}</span>
            </div>
            <div className="rounded-lg border border-border/80 bg-card/60 p-3">
              <span className="text-muted-foreground block mb-0.5">Tier</span>
              <span className="font-semibold text-foreground capitalize">{project.tier}</span>
            </div>
            <div className="rounded-lg border border-border/80 bg-card/60 p-3 flex items-center gap-2">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground font-semibold flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Hero Visual Preview */}
        <section className="mb-14 rounded-2xl overflow-hidden border border-border/80 bg-muted/40 shadow-elevated">
          {!imageError ? (
            <img
              src={project.image}
              alt={`${project.title} detailed architectural showcase`}
              onError={() => setImageError(true)}
              className="w-full max-h-[480px] object-cover object-top"
            />
          ) : (
            <div className="p-12 text-center flex flex-col items-center justify-center min-h-[260px] bg-gradient-to-br from-primary/10 via-card to-background">
              <Code2 className="w-12 h-12 text-primary/60 mb-3" />
              <p className="text-sm font-bold text-foreground">{project.title} System Architecture</p>
              <p className="text-xs text-muted-foreground mt-1 max-w-md">
                Detailed multi-tier architecture, data contracts, and implementation blueprints below.
              </p>
            </div>
          )}
        </section>

        {/* Section: Context & Problem */}
        <section className="mb-14 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border/80 bg-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <Compass className="w-4 h-4" />
                <span>Context & Background</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {caseStudy.context}
              </p>
            </div>

            <div className="rounded-xl border border-border/80 bg-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-destructive font-semibold text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>The Core Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* Users & Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border/80 bg-card p-6">
              <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-primary" />
                <span>Target Users</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {caseStudy.targetUsers.map((user, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border/80 bg-card p-6">
              <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Project Objectives & Goals</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {caseStudy.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Technical Architecture */}
        <section className="mb-14 space-y-6">
          <div className="border-b border-border/80 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Technical Architecture & Layer Breakdown
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                How data, state, offline caching, and user interactions flow through the application.
              </p>
            </div>
          </div>

          <ArchitectureFlow
            layers={caseStudy.architectureLayers}
            governancePrinciple={caseStudy.aiGovernance}
          />
        </section>

        {/* Section: Key Technical Decisions */}
        <section className="mb-14 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground border-b border-border/80 pb-3">
            Key Architectural Decisions & Tradeoffs
          </h2>

          <div className="space-y-4">
            {caseStudy.keyTechnicalDecisions.map((dec, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/80 bg-card p-5 space-y-2 hover:border-primary/30 transition-colors"
              >
                <div className="text-sm font-bold text-foreground flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold">
                    0{i + 1}.
                  </span>
                  <span>{dec.decision}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                  <strong className="text-foreground">Rationale:</strong> {dec.rationale}
                </p>
                {dec.tradeoff && (
                  <p className="text-xs text-muted-foreground/90 pl-6 italic">
                    <strong className="text-gold">Tradeoff Considered:</strong> {dec.tradeoff}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section: UX & Accessibility Decisions */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/80 bg-card p-6">
            <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>UX & HCI Decisions</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              {caseStudy.uxAndHciDecisions.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/80 bg-card p-6">
            <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span>Accessibility Considerations</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              {caseStudy.accessibilityConsiderations.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section: Challenges & Concrete Solutions */}
        <section className="mb-14 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground border-b border-border/80 pb-3">
            Engineering Challenges & Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.challengesAndSolutions.map((cs, i) => (
              <div key={i} className="rounded-xl border border-border/80 bg-card p-5 space-y-3">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase text-destructive">
                    Challenge
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">
                    {cs.challenge}
                  </p>
                </div>
                <div className="pt-2 border-t border-border/60">
                  <span className="text-[11px] font-mono font-bold uppercase text-primary dark:text-gold">
                    Engineered Solution
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Lessons & Future Roadmap */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/80 bg-card p-6">
            <h3 className="text-sm font-bold text-foreground mb-3">
              Lessons Learned
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {caseStudy.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/80 bg-card p-6">
            <h3 className="text-sm font-bold text-foreground mb-3">
              Current Status & Roadmap
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-primary mb-3">
              {caseStudy.currentStatus}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {caseStudy.futureEnhancements.map((enhancement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>{enhancement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom Bidirectional Pagination */}
        <footer className="pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border/80 bg-card hover:bg-muted/80 text-xs font-semibold text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Prev: {prevProject.label}</span>
          </Link>

          <Link
            to="/projects"
            className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            All Projects Directory
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 text-xs font-semibold transition-colors"
          >
            <span>Next: {nextProject.label}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </footer>
      </div>
    </article>
  );
}
