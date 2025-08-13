import { Code2, Palette, PenTool } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Responsive, performant web apps with modern stacks.",
    features: ["React, HTML, CSS, JS", "Responsive Design", "API Integration", "Perf Optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Intuitive, accessible interfaces with strong visuals.",
    features: ["Research & Wireframes", "Prototyping", "Visual Design", "Accessibility"],
  },
  {
    icon: PenTool,
    title: "Content Writing",
    desc: "Clear, compelling technical and product content.",
    features: ["Docs", "Blogs & Articles", "Website Copy", "Editing"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-8">What I Offer</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="rounded-xl border p-6 hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <s.icon className="text-primary" />
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-3 grid gap-1 text-sm text-muted-foreground">
                {s.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
