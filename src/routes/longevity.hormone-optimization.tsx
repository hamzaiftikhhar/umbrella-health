import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Activity, ShieldCheck } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/longevity/hormone-optimization")({
  head: () =>
    pageHead({
      title: "Hormone & Metabolic Optimization NYC — Umbrella",
      description: "Evidence-based hormone and metabolic optimization — by physicians, not influencers.",
      path: "/longevity/hormone-optimization",
      crumbs: [{ label: "Home", to: "/" }, { label: "Longevity", to: "/longevity" }, { label: "Hormone Optimization" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Hormone & Metabolic",
          italic: "Rigor, not",
          title: "wellness theater.",
          description: "Hormone and metabolic optimization done with the same clinical seriousness as the rest of your medical care.",
          image: IMG.doctorWoman3,
          imageAlt: "Physician discussing hormone optimization",
          tone: "mint",
          crumbs: [{ label: "Home", to: "/" }, { label: "Longevity", to: "/longevity" }, { label: "Hormone Optimization" }],
        },
        intro: {
          heading: "Clinical,",
          accent: "not commercial.",
          body: "We don't add a supplement aisle to the visit. We measure, we explain, we adjust.",
          bullets: [
            { icon: FlaskConical, title: "Comprehensive hormonal panels", body: "Thyroid, sex hormones, cortisol — interpreted in clinical context." },
            { icon: Activity, title: "Metabolic optimization", body: "Insulin resistance, lipid optimization, body composition." },
            { icon: ShieldCheck, title: "Physician oversight", body: "No nurse-only telehealth shortcuts. Real clinical accountability." },
          ],
        },
      }}
    />
  ),
});
