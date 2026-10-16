const experiences = [
  {
    company: "Uber",
    role: "Software Engineer",
    year: "2025 – Present",
    location: "San Francisco, CA",
  },
  {
    company: "GEICO",
    role: "Software Engineer",
    year: "2025",
    location: "Remote",
  },
  {
    company: "BlackRock",
    role: "Software Engineer Intern",
    year: "2024",
    location: "Wilmington, DE",
  },
  {
    company: "Esports Arena",
    role: "Software Engineer Intern",
    year: "2023",
    location: "Lake Forest, CA",
  },
  {
    company: "Irvine FinTech Association",
    role: "Lead Web Developer",
    year: "2023",
    location: "Irvine, CA",
  },
  {
    company: "UCI ICS Student Council",
    role: "Software Engineer",
    year: "2023",
    location: "Irvine, CA",
  },
  {
    company: "Hack at UCI",
    role: "Corporate Outreach",
    year: "2023",
    location: "Irvine, CA",
  },
  {
    company: "Code Ninjas",
    role: "Coding Instructor",
    year: "2021",
    location: "Torrance, CA",
  },
  {
    company: "Meta",
    role: "Career Connections Fellow",
    year: "2021",
    location: "Carson, CA",
  },
];

export default function Experience() {
  return (
    <div className="experience-list">
      {experiences.map((job) => (
        <article
          className="experience-entry"
          key={job.company}
          data-reveal
          data-crosshair-target
        >
          <div className="experience-primary">
            <h3>{job.company}</h3>
            <span>{job.year}</span>
          </div>
          <div className="experience-secondary">
            <p>{job.role}</p>
            {job.location && <p>{job.location}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}
