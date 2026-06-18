import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, ScanLine, Clock } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/diagnostics/imaging-cardiac")({
  head: () =>
    pageHead({
      title: "In-House Imaging & Cardiac Testing NYC — Umbrella",
      description: "On-site EKG, ambulatory telemetry, and vascular ultrasound — read by the same team that treats you.",
      path: "/diagnostics/imaging-cardiac",
      crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Imaging & Cardiac" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Imaging & Cardiac",
          italic: "Faster answers,",
          title: "same team.",
          description: "EKG, telemetry, and vascular ultrasound, owned and read in-house — so the cardiologist treating you is reading your own data.",
          image: IMG.ultrasound,
          imageAlt: "Vascular ultrasound at Umbrella",
          crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Imaging & Cardiac" }],
        },
        intro: {
          heading: "What we measure,",
          accent: "in one visit.",
          body: "No outside imaging centers, no faxed reports, no week-long waits. The diagnostic is part of the appointment.",
          bullets: [
            { icon: HeartPulse, title: "EKG & telemetry", body: "Resting EKG, event monitoring, and ambulatory telemetry." },
            { icon: ScanLine, title: "Vascular ultrasound", body: "Carotid, abdominal, and peripheral vascular ultrasound." },
            { icon: Clock, title: "Same-day reading", body: "Most results reviewed before you leave the building." },
          ],
        },
        related: {
          heading: "Pair with",
          accent: "specialty care.",
          cards: [
            { title: "Cardiology & Vascular", description: "Specialists who read your own data.", to: "/specialties/cardiology-vascular" },
            { title: "Primary Care", description: "Integrated annual physicals.", to: "/specialties/primary-care" },
            { title: "Sample report", description: "See what a real report looks like.", to: "/diagnostics/sample-report" },
          ],
        },
      }}
    />
  ),
});
