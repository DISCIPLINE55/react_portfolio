type ParagraphProps = { children: React.ReactNode };

function P({ children }: ParagraphProps) {
  return <p className="text-muted-foreground leading-relaxed">{children}</p>;
}

export default function AboutSection() {
  return (
    <section id="about" className="py-16" aria-label="About Me Section">
      <div className="container">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
        </header>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bio Section */}
          <div className="space-y-6">
            <P>
              Hello! I'm <strong>Ismail Ibrahim Mensah</strong>, a multi-disciplinary creative specializing in <strong>software development</strong>, <strong>UI/UX design</strong>, and <strong>technical writing</strong>. I'm passionate about building technology that empowers people and creates meaningful impact.
            </P>
            <P>
              Currently pursuing a <strong>BSc in Information Technology Education</strong> at Akenten Appiah-Menka University, graduating in 2027. My journey blends technology, design thinking, and education to create functional, user-friendly solutions.
            </P>
            <P>
              I thrive on challenges that demand both <strong>technical precision</strong> and <strong>creative problem-solving</strong>, constantly exploring new tools and frameworks to deliver exceptional digital experiences.
            </P>
          </div>

          {/* Personal Details and Areas of Focus - Side by Side */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6 bg-card">
              <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
              <ul className="space-y-3 text-sm">
                <li><strong>Location:</strong> Mankessim, Central Region, Ghana</li>
                <li><strong>Languages:</strong> English, Twi, Arabic</li>
                <li><strong>Portfolio:</strong>{" "}
                  <a
                    href="https://ismailmensah.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    ismailmensah.vercel.app
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-6 bg-card">
              <h3 className="text-lg font-semibold mb-4">Areas of Focus</h3>
              <ul className="grid grid-cols-1 gap-3 text-sm">
                <li className="rounded-md bg-secondary px-3 py-2">Frontend Engineering</li>
                <li className="rounded-md bg-secondary px-3 py-2">UI/UX Design</li>
                <li className="rounded-md bg-secondary px-3 py-2">Technical Writing</li>
                <li className="rounded-md bg-secondary px-3 py-2">API Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
