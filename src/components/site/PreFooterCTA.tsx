import { ArrowRight } from "lucide-react";
import { Reveal } from "./primitives/Reveal";

export function PreFooterCTA() {
  return (
    <section aria-labelledby="cta-heading" className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=2000&q=80"
            alt="Woman smiling outdoors with her dog, free from allergy symptoms"
            className="h-[420px] w-full object-cover sm:h-[480px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/55 via-foreground/20 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 sm:p-14">
            <div className="max-w-lg text-primary-foreground">
              <h2 id="cta-heading" className="text-4xl font-semibold leading-[1.05] sm:text-5xl">
                Take the first step to{" "}
                <span className="font-display italic font-medium">
                  get over your allergies
                </span>
                .
              </h2>
              <button
                type="button"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5"
              >
                Become a patient
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
