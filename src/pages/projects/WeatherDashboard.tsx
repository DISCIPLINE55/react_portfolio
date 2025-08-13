import Seo from "@/components/Seo";
import { Badge } from "@/components/ui/badge";

export default function WeatherDashboard() {
  return (
    <main className="py-16">
      <Seo
        title="Weather Dashboard Case Study | API + Tailwind"
        description="Case study: interactive weather dashboard with OpenWeather API, current conditions, and 5‑day forecast."
      />
      <div className="container">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Weather Dashboard</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">Quick, reliable weather with current conditions and multi‑day forecast for any city.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Users need fast weather info. This dashboard provides real‑time data and a clean layout for planning.
            </p>
          </article>
          <article className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">My Role</h2>
            <p className="mt-2 text-sm text-muted-foreground">Frontend development: API integration, UI updates, search handling, responsive design.</p>
          </article>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Key Features</h3>
            <ul className="mt-2 grid gap-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Current weather: temp, humidity, wind, conditions</li>
              <li>5‑day forecast</li>
              <li>City search</li>
              <li>Dynamic icons/backgrounds</li>
              <li>Responsive layout</li>
            </ul>
          </article>
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Challenges & Solutions</h3>
            <p className="mt-2 text-sm text-muted-foreground">Handled async API with async/await and robust error states for invalid cities.</p>
          </article>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Results</h3>
            <p className="mt-2 text-sm text-muted-foreground">A simple, engaging tool to check weather quickly. Fast loads and smooth interactions (Lighthouse 90+).</p>
          </article>
          <article className="rounded-xl border p-6">
            <h3 className="font-medium">Tech Stack</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Tailwind CSS','OpenWeather API','JavaScript'].map(t => (
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
