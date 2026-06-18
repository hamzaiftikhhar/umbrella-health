## Umbrella Health — Full Site Build

Rebrand the current "Verdant" allergy clinic into **Umbrella Health**, a multispecialty NYC clinic with owned diagnostics, GLP-1, longevity, and a B2B employer pillar. We'll keep the Nectar-inspired premium aesthetic (cream + deep forest green, Fraunces italic display + Inter body, rounded-3xl cards, soft scroll motion, fixed footer-reveal) but rewire all content, expand to a multi-route site, and harden the component system for reuse across ~30 pages.

---

### 1. Design system upgrades (`src/styles.css`)

- Refine palette: deep forest `oklch(0.32 0.045 160)` (primary), warm mint `oklch(0.92 0.04 160)` (hero band like Nectar Insurance page), cream `oklch(0.97 0.012 85)`, ink `oklch(0.18 0.01 240)`.
- Add gradient tokens: `--gradient-mint-band`, `--gradient-cream-fade`, `--gradient-forest-deep`.
- Add curved section divider util (`.curved-bottom` clip-path) for the green hero → cream transitions seen across Nectar's interior pages.
- Add `--shadow-card-soft` for the diagnostic/service cards.

### 2. Reusable primitive components (`src/components/site/primitives/`)

Promote everything to a real design system. Most existing primitives stay, plus:

- `Section.tsx` — wraps `<section>` with consistent vertical rhythm, optional `tone="cream" | "mint" | "forest" | "white"`, optional curved bottom.
- `Container.tsx` — max-width + responsive padding.
- `Eyebrow.tsx` — uppercase tracked label.
- `SectionHeading.tsx` (exists) — extend with `align`, `size`.
- `PremiumButton.tsx` (exists) — add `asChild` + `Link` integration so it works as nav.
- `Reveal.tsx` (exists) — keep.
- `ServiceCard.tsx` — image/icon + title + RX badge + arrow (matches Services page cards).
- `ConditionCard.tsx` — tall image card with overlay title + plus icon (matches Conditions grid).
- `PhysicianCard.tsx` — mint-bg portrait card with arrow.
- `LocationCard.tsx` — storefront image + address block + CTA.
- `StatCallout.tsx` — large gradient banner with % stat + image (matches "90%" section).
- `TestimonialCard.tsx` — quote + stars + Google badge.
- `FAQItem.tsx` — accordion row.
- `CTABanner.tsx` — pre-footer image+CTA card (reused on every page).
- `HeroSplit.tsx` — green band hero with title left + circular portrait right + curved bottom (used on Services/Providers/Clinics/Insurance/Longevity).
- `HeroCentered.tsx` — homepage style centered hero with video card.
- `IconBadge.tsx` — mint circular icon chip.
- `PageHead.tsx` — helper to compose route `head()` (title/desc/og/canonical/JSON-LD).

### 3. Shared chrome

- `SiteHeader.tsx` — full nav: Home, Specialties, Diagnostics & Data, Weight Loss, Longevity, Our Physicians, For Employers, Insurance, "More ▾" (Reviews, Resources, Refer, FAQ, Visit Us, Portal). Sticky, blur, mobile drawer (shadcn Sheet).
- `SiteFooter.tsx` — rebuild with Umbrella columns: What we treat / Diagnostics / Services / Longevity / Account, + legal row + LegitScript-style badge placeholder + "Connect with us" wordmark.
- Keep the fixed footer-reveal scroll effect from current build.
- `BookingLink` constant pointing at the Zocdoc URL — used by every CTA.

### 4. Routes (TanStack file-based, dot-convention)

```
src/routes/
  __root.tsx                                  (header/footer shell, sitewide meta + Organization JSON-LD)
  index.tsx                                   /
  specialties.tsx                             /specialties (layout = <Outlet/>)
  specialties.index.tsx                       /specialties (hub grid)
  specialties.primary-care.tsx
  specialties.cardiology-vascular.tsx
  specialties.neurology.tsx
  specialties.sleep-medicine.tsx
  specialties.pain-management.tsx
  diagnostics.tsx + diagnostics.index.tsx
  diagnostics.imaging-cardiac.tsx
  diagnostics.sleep-pulmonary.tsx
  diagnostics.biomarkers.tsx
  diagnostics.autonomic-testing.tsx
  diagnostics.cancer-screening.tsx
  diagnostics.allergy-testing.tsx
  diagnostics.sample-report.tsx
  weight-loss-glp1.tsx
  longevity.tsx + longevity.index.tsx
  longevity.executive-physicals.tsx
  longevity.healthspan-programs.tsx
  longevity.hormone-optimization.tsx
  longevity.waitlist.tsx
  our-physicians.tsx
  employers.tsx
  insurance.tsx
  reviews.tsx
  resources.tsx + resources.index.tsx
  resources.decoding-your-diagnostics.tsx (+ .cholesterol-panel-explained.tsx)
  resources.longevity-prevention.tsx
  resources.busy-professionals.tsx (+ .glp1-what-to-expect.tsx + .sleep-debt-guide.tsx)
  refer-a-friend.tsx
  faq.tsx
  visit-us.tsx
  portal.tsx
  locations.tsx + locations.{union-square,tribeca-fidi,soho,brooklyn}.tsx
  careers.tsx
  privacy.tsx
  terms.tsx
  hipaa-accessibility.tsx
  sitemap[.]xml.tsx                           (server route enumerating all of the above)
```

