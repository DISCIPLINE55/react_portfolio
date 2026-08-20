import { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Seo from "@/components/Seo";
import SkipToContent from "@/components/layout/SkipToContent";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getArticleBySlug } from "@/data/articles";
import { siteConfig } from "@/config/site";

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  const articleJsonLd = useMemo(() => {
    if (!article) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: article.title,
      description: article.summary,
      author: {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Person",
        name: siteConfig.name,
      },
      datePublished: article.publishedDate,
      inLanguage: "en-US",
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo
        title={article.title}
        description={article.summary}
        canonical={`/articles/${article.slug}`}
        ogType="article"
        jsonLd={articleJsonLd}
      />
      <SkipToContent />
      <Navbar />

      <main id="main-content" className="flex-grow py-12 sm:py-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/articles"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Notes</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 space-y-4 border-b border-border/80 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {article.category}
              </span>
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.publishedDate}
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {article.summary}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{siteConfig.name}</span>
              <span>•</span>
              <span>{siteConfig.title}</span>
            </div>
          </header>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary dark:text-wine-light">
                Executive Takeaways
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-base dark:prose-invert max-w-none text-foreground/90 leading-relaxed space-y-6 whitespace-pre-line">
            {article.content}
          </div>

          {/* Bottom Action Footer */}
          <footer className="mt-14 pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/articles"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Notes & Insights</span>
            </Link>

            <a
              href={`mailto:${siteConfig.contact.email}?subject=Regarding Article: ${encodeURIComponent(article.title)}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <span>Share feedback or discuss this essay</span>
              <span>→</span>
            </a>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}
