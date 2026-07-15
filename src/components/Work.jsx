import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";

function Arrow() {
  return <span className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>;
}

function ProjectCard({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-surface p-6 transition duration-300 hover:-translate-y-1 ${
        p.featured ? "border-accent/25 hover:border-accent/60" : "border-line hover:border-line/80"
      }`}
    >
      {p.featured && (
        <span className="absolute right-4 top-4 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
          featured
        </span>
      )}
      <h3 className="font-display text-2xl font-bold tracking-tight">{p.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent2">{p.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="rounded-md border border-line bg-surface2 px-2 py-0.5 font-mono text-[11px] text-muted">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm font-medium">
        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer" className="group/link flex items-center gap-1 text-ink transition hover:text-accent">
            Live <Arrow />
          </a>
        )}
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer" className="group/link flex items-center gap-1 text-ink transition hover:text-accent">
            Code <Arrow />
          </a>
        )}
        {!p.live && !p.github && <span className="text-muted">Private project</span>}
      </div>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-content scroll-mt-20 px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-2 font-mono text-sm text-accent">01 — Selected work</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Things I've shipped</h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm text-muted sm:block">
          Live products with real users — not tutorials.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
      </div>
    </section>
  );
}
