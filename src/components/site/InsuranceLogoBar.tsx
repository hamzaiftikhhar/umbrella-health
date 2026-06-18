import { Container } from "./primitives/Container";

const items = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "United Healthcare",
  "EmblemHealth",
  "Medicare",
];

export function InsuranceLogoBar() {
  return (
    <section aria-label="Accepted insurance" className="py-12 sm:py-16">
      <Container>
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          We accept most major insurance
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((label) => (
            <li
              key={label}
              className="font-display text-lg italic text-foreground/55 sm:text-xl"
            >
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
