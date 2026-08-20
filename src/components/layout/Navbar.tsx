import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNavItems, pageNavItems, flagshipRoutes } from "@/config/navigation";
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
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = isHomePage ? mainNavItems : pageNavItems;

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-colors duration-200",
          scrolled
            ? "border-b border-border/80 bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-background/80 backdrop-blur-sm border-b border-border/40"
        )}
      >
        <nav
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Brand / Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
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
                    className="px-3 py-1.5 text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={targetHref}
                  className="px-3 py-1.5 text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-primary/30 bg-primary/10 text-primary dark:text-wine-light hover:bg-primary hover:text-primary-foreground text-xs font-semibold transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="View Resume PDF"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-1.5 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="w-10 h-10 rounded-lg text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer (Rendered outside header to prevent backdrop-filter containing block trap) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] h-[calc(100dvh-4rem)] bg-background/98 backdrop-blur-xl border-t border-border overflow-y-auto flex flex-col justify-between p-5 sm:p-6 animate-fadeIn shadow-2xl"
        >
          <div className="space-y-6">
            {/* Primary Section Links */}
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2 px-3">
                {isHomePage ? "Sections" : "Page Navigation"}
              </p>
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((item) => {
                  const isAnchor = item.href.startsWith("#");
                  const targetHref = isAnchor && !isHomePage ? `/${item.href}` : item.href;

                  if (isAnchor && isHomePage) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={handleNavClick}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={targetHref}
                      onClick={handleNavClick}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Flagship Case Studies */}
            <div className="pt-4 border-t border-border/70">
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2 px-3">
                Flagship Case Studies
              </p>
              <div className="grid grid-cols-1 gap-1">
                {flagshipRoutes.slice(0, 3).map((item) => (
                  <Link
                    key={item.slug}
                    to={`/projects/${item.slug}`}
                    onClick={handleNavClick}
                    className="flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] font-mono text-primary">Case Study</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Actions & Resume */}
          <div className="pt-6 mt-6 border-t border-border/80 space-y-3">
            <a
              href={siteConfig.resume.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:bg-primary/90 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="flex justify-between items-center px-3 pt-1 text-xs text-muted-foreground font-mono">
              <span>{siteConfig.location.city}, {siteConfig.location.country}</span>
              <span className="text-primary font-bold">{siteConfig.brand}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
