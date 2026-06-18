import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/site/NeighborhoodPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/locations/soho")({
  head: () =>
    pageHead({
      title: "Primary & Specialty Care near SoHo — Umbrella Health",
      description: "Multispecialty care for SoHo and Nolita — primary care, diagnostics, longevity, insurance accepted.",
      path: "/locations/soho",
      crumbs: [{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: "SoHo" }],
    }),
  component: () => (
    <NeighborhoodPage
      config={{
        name: "SoHo",
        italic: "Care that fits",
        description: "Two blocks from Spring Street — calm modern medicine for SoHo, Nolita, and Little Italy.",
        image: IMG.soho,
        imageAlt: "SoHo street",
        transit: "6 at Spring — 2-minute walk; N/R at Prince — 5 minutes",
        serves: "SoHo, Nolita, Little Italy, Lower East Side",
        why: [
          "Two blocks from the 6 — actually walkable",
          "Same-day labs, EKG, ultrasound on-site",
          "Multispecialty: primary care, cardiology, neurology, sleep, pain",
          "Insurance-accepted with cash-pay longevity add-ons",
        ],
        crumbs: [{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: "SoHo" }],
      }}
    />
  ),
});
