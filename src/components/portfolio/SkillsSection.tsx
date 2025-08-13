type Skill = { name: string; pct: number; note: string };

const skills: Skill[] = [
  { name: "React.js", pct: 70, note: "Reusable components, SPA architecture" },
  { name: "JavaScript", pct: 85, note: "ES6+, interactive experiences" },
  { name: "HTML & CSS", pct: 90, note: "Semantic, responsive layouts" },
  { name: "Tailwind CSS", pct: 75, note: "Utility-first, rapid UI" },
  { name: "Swiper/Carousel", pct: 65, note: "Engaging sliders" },
  { name: "Email.js", pct: 60, note: "Client-side email" },
  { name: "API Usage", pct: 80, note: "RESTful integrations" },
  { name: "TypeScript", pct: 30, note: "Safer JS, types" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-8">My Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{s.name}</h3>
                <span className="text-sm text-muted-foreground">{s.pct}%</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
              <div className="mt-3 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
