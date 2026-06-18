import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { PremiumButton } from "./primitives/PremiumButton";

const words = ["Reclaim", "your", "life", "from"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Modern allergy care
        </motion.p>

        <h1
          id="hero-heading"
          className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block pr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block font-display italic font-medium text-primary"
          >
            allergies.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A new standard of allergy care led by board-certified specialists.
          Test, diagnose, and treat the root cause — not just the symptoms — in
          a calm, modern clinic built around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <PremiumButton>
            Book your first visit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </PremiumButton>
          <PremiumButton variant="ghost">How it works</PremiumButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-14 max-w-6xl px-5 sm:px-8"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-border/70 shadow-[var(--shadow-elegant)] sm:rounded-[36px]">
          <img
            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1800&q=80"
            alt="Allergy specialist consulting with a patient inside a bright, modern clinic"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          <button
            type="button"
            aria-label="Play introduction video"
            className="absolute left-6 bottom-6 inline-flex items-center gap-3 rounded-full bg-background/90 px-4 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:bg-background"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
              <Play className="h-3.5 w-3.5 fill-current" />
            </span>
            Watch our story
          </button>
        </div>
      </motion.div>
    </section>
  );
}
