import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { track } from "@/lib/analytics";
import veggieBanner from "@/assets/veggie-banner.png";
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
    title: "Ass-Haabul Qur'an - Islamic Learning Platform",
    desc: "Comprehensive Quran learning with Tajweed, memorization, and Tafseer courses.",
    tags: ["React", "Islamic Education", "Online Learning"],
    href: "https://ass-haabul-qur-ancom.vercel.app",
    caseStudyPath: "/projects/ass-haabul-quran",
    image: "/src/assets/ass-haabul.png",
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 animate-fade-in">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A showcase of my recent work and creative solutions
            </p>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            a11y={{ enabled: true }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
              1536: { slidesPerView: 3, spaceBetween: 36 },
            }}
            className="relative overflow-visible pb-12 [&_.swiper-button-next]:right-2 [&_.swiper-button-prev]:left-2 [&_.swiper-button-next,&_.swiper-button-prev]:text-primary [&_.swiper-button-next,&_.swiper-button-prev]:bg-primary/10 [&_.swiper-button-next,&_.swiper-button-prev]:backdrop-blur-sm [&_.swiper-button-next,&_.swiper-button-prev]:rounded-full [&_.swiper-button-next,&_.swiper-button-prev]:w-10 [&_.swiper-button-next,&_.swiper-button-prev]:h-10 [&_.swiper-button-next,&_.swiper-button-prev]:shadow-lg [&_.swiper-button-next,&_.swiper-button-prev]:border [&_.swiper-button-next,&_.swiper-button-prev]:border-primary/20 [&_.swiper-button-next,&_.swiper-button-prev]:mt-0 [&_.swiper-button-next,&_.swiper-button-prev]:top-1/2 [&_.swiper-button-next,&_.swiper-button-prev]:-translate-y-1/2 [&_.swiper-button-next,&_.swiper-button-prev]:z-10 [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:bg-primary [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:text-primary-foreground [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:scale-110 [&_.swiper-pagination-bullet]:bg-primary/40 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet-active]:scale-125"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.title}>
                <article className="group rounded-2xl border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full bg-card hover:border-primary/30 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} project preview`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                      {p.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {p.tags.map((t) => (
                        <Badge 
                          key={t} 
                          variant="secondary" 
                          className="text-xs px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-auto">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track("project_live_demo_click", { title: p.title })}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-all group/link"
                      >
                        Live Demo 
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                      <a
                        href={p.caseStudyPath}
                        onClick={() => track("project_case_study_click", { title: p.title })}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        Case Study
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* View More Link */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Want to see more of my work?
            </p>
            <a 
              href="/projects"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-primary hover:text-primary-foreground border border-primary hover:bg-primary rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View All Projects
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
