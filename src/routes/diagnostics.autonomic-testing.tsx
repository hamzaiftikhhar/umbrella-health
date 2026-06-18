import { createFileRoute } from "@tanstack/react-router";
import { Activity, Brain, ClipboardList } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/diagnostics/autonomic-testing")({
  head: () =>
    pageHead({
      title: "Autonomic & Sudomotor Testing NYC — Umbrella",
      description: "Specialized autonomic and sudomotor testing — rarely in-house anywhere else in NYC.",
      path: "/diagnostics/autonomic-testing",
      crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Autonomic Testing" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Autonomic & Sudomotor",
          italic: "For symptoms that",
          title: "no one can explain.",
          description: "When fatigue, dizziness, or neuropathy keep slipping through, autonomic testing gives the workup a real foothold.",
          image: IMG.lab,
          imageAlt: "Autonomic testing equipment",
          crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Autonomic Testing" }],
        },
        intro: {
          heading: "What it measures,",
          accent: "and why it matters.",
          body: "Sudomotor and autonomic testing quantify small-fiber and autonomic nervous system function — the system behind a lot of 'all your labs are normal' presentations.",
          bullets: [
            { icon: Activity, title: "Sudomotor (QSART-style)", body: "Quantitative sweat response — small-fiber neuropathy screening." },
            { icon: Brain, title: "Autonomic profile", body: "Heart rate variability and tilt response for dysautonomia workups." },
            { icon: ClipboardList, title: "Integrated workup", body: "Read alongside neurology, cardiology, and labs." },
          ],
        },
      }}
    />
  ),
});
