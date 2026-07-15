import { SOCIALS } from "../data/projects";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content scroll-mt-20 px-6 py-28">
      <p className="mb-2 font-mono text-sm text-accent">03 — Contact</p>
      <h2 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
        Let's build<br /><span className="text-gradient">something real.</span>
      </h2>
      <p className="mt-6 max-w-lg text-lg text-muted">
        Have a product to ship or a role to fill? I reply fast.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <a href={`mailto:${SOCIALS.email}`}
           className="rounded-full bg-ink px-7 py-3.5 font-semibold text-bg transition hover:bg-accent">
          {SOCIALS.email}
        </a>
        <a href={SOCIALS.github} target="_blank" rel="noreferrer"
           className="rounded-full border border-line px-7 py-3.5 font-semibold transition hover:border-accent hover:text-accent">
          GitHub
        </a>
        <a href={SOCIALS.agency} target="_blank" rel="noreferrer"
           className="rounded-full border border-line px-7 py-3.5 font-semibold transition hover:border-accent hover:text-accent">
          LemmeDeliver ↗
        </a>
      </div>
    </section>
  );
}
