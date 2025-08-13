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
    <section id="articles" className="py-16 animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-8">Articles & Insights</h2>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-xl border p-6">
                <Skeleton className="h-5 w-2/3 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {combined.map((a) => (
              <article
                key={a.id}
                className="rounded-xl border overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow bg-card"
              >
                {a.imageUrl && (
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={a.imageUrl}
                      alt={`${a.title} cover image`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </AspectRatio>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
                  <button
                    className="mt-4 text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors story-link"
                    onClick={() => setSelectedArticle(a)}
                  >
                    Read Article
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedArticle(null);
          }}
        >
          <div className="bg-background p-0 rounded-lg max-w-2xl w-full relative shadow-lg transform transition-all scale-100 max-h-[80vh] overflow-y-auto border">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground text-xl"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Cover Image */}
            {selectedArticle.imageUrl && (
              <AspectRatio ratio={16 / 9}>
                <img
                  src={selectedArticle.imageUrl}
                  alt={`${selectedArticle.title} cover image`}
                  className="w-full h-full object-cover rounded-t-lg"
                  loading="lazy"
                  decoding="async"
                />
              </AspectRatio>
            )}

            {/* Body */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 leading-tight">{selectedArticle.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{selectedArticle.excerpt}</p>
              <div className="text-foreground leading-relaxed space-y-4 text-base">
                {selectedArticle.content}
              </div>

              {/* Full article link only for static articles */}
              {selectedArticle.kind === "static" && (
                <div className="mt-6">
                  <a
                    href={`/articles/${selectedArticle.id}`}
                    className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    Read Full Article
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
