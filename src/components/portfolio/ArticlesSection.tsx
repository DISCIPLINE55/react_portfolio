import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  kind: "static" | "post";
  imageUrl?: string;
  createdAt?: string;
}

export default function ArticlesSection() {
  const staticArticles: ArticleItem[] = [
    {
      title: "The World of Technology: A Glimpse into the Future",
      id: "article-technology",
      excerpt:
        "Technology shapes our future—from AI to quantum computing—explore tomorrow's trends.",
      content: (
        <>
          <p>
            Technology is evolving faster than ever. From artificial intelligence to quantum computing,
            the future promises breakthroughs that will redefine industries and societies.
          </p>
          <p className="mt-3">
            In this article, we explore key trends, potential challenges, and opportunities
            for developers, businesses, and everyday people.
          </p>
        </>
      ),
      kind: "static",
    },
    {
      title: "Designing for Accessibility: A Practical Guide",
      id: "article-accessibility",
      excerpt:
        "Implement accessible design principles to create inclusive experiences for all.",
      content: (
        <>
          <p>
            Accessibility is not an afterthought—it’s a core part of great design.
            Creating inclusive experiences means ensuring that all users,
            regardless of ability, can interact with your products.
          </p>
          <p className="mt-3">
            This guide covers WCAG principles, keyboard navigation, color contrast,
            and screen reader compatibility.
          </p>
        </>
      ),
      kind: "static",
    },
    {
      title: "Storytelling in UI/UX: Engaging Users Through Narrative",
      id: "article-storytelling",
      excerpt:
        "Use narrative techniques to make products memorable and engaging.",
      content: (
        <>
          <p>
            Storytelling transforms digital experiences from functional to memorable.
            By embedding narratives into design, you can guide users through a journey.
          </p>
          <p className="mt-3">
            Learn how to apply storytelling principles to user flows, onboarding,
            and brand voice.
          </p>
        </>
      ),
      kind: "static",
    },
    {
      title: "The Power of Clean Code: A Developer's Perspective",
      id: "article-clean-code",
      excerpt:
        "Clean, maintainable, and readable code drives long-term success.",
      content: (
        <>
          <p>
            Clean code isn't just a preference—it’s a necessity for scalable, maintainable projects.
          </p>
          <p className="mt-3">
            In this article, we’ll discuss naming conventions, code structure,
            and the benefits of writing with future maintainers in mind.
          </p>
        </>
      ),
      kind: "static",
    },
  ];

  type PostRow = { id: string; title: string; excerpt: string | null; content: string | null; created_at: string; cover_image_url: string | null };

  const { data: posts = [], isLoading } = useQuery<PostRow[]>({
    queryKey: ["published-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id,title,excerpt,content,created_at,cover_image_url")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
    staleTime: 60_000,
    refetchOnWindowFocus: false,
  });

const postArticles = useMemo<ArticleItem[]>(
  () =>
    posts.map((p) => ({
      id: `post-${p.id}`,
      title: p.title,
      excerpt: p.excerpt ?? (p.content ? `${p.content.slice(0, 140)}…` : ""),
      // Safely render content by escaping HTML and preserving whitespace
      content: (
        <div className="text-base leading-7 whitespace-pre-line">
          {(p.content ?? "").split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      ),
      kind: "post",
      createdAt: p.created_at,
    })),
  [posts]
);

  const combined: ArticleItem[] = [...postArticles, ...staticArticles];
  const [selectedArticle, setSelectedArticle] = useState<null | ArticleItem>(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedArticle(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="articles" className="py-12 sm:py-16 lg:py-20 animate-fade-in">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4">
              Articles & Insights
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Thoughts, tutorials, and insights on development and design
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-2xl border p-4 sm:p-6 bg-card">
                  <Skeleton className="h-4 sm:h-5 w-2/3 mb-2 sm:mb-3" />
                  <Skeleton className="h-3 sm:h-4 w-full mb-1 sm:mb-2" />
                  <Skeleton className="h-3 sm:h-4 w-5/6 mb-3 sm:mb-4" />
                  <Skeleton className="h-8 sm:h-10 w-24 sm:w-32" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {combined.map((a) => (
                <article
                  key={a.id}
                  className="group rounded-2xl border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card hover:border-primary/30 hover:-translate-y-1 flex flex-col h-full"
                >
                  {a.imageUrl && (
                    <div className="relative overflow-hidden">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={a.imageUrl}
                          alt={`${a.title} cover image`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          decoding="async"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold leading-tight mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                      {a.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-grow mb-3 sm:mb-4 min-h-[3rem] sm:min-h-[4rem]">
                      {a.excerpt}
                    </p>
                    <div className="mt-auto">
                      <button
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-all group/link"
                        onClick={() => setSelectedArticle(a)}
                      >
                        Read Article
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4 sm:p-6 lg:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedArticle(null);
          }}
        >
          <div className="bg-background rounded-2xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl w-full relative shadow-2xl transform transition-all scale-100 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto border">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/80 backdrop-blur-sm border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-all"
              aria-label="Close"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Cover Image */}
            {selectedArticle.imageUrl && (
              <div className="relative overflow-hidden rounded-t-2xl">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={selectedArticle.imageUrl}
                    alt={`${selectedArticle.title} cover image`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}

            {/* Body */}
            <div className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
                {selectedArticle.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                {selectedArticle.excerpt}
              </p>
              <div className="text-foreground leading-relaxed space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg">
                {selectedArticle.content}
              </div>

              {/* Full article link only for static articles */}
              {selectedArticle.kind === "static" && (
                <div className="mt-6 sm:mt-8 lg:mt-10">
                  <a
                    href={`/articles/${selectedArticle.id}`}
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-xs sm:text-sm lg:text-base font-medium hover:scale-105"
                  >
                    Read Full Article
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
