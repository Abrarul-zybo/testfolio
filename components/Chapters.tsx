"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollScene from "@/components/ScrollScene";
import ChapterScene from "@/components/scene/ChapterScene";

// Add or reorder chapters to extend the story arc.
const chapters = [
  {
    title: "01 — The Spark",
    headline: "Ideas ignite in the dark, then find their light.",
    body: "We begin in silence, mapping emotion before pixels. This chapter frames the intention, the audience, and the cinematic mood.",
  },
  {
    title: "02 — Design as Atmosphere",
    headline: "Typography stretches like a lens, guiding focus.",
    body: "Layouts breathe, spacing becomes rhythm, and every color is a cue in the narrative. We storyboard the experience frame by frame.",
  },
  {
    title: "03 — Engineering the Pulse",
    headline: "Motion, physics, and performance lock into sync.",
    body: "We choreograph scroll, craft microinteractions, and optimize render loops so the experience feels weightless yet tactile.",
  },
  {
    title: "04 — Impact",
    headline: "A world delivered, a story remembered.",
    body: "The final scene aligns business outcomes with delight. Metrics rise, brands glow, and the narrative lands with precision.",
  },
];

export default function Chapters() {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef(0);

  return (
    <section id="chapters" className="bg-ink/80">
      {chapters.map((chapter, index) => (
        <ScrollScene
          key={chapter.title}
          className="relative min-h-screen overflow-hidden px-6 py-20 md:px-16"
          onUpdate={(progress) => {
            progressRef.current = progress;
            if (progress > 0.5) {
              setActiveIndex(index);
            }
          }}
        >
          <div className="absolute right-6 top-16 hidden h-72 w-72 md:block">
            <ChapterScene progress={progressRef} />
          </div>
          <div className="mx-auto flex max-w-5xl flex-col gap-10">
            <p className="section-subtitle">{chapter.title}</p>
            <motion.h2
              animate={{
                opacity: activeIndex === index ? 1 : 0.35,
                y: activeIndex === index ? 0 : 20,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl font-semibold leading-tight md:text-6xl"
            >
              {chapter.headline}
            </motion.h2>
            <motion.p
              animate={{ opacity: activeIndex === index ? 1 : 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl text-lg text-mist/80"
            >
              {chapter.body}
            </motion.p>
            <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-mist/60">
              <span className="h-px w-10 bg-accent/60" />
              <span>Scroll to reveal</span>
            </div>
          </div>
        </ScrollScene>
      ))}
    </section>
  );
}
