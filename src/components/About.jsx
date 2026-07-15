import { motion } from "framer-motion";

const SKILLS = {
  Frontend: ["React", "Next.js", "Tailwind", "Framer Motion", "Three.js"],
  Backend: ["Node/Express", "Spring Boot", "Python/Flask", "REST APIs", "JWT/Auth"],
  "AI & Data": ["OpenAI", "LLM routing", "MongoDB", "MySQL", "Upstash/Redis"],
  Infra: ["Vercel", "Fly.io", "Docker", "Stripe", "Twilio"],
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content scroll-mt-20 px-6 py-24">
      <p className="mb-2 font-mono text-sm text-accent">02 — About</p>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            I like the whole stack —<br /><span className="text-gradient">and shipping the whole thing.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I'm a full-stack and AI engineer who builds products from the database to the pixel.
              I've shipped e-commerce with real payments, an AI nutrition app with voice input,
              a distributed job scheduler, and a personal AI assistant that spans voice, chat, and Telegram.
            </p>
            <p>
              I run <a href="https://lemmedeliver.com" target="_blank" rel="noreferrer" className="text-ink underline decoration-accent/40 underline-offset-4 hover:decoration-accent">LemmeDeliver</a>,
              my AI & software studio, where I take ideas from a napkin sketch to a live URL.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <motion.div
              key={group}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-line bg-surface p-5"
            >
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">{group}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <li key={s} className="rounded-md border border-line bg-surface2 px-2 py-1 text-xs text-muted">{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
