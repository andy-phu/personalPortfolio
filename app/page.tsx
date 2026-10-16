import Image from "next/image";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
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
        <Hero>
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
        </Hero>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <div className="about-content">
              <div className="about-copy" data-reveal>
                <h2 className="eyebrow section-title" id="about-title">
                  About me
                </h2>
                <p>
                  I’m Andy, a software engineer at Uber working on distributed
                  systems and machine learning infrastructure.
                </p>
                <p>
                  Previously at GEICO and BlackRock. I graduated from UC Irvine
                  with a B.S. in Computer Science and a concentration in Machine
                  Learning.
                </p>
              </div>
              <div className="about-photo" data-reveal>
                <Image
                  src="/images/andy-phu.jpg"
                  alt="Andy Phu by the ocean at sunset"
                  width={1231}
                  height={1601}
                  unoptimized
                  className="about-portrait"
                />
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

        <section
          className="section tools-section"
          id="tools"
          aria-labelledby="tools-title"
        >
          <div className="wrap">
            <h2 className="eyebrow section-title" id="tools-title" data-reveal>
              Tech stack
            </h2>
            <TechStack />
            <p className="tool-credits">
              <a href="/logos/SOURCES.txt">Logo credits</a>
            </p>
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
