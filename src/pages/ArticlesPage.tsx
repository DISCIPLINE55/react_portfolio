import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, FileText } from "lucide-react";
import Seo from "@/components/Seo";
import SkipToContent from "@/components/layout/SkipToContent";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/common/SectionHeading";
import { articlesData } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title="Notes & Insights — Software Architecture, EdTech & AI Governance"
        description="Technical essays and architecture reflections by Ismail Ibrahim Mensah on building offline-first applications, responsible AI, and accessibility."
        canonical="/articles"
      />
      <SkipToContent />
      <Navbar />

      <main id="main-content" className="flex-grow py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <SectionHeading
            badge="Technical Writing"
            badgeVariant="wine"
            title="Notes, Essays & Engineering Insights"
            subtitle="Thoughtful documentation on real-world engineering, offline-first educational systems, AI ethics, and web accessibility."
          />

          <div className="space-y-6">
            {articlesData.map((article) => (
              <article
                key={article.id}
                className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 hover:border-primary/40 transition-all hover:shadow-card group"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {article.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {article.summary}
                </p>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">
                    Published {article.publishedDate}
                  </span>

                  <Link
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Read Complete Essay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
