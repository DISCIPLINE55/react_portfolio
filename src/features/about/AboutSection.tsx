import SectionHeading from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site";
import { BookOpen, Code2, Cpu, HeartHandshake, Sparkles, UserCheck } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Pedagogy Meets Engineering",
      description:
        "Studying BSc Information Technology Education at USTED provides me with a deep understanding of cognitive load, learning psychology, and instructional design. I don't just write code; I design systems that help people learn effectively.",
    },
    {
      icon: Code2,
      title: "Real-World Full-Stack Engineering",
      description:
        "Specializing in React, TypeScript, Next.js, and Supabase. I architect resilient applications with offline-first PWA caching, relational database models, and strict Row-Level Security.",
    },
    {
      icon: Cpu,
      title: "Active Growth in AI & ML",
      description:
        "Participating in Next Path Ghana (Cohort 1 — 2026). Exploring Python, machine learning fundamentals, and speech/audio pipelines to build responsible, assistive tools for classrooms.",
    },
    {
      icon: UserCheck,
      title: "HCI & Accessibility First",
      description:
        "Passionate about WCAG 2.1 AA accessibility, keyboard operability, and high-readability typography for Arabic and multilingual education environments.",
    },
  ];

  return (
    <section id="about" aria-label="About Section" className="py-16 sm:py-20 bg-card/30 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Story"
          badgeVariant="wine"
          title="Bridging software engineering, educational pedagogy, and emerging AI"
          subtitle="How an academic background in IT Education and hands-on product building shapes my approach to software architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium text-base sm:text-lg">
              I am a software developer and Information Technology Education student at the University of Skills Training and Entrepreneurial Development (USTED) in Ghana, building practical digital products at the intersection of software, education, user experience, and emerging AI.
            </p>

            <p>
              My journey began with a curiosity for building interactive web applications, which evolved into engineering institutional platforms like <strong className="text-foreground">Khulafasco</strong> and flagship educational solutions like <strong className="text-foreground">EduArabic</strong>. Rather than viewing software merely as a collection of libraries, I treat software as an instructional environment where clarity, accessibility, and reliability are paramount.
            </p>

            <p>
              Currently in Level 300 / final-year progression toward graduation, my academic coursework directly informs how I structure user interfaces. When designing for classrooms in Ghana and West Africa, software must gracefully handle erratic internet connections and diverse technical literacy levels. This is why I specialize in <strong className="text-foreground">offline-first architectures</strong> and <strong className="text-foreground">human-centered interfaces</strong>.
            </p>

            <p>
              Through structured learning with <strong className="text-foreground">Next Path Ghana (Cohort 1 — 2026)</strong>, I am actively expanding into AI and Machine Learning—focusing on audio processing, phonetic alignment, and responsible human-in-the-loop systems where AI amplifies educator capabilities without replacing human judgment.
            </p>

            {/* Quick Facts List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm border-t border-border/80">
              <div>
                <span className="font-semibold text-foreground block">Academic Focus:</span>
                <span>IT Education & Software Systems (USTED)</span>
              </div>
              <div>
                <span className="font-semibold text-foreground block">AI Learning:</span>
                <span>Next Path Ghana (Cohort 1 — 2026)</span>
              </div>
              <div>
                <span className="font-semibold text-foreground block">Personal Brand:</span>
                <span>DISCIPLINE / DISCIPLINE55</span>
              </div>
              <div>
                <span className="font-semibold text-foreground block">Location:</span>
                <span>Mankessim, Central Region, Ghana</span>
              </div>
            </div>
          </div>

          {/* Core Pillars Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-border/80 bg-card p-4 sm:p-5 shadow-sm hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
