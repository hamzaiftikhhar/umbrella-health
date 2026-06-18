import { Play, ShieldCheck, Microscope, HeartPulse } from "lucide-react";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { PremiumButton } from "./primitives/PremiumButton";

const features = [
  {
    icon: ShieldCheck,
    title: "Board-certified specialists",
    body: "Every visit is led by a licensed allergist — never a generalist or PA.",
  },
  {
    icon: Microscope,
    title: "Same-day in-clinic testing",
    body: "Skin and blood panels run on-site so you leave with answers, not a wait list.",
  },
  {
    icon: HeartPulse,
    title: "Care that follows you",
    body: "Secure messaging, refills, and follow-ups handled inside our app.",
  },
];

export function NectarDifference() {
  return (
    <section id="how" aria-labelledby="how-heading" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="The Verdant difference"
            title="A new standard of"
            accent="allergy care."
          />
          <ul className="mt-10 space-y-6">
            {features.map((f, i) => (
              <li key={f.title} className="flex gap-4">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <f.icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {i + 1}. {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <PremiumButton>Discover how it works</PremiumButton>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[var(--shadow-elegant)] sm:rounded-[36px]">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80"
              alt="Dr. Park, board-certified allergist, smiling in clinic"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            <button
              type="button"
              aria-label="Play doctor introduction"
              className="absolute inset-0 m-auto grid h-20 w-20 place-items-center rounded-full bg-background/90 text-primary backdrop-blur transition-all hover:scale-105"
            >
              <Play className="h-7 w-7 translate-x-0.5 fill-current" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
