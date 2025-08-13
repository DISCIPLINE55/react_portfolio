import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import logoImage from "@/assets/logo.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#resume", label: "Resume" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logoImage} alt="Ismail Ibrahim Mensah logo" className="h-9 w-9 rounded-md" decoding="async" fetchPriority="high" width={36} height={36} />
          <span className="text-base font-semibold">Ismail I Mensah</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-scale story-link">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
            <Menu />
          </Button>
        </div>
      </nav>
      {open && (
        <div className="border-t lg:hidden">
          <div className="container grid gap-2 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-1 py-2 rounded-md hover:bg-accent text-sm">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
