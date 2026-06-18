import { Star } from "lucide-react";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    title: "Completely life-changing.",
    body: "After years of seasonal misery, I finally have a real plan. The team explained every step and I felt heard from day one.",
    name: "Amelia R.",
    location: "Brooklyn, NY",
  },
  {
    title: "Care that actually feels modern.",
    body: "Same-day testing, no paperwork chaos, and a doctor who texts me back. It's how healthcare should feel.",
    name: "Devon K.",
    location: "Manhattan, NY",
  },
  {
    title: "Finally sleeping through the night.",
    body: "My eczema flared every spring. Three months in and my skin is calmer than it has been in a decade.",
    name: "Priya M.",
    location: "Queens, NY",
  },
  {
    title: "Real answers, not just a prescription.",
    body: "They identified two food triggers I'd been missing for years. I trust them with my whole family now.",
    name: "Sam T.",
    location: "Hoboken, NJ",
  },
  {
    title: "I look forward to the visits.",
    body: "The clinic feels more like a calm hotel lobby than a doctor's office, and the care matches the setting.",
    name: "Isabel C.",
    location: "Greenwich Village",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            as="h2"
            title="Real stories from"
            accent="real people"
            eyebrow="Testimonials"
          />
        </Reveal>

        <div className="mt-12 -mx-5 overflow-x-auto px-5 sm:-mx-8 sm:px-8">
          <ul className="flex snap-x snap-mandatory gap-5 pb-4">
            {reviews.map((r, i) => (
              <li key={r.name} className="w-[280px] shrink-0 snap-start sm:w-[320px]">
                <Reveal delay={i * 0.05}>
                  <Card className="h-full border-border/70 bg-card transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]">
                    <CardContent className="flex h-full flex-col gap-4 p-6">
                      <div className="flex gap-0.5 text-primary">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <h3 className="text-base font-semibold text-foreground">
                        “{r.title}”
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {r.body}
                      </p>
                      <div className="mt-auto pt-4 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{r.name}</span>
                        <span className="mx-2">·</span>
                        {r.location}
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
