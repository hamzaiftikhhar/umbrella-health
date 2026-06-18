import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";

export function DoctorProfile() {
  return (
    <section id="doctors" aria-labelledby="doctor-heading" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[minmax(0,0.9fr)_1.1fr] md:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 -z-10 rounded-full bg-sage/40 blur-3xl" />
            <img
              src="https-://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80".replace("https-://","https://")
              alt="Dr. Maya Hart, founding allergist at Verdant Clinic"
              className="h-full w-full rounded-full object-cover shadow-[var(--shadow-elegant)]"
              loading="lazy"
            />
            <div className="absolute bottom-2 left-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-lg">
              Meet Dr. Hart
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            as="h2"
            eyebrow="Our founding doctor"
            title="Allergy experts that"
            accent="put you first."
          />
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dr. Maya Hart trained at Johns Hopkins and spent a decade running
            one of New York's busiest allergy practices before founding Verdant
            to build the clinic she always wished existed — calm, modern, and
            quietly excellent.
          </p>
          <a
            href="#"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Read her story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <div className="mt-8 font-display text-3xl italic text-foreground/80">
            Maya Hart, MD
          </div>
        </Reveal>
      </div>
    </section>
  );
}
