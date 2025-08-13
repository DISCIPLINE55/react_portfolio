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
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold">Ismail Mensah</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            Developer, Designer, and Writer dedicated to creating impactful digital experiences.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-2 grid gap-1 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About Me</a></li>
            <li><a href="#skills" className="hover:text-foreground">Skills</a></li>
            <li><a href="#projects" className="hover:text-foreground">Projects</a></li>
            <li><a href="#articles" className="hover:text-foreground">Articles</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            <li><a href="/admin" className="hover:text-foreground">Admin Panel</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Connect</h4>
          <p className="mt-2 text-sm">Email: ismail.mensah.info@gmail.com</p>
          <p className="text-sm">Phone: +233 53 647 8673</p>
          <p className="text-sm">WhatsApp: +233 55 885 2609</p>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex items-center justify-between py-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ismail Ibrahim Mensah. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-foreground">Privacy Policy</button>
            <button className="hover:text-foreground">Terms of Service</button>
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
