import { ArrowRight, GraduationCap, Award, BadgeCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { IMG } from "@/data/images";

const creds = [
  { icon: GraduationCap, label: "Columbia / NewYork-Presbyterian" },
  { icon: BadgeCheck, label: "Board-certified, Internal Medicine" },
  { icon: Award, label: "Fellowship, Interventional Pain" },
];

export function FounderProfile() {
  return (
    <section id="founder" aria-labelledby="founder-heading" className="py-24 sm:py-32">
      <Container size="lg">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.9fr)_1.1fr] md:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-full bg-[color:var(--mint)] blur-3xl opacity-60" />
              <img
                src={IMG.founder}
                alt="Dr. Anjali Rao, founding physician at Umbrella Health"
                className="h-full w-full rounded-full object-cover shadow-[var(--shadow-elegant)]"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-lg">
                Meet Dr. Rao
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              as="h2"
              eyebrow="Our founding physician"
              title="Pedigreed care that"
              accent="treats you like a person."
            />
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dr. Anjali Rao trained at Columbia and led a multispecialty
              practice at NewYork-Presbyterian before founding Umbrella to
              build the clinic she wished existed — rigorous, calm, and
              built around the patient.
            </p>
            <ul className="mt-8 space-y-3">
              {creds.map((c) => (
                <li key={c.label} className="flex items-center gap-3 text-sm text-foreground/80">
                  <c.icon className="h-4 w-4 text-primary" />
                  {c.label}
                </li>
              ))}
            </ul>
            <Link
              to="/our-physicians"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Meet the whole team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <div className="mt-8 font-display text-3xl italic text-foreground/80">
              Anjali Rao, MD
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
