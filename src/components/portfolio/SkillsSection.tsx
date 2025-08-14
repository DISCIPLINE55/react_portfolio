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
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left">
            My Skills
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {skills.map((s) => (
              <div key={s.name} className="group rounded-xl border p-4 sm:p-5 lg:p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 bg-card">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="font-medium text-sm sm:text-base lg:text-lg truncate pr-2">{s.name}</h3>
                  <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {s.pct}%
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 min-h-[2.5rem] sm:min-h-[3rem]">
                  {s.note}
                </p>
                <div className="relative">
                  <div className="h-2 sm:h-2.5 w-full rounded-full bg-muted/60 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out group-hover:shadow-sm" 
                      style={{ width: `${s.pct}%` }} 
                    />
                  </div>
                  <div className="absolute -top-1 text-xs font-medium text-primary transition-opacity opacity-0 group-hover:opacity-100" 
                       style={{ left: `${Math.min(s.pct, 90)}%` }}>
                    {s.pct}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
