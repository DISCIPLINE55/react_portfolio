import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/HeroSection";
import { Suspense, lazy } from "react";
const About = lazy(() => import("@/components/portfolio/AboutSection"));
const Skills = lazy(() => import("@/components/portfolio/SkillsSection"));
const Services = lazy(() => import("@/components/portfolio/ServicesSection"));
const Projects = lazy(() => import("@/components/portfolio/ProjectsSection"));
const Articles = lazy(() => import("@/components/portfolio/ArticlesSection"));
const Testimonials = lazy(() => import("@/components/portfolio/TestimonialsSection"));
const Resume = lazy(() => import("@/components/portfolio/ResumeSection"));
const Certifications = lazy(() => import("@/components/portfolio/CertificationsSection"));
const Education = lazy(() => import("@/components/portfolio/EducationSection"));
const CTA = lazy(() => import("@/components/portfolio/CTASection"));
const Contact = lazy(() => import("@/components/portfolio/ContactSection"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div>
      <Seo
        title="Ismail Ibrahim Mensah | Frontend Developer Portfolio"
        description="Frontend developer and UI/UX designer crafting fast, accessible web apps. Explore projects, skills, and ways to work together."
      />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="container py-8 text-muted-foreground">Loading content…</div>}>
          <About />
          <Skills />
          <Services />
          <Projects />
          <Articles />
          <Testimonials />
          <Resume />
          <Certifications />
          <Education />
          <CTA />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
