import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Github, History } from "lucide-react";
import { archivedProjects } from "@/data/projects";
import TechBadge from "@/components/common/TechBadge";

export default function ProjectArchive() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-12 rounded-2xl border border-border/70 bg-card/40 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-muted text-muted-foreground">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Earlier Work & Archive ({archivedProjects.length})
            </h3>
            <p className="text-xs text-muted-foreground">
              Foundational utility tools, JavaScript algorithms, and early web explorations.
            </p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls="earlier-projects-list"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-colors w-fit"
        >
          <span>{expanded ? "Collapse Archive" : "View Earlier Work"}</span>
          {expanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {expanded && (
        <div
          id="earlier-projects-list"
          className="mt-6 pt-6 border-t border-border/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn"
        >
          {archivedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-border/70 bg-card p-4 flex flex-col justify-between hover:border-primary/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {project.timeline}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-foreground mb-1">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((t) => (
                    <TechBadge key={t} name={t} size="sm" />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-border/50 text-xs">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                  >
                    <span>Code</span>
                    <Github className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
