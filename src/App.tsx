import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
const NotFound = lazy(() => import("./pages/NotFound"));
const VeggieGrocery = lazy(() => import("./pages/projects/VeggieGrocery"));
const WeatherDashboard = lazy(() => import("./pages/projects/WeatherDashboard"));
const PortfolioSite = lazy(() => import("./pages/projects/PortfolioSite"));
// Blog article pages
const ArticleTechnology = lazy(() => import("./pages/blog/ArticleTechnology"));
const ArticleAccessibility = lazy(() => import("./pages/blog/ArticleAccessibility"));
const ArticleStorytelling = lazy(() => import("./pages/blog/ArticleStorytelling"));
const ArticleCleanCode = lazy(() => import("./pages/blog/ArticleCleanCode"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Projects */}
            <Route path="/projects/veggie-grocery" element={<VeggieGrocery />} />
            <Route path="/projects/weather-dashboard" element={<WeatherDashboard />} />
            <Route path="/projects/portfolio-website" element={<PortfolioSite />} />

            {/* Blog Articles */}
            <Route path="/articles/article-technology" element={<ArticleTechnology />} />
            <Route path="/articles/article-accessibility" element={<ArticleAccessibility />} />
            <Route path="/articles/article-storytelling" element={<ArticleStorytelling />} />
            <Route path="/articles/article-clean-code" element={<ArticleCleanCode />} />

            {/* Auth & Admin */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
