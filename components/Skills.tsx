"use client";

import { motion } from "framer-motion";

const skills = [
  "Art Direction",
  "Design Systems",
  "3D Storytelling",
  "Motion Design",
  "Prototype Engineering",
  "WebGL Shading",
  "Product Strategy",
  "Creative DevOps",
];

export default function Skills() {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="section-subtitle">Skills & Toolbox</p>
          <h2 className="section-title">Tools that bend light, time, and attention.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-lg font-medium">{skill}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-mist/60">
                Toolkit module
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
