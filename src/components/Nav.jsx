import { useEffect, useState } from "react";
import { SOCIALS } from "../data/projects";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${scrolled ? "border-b border-line bg-bg/80 backdrop-blur" : ""}`}>
      <nav className="mx-auto flex max-w-content items-center px-6 py-4">
        <a href="#top" className="grid size-9 place-items-center rounded-lg border border-line font-mono font-bold text-accent">RB</a>
        <div className="ml-auto hidden items-center gap-7 text-sm text-muted sm:flex">
          <a href="#work" className="transition hover:text-ink">Work</a>
          <a href="#about" className="transition hover:text-ink">About</a>
          <a href="#contact" className="transition hover:text-ink">Contact</a>
          <a href={SOCIALS.github} target="_blank" rel="noreferrer"
             className="rounded-full border border-line px-4 py-1.5 font-medium text-ink transition hover:border-accent hover:text-accent">
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
