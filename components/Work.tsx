"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Extend by adding more project objects with unique ids and images.
const projects = [
  {
    id: "aurora",
    title: "Aurora Archive",
    description: "Interactive museum portal with volumetric light trails.",
    role: "Creative Direction · WebGL",
    image: "/images/work-1.svg",
  },
  {
    id: "lumen",
    title: "Lumen Rail",
    description: "Product launch film turned into scroll narrative.",
    role: "Product Design · Motion",
    image: "/images/work-2.svg",
  },
  {
    id: "halo",
    title: "Halo Systems",
    description: "Enterprise dashboard reimagined as cinematic UI.",
    role: "UX Strategy · UI",
    image: "/images/work-3.svg",
  },
  {
    id: "altair",
    title: "Altair Studio",
    description: "Immersive brand world with real-time 3D avatars.",
    role: "Experience Design · 3D",
    image: "/images/work-4.svg",
  },
];

export default function Work() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="work" className="px-6 py-24 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="section-subtitle">Selected Work</p>
          <h2 className="section-title">Films disguised as products.</h2>
          <p className="max-w-2xl text-lg text-mist/80">
            Each project is structured as a narrative arc. Hover to reveal the scene, click to
            explore the case study details.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => setActive(project)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-accent/60"
              whileHover={{ y: -6 }}
            >
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-mist/70">{project.description}</p>
                <span className="text-xs uppercase tracking-[0.2em] text-accent/80">
                  {project.role}
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-ember/20" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-ink/95"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-64">
                <Image src={active.image} alt={active.title} fill className="object-cover" />
              </div>
              <div className="space-y-4 p-8">
                <p className="section-subtitle">Case Study</p>
                <h3 className="text-3xl font-semibold">{active.title}</h3>
                <p className="text-mist/80">
                  This concept explores how cinematic lighting, responsive typography, and
                  WebGL-driven microinteractions elevate brand perception. Extend this section by
                  adding more timeline beats, metrics, and team collaborators.
                </p>
                <button
                  onClick={() => setActive(null)}
                  className="button-magnetic border-accent/40 text-accent"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
