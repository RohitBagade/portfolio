import { motion } from "framer-motion";
import { EXPERIENCE, SOCIALS } from "../data/projects";

export default function Experience() {
  const e = EXPERIENCE;
  return (
    <section id="experience" className="mx-auto max-w-content scroll-mt-20 px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-2 font-mono text-sm text-accent">03 — Experience</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Where I've done the work</h2>
        </div>
        <a href={SOCIALS.resume} target="_blank" rel="noreferrer"
           className="hidden rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent sm:inline-block">
          Download résumé ↗
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-line bg-surface p-7"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-bold">{e.role}</h3>
          <span className="font-mono text-sm text-muted">{e.period}</span>
        </div>
        <p className="mt-1 font-medium text-accent2">{e.company}</p>
        <p className="mt-0.5 text-sm text-muted">{e.context}</p>

        <ul className="mt-5 space-y-2.5">
          {e.points.map((p, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <p className="mt-5 flex items-center gap-2 text-sm text-muted">
        <span className="font-mono text-accent">EDU</span> {e.education}
      </p>
    </section>
  );
}
