import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/site/NeighborhoodPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/locations/brooklyn")({
  head: () =>
    pageHead({
      title: "Care for Brooklyn Professionals — Umbrella Health NYC",
      description: "Multispecialty care commutable from Williamsburg, Brooklyn Heights, and DUMBO — concierge-quality without concierge pricing.",
      path: "/locations/brooklyn",
      crumbs: [{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: "Brooklyn" }],
    }),
  component: () => (
    <NeighborhoodPage
      config={{
        name: "Brooklyn",
        italic: "A 20-minute commute to",
        description: "Easily commutable from Williamsburg, Brooklyn Heights, and DUMBO — and worth the trip for genuinely integrated specialty care.",
        image: IMG.brooklyn,
        imageAlt: "Brooklyn cityscape",
        transit: "L from Bedford Ave (15 min); A/C from High St (12 min); F from York (10 min)",
        serves: "Williamsburg, Brooklyn Heights, DUMBO, Cobble Hill",
        why: [
          "Quick L/F/A commute from Brooklyn neighborhoods underserved by integrated care",
          "Telehealth across NY State for in-between visits",
          "Diagnostics on-site so one visit can do the work of three",
          "Insurance-accepted; transparent cash-pay for longevity",
        ],
        crumbs: [{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: "Brooklyn" }],
      }}
    />
  ),
});
