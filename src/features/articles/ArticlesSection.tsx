import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, X } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { articlesData } from "@/data/articles";
import { ArticleItem } from "@/types/article";

export default function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleOpenModal = (article: ArticleItem, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    // Restore focus to the initiating button
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  // Keyboard accessibility: Escape to close and focus trap
  useEffect(() => {
    if (!selectedArticle) return;

    // Focus close button on mount
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedArticle]);

  return (
    <section
      id="notes"
      aria-label="Technical Notes and Articles"
      className="py-16 sm:py-24 bg-card/30 border-y border-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Technical Writing"
            badgeVariant="wine"
            title="Notes, Essays & Engineering Insights"
            subtitle="Reflections on offline-first architectures, educational technology, responsible AI governance, and frontend engineering."
            className="mb-0"
          />

          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary dark:text-wine-light hover:underline w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <span>View All Notes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articlesData.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-primary/40 transition-all hover:shadow-card group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.summary}
                </p>

                {article.keyTakeaways && (
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-border/60">
                    <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground block">
                      Key Takeaway
                    </span>
                    <p className="text-xs text-foreground/85 italic">
                      "{article.keyTakeaways[0]}"
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => handleOpenModal(article, e)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-0.5"
                  aria-label={`Quick read preview: ${article.title}`}
                >
                  <span>Quick Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <Link
                  to={`/articles/${article.slug}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-0.5"
                >
                  Full Page View
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Reader Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleCloseModal}
              aria-label="Close article preview modal"
              className="absolute top-4 right-4 p-2 rounded-lg border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  {selectedArticle.readTime}
                </span>
              </div>

              <h3 id="modal-article-title" className="text-2xl font-bold text-foreground tracking-tight">
                {selectedArticle.title}
              </h3>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line border-y border-border/80 py-6">
              {selectedArticle.content}
            </div>

            <div className="flex items-center justify-between pt-2">
              <Link
                to={`/articles/${selectedArticle.slug}`}
                onClick={handleCloseModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <span>Open Dedicated Article Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-lg bg-muted text-foreground text-xs font-medium hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
