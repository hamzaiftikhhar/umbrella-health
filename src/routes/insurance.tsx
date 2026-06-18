import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { BookButton } from "@/components/site/primitives/BookButton";
import { FAQList, faqSchema } from "@/components/site/primitives/FAQList";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

const carriers = ["Aetna", "Blue Cross Blue Shield", "Cigna", "United Healthcare", "EmblemHealth", "Medicare", "Oxford", "Empire"];

const steps = [
  { n: 1, title: "Book online via Zocdoc", body: "Pick a time that works. New patient or returning — both flow through Zocdoc." },
  { n: 2, title: "We verify your coverage", body: "Our team confirms benefits before your visit so there are no surprise bills." },
  { n: 3, title: "Care at the clinic", body: "Most visits are covered. You'll typically pay only your copay or coinsurance." },
  { n: 4, title: "Optional: cash-pay add-ons", body: "Longevity and executive physicals are transparent cash-pay. FSA/HSA-eligible where applicable." },
];

const faqs = [
  { q: "Do you take my plan?", a: "Most likely yes — we work with all of the major carriers listed above and many sub-plans. Verify before your visit if you'd like certainty." },
  { q: "What if you're out-of-network?", a: "We offer transparent self-pay pricing and can supply a superbill for out-of-network reimbursement when applicable." },
  { q: "Are longevity programs covered by insurance?", a: "Most longevity and executive-physical add-ons are cash-pay and not covered by insurance — they're FSA/HSA-eligible where applicable." },
  { q: "Do you accept FSA/HSA?", a: "Yes, for qualifying medical services and self-pay add-ons." },
];

export const Route = createFileRoute("/insurance")({
  head: () =>
    pageHead({
      title: "Insurance & Pricing — Umbrella Health NYC",
      description: "We accept most major insurance plans and offer transparent cash-pay for longevity and self-pay services.",
      path: "/insurance",
      crumbs: [{ label: "Home", to: "/" }, { label: "Insurance & Pricing" }],
      extraSchema: [faqSchema(faqs)],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Insurance & Pricing"
        italic="We accept"
        title="most major plans."
        description="Insurance for your medical care. Transparent cash-pay for longevity and self-pay add-ons. No surprise bills."
        image={IMG.doctorPatient}
        imageAlt="Patient with insurance card"
        crumbs={[{ label: "Home", to: "/" }, { label: "Insurance & Pricing" }]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container size="lg">
          <SectionHeading as="h2" eyebrow="Accepted plans" title="The plans we" accent="work with." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {carriers.map((c) => (
              <div
                key={c}
                className="rounded-2xl border border-border/60 bg-card px-5 py-4 text-center text-sm font-medium text-foreground"
              >
                {c}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Don't see yours? Verify your coverage at booking — we work with many additional plans.
          </p>
        </Container>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-28">
        <Container size="lg">
          <SectionHeading as="h2" eyebrow="How it works" title="No surprise" accent="bills." />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <li className="list-none">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 flex justify-center">
            <BookButton>Book — we'll verify coverage</BookButton>
          </div>
        </Container>
      </section>

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
