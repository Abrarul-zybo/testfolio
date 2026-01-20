"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-16">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-ember/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-12">
        <p className="section-subtitle">Contact</p>
        <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
          Let&apos;s direct your next scene together.
        </h2>
        <p className="max-w-2xl text-lg text-mist/80">
          Share your vision, timeline, or simply say hello. I collaborate with teams worldwide
          to ship premium digital experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <MagneticButton className="bg-white/10 text-white">Email studio</MagneticButton>
          <MagneticButton className="border-accent/40 text-accent" href="#work">
            Download deck
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
