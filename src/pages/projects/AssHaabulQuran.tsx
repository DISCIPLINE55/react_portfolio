import Seo from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function AssHaabulQuran() {
  return (
    <main className="py-16">
      <Seo
        title="Ass-Haabul Qur'an Case Study | Islamic Learning Platform"
        description="Case study: Comprehensive Quran learning platform with Tajweed mastery, memorization programs, and Tafseer lessons. Built with React and modern web technologies."
      />
      <div className="container">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-semibold">Ass-Haabul Qur'an</h1>
              <p className="text-xl text-primary font-medium">Islamic Learning Platform</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://ass-haabul-qur-ancom.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary-foreground border border-primary hover:bg-primary rounded-lg transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href="https://github.com/DISCIPLINE55/ass-haabul-quran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border border-border hover:border-primary rounded-lg transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>
          
          <p className="mt-2 text-muted-foreground max-w-3xl leading-relaxed">
            A comprehensive Islamic learning platform designed to help Muslims worldwide learn, understand, and master the Holy Quran. 
            Features structured courses in Tajweed, memorization, Tafseer, daily supplications, and live Islamic classes.
          </p>
        </header>

        {/* Hero Image Section */}
        <section className="mb-12">
          <div className="relative rounded-2xl border overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
            <img
              src="/assets/ass-haabul.png"
              alt="Ass-Haabul Qur'an Platform Preview"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </section>

        {/* Project Overview Grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <article className="rounded-xl border p-6 bg-card">
            <h2 className="text-lg font-semibold text-primary">Project Overview</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Ass-Haabul Qur'an serves thousands of learners globally, providing structured Islamic education 
              with modern web technology. The platform combines traditional learning methods with interactive features.
            </p>
          </article>
          
          <article className="rounded-xl border p-6 bg-card">
            <h2 className="text-lg font-semibold text-primary">My Role</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Full-stack development: UI/UX design, course management system, user authentication, 
              Arabic typography implementation, and responsive design optimization.
            </p>
          </article>
          
          <article className="rounded-xl border p-6 bg-card md:col-span-2 lg:col-span-1">
            <h2 className="text-lg font-semibold text-primary">Timeline</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Development:</strong> 6 weeks<br/>
              <strong>Launch:</strong> February 2024<br/>
              <strong>Status:</strong> Live & Growing
            </p>
          </article>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">🎯 Comprehensive Courses</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Tajweed Mastery:</strong> Learn proper Quranic recitation rules</li>
                <li>• <strong>Quran Memorization:</strong> Step-by-step guided memorization</li>
                <li>• <strong>Tafseer Lessons:</strong> Deep understanding of Quranic meanings</li>
                <li>• <strong>Daily Duas:</strong> Essential supplications and their meanings</li>
              </ul>
            </article>

            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">📚 Learning Resources</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Daily Ayah:</strong> Daily verse with translation and context</li>
                <li>• <strong>Hadith Collection:</strong> Authentic sayings of Prophet Muhammad</li>
                <li>• <strong>Islamic Blog:</strong> Educational articles and insights</li>
                <li>• <strong>Live Classes:</strong> Interactive sessions with qualified teachers</li>
              </ul>
            </article>

            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">👤 User Experience</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Personal Dashboard:</strong> Track learning progress</li>
                <li>• <strong>Course Enrollment:</strong> Easy registration system</li>
                <li>• <strong>Progress Tracking:</strong> Monitor learning milestones</li>
                <li>• <strong>User Authentication:</strong> Secure login and registration</li>
              </ul>
            </article>

            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">💻 Technical Excellence</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Arabic Typography:</strong> Proper Arabic text rendering</li>
                <li>• <strong>Responsive Design:</strong> Optimized for all devices</li>
                <li>• <strong>Performance:</strong> Fast loading and smooth interactions</li>
                <li>• <strong>Accessibility:</strong> Inclusive design for all users</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Technical Challenges Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Technical Challenges & Solutions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">Challenge: Arabic Text Rendering</h3>
              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Implementing accurate Arabic typography with proper right-to-left text direction, 
                diacritical marks, and font rendering across different browsers and devices.
              </p>
              <div className="p-3 bg-primary/5 rounded-lg">
                <p className="text-sm font-medium text-primary">Solution:</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Used specialized Arabic web fonts, CSS direction properties, and extensive 
                  testing to ensure consistent rendering across all platforms.
                </p>
              </div>
            </article>

            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">Challenge: Cultural Sensitivity</h3>
              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Ensuring all content, design elements, and functionality respect Islamic values 
                and cultural nuances while maintaining modern web standards.
              </p>
              <div className="p-3 bg-primary/5 rounded-lg">
                <p className="text-sm font-medium text-primary">Solution:</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Consulted Islamic scholars, used appropriate color schemes, and implemented 
                  features like prayer time integration and Islamic calendar support.
                </p>
              </div>
            </article>

            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">Challenge: Course Management</h3>
              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Creating an intuitive system for course enrollment, progress tracking, and 
                content delivery that scales with growing user base.
              </p>
              <div className="p-3 bg-primary/5 rounded-lg">
                <p className="text-sm font-medium text-primary">Solution:</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Developed a custom course management system with user dashboards, 
                  progress indicators, and automated enrollment workflows.
                </p>
              </div>
            </article>

            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">Challenge: Multi-Level Learning</h3>
              <p className="mt-2 text-sm text-muted-foreground mb-4">
                Accommodating users with varying levels of Arabic proficiency and Islamic knowledge 
                while maintaining engaging content for all skill levels.
              </p>
              <div className="p-3 bg-primary/5 rounded-lg">
                <p className="text-sm font-medium text-primary">Solution:</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Implemented adaptive content delivery, multiple translation options, 
                  and beginner-friendly navigation with progressive difficulty levels.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Results & Impact</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border p-6 bg-card text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <p className="text-sm text-muted-foreground mt-1">Active Learners</p>
            </article>
            
            <article className="rounded-xl border p-6 bg-card text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <p className="text-sm text-muted-foreground mt-1">User Satisfaction</p>
            </article>
            
            <article className="rounded-xl border p-6 bg-card text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <p className="text-sm text-muted-foreground mt-1">Platform Availability</p>
            </article>
          </div>

          <article className="mt-6 rounded-xl border p-6 bg-card">
            <h3 className="font-semibold text-primary">User Feedback</h3>
            <blockquote className="mt-3 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-muted-foreground italic">
                "Alhamdulillah! This platform has made learning Quran so much easier. The Tajweed course 
                is excellent and the daily Ayah feature keeps me spiritually connected throughout the day."
              </p>
              <footer className="mt-2 text-xs text-muted-foreground">
                — Ahmad Hassan, Student from London
              </footer>
            </blockquote>
          </article>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">Frontend Technologies</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'APIs', 
                  'JavaScript', 
                  'CSS3', 
                  'HTML5', 
                  'Responsive Design'
                ].map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Built with React for dynamic user interfaces, modern CSS for Arabic typography, 
                and responsive design principles for cross-device compatibility.
              </p>
            </article>

            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">Tools & Services</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Vercel', 
                  'Course Management', 
                  'User Dashboard', 
                  'Authentication',
                  'Arabic Typography'
                ].map(tool => (
                  <Badge key={tool} variant="outline" className="border-primary/20 text-primary">
                    {tool}
                  </Badge>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Deployed on Vercel for optimal performance, integrated custom authentication 
                system, and specialized Arabic typography tools for proper text rendering.
              </p>
            </article>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Learnings</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">Technical Insights</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Importance of proper Arabic font selection and CSS direction handling</li>
                <li>• User experience design considerations for religious educational platforms</li>
                <li>• Scalable architecture for course management and user progress tracking</li>
                <li>• Cross-browser compatibility challenges with Arabic text rendering</li>
              </ul>
            </article>

            <article className="rounded-xl border p-6 bg-card">
              <h3 className="font-semibold text-primary">Cultural & Design Insights</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Balancing modern web design with traditional Islamic aesthetics</li>
                <li>• Importance of community feedback in Islamic educational platforms</li>
                <li>• Accessibility considerations for diverse global Muslim community</li>
                <li>• Content organization for progressive Islamic learning pathways</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Future Enhancements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Future Enhancements</h2>
          <article className="rounded-xl border p-6 bg-card">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-primary mb-2">Planned Features</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Mobile app version for iOS and Android</li>
                  <li>• Offline reading capabilities</li>
                  <li>• Advanced search and bookmarking system</li>
                  <li>• Teacher-student interaction tools</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Technical Improvements</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Audio recitation synchronization</li>
                  <li>• Certification system for completed courses</li>
                  <li>• Community discussion forums</li>
                  <li>• Advanced progress analytics</li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </a>
          <div className="flex gap-3">
            <a
              href="https://ass-haabul-qur-ancom.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary-foreground border border-primary hover:bg-primary rounded-lg transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Site
            </a>
          </div>
        </nav>
      </div>
    </main>
  );
}
