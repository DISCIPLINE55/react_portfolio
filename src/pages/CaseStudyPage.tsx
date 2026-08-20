import { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import Seo from "@/components/Seo";
import SkipToContent from "@/components/layout/SkipToContent";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CaseStudyDetail } from "@/features/case-studies";
import { getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/config/site";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();

  // Backwards compatibility alias for older URL paths
  let resolvedSlug = slug;
  if (slug === "ass-haabul-quran") resolvedSlug = "edu-arabic";
  if (slug === "portfolio-website") resolvedSlug = "discinet";
  if (slug === "veggie-grocery") resolvedSlug = "veggie-grocery";
  if (slug === "weather-dashboard") resolvedSlug = "weather-dashboard";

  const project = resolvedSlug ? getProjectBySlug(resolvedSlug) : undefined;

  const projectJsonLd = useMemo(() => {
    if (!project) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.summary,
      applicationCategory: project.category,
      operatingSystem: "Web / Cross-Platform",
      author: {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title={`${project.title} — Architectural Case Study`}
        description={project.summary}
        canonical={`/projects/${project.slug}`}
        jsonLd={projectJsonLd}
      />
      <SkipToContent />
      <Navbar />

      <main id="main-content" className="flex-grow">
        <CaseStudyDetail project={project} />
      </main>

      <Footer />
    </div>
  );
}
