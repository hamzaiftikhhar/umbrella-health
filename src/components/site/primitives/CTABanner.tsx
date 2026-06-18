import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { BookButton } from "./BookButton";
import { IMG } from "@/data/images";

interface CTABannerProps {
  title?: string;
  italic?: string;
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
}

export function CTABanner({
  title = "Take the first step to",
  italic = "feel measurably better.",
  image = IMG.patientDog,
  imageAlt = "Patient smiling outdoors",
  ctaLabel = "Book your appointment",
}: CTABannerProps) {
  return (
    <section aria-label="Get started" className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
            <img
              src={image}
              alt={imageAlt}
              className="h-[360px] w-full object-cover sm:h-[420px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/55 via-foreground/20 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 sm:p-14">
              <div className="max-w-md text-primary-foreground">
                <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                  {title}{" "}
                  <span className="font-display italic font-medium">{italic}</span>
                </h2>
                <div className="mt-6">
                  <BookButton variant="light">{ctaLabel}</BookButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
