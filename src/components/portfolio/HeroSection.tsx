// UI Components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Assets
import profileImage from "@/assets/profile.jpg";
import TypingText from "./TypingText";

// Icons - Tech Stack
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

// Icons - Other
import { Briefcase, Hammer, Download } from "lucide-react";
import { track } from "@/lib/analytics";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 -z-10 opacity-20 dark:opacity-30"
        aria-hidden
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/.25)_0%,transparent_70%)]" />
      </div>

      <div className="container grid items-center gap-10 py-14 md:grid-cols-2  ">
        {/* Text Section */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold md:text-2xl lg:text-5xl -mt-4">
            Ismail Ibrahim Mensah
          </h1>
          <p className="mt-1 text-base text-primary font-medium">
            Frontend Developer | UI/UX Designer | Technical Writer
          </p>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A passionate <TypingText words={["Developer", "Designer", "Writer"]} />{" "}
            <br />
            with a knack for solving problems and crafting digital experiences.
          </p>

          {/* Professional Hobbies */}
          <div className="mt-5 flex flex-wrap gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">🏆 Coding Challenges</Badge>
            <Badge variant="outline">🎨 UI/UX Design</Badge>
            <Badge variant="outline">✍ Technical Writing</Badge>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="hero"
              className="shadow-[var(--shadow-glow)]"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Briefcase /> Hire Me
            </Button>

            {/* Download CV */}
            <a
              href="/docs/Ismail_Ibrahim_Mensah.pdf"
              download
              onClick={() => track("resume_download_click")}
            >
              <Button variant="secondary">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </a>

            <Badge className="px-3 py-1">Open to freelance</Badge>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex gap-4 text-3xl text-gray-400/60 mt-8">
            <FaReact title="React" className="hover:text-[#61DBFB] transition" />
            <FaHtml5 title="HTML5" className="hover:text-[#E44D26] transition" />
            <FaCss3Alt title="CSS3" className="hover:text-[#1572B6] transition" />
            <FaJs title="JavaScript" className="hover:text-[#F7DF1E] transition" />
            <FaGitAlt title="Git" className="hover:text-[#F05032] transition" />
            <SiMysql title="MySQL" className="hover:text-[#4479A1] transition" />
          </div>

          {/* Quick Highlights */}
          <div className="flex gap-8 mb-8 mt-8">
            <div>
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-gray-400 text-sm">Years Coding</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">3</h3>
              <p className="text-gray-400 text-sm">Certifications</p>
            </div>
          </div>

          {/* Highlight Incomplete Project */}
          <div className="mt-6 flex items-center gap-2">
            <Hammer className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Currently building: <strong>Efia Classic Boutique</strong>{" "}
              <Badge variant="secondary">In Progress</Badge>
            </span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={profileImage}
            alt="Portrait of Ismail Ibrahim Mensah"
            loading="lazy"
            className="lg:w-[70%] rounded-2xl object-cover ring-4 ring-primary/15 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
