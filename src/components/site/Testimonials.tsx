import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { TestimonialCard } from "./primitives/TestimonialCard";

const reviews = [
  {
    name: "Priya S.",
    quote:
      "Finally one clinic where my GP, cardiologist, and sleep doc actually talk to each other. The EKG was done on-site in 10 minutes.",
  },
  {
    name: "Marcus T.",
    quote:
      "Their biomarker panel was the first time anyone showed me what my numbers actually mean. Real conversation, not a checklist.",
  },
  {
    name: "Elena R.",
    quote:
      "The GLP-1 program is medically supervised the way it should be — labs, body comp, monthly check-ins. Worth every dollar.",
  },
  {
    name: "James K.",
    quote:
      "I used a concierge clinic for years. Umbrella delivers the same attention and accepts my insurance. No-brainer.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="Real stories"
          title="From real"
          accent="patients."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <TestimonialCard {...r} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
