"use client";

import { useEffect, useState } from "react";
import Particles from "./Particles";

export default function HeroParticles() {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  return (
    <div className="hero-particles" aria-hidden="true">
      {reducedMotion !== null && (
        <Particles
          key={reducedMotion ? "static" : "animated"}
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          glow={0.5}
          twinkle={0.3}
          moveParticlesOnHover={!reducedMotion}
          hoverEffect="parallax"
          paused={reducedMotion}
          pixelRatio={1.5}
          style={{ pointerEvents: "none" }}
        />
      )}
    </div>
  );
}
