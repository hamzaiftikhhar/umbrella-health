import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/site/HomeHero";
import { InsuranceLogoBar } from "@/components/site/InsuranceLogoBar";
import { LocationBanner } from "@/components/site/LocationBanner";
import { PillarsGrid } from "@/components/site/PillarsGrid";
import { CareDiagram } from "@/components/site/CareDiagram";
import { UmbrellaDifference } from "@/components/site/UmbrellaDifference";
import { StatCallout } from "@/components/site/primitives/StatCallout";
import { Testimonials } from "@/components/site/Testimonials";
import { FounderProfile } from "@/components/site/FounderProfile";
import { EmployersStrip } from "@/components/site/EmployersStrip";
import { HomeFAQ, homeFaqs } from "@/components/site/HomeFAQ";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { faqSchema } from "@/components/site/primitives/FAQList";
import { IMG } from "@/data/images";

const TITLE = "Umbrella Health — Modern Multispecialty Care in NYC";
const DESCRIPTION =
  "Primary care, specialists, in-house diagnostics, GLP-1 weight loss, and longevity programs under one roof in NYC. Insurance accepted. Book online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "NYC clinic, primary care NYC, specialty care NYC, GLP-1 weight loss, longevity medicine, executive physical, in-house diagnostics",
      },
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
          name: "Umbrella Health",
          medicalSpecialty: [
            "PrimaryCare",
            "Cardiovascular",
            "Neurologic",
            "PulmonaryMedicine",
            "PainMedicine",
          ],
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "200 Lafayette Street",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10012",
            addressCountry: "US",
          },
          areaServed: "New York City",
          telephone: "+1-212-555-0188",
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(homeFaqs)) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <HomeHero />
      <InsuranceLogoBar />
      <LocationBanner />
      <PillarsGrid />
      <CareDiagram />
      <UmbrellaDifference />
      <StatCallout
        stat="94%"
        title="of members rate their care 5 stars after their first visit."
        description="Multispecialty under one roof, data-driven care plans, and a team that actually picks up the phone."
        image={IMG.patientHappy}
        imageAlt="Smiling patient at Umbrella Health"
      />
      <Testimonials />
      <FounderProfile />
      <EmployersStrip />
      <HomeFAQ />
      <CTABanner />
    </main>
  );
}
