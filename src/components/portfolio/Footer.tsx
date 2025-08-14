import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="border-t">
      <div className="container py-10">
        {/* Mobile: Column layout, Desktop: Grid with even spacing */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:justify-items-center lg:grid-cols-3 lg:justify-evenly">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Ismail Mensah</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Developer, Designer, and Writer dedicated to creating impactful digital experiences.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#articles" className="hover:text-foreground transition-colors">Articles</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="/admin" className="hover:text-foreground transition-colors">Admin Panel</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-2 text-sm">
              <p>Email: ismail.mensah.info@gmail.com</p>
              <p>Phone: +233 53 647 8673</p>
              <p>WhatsApp: +233 55 885 2609</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ismail Ibrahim Mensah. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <button className="hover:text-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 grid h-10 w-10 place-content-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-all ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp />
      </button>
    </footer>
  );
}
