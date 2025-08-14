import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import profile from "@/assets/profile.jpg";
import profile1 from "@/assets/profile1.jpg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Ismail consistently delivers high-quality work with exceptional attention to detail.",
      name: "Jane Doe",
      role: "CEO, Creative Solutions",
      avatar: profile,
    },
    {
      quote:
        "Fresh ideas and deep UX understanding—working with Ismail is a pleasure.",
      name: "Sam Miller",
      role: "Lead Designer, Innovate Studio",
      avatar: profile1,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-20 animate-fade-in"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4">
              What People Say
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Feedback from clients and collaborators
            </p>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            a11y={{ enabled: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 24 },
              1280: { slidesPerView: 2, spaceBetween: 32 },
              1920: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="relative overflow-hidden pb-12
              [&_.swiper-button-next]:right-2
              [&_.swiper-button-prev]:left-2
              [&_.swiper-button-next,&_.swiper-button-prev]:text-primary
              [&_.swiper-button-next,&_.swiper-button-prev]:bg-primary/10
              [&_.swiper-button-next,&_.swiper-button-prev]:backdrop-blur-sm
              [&_.swiper-button-next,&_.swiper-button-prev]:rounded-full
              [&_.swiper-button-next,&_.swiper-button-prev]:shadow-lg
              [&_.swiper-button-next,&_.swiper-button-prev]:border
              [&_.swiper-button-next,&_.swiper-button-prev]:border-primary/20
              [&_.swiper-button-next,&_.swiper-button-prev]:w-10
              [&_.swiper-button-next,&_.swiper-button-prev]:h-10
              [&_.swiper-button-next,&_.swiper-button-prev]:mt-0
              [&_.swiper-button-next,&_.swiper-button-prev]:top-1/2
              [&_.swiper-button-next,&_.swiper-button-prev]:-translate-y-1/2
              [&_.swiper-button-next,&_.swiper-button-prev]:z-10
              [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:bg-primary
              [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:text-primary-foreground
              [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:scale-110
              [&_.swiper-pagination-bullet]:bg-primary/40
              [&_.swiper-pagination-bullet]:w-3
              [&_.swiper-pagination-bullet]:h-3
              [&_.swiper-pagination-bullet-active]:bg-primary
              [&_.swiper-pagination-bullet-active]:scale-125"
          >
            <>
              {testimonials.map((t) => (
                <SwiperSlide key={t.name}>
                  <figure className="group rounded-2xl border p-6 sm:p-8 lg:p-10 h-full bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="relative">
                        <img
                          src={t.avatar}
                          alt={`${t.name} - testimonial`}
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm sm:text-base lg:text-lg font-semibold group-hover:text-primary transition-colors">
                          {t.name}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {t.role}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                      "{t.quote}"
                    </blockquote>

                    {/* Rating stars */}
                    <div className="flex gap-1 mt-4 sm:mt-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </figure>
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
