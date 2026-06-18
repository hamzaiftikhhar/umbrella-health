import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/site/NeighborhoodPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/locations/union-square")({
  head: () =>
    pageHead({
      title: "Primary & Specialty Care near Union Square — Umbrella",
      description: "Modern multispecialty care a short walk from Union Square. Primary care, cardiology, diagnostics, longevity.",
      path: "/locations/union-square",
      crumbs: [{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: "Union Square" }],
    }),
  component: () => (
    <NeighborhoodPage
      config={{
        name: "Union Square",
        italic: "Multispecialty care",
        description: "A short walk from Union Square — primary care, cardiology, sleep, and pain in one calm clinic, insurance accepted.",
        image: IMG.unionSquare,
        imageAlt: "Union Square area in Manhattan",
        transit: "6, N, Q, R, W, L at Union Square — 12-minute walk south",
        serves: "Union Square, Gramercy, East Village",
        why: [
          "One coordinated medical record across primary care and specialists",
          "Same-day labs and EKG instead of cross-town referrals",
          "Insurance-friendly — most major plans accepted",
          "Concierge-quality calm without concierge pricing",
        ],
        crumbs: [{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: "Union Square" }],
      }}
    />
  ),
});
