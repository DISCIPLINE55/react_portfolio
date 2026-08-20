import React from "react";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onResetFilters?: () => void;
}

export default function ProjectGrid({ projects, onResetFilters }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center rounded-2xl border border-dashed border-border p-8">
        <p className="text-sm font-semibold text-foreground">No projects match your criteria.</p>
        <p className="text-xs text-muted-foreground mt-1">
          Try refining your search query or selecting "All" categories.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Reset Search & Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} featured={false} />
      ))}
    </div>
  );
}
