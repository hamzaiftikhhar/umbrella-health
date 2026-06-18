import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { LogoBar } from "@/components/site/LogoBar";
import { LocationBanner } from "@/components/site/LocationBanner";
import { ConditionsGrid } from "@/components/site/ConditionsGrid";
import { CareDiagram } from "@/components/site/CareDiagram";
import { NectarDifference } from "@/components/site/NectarDifference";
import { StatsBanner } from "@/components/site/StatsBanner";
import { Testimonials } from "@/components/site/Testimonials";
import { DoctorProfile } from "@/components/site/DoctorProfile";
import { FAQ, faqs } from "@/components/site/FAQ";
import { PreFooterCTA } from "@/components/site/PreFooterCTA";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Verdant — Modern Allergy Care in New York City";
const DESCRIPTION =
  "Verdant is a modern allergy clinic in NYC. Board-certified allergists test, diagnose, and treat environmental, food, pet, and skin allergies — calmly and quickly.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "allergy clinic NYC, allergist New York, food allergy testing, immunotherapy, asthma care, eczema treatment" },
      { name: "geo.region", content: "US-NY" },
      { name: "geo.placename", content: "New York City" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Verdant Allergy Clinic",
          medicalSpecialty: "Allergology",
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "145 Mercer Street",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10012",
            addressCountry: "US",
          },
          areaServed: "New York City",
          telephone: "+1-212-555-0142",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <SiteHeader />

      {/* Page content sits above footer; footer reveals on scroll via sticky layering */}
      <div className="relative z-10 bg-background">
        <main>
          <Hero />
          <LogoBar />
          <LocationBanner />
          <ConditionsGrid />
          <CareDiagram />
          <NectarDifference />
          <StatsBanner />
          <Testimonials />
          <DoctorProfile />
          <FAQ />
          <PreFooterCTA />
        </main>
      </div>

      {/* Footer-reveal: footer is sticky to the bottom of the viewport
          inside this wrapper, and the content above scrolls over it. */}
      <div className="sticky bottom-0 z-0">
        <SiteFooter />
      </div>
    </div>
  );
}
