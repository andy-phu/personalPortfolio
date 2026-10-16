const projects = [
  {
    title: "OpenHouse",
    description:
      "A furniture discovery app with personalized recommendations powered by embeddings and vector search.",
    tags: ["Go", "Next.js", "Pinecone", "PostgreSQL"],
    image: null,
    href: null,
  },
  {
    title: "ZotSearch",
    description:
      "A search engine built from scratch, with a Python backend and a focused React interface.",
    tags: ["Python", "Flask", "React"],
    image: "/images/zotSearch.png",
    href: "https://github.com/andy-phu/ZotSearch-backend",
  },
  {
    title: "Irvine FinTech Association",
    description:
      "A home for a university community, its events, ideas, and achievements.",
    tags: ["React", "Tailwind CSS", "API"],
    image: "/images/ifaPic.png",
    href: "https://irvinefintechassociation.netlify.app",
  },
  {
    title: "Top BBQ & Noodle",
    description:
      "A website for a family-owned Hong Kong-style restaurant in Gardena, California.",
    tags: ["React", "Tailwind CSS"],
    image: "/images/topbbq.png",
    href: "https://topbbqnoodle.netlify.app",
  },
];

export default function SelectedProjects() {
  return (
    <div className="project-grid">
      {projects.map((project) => {
        const cover = project.image ? (
          <img
            src={project.image}
            alt={`${project.title} website`}
            loading="lazy"
            width={1200}
            height={750}
          />
        ) : (
          <div
            className="openhouse-cover"
            aria-label="OpenHouse furniture recommendation project"
          >
            <span className="cover-wordmark">
              openhouse<span>↗</span>
            </span>
            <span className="cover-caption">
              Furniture discovery, made personal.
            </span>
          </div>
        );
        return (
          <article className="project" key={project.title} data-reveal>
            {project.href ? (
              <a
                className="project-cover"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cover}
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ) : (
              <div className="project-cover">{cover}</div>
            )}
            <h3>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
