import { createFileRoute } from "@tanstack/react-router";
import { LineChart, Activity, ClipboardList } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/longevity/healthspan-programs")({
  head: () =>
    pageHead({
      title: "Healthspan & Biomarker Program NYC — Umbrella",
      description: "Track your biomarkers longitudinally and optimize against your own baseline — measured, not marketed.",
      path: "/longevity/healthspan-programs",
      crumbs: [{ label: "Home", to: "/" }, { label: "Longevity", to: "/longevity" }, { label: "Healthspan Programs" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Healthspan",
          italic: "Track your numbers,",
          title: "year after year.",
          description: "A clinical program for people who want to measure and optimize the next 30 years — not just react to the last 12 months.",
          image: IMG.busyPro,
          imageAlt: "Patient reviewing biomarker dashboard",
          tone: "mint",
          crumbs: [{ label: "Home", to: "/" }, { label: "Longevity", to: "/longevity" }, { label: "Healthspan Programs" }],
        },
        intro: {
          heading: "Longitudinal,",
          accent: "by design.",
          body: "Every panel stacks on the last. Trends are the point.",
          bullets: [
            { icon: LineChart, title: "Longitudinal dashboard", body: "Your biomarkers, tracked over years — not just the last visit." },
            { icon: Activity, title: "Quarterly check-ins", body: "Iterate on the plan against actual data." },
            { icon: ClipboardList, title: "Written plan", body: "What we're measuring, why, and what we'll change." },
          ],
        },
      }}
    />
  ),
});
