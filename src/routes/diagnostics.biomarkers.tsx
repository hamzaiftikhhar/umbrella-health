import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, LineChart, ClipboardList } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/diagnostics/biomarkers")({
  head: () =>
    pageHead({
      title: "Advanced Biomarker & Lab Panels NYC — Umbrella",
      description: "Comprehensive lipid, metabolic, hormonal, and inflammation panels mapped to a real plan you can follow.",
      path: "/diagnostics/biomarkers",
      crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Biomarkers" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Biomarkers",
          italic: "The next 30 years,",
          title: "in your bloodwork.",
          description: "Advanced biomarker panels — ApoB, Lp(a), HOMA-IR, hormones, hsCRP — interpreted against your baseline and explained in plain English.",
          image: IMG.microscope,
          imageAlt: "Laboratory microscope",
          crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Biomarkers" }],
        },
        intro: {
          heading: "Numbers that",
          accent: "make sense.",
          body: "A panel is only useful when someone walks you through it. We bridge bloodwork to a plan — the plan is the deliverable.",
          bullets: [
            { icon: FlaskConical, title: "Advanced panels", body: "Beyond a basic CMP/lipid — ApoB, Lp(a), hsCRP, HOMA-IR, hormonal panels." },
            { icon: LineChart, title: "Longitudinal tracking", body: "We watch trends, not just snapshots — your numbers stack over years." },
            { icon: ClipboardList, title: "Plan-first explanation", body: "Every panel ends with what we're going to do about it." },
          ],
        },
        related: {
          heading: "Where the data",
          accent: "flows.",
          cards: [
            { title: "Primary Care", description: "Build a baseline that holds up.", to: "/specialties/primary-care" },
            { title: "Longevity programs", description: "Optimize against your numbers.", to: "/longevity" },
            { title: "Sample report", description: "See what your panel looks like.", to: "/diagnostics/sample-report" },
          ],
        },
      }}
    />
  ),
});
