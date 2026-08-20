import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectArchive from "./ProjectArchive";
import { flagshipProjects } from "@/data/projects";

export default function ProjectsSection() {
  const tier1Projects = flagshipProjects.slice(0, 3); // EduArabic, Khulafasco, DisciNet
  const tier2Projects = flagshipProjects.slice(3, 6); // Mobile Quran, Alkhulafau Enrollment, PedagoLog

  return (
    <section id="projects" aria-label="Selected Projects Section" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Selected Work"
            badgeVariant="wine"
            title="Flagship Software & EdTech Platforms"
            subtitle="Deep-dive applications solving real problems in education, school administration, and digital workflows."
            className="mb-0"
          />

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary dark:text-wine-light hover:underline w-fit"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tier 1 Flagships (Large featured cards) */}
        <div className="space-y-8 mb-12">
          {tier1Projects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>

        {/* Tier 2 Flagships (3-col responsive grid) */}
        <div className="pt-8 border-t border-border/80">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground tracking-tight">
              Specialized Utilities & Mobile EdTech
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              03 Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier2Projects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={false} />
            ))}
          </div>
        </div>

        {/* Collapsible Archive for earlier work */}
        <ProjectArchive />
      </div>
    </section>
  );
}
