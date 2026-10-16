import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";
import SelectedProjects from "@/components/SelectedProjects";
import ProjectArchive from "@/components/ProjectArchive";
import MotionEffects from "@/components/MotionEffects";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navigation />
      <MotionEffects />
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow hero-label">Software engineer</p>
            <h1
              id="hero-title"
              aria-label="Building intelligent, scalable systems."
            >
              <span className="headline-line" aria-hidden="true">
                <span>Building intelligent,</span>
              </span>
              <span className="headline-line" aria-hidden="true">
                <span>
                  scalable systems<span className="accent">.</span>
                  <span className="cursor" />
                </span>
              </span>
            </h1>
            <div className="hero-identity">
              <p className="hero-name">Andy Phu</p>
              <p className="hero-role">
                <span className="status-dot" aria-hidden="true" />
                Software Engineer at Uber
              </p>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View my work
              </a>
              <a className="button button-secondary" href="#about">
                About me
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="wrap section-layout">
            <h2 className="eyebrow section-title" id="about-title" data-reveal>
              About me
            </h2>
            <div className="about-grid">
              <div className="about-copy" data-reveal>
                <p>
                  I’m Andy, a software engineer at Uber working on backend
                  systems, data pipelines, and machine learning.
                </p>
                <p>
                  Previously at GEICO and BlackRock. I graduated from UC Irvine
                  with a B.S. in Computer Science and a concentration in Machine
                  Learning.
                </p>
              </div>
              <div className="skills" data-reveal>
                <h3 className="eyebrow">Tools I work with</h3>
                <ul>
                  <li>Go, Python, Java & TypeScript</li>
                  <li>React, Next.js & FastAPI</li>
                  <li>PostgreSQL, Redis & Kafka</li>
                  <li>Docker & Kubernetes</li>
                  <li>Apache Spark & XGBoost</li>
                  <li>SQL & PyTorch</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="wrap section-layout">
            <h2
              className="eyebrow section-title"
              id="experience-title"
              data-reveal
            >
              My experience
            </h2>
            <Experience />
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <h2 className="eyebrow section-title" id="work-title" data-reveal>
              Selected work
            </h2>
            <SelectedProjects />
            <ProjectArchive />
          </div>
        </section>

        <section
          className="section contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-content wrap" data-reveal>
            <h2 className="eyebrow" id="contact-title">
              Let’s connect
            </h2>
            <a
              className="button button-primary"
              href="mailto:andy.phuuu@gmail.com"
            >
              Get in touch
            </a>
            <a className="contact-email" href="mailto:andy.phuuu@gmail.com">
              andy.phuuu@gmail.com
            </a>
            <div className="contact-links">
              <a
                href="https://github.com/andy-phu"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/andyphuu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="/Andy_Phu_Resume.pdf" target="_blank" rel="noopener">
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <span>© {new Date().getFullYear()} Andy Phu</span>
        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}
