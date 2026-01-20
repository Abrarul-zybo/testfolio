"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <p className="section-subtitle">About</p>
          <h2 className="section-title">Designing at the speed of imagination.</h2>
          <p className="text-lg text-mist/80">
            I lead cross-disciplinary teams to craft high-impact narratives. My process blends
            cinematic research, obsessive prototyping, and engineering that respects both
            performance and emotion.
          </p>
          <p className="text-lg text-mist/80">
            Extend this story by adding milestones, awards, or a deeper philosophy on how you
            collaborate with product and brand teams.
          </p>
        </div>
        <motion.div style={{ y }} className="relative h-96 overflow-hidden rounded-3xl">
          <Image
            src="/images/about.svg"
            alt="Portrait placeholder"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
