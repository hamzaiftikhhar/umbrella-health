import { Instagram, Twitter, Facebook } from "lucide-react";

const columns = [
  {
    title: "Clinic",
    links: ["Conditions", "Services", "Our physicians", "Our clinic", "Locations", "Press kit"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Membership", "Press", "Contact"],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-primary text-primary-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8 sm:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                <path d="M12 2c5 4 7 8 7 12a7 7 0 1 1-14 0c0-4 2-8 7-12Z" fill="currentColor" />
              </svg>
              <span className="font-display text-2xl font-medium tracking-tight">
                Verdant
              </span>
            </div>
            <p className="mt-6 max-w-sm font-display text-4xl italic leading-tight text-primary-foreground/95 sm:text-5xl">
              Connect with us.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground/90 transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/60">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>
            145 Mercer Street, New York, NY 10012 · (212) 555-0142
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-primary-foreground">Privacy policy</a>
            <a href="#" className="hover:text-primary-foreground">Terms</a>
            <a href="#" className="hover:text-primary-foreground">Accessibility</a>
            <span>© {new Date().getFullYear()} Verdant Clinic</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
