import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PremiumButton } from "./primitives/PremiumButton";

const nav = [
  { label: "Conditions", href: "#conditions" },
  { label: "How it works", href: "#how" },
  { label: "Our doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <LeafMark />
          <span className="font-display text-xl font-medium tracking-tight text-primary">
            Verdant
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-border/70 bg-background/50 px-2 py-1.5 backdrop-blur">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <PremiumButton>Book a visit</PremiumButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border/70 bg-background/60 p-2.5 backdrop-blur lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base text-foreground/80 hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <PremiumButton className="w-full">Book a visit</PremiumButton>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

function LeafMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        d="M12 2c5 4 7 8 7 12a7 7 0 1 1-14 0c0-4 2-8 7-12Z"
        fill="currentColor"
        className="text-primary"
      />
      <path d="M12 6c-2 3-3 6-3 9" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
