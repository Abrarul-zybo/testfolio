"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useScrollProgress(
  target: React.RefObject<HTMLElement>,
  options?: { start?: string; end?: string }
) {
  const progress = useRef(0);

  useEffect(() => {
    if (!target.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: target.current,
      start: options?.start ?? "top top",
      end: options?.end ?? "bottom top",
      scrub: true,
      onUpdate: (self) => {
        progress.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
    };
  }, [target, options?.start, options?.end]);

  return progress;
}
