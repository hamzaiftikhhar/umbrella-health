import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./primitives/Reveal";

export function LocationBanner() {
  return (
    <section aria-labelledby="location-heading" className="px-5 sm:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
            alt="Verdant clinic reception with sage green millwork and warm wood accents"
            className="h-[420px] w-full object-cover sm:h-[520px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/55 via-foreground/15 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8 sm:p-14">
            <div className="max-w-md text-primary-foreground">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/80">
                Now open
              </p>
              <h2 id="location-heading" className="text-4xl font-semibold sm:text-5xl">
                Visit us in <span className="font-display italic font-medium">New York City</span>
              </h2>
              <p className="mt-3 text-sm text-primary-foreground/85 sm:text-base">
                145 Mercer Street, SoHo — steps from Prince Street station.
              </p>
              <button
                type="button"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5"
              >
                Get directions
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
