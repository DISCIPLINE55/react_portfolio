import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNavItems, pageNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import ThemeToggle from "@/components/common/ThemeToggle";
import BrandLogo from "@/components/common/BrandLogo";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = isHomePage ? mainNavItems : pageNavItems;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        scrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-background/70 backdrop-blur-sm"
      )}
    >
      <nav
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
          aria-label="Ismail Ibrahim Mensah - Homepage"
        >
          <BrandLogo size={34} />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Ismail I. Mensah
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              {siteConfig.brand}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((item) => {
            const isAnchor = item.href.startsWith("#");
            const targetHref = isAnchor && !isHomePage ? `/${item.href}` : item.href;

            if (isAnchor && isHomePage) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={targetHref}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href={siteConfig.resume.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/10 text-primary dark:text-wine-light hover:bg-primary hover:text-primary-foreground text-xs font-semibold transition-all shadow-sm"
            aria-label="View Resume PDF"
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="w-9 h-9 text-foreground"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-background/95 backdrop-blur-md border-t border-border z-50 p-6 overflow-y-auto animate-fadeIn flex flex-col justify-between"
        >
          <div className="space-y-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
              Navigation
            </p>
            {navLinks.map((item) => {
              const isAnchor = item.href.startsWith("#");
              const targetHref = isAnchor && !isHomePage ? `/${item.href}` : item.href;

              if (isAnchor && isHomePage) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted/80 transition-colors"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={targetHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted/80 transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border/80 space-y-3">
            <a
              href={siteConfig.resume.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="flex justify-between items-center px-2 pt-2 text-xs text-muted-foreground">
              <span>{siteConfig.location.country}</span>
              <span className="font-mono">{siteConfig.brand}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
