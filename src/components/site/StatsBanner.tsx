import { Reveal } from "./primitives/Reveal";
import { PremiumButton } from "./primitives/PremiumButton";

export function StatsBanner() {
  return (
    <section aria-labelledby="stats-heading" className="px-5 sm:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] bg-mist sm:rounded-[36px]">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-14">
              <h2 id="stats-heading" className="text-6xl font-semibold text-primary sm:text-7xl md:text-8xl">
                90%
              </h2>
              <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-primary/85 sm:text-lg">
                of patients report meaningful improvement in their allergy
                symptoms within three months of starting care with Verdant.
              </p>
              <div className="mt-8">
                <PremiumButton>Become a patient</PremiumButton>
              </div>
            </div>
            <div className="relative h-72 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=80"
                alt="Two friends leaning on each other outdoors"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
