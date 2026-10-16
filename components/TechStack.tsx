const tools = [
  { name: "Go", icon: "go.svg" },
  { name: "Java", icon: "java.svg" },
  { name: "Python", icon: "python.svg" },
  { name: "C#", icon: "csharp.svg" },
  { name: "AWS", icon: "aws.svg" },
  { name: "Docker", icon: "docker.svg" },
  { name: "Kubernetes", icon: "kubernetes.svg" },
  { name: "Apache Kafka", icon: "apachekafka.svg", monochrome: true },
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "Redis", icon: "redis.svg" },
  { name: "SQL", icon: "sql.svg" },
  { name: "Apache Spark", icon: "apachespark.svg" },
  { name: "PyTorch", icon: "pytorch.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Next.js", icon: "nextjs.svg" },
];

export default function TechStack() {
  return (
    <ul className="tools-grid" aria-label="Tools and technologies">
      {tools.map((tool) => (
        <li
          className="tool-tile"
          key={tool.name}
          data-reveal
          data-crosshair-target
        >
          <div className="tool-icon">
            <img
              src={`/logos/${tool.icon}`}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className={tool.monochrome ? "tool-monochrome" : undefined}
            />
          </div>
          <span>{tool.name}</span>
        </li>
      ))}
    </ul>
  );
}
