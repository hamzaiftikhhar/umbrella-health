# Nectar-Inspired Allergy Clinic Landing Page

Build a single-page, premium healthcare landing page on the existing TanStack Start + Tailwind v4 + shadcn stack (note: project is TanStack Start, not Next.js — we'll honor all design/structure requirements, just using TanStack route files and `@tanstack/react-router` `Link` instead of `next/image` and `next/link`). All content placeholder text is original (not copied from mynectar.com); only layout/composition mirrors the reference.

## Design System (src/styles.css)

- Background: warm cream `--background: oklch(0.985 0.005 85)` (~#FAF9F6)
- Primary: deep forest green `--primary: oklch(0.32 0.05 155)` (~#1B4332) + `--primary-glow` variant
- Accent muted blue for stats banner, soft sage tints for cards
- Radii: bump `--radius` to `1rem`; sections use `rounded-3xl`
- Typography: load via `<link>` in `__root.tsx` head — **Fraunces** (display serif italic for accents like "allergies", "difference", "real people") + **Inter** (body). Register `--font-display` / `--font-sans` in `@theme`.
- Tokens for `--shadow-elegant`, `--gradient-hero`, `--gradient-card-overlay`

## Route & File Structure

```
src/routes/index.tsx                  # composes all sections + SEO head()
src/components/site/
  SiteHeader.tsx                      # sticky, backdrop-blur
  Hero.tsx
  LogoBar.tsx                         # "As seen in"
  LocationBanner.tsx                  # wide clinic image w/ overlay text
  ConditionsGrid.tsx                  # 5 image cards w/ gradient overlay + icon chip
  CareDiagram.tsx                     # circular product diagram (absolute positioning)
  NectarDifference.tsx                # split: 3 numbered features + doctor video
  StatsBanner.tsx                     # 90% banner, light blue bg
  Testimonials.tsx                    # shadcn Card grid w/ stars
  DoctorProfile.tsx                   # circular headshot + bio + signature
  FAQ.tsx                             # shadcn Accordion + side heading
  PreFooterCTA.tsx                    # wide image w/ overlay CTA
  SiteFooter.tsx                      # deep green, sticky-reveal target
  primitives/
    SectionHeading.tsx                # serif-italic accent word support
    PremiumButton.tsx                 # CTA variants
    Reveal.tsx                        # framer-motion scroll reveal wrapper
```

Reusable patterns: `SectionHeading` takes `{ title, accent, eyebrow }` and renders the italic Fraunces word; `Reveal` wraps children with `whileInView` fade+slide; `PremiumButton` = shadcn Button variant extension (`pill`, `pillGhost`).

## Footer Reveal Technique

Wrap page in a relative container. Main content sits in a `z-10 bg-background` block with `mb-[footerHeight]`. `SiteFooter` is `fixed bottom-0 inset-x-0 z-0` (or `sticky bottom-0` inside a parent). As user scrolls past content, the cream content slides up and reveals the green footer underneath — pure CSS, no scroll listeners. A small `motion` parallax on the footer logo adds polish.

## Animations (framer-motion)

- Hero headline: stagger word fade-up on mount
- Each section: `Reveal` fade + 16px translate, `viewport={{ once: true, margin: "-80px" }}`
- Card hover: subtle `scale-[1.02]` + shadow lift via Tailwind transitions (no JS)
- Diagram orbit icons: gentle infinite float (`y: [0,-6,0]`, 6s, staggered delays)

## SEO / AEO / GEO

In `index.tsx` `head()`:
- `<title>` ~55 chars, meta description ~150 chars
- og:title / og:description / og:type=website / og:url (relative `/`) / twitter:card=summary_large_image
- canonical `/`
- JSON-LD `scripts`: **MedicalClinic** schema (name, medicalSpecialty: Allergology, address placeholder, areaServed) + **FAQPage** schema generated from the same FAQ data array used by the Accordion (single source of truth) + **BreadcrumbList**
- Semantic HTML: single `<h1>` in Hero, `<h2>` per section, `<nav aria-label>`, `<section aria-labelledby>`, `<article>` for testimonials, `loading="lazy"` + descriptive `alt` on every image
- GEO: address + city ("New York City" placeholder) in LocationBanner and footer; `geo.region` / `geo.placename` meta tags
- AEO: FAQ answers written as direct, concise sentences; FAQPage JSON-LD; Speakable schema on hero + FAQ

## Images

Use Unsplash URLs for all placeholders (clinic, doctor, two people leaning, woman with dog, condition tiles). No binary assets committed.

## Out of Scope

- No backend / Cloud / forms submission (CTA buttons are visual only)
- No real booking flow
- No CMS — FAQ + testimonial + condition data live in typed arrays inside their component files

## Technical Notes

- Stack is TanStack Start (not Next.js); `app/page.tsx` becomes `src/routes/index.tsx`. `<Link>` from `@tanstack/react-router`, plain `<img>` (no `next/image`).
- Fonts loaded via `<link>` in `__root.tsx` head — never `@import` URL in styles.css (Tailwind v4 / Lightning CSS rule).
- All colors via semantic tokens; zero hardcoded hex in components.
- `framer-motion` already... will be added via `bun add framer-motion` if missing.
