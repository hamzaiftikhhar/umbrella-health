import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { ServiceCard } from "@/components/site/primitives/ServiceCard";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { Reveal } from "@/components/site/primitives/Reveal";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

const specialties = [
  {
    title: "Primary Care & Internal Medicine",
    description: "Annual physicals, chronic disease management, one coordinated relationship.",
    to: "/specialties/primary-care",
  },
  {
    title: "Cardiology & Vascular Health",
    description: "In-house EKG, telemetry, and vascular ultrasound. Same-day results.",
    to: "/specialties/cardiology-vascular",
  },
  {
    title: "Neurology",
    description: "Headache, neuropathy, cognitive concerns. Diagnostic workup, integrated.",
    to: "/specialties/neurology",
  },
  {
    title: "Sleep Medicine",
    description: "Home sleep studies and apnea care designed for busy professionals.",
    to: "/specialties/sleep-medicine",
  },
  {
    title: "Interventional Pain Management",
    description: "Fellowship-trained procedures for chronic and complex pain.",
    to: "/specialties/pain-management",
  },
];

export const Route = createFileRoute("/specialties/")({
  head: () =>
    pageHead({
      title: "Specialties — Umbrella Health NYC",
      description:
        "Primary care, cardiology, neurology, sleep, and pain management — one multispecialty NYC clinic, one record, one team.",
      path: "/specialties",
      crumbs: [{ label: "Home", to: "/" }, { label: "Specialties" }],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Departments"
        title="under one roof."
        italic="Multispecialty care,"
        description="From annual physicals to interventional cardiology and pain procedures — our specialists share a record, a hallway, and a plan for you."
        image={IMG.doctorPatient}
        imageAlt="Umbrella Health specialist with patient"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s, i) => (
              <Reveal key={s.to} delay={i * 0.04}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </main>
  );
}
