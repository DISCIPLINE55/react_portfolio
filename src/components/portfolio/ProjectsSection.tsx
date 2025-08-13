import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { track } from "@/lib/analytics";
import veggieBanner from "@/assets/veggie-banner.png";
import weatherApp from "@/assets/weather_app.png";
import portfolioImg from "@/assets/portfolio.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Veggie Grocery (React App)",
    desc: "Modern grocery experience with cart and email confirmations.",
    tags: ["React", "Tailwind", "Email.js"],
    href: "https://veggie-nine.vercel.app/",
    caseStudyPath: "/projects/veggie-grocery",
    image: veggieBanner,
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather with 5-day forecast.",
    tags: ["API", "Tailwind", "JavaScript"],
    href: "#",
    caseStudyPath: "/projects/weather-dashboard",
    image: weatherApp,
  },
  {
    title: "Portfolio Website",
    desc: "This site: responsive, animated, accessible.",
    tags: ["Tailwind", "React", "Accessibility"],
    href: "https://ismailmensah.vercel.app/",
    caseStudyPath: "/projects/portfolio-website",
    image: portfolioImg,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          a11y={{ enabled: true }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 12 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="[&_.swiper-button-next,&_.swiper-button-prev]:text-primary [&_.swiper-button-next,&_.swiper-button-prev]:bg-primary/40 [&_.swiper-button-next,&_.swiper-button-prev]:rounded-full [&_.swiper-button-next,&_.swiper-button-prev]:shadow [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:bg-primary [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:text-primary-foreground [&_.swiper-pagination-bullet]:bg-primary/40 [&_.swiper-pagination-bullet-active]:bg-primary"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.title}>
              <article
                className="group rounded-xl border overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow h-full"
              >
                <img
                  src={p.image}
                  alt={`${p.title} project preview`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track("project_live_demo_click", { title: p.title })}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Live Demo <ExternalLink className="size-4" />
                    </a>
                    <a
                      href={p.caseStudyPath}
                      onClick={() => track("project_case_study_click", { title: p.title })}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
