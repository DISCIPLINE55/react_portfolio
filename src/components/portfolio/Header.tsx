import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, ChevronDown } from "lucide-react";
import logoImage from "@/assets/logo.jpg";

const mainLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

const portfolioLinks = [
  { href: "#testimonials", label: "Testimonials" },
  { href: "#resume", label: "Resume" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
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
          {mainLinks.map((l) =>
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-scale story-link">
              {l.label}
            </a>
          )}
          {/* Portfolio dropdown */}
          <div className="relative" onMouseLeave={() => setPortfolioOpen(false)}>
            <button
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onMouseEnter={() => setPortfolioOpen(true)}
              onClick={() => setPortfolioOpen(!portfolioOpen)}
            >
              Portfolio <ChevronDown className="h-3 w-3" />
            </button>
            {portfolioOpen && (
              <div className="absolute top-full left-0 mt-1 bg-background border rounded-md shadow-lg py-2 min-w-[160px]">
                {portfolioLinks.map((l) =>
                  <a
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    onClick={() => setPortfolioOpen(false)}
                  >
                    {l.label}
                  </a>
                )}
              </div>
            )}
          </div>
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
          <div className="container space-y-2 py-3">
            {mainLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-1 py-2 rounded-md hover:bg-accent text-sm">
                {l.label}
              </a>
            ))}
            <div className="space-y-1">
              <div className="px-1 py-2 text-sm font-medium text-muted-foreground">Portfolio</div>
              {portfolioLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block pl-4 pr-1 py-2 rounded-md hover:bg-accent text-sm text-muted-foreground">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
