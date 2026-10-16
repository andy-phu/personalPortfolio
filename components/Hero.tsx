"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Crosshair from "./Crosshair";

export default function Hero({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => setEnabled(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero"
      id="home"
      aria-labelledby="hero-title"
    >
      {children}
      {enabled && (
        <Crosshair
          containerRef={containerRef}
          color="#03ffc4"
          opacity={0.55}
          fade={0.65}
          gap={8}
          smoothing={0.2}
          targetSelector=".hero-actions a"
          style={{ zIndex: 2 }}
        />
      )}
    </section>
  );
}
