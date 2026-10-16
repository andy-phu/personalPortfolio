"use client";

import { useEffect, useState } from "react";
import Crosshair from "./Crosshair";

export default function SiteCrosshair() {
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

  return enabled ? (
    <Crosshair
      color="#03ffc4"
      opacity={0.55}
      fade={0.65}
      gap={8}
      smoothing={0.2}
      targetSelector="a, button, summary, [data-crosshair-target], h1, h2, h3, h4, h5, h6, p, li, img, span, article, footer"
    />
  ) : null;
}
