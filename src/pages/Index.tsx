import Seo from "@/components/Seo";
import SkipToContent from "@/components/layout/SkipToContent";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/features/hero";
import { ProjectsSection } from "@/features/projects";
import { AboutSection } from "@/features/about";
import { SkillsSection } from "@/features/skills";
import { HowIBuildSection } from "@/features/how-i-build";
import { AIJourneySection } from "@/features/ai-journey";
import { EducationSection } from "@/features/education";
import { ArticlesSection } from "@/features/articles";
import { ContactSection } from "@/features/contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="Ismail Ibrahim Mensah — Software Developer & EdTech Builder"
        description="Software Developer and BSc IT Education student at USTED Ghana. Crafting accessible, offline-first educational platforms, full-stack applications, and exploring practical AI/ML."
        canonical="/"
      />
      <SkipToContent />
      <Navbar />

      <main id="main-content" className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <HowIBuildSection />
        <AIJourneySection />
        <EducationSection />
        <ArticlesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
