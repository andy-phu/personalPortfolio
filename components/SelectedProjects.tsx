export default function SelectedProjects() {
  return (
    <div className="project-grid">
      <article>
        <a
          className="project-image"
          href="https://github.com/andy-phu/ZotSearch-backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/zotSearch.png"
            alt="ZotSearch search engine interface"
            loading="lazy"
          />
          <span aria-hidden="true">↗</span>
        </a>
        
        <h3>
          <a
            href="https://github.com/andy-phu/ZotSearch-backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            ZotSearch ↗
          </a>
        </h3>
        <p>
          A search engine built from scratch, with a Python backend and a
          focused React interface.
        </p>
        <div className="tags">
          <span>Python</span>
          <span>Flask</span>
          <span>React</span>
        </div>
      </article>
      <article>
        <a
          className="project-image fintech"
          href="https://irvinefintechassociation.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/ifaPic.png"
            alt="Irvine FinTech Association website"
            loading="lazy"
          />
          <span aria-hidden="true">↗</span>
        </a>
        
        <h3>
          <a
            href="https://irvinefintechassociation.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Irvine FinTech Association ↗
          </a>
        </h3>
        <p>
          A home for a university community: its events, ideas, and
          achievements.
        </p>
        <div className="tags">
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>API</span>
        </div>
      </article>
    </div>
  );
}
