import { Database, Layers, ShieldCheck, Play } from "lucide-react";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { IconBadge } from "./primitives/IconBadge";
import { BookButton } from "./primitives/BookButton";
import { IMG } from "@/data/images";

const points = [
  {
    icon: Database,
    title: "Data-driven",
    body: "We own our diagnostics — imaging, labs, sleep, autonomic — so your numbers come back faster and stay in one place.",
  },
  {
    icon: Layers,
    title: "Multispecialty",
    body: "Primary care, cardiology, neurology, sleep, and pain in one clinic. Fewer referrals, less context-switching.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance-accepted",
    body: "We work with most major plans and offer transparent cash-pay for longevity and self-pay options.",
  },
];

export function UmbrellaDifference() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="py-24 sm:py-32"
    >
      <Container>
        <div className="grid items-start gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <SectionHeading
              as="h2"
              eyebrow="Why Umbrella"
              title="The Umbrella"
              accent="difference."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-3 md:grid-cols-1 md:gap-8">
              {points.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <IconBadge icon={p.icon} />
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <BookButton>Meet our team</BookButton>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[var(--shadow-elegant)] sm:rounded-[36px]">
              <img
                src={IMG.founder}
                alt="Umbrella Health founding physician"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <button
                type="button"
                aria-label="Play story"
                className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-background/90 text-primary backdrop-blur transition-transform hover:scale-105"
              >
                <Play className="h-5 w-5 fill-current" />
              </button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
