import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { PhysicianCard } from "@/components/site/primitives/PhysicianCard";
import { CareDiagram } from "@/components/site/CareDiagram";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

const team = [
  { name: "Dr. Anjali Rao, MD", title: "Founder · Internal Medicine, Pain", image: IMG.founder },
  { name: "Dr. Marcus Chen, MD", title: "Cardiology & Vascular", image: IMG.doctorMan1 },
  { name: "Dr. Sarah Levin, MD", title: "Neurology", image: IMG.doctorWoman1 },
  { name: "Dr. James Okafor, MD", title: "Sleep & Pulmonary", image: IMG.doctorMan2 },
  { name: "Dr. Mei Tanaka, MD", title: "Internal Medicine", image: IMG.doctorWoman2 },
  { name: "Dr. Rafael Diaz, MD", title: "Interventional Pain", image: IMG.doctorMan3 },
  { name: "Priya Patel, PA-C", title: "Primary Care", image: IMG.doctorWoman3 },
  { name: "David Park, NP", title: "Longevity & Metabolic", image: IMG.doctorMan1 },
];

export const Route = createFileRoute("/our-physicians")({
  head: () =>
    pageHead({
      title: "Our Physicians — Umbrella Health NYC",
      description: "Meet the multispecialty team at Umbrella Health — Columbia / NewYork-Presbyterian–trained physicians delivering coordinated care.",
      path: "/our-physicians",
      crumbs: [{ label: "Home", to: "/" }, { label: "Our Physicians" }],
      extraSchema: [
        {
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Anjali Rao, MD",
          medicalSpecialty: ["InternalMedicine", "PainMedicine"],
          worksFor: { "@type": "MedicalClinic", name: "Umbrella Health" },
        },
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Care team"
        italic="Meet our"
        title="founding physicians."
        description="Columbia / NewYork-Presbyterian–trained. Board-certified, fellowship-credentialed, and obsessive about the data behind your care."
        image={IMG.founderAlt}
        imageAlt="Umbrella Health care team"
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Physicians" }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <PhysicianCard {...p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-12">
        <Container size="lg">
          <SectionHeading
            as="h2"
            eyebrow="Approach"
            title="The Umbrella"
            accent="approach to care."
            description="Four moves we make on every patient: deep diagnostics, comprehensive plan, personalized treatment, ongoing measurement."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>
      <CareDiagram />
      <CTABanner title="Meet your" italic="care team." />
    </main>
  );
}
