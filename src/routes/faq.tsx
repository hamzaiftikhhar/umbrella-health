import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { FAQList, faqSchema } from "@/components/site/primitives/FAQList";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

const faqs = [
  { q: "What is Umbrella Health?", a: "A modern multispecialty clinic in NYC offering primary care, cardiology, neurology, sleep, and interventional pain — with in-house diagnostics, GLP-1 weight loss, and longevity programs." },
  { q: "Do you take insurance?", a: "Yes — most major plans including Aetna, BCBS, Cigna, United, EmblemHealth, and Medicare. See the Insurance page for the full list." },
  { q: "How do I book?", a: "All booking flows through our Zocdoc page — click any Book Appointment button on the site." },
  { q: "Where are you located?", a: "Our flagship clinic is at 200 Lafayette Street in NoHo, NYC. Telehealth available across NY State." },
  { q: "Do you offer telehealth?", a: "Yes — across NY State for follow-ups, refills, acute concerns, and certain longevity follow-ups." },
  { q: "Is the longevity program live yet?", a: "Executive physicals and biomarker panels are active today. The full healthspan dashboard launches in 2026 — join the waitlist." },
  { q: "Do you treat pediatric patients?", a: "Currently adult-focused (16+). Pediatrics is on our roadmap." },
  { q: "How does the GLP-1 program work?", a: "Medically supervised — baseline labs, body composition, monthly clinical follow-ups, with semaglutide or tirzepatide where clinically appropriate." },
  { q: "Will I see the same physician each visit?", a: "Yes — continuity is the point. Your primary doctor stays with you across years." },
  { q: "Can I request my records?", a: "Yes, anytime via the patient portal or by emailing our care team." },
];

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead({
      title: "FAQ — Umbrella Health NYC",
      description: "Answers to the most common questions about Umbrella Health — insurance, booking, telehealth, longevity, and more.",
      path: "/faq",
      crumbs: [{ label: "Home", to: "/" }, { label: "FAQ" }],
      extraSchema: [faqSchema(faqs)],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="We got you."
        italic="Questions?"
        description="The fastest way to figure out if Umbrella is the right fit."
        image={IMG.consult}
        imageAlt="Patient with care team"
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <section className="py-20 sm:py-28">
        <Container size="lg">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading as="h2" title="Common" accent="questions." />
            <FAQList items={faqs} />
          </div>
        </Container>
      </section>
      <CTABanner />
    </main>
  );
}
