import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";
import SelectedProjects from "@/components/SelectedProjects";
export default function Home() {
return <>
<a className="skip" href="#main">Skip to content</a>
<Navigation />
<main id="main" className="wrap">
<section className="intro" id="home">
<h1>Hey, I’m <span>Andy Phu.</span></h1>
<p className="intro-role">Software Engineer at Uber</p>
<p>I work on backend systems, data pipelines, and machine learning. Previously at GEICO and BlackRock. I graduated from UC Irvine with a degree in Computer Science and a concentration in Machine Learning.</p>
<div className="links"><a href="mailto:andy.phuuu@gmail.com">Email ↗</a><a href="https://github.com/andy-phu" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/andyphuu/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="/Andy_Phu_Resume.pdf" target="_blank" rel="noopener">Resume ↗</a></div>
</section>
<section className="section" id="experience"><h2>Experience</h2><Experience /></section>
<section className="section" id="work"><h2>Projects</h2>
<article className="openhouse"><h3>OpenHouse</h3><p>A furniture discovery app with swipe-based browsing and personalized recommendations. Built with Go and Next.js, using Hugging Face embeddings and Pinecone vector search to rank furniture by user preferences.</p><div className="tags"><span>Go</span><span>Next.js</span><span>TypeScript</span><span>Pinecone</span><span>PostgreSQL</span></div></article>
<SelectedProjects />
<details className="archive">
            <summary>
              Earlier projects <span>+</span>
            </summary>
            
            
            <a
              className="archive-row"
              href="https://topbbqnoodle.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Top BBQ & Noodle, Local Business</span>
              <small>React.js | Tailwind.css</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://github.com/andy-phu/Dream_Journal_Server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Dream Journal, Dream Visualizer</span>
              <small>Django | Google Cloud | CockroachDB</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://youtu.be/f2o_EV2Lstc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Who's That Pokemon?</span>
              <small>Angular | CSS | HandTracker.js</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://youtu.be/chosyWuUFOs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Sleep Tracker Mobile App</span>
              <small>Ionic | Capacitor | Angular | TypeScript | SCSS</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://github.com/andy-phu/spotify-browser"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Spotify Browser</span>
              <small>TypeScript | Angular | Node.js | Express | CSS</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://github.com/andy-phu/checkersBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>AI Checkers</span>
              <small>Python</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://github.com/andy-phu/Producer-Consumer-Problem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Producers & Consumers</span>
              <small>C | POSIX Threads</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://github.com/andy-phu/clientServer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Client-Server</span>
              <small>C | Git</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://github.com/andy-phu/Virtual-Memory-Simulator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Virtual Memory Simulator</span>
              <small>C | Git</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://github.com/andy-phu/shell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Shell</span>
              <small>C | Git</small>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="archive-row"
              href="https://youtube.com/shorts/bDeXAygUh6I?si=jxIWCNdAHnuFD-_b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>TunnelMan, Video Game</span>
              <small>C++ | C | FreeGlut</small>
              <span aria-hidden="true">↗</span>
            </a>
            
          </details>
</section>
<section className="section" id="about"><h2>Skills & education</h2><div className="about-grid"><div className="skills"><h3>Languages</h3><p>Go, Python, Java, TypeScript, SQL, C++</p><h3>Systems & data</h3><p>Docker, Kubernetes, Kafka, Spark, PostgreSQL, Redis</p><h3>Web & machine learning</h3><p>React, Next.js, FastAPI, PyTorch, XGBoost</p></div><div className="education"><h3>University of California, Irvine</h3><p>B.S. Computer Science<br />Machine Learning concentration</p><p>Graduated December 2024</p></div></div></section>
<section className="section contact" id="contact"><h2>Get in touch</h2><p>Feel free to reach out about software, projects, or opportunities to work together.</p><a href="mailto:andy.phuuu@gmail.com">andy.phuuu@gmail.com ↗</a></section>
</main><footer className="wrap"><span>© {new Date().getFullYear()} Andy Phu</span><a href="#home">Back to top ↑</a></footer></>;
}
