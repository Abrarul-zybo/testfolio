import Hero from "@/components/Hero";
import Chapters from "@/components/Chapters";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <header className="fixed top-0 z-40 w-full border-b border-white/5 bg-ink/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-16">
          <div className="text-sm uppercase tracking-[0.3em] text-mist/80">
            Testfolio
          </div>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-mist/70 md:flex">
            <a href="#chapters" className="transition hover:text-white">
              Story
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <Hero />
      <Chapters />
      <Work />
      <Skills />
      <About />
      <Contact />
      <footer className="px-6 pb-16 pt-10 text-center text-xs uppercase tracking-[0.3em] text-mist/60">
        Built for immersive storytelling · 2025
      </footer>
    </main>
  );
}
