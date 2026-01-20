"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollSceneProps {
  children: React.ReactNode;
  className?: string;
  pin?: boolean;
  start?: string;
  end?: string;
  onUpdate?: (progress: number) => void;
}

export default function ScrollScene({
  children,
  className,
  pin = true,
  start = "top top",
  end = "+=150%",
  onUpdate,
}: ScrollSceneProps) {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sceneRef.current,
      start,
      end,
      pin,
      scrub: true,
      onUpdate: (self) => onUpdate?.(self.progress),
    });

    return () => {
      trigger.kill();
    };
  }, [pin, start, end, onUpdate]);

  return (
    <section ref={sceneRef} className={className}>
      {children}
    </section>
  );
}
