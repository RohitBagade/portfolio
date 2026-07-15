import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

const Scene3D = lazy(() => import("./Scene3D"));

function canRun3D() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.09, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  const [use3D, setUse3D] = useState(false);
  useEffect(() => setUse3D(canRun3D()), []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* 3D / fallback backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center md:justify-end md:pr-[8%]">
        {use3D ? (
          <div className="h-[70vh] w-[70vh] max-w-[92vw] opacity-90">
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </div>
        ) : (
          <div className="h-[55vh] w-[55vh] max-w-[80vw] rounded-full opacity-60 blur-2xl"
               style={{ background: "radial-gradient(circle at 35% 30%, #6ea8ff, #b892ff 45%, transparent 70%)" }} />
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-6">
        <motion.p custom={0} variants={rise} initial="hidden" animate="show"
          className="mb-5 font-mono text-sm text-accent">
          <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-lime align-middle" />
          available for work · building at LemmeDeliver
        </motion.p>

        <motion.h1 custom={1} variants={rise} initial="hidden" animate="show"
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Rohit Bagade
        </motion.h1>

        <motion.p custom={2} variants={rise} initial="hidden" animate="show"
          className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
          <span className="text-gradient">Full-Stack & AI Engineer</span>
        </motion.p>

        <motion.p custom={3} variants={rise} initial="hidden" animate="show"
          className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          I build products end to end — AI assistants, payment systems, and distributed
          backends — and ship them to real users.
        </motion.p>

        <motion.div custom={4} variants={rise} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full bg-ink px-6 py-3 font-semibold text-bg transition hover:bg-accent">
            View my work
          </a>
          <a href="#contact" className="rounded-full border border-line px-6 py-3 font-semibold text-ink transition hover:border-accent hover:text-accent">
            Get in touch
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted">
        <span className="animate-pulse">scroll</span>
      </div>
    </section>
  );
}
