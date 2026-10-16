"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "tools", label: "Tools" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="wordmark" href="#home" aria-label="Andy Phu home">
        ap<span>.</span>
      </a>
      <nav className="section-nav" aria-label="Main navigation">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Go to ${label}`}
            aria-current={active === id ? "location" : undefined}
          >
            <span className="nav-stroke" aria-hidden="true" />
            <span className="nav-label">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
