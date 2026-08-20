import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Seo title="404 — Page Not Found" canonical="/404" />
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md mx-auto space-y-6">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20">
            <Compass className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              404
            </h1>
            <p className="text-lg font-bold text-foreground">
              Page Not Found
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The page you are looking for might have been moved, updated, or does not exist.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-semibold shadow-sm hover:bg-primary/90 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/projects"
              className="px-4 py-2.5 rounded-lg border border-border text-xs sm:text-sm font-medium hover:bg-muted transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
