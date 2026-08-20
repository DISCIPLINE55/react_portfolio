import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import SkipToContent from "@/components/layout/SkipToContent";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/common/SectionHeading";
import { ProjectSearch, ProjectFilters, ProjectGrid } from "@/features/projects";
import { allProjects } from "@/data/projects";

const categories = [
  "All",
  "EdTech / AI Platform",
  "School Management System",
  "FinTech Product Concept",
  "Mobile EdTech",
  "Administrative Web Utility",
  "Teacher Education / EdTech",
  "Productivity Tool",
  "Utility Tool",
  "Web Application",
  "E-Commerce",
] as const;

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="All Projects & Flagship Case Studies"
        description="Comprehensive directory of software engineering projects, educational technology platforms, and case studies built by Ismail Ibrahim Mensah."
        canonical="/projects"
      />
      <SkipToContent />
      <Navbar />

      <main id="main-content" className="flex-grow py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <SectionHeading
            badge="Project Directory"
            badgeVariant="wine"
            title="All Software, Platforms & Experiments"
            subtitle="Explore flagship educational systems, institutional platforms, product prototypes, and earlier developmental work."
          />

          {/* Search & Filter Section */}
          <section
            aria-label="Search and filter projects"
            className="mb-10 space-y-4 rounded-2xl border border-border/80 bg-card p-4 sm:p-6 shadow-sm"
          >
            <ProjectSearch value={searchQuery} onChange={setSearchQuery} />
            <ProjectFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </section>

          {/* Results Count & Clear */}
          <div className="mb-6 flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>
              Showing {filteredProjects.length} of {allProjects.length} projects
            </span>
            {(selectedCategory !== "All" || searchQuery.trim() !== "") && (
              <button
                type="button"
                onClick={handleReset}
                className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Composed Project Grid */}
          <ProjectGrid projects={filteredProjects} onResetFilters={handleReset} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
