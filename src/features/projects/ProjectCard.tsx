import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Github, Code2 } from "lucide-react";
import { Project } from "@/types/project";
import TechBadge from "@/components/common/TechBadge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Active Development":
        return "bg-gold/15 text-gold border-gold/30";
      case "Institutional Platform":
        return "bg-primary/10 text-primary border-primary/20";
      case "Product Concept":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted/60 text-muted-foreground border-border";
    }
  };

  return (
    <article
      className={cn(
        "group flex flex-col rounded-2xl border border-border/80 bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-card",
        featured && "lg:grid lg:grid-cols-12 lg:gap-6"
      )}
    >
      {/* Visual / Image */}
      <div
        className={cn(
          "relative overflow-hidden bg-muted/40 border-b border-border/60",
          featured ? "lg:col-span-5 lg:border-b-0 lg:border-r" : "aspect-[16/10]"
        )}
      >
        {!imageError ? (
          <img
            src={project.image}
            alt={`Screenshot preview of ${project.title}`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/10 via-card to-background text-center">
            <Code2 className="w-8 h-8 text-primary/60 mb-2" />
            <span className="text-xs font-bold text-foreground">{project.title}</span>
            <span className="text-[10px] font-mono text-muted-foreground mt-0.5">{project.category}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none" />

        {/* Top Floating Category Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 pointer-events-none">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/80 text-foreground">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div
        className={cn(
          "p-5 sm:p-6 lg:p-7 flex flex-col justify-between flex-grow",
          featured && "lg:col-span-7"
        )}
      >
        <div>
          {/* Status & Timeline */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={cn(
                "text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded border",
                getStatusBadge(project.status)
              )}
            >
              {project.status}
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              {project.timeline}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-primary dark:text-wine-light mt-1 mb-3">
            {project.tagline}
          </p>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mb-5 space-y-1.5 text-xs text-muted-foreground">
              {project.highlights.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <TechBadge key={tag} name={tag} size="sm" />
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.links.caseStudy ? (
              <Link
                to={project.links.caseStudy}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold shadow-sm transition-all group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            ) : null}

            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-0.5"
                aria-label={`Visit live site for ${project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}
          </div>

          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
