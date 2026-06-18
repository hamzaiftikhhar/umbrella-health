import { motion } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  Brain,
  Moon,
  Activity,
  FlaskConical,
  ScanLine,
  Syringe,
} from "lucide-react";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { BookButton } from "./primitives/BookButton";

const orbit = [
  { icon: HeartPulse, label: "Cardiology", angle: 0 },
  { icon: Brain, label: "Neurology", angle: 45 },
  { icon: Moon, label: "Sleep", angle: 90 },
  { icon: Activity, label: "Pain Mgmt", angle: 135 },
  { icon: Stethoscope, label: "Primary Care", angle: 180 },
  { icon: FlaskConical, label: "Biomarkers", angle: 225 },
  { icon: ScanLine, label: "Imaging", angle: 270 },
  { icon: Syringe, label: "GLP-1", angle: 315 },
];

export function CareDiagram() {
  return (
    <section
      id="how"
      aria-labelledby="diagram-heading"
      className="overflow-hidden py-24 sm:py-32"
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <SectionHeading
            as="h2"
            eyebrow="How it works"
            title="One team. One record."
            accent="One Umbrella."
            description="Your primary doctor, your specialists, your labs, your imaging,
            your longevity plan — all looking at the same data, in the same place."
          />

          <div className="relative mx-auto h-[420px] w-[420px] sm:h-[520px] sm:w-[520px]">
            {/* Center disc */}
            <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] sm:h-40 sm:w-40">
              <div className="text-center">
                <p className="font-display text-xl italic">Umbrella</p>
                <p className="text-[10px] uppercase tracking-[0.18em] opacity-80">
                  one record
                </p>
              </div>
            </div>

            {/* Orbit ring */}
            <div className="absolute inset-8 rounded-full border border-dashed border-primary/20" />

            {orbit.map((o, i) => {
              const r = 180;
              const rad = (o.angle * Math.PI) / 180;
              const x = Math.cos(rad) * r;
              const y = Math.sin(rad) * r;
              return (
                <motion.div
                  key={o.label}
                  className="absolute left-1/2 top-1/2"
                  style={{ x, y }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="-translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-card text-primary shadow-[var(--shadow-card)] sm:h-20 sm:w-20">
                      <o.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <p className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {o.label}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <BookButton>Book your first visit</BookButton>
        </div>
      </Container>
    </section>
  );
}
