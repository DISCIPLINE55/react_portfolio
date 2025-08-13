import Seo from "@/components/Seo";
import { Badge } from "@/components/ui/badge";

export default function PortfolioSite() {
  return (
    <main className="py-16">
      <Seo
        title="Portfolio Website Case Study | Responsive + A11y"
        description="Case study: personal portfolio with responsive design, typing effect, carousels, dark mode, and accessibility focus."
      />
      <div className="container">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Portfolio Website</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">A central space to showcase development, design, and writing skills effectively.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="mt-2 text-sm text-muted-foreground">Designed and developed the full site: layout, responsive behavior, and interactive elements.</p>
          </article>
          <article className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">My Role</h2>
            <p className="mt-2 text-sm text-muted-foreground">End‑to‑end ownership: visual design, components, typing effect, carousels, content.</p>
          </article>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Key Features</h3>
            <ul className="mt-2 grid gap-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Responsive design</li>
              <li>Typing animation</li>
              <li>Smooth navigation</li>
              <li>Project & article carousels</li>
              <li>Dark mode</li>
            </ul>
          </article>
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Challenges & Solutions</h3>
            <p className="mt-2 text-sm text-muted-foreground">Balanced interactivity and performance with lean dependencies and careful loading.</p>
          </article>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Results</h3>
            <p className="mt-2 text-sm text-muted-foreground">A live demonstration of technical and creative abilities. Performance tuned and accessible (Lighthouse 90+).</p>
          </article>
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Tech Stack</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {['HTML5','Tailwind CSS','JavaScript','Swiper.js','Accessibility'].map(t => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </article>
        </section>

        <nav className="mt-8">
          <a href="/" className="story-link text-sm">← Back to Home</a>
        </nav>
      </div>
    </main>
  );
}
