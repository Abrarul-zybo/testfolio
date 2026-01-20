"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import HeroScene from "@/components/scene/HeroScene";
import useScrollProgress from "@/components/useScrollProgress";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(heroRef, { start: "top top", end: "bottom top" });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden px-6 pb-24 pt-32 md:px-16"
    >
      <div className="absolute inset-0 -z-10">
        <HeroScene progress={progress} />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="section-subtitle"
        >
          A cinematic portfolio experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl"
        >
          From idea to impact, I craft digital worlds that feel like short films.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl text-lg text-mist/80"
        >
          I blend art direction, product strategy, and real-time 3D to build premium
          experiences for visionary brands.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton className="bg-white/10 text-white">Start the story</MagneticButton>
          <MagneticButton className="border-accent/40 text-accent" href="#work">
            View selected work
          </MagneticButton>
        </motion.div>
      </div>
      <div className="mt-24 grid gap-6 border-t border-white/10 pt-8 text-sm text-mist/70 md:grid-cols-3">
        {[
          "Creative direction & motion systems",
          "Product design & storytelling",
          "Realtime 3D & WebGL experiences",
        ].map((item) => (
          <div key={item} className="max-w-xs leading-relaxed">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
