import { ArrowUpRight, Flower2, Wheat, Egg, Cat, Sparkles } from "lucide-react";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";

const conditions = [
  {
    title: "Environmental allergies",
    icon: Flower2,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Asthma",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1584367369853-8b966cf22034?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Food allergies",
    icon: Wheat,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pet allergies",
    icon: Cat,
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Eczema",
    icon: Egg,
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=900&q=80",
  },
];

export function ConditionsGrid() {
  return (
    <section id="conditions" aria-labelledby="conditions-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-6 sm:gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <SectionHeading
              as="h2"
              title="Allergy conditions we"
              accent="treat"
              eyebrow="What we treat"
            />
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:max-w-md md:justify-self-end">
              From seasonal sniffles to lifelong food sensitivities, our specialists
              build personalized treatment plans that go beyond temporary relief.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-5">
          {conditions.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-3xl">
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "var(--gradient-card-overlay)" }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
                  <h3 className="text-base font-semibold leading-tight text-primary-foreground drop-shadow sm:text-lg">
                    {c.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-background/95 text-primary backdrop-blur">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-background/0 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
