import Seo from "@/components/Seo";
import { Badge } from "@/components/ui/badge";

export default function VeggieGrocery() {
  return (
    <main className="py-16">
      <Seo
        title="Veggie Grocery Case Study | React E‑commerce"
        description="Case study of Veggie Grocery: React app with cart, Email.js confirmations, responsive UI, and Context API."
      />
      <div className="container">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Veggie Grocery – React E‑commerce App</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">A smooth, visually appealing online platform to shop fresh produce with cart and email confirmations.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Many grocery sites feel clunky. I built a focused, user-friendly experience for fresh vegetables with a clean checkout and confirmations.
            </p>
          </article>
          <article className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">My Role</h2>
            <p className="mt-2 text-sm text-muted-foreground">Lead frontend developer: component architecture, UI/UX, cart state, and Email.js integration.</p>
          </article>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Key Features</h3>
            <ul className="mt-2 grid gap-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Dynamic product catalog</li>
              <li>Interactive shopping cart</li>
              <li>User-friendly checkout</li>
              <li>Email order confirmations via Email.js</li>
              <li>Responsive design</li>
            </ul>
          </article>
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Challenges & Solutions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Managed global cart state using React Context for simplicity and reliability; carefully configured Email.js for secure templates.
            </p>
          </article>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Results</h3>
            <p className="mt-2 text-sm text-muted-foreground">Fast, intuitive shopping with professional email confirmations that boost trust. Smooth UX and strong performance (Lighthouse 90+).</p>
          </article>
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Tech Stack</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {['React.js','Tailwind CSS','Email.js','Context API','JavaScript (ES6+)'].map(t => (
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
