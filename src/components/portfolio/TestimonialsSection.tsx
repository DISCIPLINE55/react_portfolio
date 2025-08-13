import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import profile from "@/assets/profile.jpg";
import profile1 from "@/assets/profile1.jpg";
export default function TestimonialsSection() {
  const t = [
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
    <section id="testimonials" className="py-16 animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-8">What People Say</h2>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          a11y={{ enabled: true }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="[&_.swiper-button-next,&_.swiper-button-prev]:text-primary [&_.swiper-button-next,&_.swiper-button-prev]:bg-primary/40 [&_.swiper-button-next,&_.swiper-button-prev]:rounded-full [&_.swiper-button-next,&_.swiper-button-prev]:shadow [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:bg-primary [&_.swiper-button-next:hover,&_.swiper-button-prev:hover]:text-primary-foreground [&_.swiper-pagination-bullet]:bg-primary/40 [&_.swiper-pagination-bullet-active]:bg-primary"
        >
          {t.map((x) => (
            <SwiperSlide key={x.name}>
              <figure className="rounded-xl border p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={x.avatar}
                    alt={`${x.name} - testimonial`}
                    className="size-12 rounded-full object-cover border"
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="text-sm font-medium">{x.name}</div>
                    <div className="text-xs text-muted-foreground">{x.role}</div>
                  </div>
                </div>
                <blockquote className="text-base">“{x.quote}”</blockquote>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
