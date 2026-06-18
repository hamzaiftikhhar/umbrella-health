import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { BookButton } from "@/components/site/primitives/BookButton";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";
import { Clock, MapPin, Accessibility, Languages, Video } from "lucide-react";

export const Route = createFileRoute("/visit-us")({
  head: () =>
    pageHead({
      title: "Visit Us — Umbrella Health NYC | 200 Lafayette St",
      description: "Visit Umbrella Health in NoHo, NYC. Hours, accessibility, languages spoken, and how to get here.",
      path: "/visit-us",
      crumbs: [{ label: "Home", to: "/" }, { label: "Visit Us" }],
      extraSchema: [
        {
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Umbrella Health",
          address: {
            "@type": "PostalAddress",
            streetAddress: "200 Lafayette Street",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10012",
            addressCountry: "US",
          },
          telephone: "+1-212-555-0188",
          openingHours: ["Mo-Fr 08:00-19:00", "Sa 09:00-15:00"],
        },
      ],
    }),
  component: Page,
});

const facts = [
  { icon: MapPin, title: "Address", body: "200 Lafayette Street\nNew York, NY 10012\nNoHo · 6 train at Spring St" },
  { icon: Clock, title: "Hours", body: "Mon–Fri · 8am – 7pm\nSaturday · 9am – 3pm\nSunday · Closed" },
  { icon: Accessibility, title: "Accessibility", body: "Step-free entrance, ADA-compliant exam rooms, accessible restrooms." },
  { icon: Languages, title: "Languages", body: "English, Spanish, Mandarin, Hindi, Russian." },
  { icon: Video, title: "Telehealth", body: "Available across New York State for follow-ups and acute concerns." },
];

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Visit Us"
        italic="The Umbrella clinic,"
        title="in NoHo."
        description="Designed to feel calm. Built to deliver clinically. Around the corner from the 6 at Spring Street."
        image={IMG.reception}
        imageAlt="Umbrella Health reception in NoHo"
        crumbs={[{ label: "Home", to: "/" }, { label: "Visit Us" }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <SectionHeading as="h2" eyebrow="Location" title="200 Lafayette," accent="NoHo." />
              <ul className="mt-8 space-y-6">
                {facts.map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--mint)] text-primary">
                      <f.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.title}</p>
                      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <BookButton>Book appointment</BookButton>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl bg-[color:var(--mint)]">
                <img
                  src={IMG.nyc}
                  alt="Map view of NoHo Manhattan"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply"
                  loading="lazy"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="rounded-3xl border border-border/60 bg-card/95 p-6 text-center shadow-[var(--shadow-card)] backdrop-blur">
                    <p className="font-display text-2xl italic text-foreground">200 Lafayette Street</p>
                    <p className="mt-1 text-sm text-muted-foreground">NoHo · New York, NY 10012</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <CTABanner />
    </main>
  );
}
