import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { TestimonialCard } from "@/components/site/primitives/TestimonialCard";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

const reviews = [
  { name: "Priya S.", quote: "Finally one clinic where my GP, cardiologist, and sleep doc actually talk to each other. The EKG was done on-site in 10 minutes." },
  { name: "Marcus T.", quote: "Their biomarker panel was the first time anyone showed me what my numbers actually mean. Real conversation, not a checklist." },
  { name: "Elena R.", quote: "The GLP-1 program is medically supervised the way it should be — labs, body comp, monthly check-ins. Worth every dollar." },
  { name: "James K.", quote: "I used a concierge clinic for years. Umbrella delivers the same attention and accepts my insurance. No-brainer." },
  { name: "Linh N.", quote: "I had been chasing a neuro workup for a year. Umbrella ran it in two weeks and explained everything." },
  { name: "Daniel W.", quote: "The executive physical was the most thorough day of my medical life. Genuinely impressive." },
  { name: "Aisha M.", quote: "Pain procedures done by someone who is fellowship-trained — and who actually returns messages." },
  { name: "Jordan A.", quote: "Coordinated my cancer screening, my cholesterol plan, and my anxiety meds in one calm visit." },
];

export const Route = createFileRoute("/reviews")({
  head: () =>
    pageHead({
      title: "Patient Reviews — Umbrella Health NYC",
      description: "Real reviews from real Umbrella Health patients across NYC.",
      path: "/reviews",
      crumbs: [{ label: "Home", to: "/" }, { label: "Patient Reviews" }],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Reviews"
        italic="Real stories from"
        title="real patients."
        description="What it actually feels like to be a patient at Umbrella. Help others find data-driven care — leave a review after your visit."
        image={IMG.patientHappy}
        imageAlt="Smiling Umbrella Health patient"
        crumbs={[{ label: "Home", to: "/" }, { label: "Reviews" }]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.04}>
                <TestimonialCard {...r} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </main>
  );
}
