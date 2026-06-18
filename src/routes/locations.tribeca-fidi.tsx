import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/site/NeighborhoodPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/locations/tribeca-fidi")({
  head: () =>
    pageHead({
      title: "Primary & Specialty Care near Tribeca / FiDi — Umbrella",
      description: "Concierge-quality multispecialty care for finance and law professionals near Tribeca and the Financial District.",
      path: "/locations/tribeca-fidi",
      crumbs: [{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: "Tribeca / FiDi" }],
    }),
  component: () => (
    <NeighborhoodPage
      config={{
        name: "Tribeca & FiDi",
        italic: "Concierge-quality care",
        description: "Built for downtown firms — executive physicals, longevity, GLP-1, and multispecialty under one roof, insurance accepted.",
        image: IMG.tribeca,
        imageAlt: "Tribeca / Financial District street view",
        transit: "6 at Canal — 8-minute walk; 4/5 at Brooklyn Bridge — 12 minutes",
        serves: "Tribeca, Financial District, Battery Park City",
        why: [
          "Executive physical programs designed for principals and partners",
          "Same-day diagnostics so a visit fits inside a calendar block",
          "Longevity and metabolic programs measured against your baseline",
          "Telehealth follow-ups for the weeks you can't make it in",
        ],
        crumbs: [{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: "Tribeca / FiDi" }],
      }}
    />
  ),
});
