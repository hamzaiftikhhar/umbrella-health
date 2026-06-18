import { ArrowRight, Stethoscope, FlaskConical, Activity } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { IMG } from "@/data/images";

const pillars = [
  {
    title: "Specialties",
    description:
      "Primary care, cardiology, neurology, sleep, and interventional pain — one coordinated team.",
    to: "/specialties",
    icon: Stethoscope,
    image: IMG.examRoom,
  },
  {
    title: "Diagnostics & Data",
    description:
      "In-house imaging, labs, sleep, and biomarker panels. Results faster, in context.",
    to: "/diagnostics",
    icon: FlaskConical,
    image: IMG.lab,
  },
  {
    title: "Longevity",
    description:
      "Executive physicals, healthspan programs, hormone & metabolic optimization. Measured.",
    to: "/longevity",
    icon: Activity,
    image: IMG.longevityHero,
  },
];

export function PillarsGrid() {
  return (
    <section id="pillars" aria-labelledby="pillars-heading" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="What we do"
          title="Three pillars,"
          accent="one Umbrella."
          description="Built for busy New Yorkers who want sophisticated care without the
          referral-runaround."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Link
                to={p.to}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border/60 bg-card transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 inline-grid h-10 w-10 place-items-center rounded-full bg-background/95 text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
