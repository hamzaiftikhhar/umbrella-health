import { ArrowUpRight, Building2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";

export function EmployersStrip() {
  return (
    <section aria-labelledby="employers-heading" className="px-5 pb-12 sm:px-8 sm:pb-20">
      <Container>
        <Reveal>
          <div className="grid items-center gap-6 rounded-[28px] border border-border/60 bg-secondary/40 p-8 sm:grid-cols-[auto_1fr_auto] sm:rounded-[32px] sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
              <Building2 className="h-6 w-6" />
            </span>
            <div>
              <h2 id="employers-heading" className="text-xl font-semibold text-foreground sm:text-2xl">
                Executive physicals & longevity for your team
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Concierge-quality care for downtown firms. Built for partners,
                principals, and the people who keep them running.
              </p>
            </div>
            <Link
              to="/employers"
              className="group inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 sm:self-center"
            >
              Employer programs
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
