import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { BookButton } from "./BookButton";

export function StatCallout({
  stat,
  title,
  description,
  image,
  imageAlt,
  cta,
}: {
  stat: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: ReactNode;
}) {
  return (
    <section className="py-16 sm:py-24" aria-label="Outcomes">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-[color:var(--mist)] sm:rounded-[36px]">
            <div className="grid items-stretch gap-0 md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16">
                <p className="font-display text-6xl font-medium leading-none tracking-tight text-foreground sm:text-7xl md:text-8xl">
                  {stat}
                </p>
                <h2 className="mt-4 max-w-md text-balance text-2xl font-semibold text-foreground sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/70 sm:text-base">
                  {description}
                </p>
                <div className="mt-7">{cta ?? <BookButton>Book appointment</BookButton>}</div>
              </div>
              <div className="relative min-h-[280px]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
