import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "How do I know if I'm eligible for care with Verdant?",
    a: "We treat patients aged 4 and up for environmental allergies, asthma, food allergies, eczema, and chronic sinus issues. Book a free 10-minute discovery call to confirm we're the right fit.",
  },
  {
    q: "How soon can I be seen?",
    a: "Most new patients are seen within five business days, and we hold same-week openings for urgent cases.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes. We are in-network with most major PPO plans in New York and provide superbills for out-of-network reimbursement.",
  },
  {
    q: "Is allergy immunotherapy painful?",
    a: "Modern immunotherapy is well tolerated. We offer both injectable and sublingual (under-the-tongue) protocols so you can choose what fits your life.",
  },
  {
    q: "Can my child be seen at Verdant?",
    a: "Absolutely. Our pediatric protocols start at age four, and our exam rooms are designed to feel calm and unintimidating for kids.",
  },
  {
    q: "How is Verdant different from a typical allergist?",
    a: "Same-day testing, longer appointments, secure messaging with your doctor between visits, and a single care team that follows you for the long haul.",
  },
  {
    q: "What does a first visit look like?",
    a: "We spend 45 minutes mapping your full history, run any indicated testing in-clinic, and leave you with a written plan before you walk out.",
  },
  {
    q: "Do you offer virtual visits?",
    a: "Yes — most follow-ups can be done by video once you have been seen in person at least once.",
  },
  {
    q: "Will I have to stop my current medications?",
    a: "Never without your doctor's guidance. We coordinate carefully with any specialists you already see.",
  },
  {
    q: "How long does treatment usually take?",
    a: "Symptom control often improves within weeks. Disease-modifying immunotherapy is typically a three-to-five year journey.",
  },
];

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <Reveal>
          <SectionHeading
            as="h2"
            title="Questions?"
            accent="We got you."
            eyebrow="FAQ"
          />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Can't find what you need?{" "}
            <a href="#" className="font-medium text-primary underline-offset-4 hover:underline">
              Chat with our care team
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/70"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
