import { Reveal } from "./primitives/Reveal";

const logos = ["FORBES", "VOGUE", "WIRED", "BLOOMBERG", "GOOP", "WSJ"];

export function LogoBar() {
  return (
    <section aria-label="Press mentions" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Trusted by patients · Featured in
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {logos.map((logo) => (
              <li
                key={logo}
                className="font-display text-lg font-medium tracking-[0.2em] text-foreground/40 transition-colors hover:text-foreground/70 sm:text-xl"
              >
                {logo}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
