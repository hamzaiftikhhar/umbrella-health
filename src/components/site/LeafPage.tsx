import { PageHero, type Crumb } from "./PageHero";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";
import { ServiceCard } from "./primitives/ServiceCard";
import { BookButton } from "./primitives/BookButton";
import { CTABanner } from "./primitives/CTABanner";
import { PillList } from "./PageBuilding";
import { FAQList, faqSchema, type QA } from "./primitives/FAQList";
import { IconBadge } from "./primitives/IconBadge";
import type { LucideIcon } from "lucide-react";

export interface LeafConfig {
  hero: {
    eyebrow?: string;
    title: string;
    italic?: string;
    description: string;
    image: string;
    imageAlt: string;
    tone?: "forest" | "mint" | "cream";
    crumbs?: Crumb[];
  };
  intro?: {
    heading: string;
    accent?: string;
    body: string;
    bullets?: { icon: LucideIcon; title: string; body: string }[];
  };
  pills?: { label: string; items: string[] };
  related?: {
    heading: string;
    accent?: string;
    cards: { title: string; description?: string; to?: string; badge?: string }[];
  };
  faqs?: QA[];
  cta?: { title?: string; italic?: string; image?: string };
}

export function LeafPage({ config }: { config: LeafConfig }) {
  const c = config;
  return (
    <main>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        italic={c.hero.italic}
        description={c.hero.description}
        image={c.hero.image}
        imageAlt={c.hero.imageAlt}
        tone={c.hero.tone}
        crumbs={c.hero.crumbs}
      />

      {c.intro && (
        <section className="py-20 sm:py-28">
          <Container size="lg">
            <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
              <SectionHeading
                as="h2"
                title={c.intro.heading}
                accent={c.intro.accent}
              />
              <div>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {c.intro.body}
                </p>
                {c.intro.bullets && (
                  <ul className="mt-8 space-y-6">
                    {c.intro.bullets.map((b) => (
                      <li key={b.title} className="flex gap-4">
                        <IconBadge icon={b.icon} />
                        <div>
                          <h3 className="text-base font-semibold text-foreground">
                            {b.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {b.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-10">
                  <BookButton>Book appointment</BookButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {c.pills && (
        <section className="pb-20">
          <Container size="lg">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
                {c.pills.label}
              </p>
              <PillList items={c.pills.items} />
            </Reveal>
          </Container>
        </section>
      )}

      {c.related && (
        <section className="bg-secondary/40 py-20 sm:py-28">
          <Container>
            <SectionHeading
              as="h2"
              title={c.related.heading}
              accent={c.related.accent}
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {c.related.cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.04}>
                  <ServiceCard {...card} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {c.faqs && c.faqs.length > 0 && (
        <section className="py-20 sm:py-28">
          <Container size="lg">
            <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
              <SectionHeading as="h2" title="Questions?" accent="We got you." />
              <FAQList items={c.faqs} />
            </div>
          </Container>
        </section>
      )}

      <CTABanner
        title={c.cta?.title}
        italic={c.cta?.italic}
        image={c.cta?.image}
      />
    </main>
  );
}

export { faqSchema };