Every leaf route uses `PageHead` to set unique `<title>`, description, `og:title`, `og:description`, self-referencing `canonical` + `og:url`. JSON-LD: `MedicalClinic` on `/`, `MedicalProcedure` / `MedicalTest` on diagnostic & service leaves, `Physician` on `/our-physicians`, `FAQPage` on `/faq` and any page with an FAQ accordion, `BreadcrumbList` on every deep route.

### 5. Homepage composition

Replace current Verdant home with Umbrella, keeping the proven section rhythm:

1. `HeroCentered` — "Modern medicine, *measured.*" + Book CTA → Zocdoc + "How it works" + video-style hero image.
2. `LogoBar` — accepted insurance logos (Aetna, BCBS, Cigna, United, EmblemHealth, Medicare) — text-only, no fake logos.
3. `LocationBanner` — "Visit us in *New York City*" with curved image.
4. Three-pillar entry tiles → Specialties / Diagnostics & Data / Longevity (replaces ConditionsGrid).
5. `CareDiagram` — kept, repurposed: "Comprehensive, *coordinated* care" with floating product/icon orbit (primary care, cardiology, sleep, GLP-1, longevity, diagnostics).
6. `NectarDifference` → `UmbrellaDifference` — "The *Umbrella* difference" 3 cards (Data-driven, Multispecialty under one roof, Insurance-accepted) + video.
7. `StatCallout` — "94% of members rate their care 5★" gradient banner.
8. `Testimonials` — 4 Google-style cards.
9. `PhysicianFeature` — founder-forward (Columbia/NYP, board cert, pain fellowship).
10. `EmployersCTA` — slim B2B band linking to `/employers`.
11. `FAQ` — top 6 questions.
12. `CTABanner` — "Take the first step" → Zocdoc.
13. Fixed `SiteFooter` reveal (existing technique).

### 6. Interior page templates (reused across all leaves)

- **Specialty leaf**: `HeroSplit` + intro + "What we treat" pill list + `ServiceCard` grid of related diagnostics + Physician strip + FAQ + `CTABanner`.
- **Diagnostic leaf**: `HeroSplit` + "What it measures" two-col + sample-report teaser + cross-link to specialties + `CTABanner`.
- **Longevity leaf**: hero + included-services list + pricing transparency note + waitlist/booking CTA.
- **Resource hub**: hero + filterable article card grid (static data).
- **Resource article**: long-form prose layout with TOC + related CTA.
- **Location leaf**: neighborhood hero + map placeholder + nearby services + booking CTA.
- **Legal pages**: simple prose template.

All page data lives in typed arrays inside each route file (or `src/data/*.ts` when shared) — no CMS, no backend.

### 7. Images

All Unsplash URLs, themed around clinical/wellness/diverse-patients/NYC. Centralize the most-used ones in `src/data/images.ts` so we don't repeat URLs.

### 8. SEO / AEO / GEO

- Per-route `head()` with unique title (<60 chars) + description (<160 chars) + og + canonical (relative).
- `Organization` + `WebSite` JSON-LD in `__root.tsx`.
- `MedicalClinic` JSON-LD on `/` with address, areaServed, telephone.
- `FAQPage` JSON-LD wherever an accordion appears.
- `BreadcrumbList` on every depth-2+ route.
- GEO meta (`geo.region=US-NY`, `geo.placename=New York City`) on location pages.
- Dynamic `/sitemap.xml` server route enumerating every route, relative `BASE_URL=""` for now.
- `public/robots.txt` allow-all.
- Semantic HTML (h1 per page, nav landmarks, `aria-labelledby` on sections, alt text on every image).

### 9. Booking

All "Book appointment" CTAs across the site target the provided Zocdoc URL (`target="_blank" rel="noopener"`). Centralized as `BOOKING_URL` constant in `src/lib/site.ts`.

### 10. Out of scope (explicit)

- No backend, no forms wired up (insurance verify / waitlist / employer inquiry / referral are presentational only with a friendly "we'll reach out" success state).
- No real CMS for resources — articles are typed objects.
- No real map embed — styled placeholder block.
- No Lovable Cloud needed.
- No payment integration.

### Delivery order

1. Design tokens + primitives + header/footer + booking constant.
2. Homepage rebuild.
3. Hub pages (`/specialties`, `/diagnostics`, `/longevity`, `/insurance`, `/our-physicians`, `/employers`, `/weight-loss-glp1`, `/visit-us`, `/reviews`, `/faq`).
4. All specialty + diagnostic + longevity leaves.
5. Resources hub + 3 sample articles.
6. Locations + legal + careers + portal + refer-a-friend.
7. Sitemap + robots + final SEO pass.
