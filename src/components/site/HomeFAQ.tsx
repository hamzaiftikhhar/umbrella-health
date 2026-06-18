import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { FAQList, faqSchema, type QA } from "./primitives/FAQList";

export const homeFaqs: QA[] = [
  {
    q: "Do you take my insurance?",
    a: "We work with most major plans including Aetna, BCBS, Cigna, United, EmblemHealth, and Medicare. Verify your coverage on our Insurance page — most members pay only their copay.",
  },
  {
    q: "What's actually different about Umbrella?",
    a: "Three things. We own our diagnostics (no waiting on outside labs), we're truly multispecialty under one roof (primary care, cardiology, neuro, sleep, pain), and we publish a longevity program with measured outcomes — not vibes.",
  },
  {
    q: "How fast can I be seen?",
    a: "Most new patients book within 3–5 business days online via Zocdoc. Sick visits often same-day; telehealth available across NY State.",
  },
  {
    q: "Do you offer GLP-1 (Ozempic / Mounjaro) for weight loss?",
    a: "Yes — a fully medically-supervised program with baseline labs, body composition, and monthly clinical follow-up. See the Weight Loss page for pricing and what's included.",
  },
  {
    q: "Is the longevity program available now?",
    a: "Executive physicals and biomarker panels are live. The full healthspan dashboard launches in 2026 — join the waitlist to be first.",
  },
  {
    q: "Where are you located?",
    a: "Our flagship clinic is at 200 Lafayette Street in NoHo, NYC. Telehealth is available statewide, and we serve patients across Union Square, Tribeca, SoHo, and Brooklyn.",
  },
];

export function HomeFAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 sm:py-32 bg-secondary/30">
      <Container size="lg">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <SectionHeading as="h2" title="Questions?" accent="We got you." />
          <div>
            <FAQList items={homeFaqs} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { faqSchema };
