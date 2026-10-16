const experiences = [
  {
    company: "Uber",
    role: "Software Engineer",
    date: "OCT 2025 — PRESENT",
    current: true,
    description:
      "Building smarter pickup and delivery experiences through backend systems, machine learning, and large-scale data.",
    highlights: [
      "Integrated autonomous vehicle delivery partners, reducing defective location error by 70% — from 500m to 150m at p99.",
      "Built a three-stage AI agent pipeline for ticket classification and automated debugging, eliminating 140 hours of manual work per month.",
      "Engineered ranking features across 160M+ training samples and a 5TB Apache Spark ETL pipeline.",
    ],
    tags: ["Machine learning", "Apache Spark", "XGBoost"],
  },
  {
    company: "GEICO",
    role: "Software Engineer",
    date: "JAN 2025 — OCT 2025",
    current: false,
    description:
      "Modernizing critical insurance services with reliable Go APIs and a safer path from legacy systems.",
    highlights: [
      "Migrated C# services to Go and built a comparison service to validate consistency between endpoints.",
      "Led K6 load testing for endpoints processing one million requests daily, with Grafana performance monitoring.",
    ],
    tags: ["Go", "Azure", "Kubernetes", "K6"],
  },
  {
    company: "BlackRock",
    role: "Software Engineer Intern",
    date: "MAY 2024 — JUL 2024",
    current: false,
    description:
      "Helping finance teams work independently through full stack tooling and automated data workflows.",
    highlights: [
      "Built a self-service portfolio management application backed by SQL.",
      "Automated validation of 5,000 weekly stock entries with Python and Snowflake, reducing manual reconciliation by 90%.",
    ],
    tags: ["Python", "SQL", "Snowflake", "OpenAI API"],
  },
];
export default function Experience() {
  return experiences.map((job) => (
    <article className="job" key={job.company}>
      <div className="job-date">
        {job.date}
        {job.current && <span className="current">CURRENT</span>}
      </div>
      <div className="job-company">
        <h3>{job.company}</h3>
        <p>{job.role}</p>
      </div>
      <div className="job-body">
        <p>{job.description}</p>
        <ul>
          {job.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="tags">
          {job.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  ));
}
