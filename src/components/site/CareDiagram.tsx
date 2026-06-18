import { motion } from "framer-motion";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { PremiumButton } from "./primitives/PremiumButton";

const orbit = [
  { label: "Nasal spray", img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=400&q=80", angle: 0 },
  { label: "Allergen panel", img: "https://images.unsplash.com/photo-1559757175-08fdca44edd2?auto=format&fit=crop&w=400&q=80", angle: 60 },
  { label: "Tincture", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80", angle: 120 },
  { label: "Inhaler", img: "https://images.unsplash.com/photo-1584017912335-d8a1f9c1d1bb?auto=format&fit=crop&w=400&q=80", angle: 180 },
  { label: "Test strips", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80", angle: 240 },
  { label: "Topical", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80", angle: 300 },
];

export function CareDiagram() {
  return (
    <section aria-labelledby="care-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative mx-auto aspect-square max-w-[640px]">
          {/* Dashed orbit ring */}
          <div className="absolute inset-[12%] rounded-full border border-dashed border-primary/25" />
          <div className="absolute inset-[2%] rounded-full border border-dashed border-primary/10" />

          {/* Center heading */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Reveal>
              <div className="max-w-xs text-center">
                <SectionHeading
                  as="h2"
                  align="center"
                  title="Comprehensive allergy care:"
                  accent="test, diagnose, treat."
                />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  One clinic, one team, one plan — from your first symptom check
                  to long-term immunotherapy that actually works.
                </p>
                <div className="mt-6 flex justify-center">
                  <PremiumButton variant="outline">Explore our care</PremiumButton>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Orbit nodes */}
          {orbit.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const r = 44; // percent radius
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <motion.div
                key={node.label}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-card shadow-[var(--shadow-soft)] sm:h-20 sm:w-20">
                    <img src={node.img} alt={node.label} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <span className="rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur sm:text-xs">
                    {node.label}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
