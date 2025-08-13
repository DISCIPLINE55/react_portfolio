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
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Bio */}
          <div className="space-y-4">
            <P>
              Hello! I’m <strong>Ismail Ibrahim Mensah</strong>, a multi-disciplinary creative and problem-solver with expertise in <strong>software development</strong>, <strong>UI/UX design</strong>, and <strong>content creation</strong>. My passion lies in building technology that not only works but <em>empowers people and creates meaningful impact</em>.
            </P>
            <P>
              Currently, I’m pursuing a <strong>BSc in Information Technology Education</strong> at <strong>Akenten Appiah-Menka University of Skills Training and Entrepreneurial Development</strong>, graduating in <strong>2027</strong>. My academic journey blends technology, design thinking, and education — equipping me to create solutions that are both functional and user-friendly, even in low-resource environments.
            </P>
            <P>
              Over the years, I’ve worked on diverse projects, from <strong>responsive websites</strong> and <strong>modern user interfaces</strong> to <strong>content strategies</strong> that drive engagement. I thrive in challenges that demand both <strong>technical precision</strong> and <strong>creative problem-solving</strong>, and I’m constantly exploring new tools, frameworks, and design approaches to stay ahead.
            </P>
            <P>
              Beyond work, I value collaboration, mentorship, and continuous learning. Whether it’s building an app, designing a digital experience, or crafting compelling content, I aim to leave a lasting impact through my work.
            </P>
            <div className="rounded-lg border p-4 bg-background">
              <h3 className="text-lg font-medium mb-2">Personal Details</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Location:</strong> Mankessim, Central Region, Ghana</li>
                <li><strong>Languages:</strong> English (Proficient), Twi (Proficient), Arabic (Intermediate)</li>
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
          </div>

          {/* Right Column - Areas of Focus */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 text-lg font-semibold">Areas of Focus</h3>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-md bg-secondary px-3 py-2">Frontend Engineering</li>
              <li className="rounded-md bg-secondary px-3 py-2">UI/UX Design</li>
              <li className="rounded-md bg-secondary px-3 py-2">Content Writing</li>
              <li className="rounded-md bg-secondary px-3 py-2">API Integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
