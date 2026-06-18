import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, ScanLine, FlaskConical } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/longevity/executive-physicals")({
  head: () =>
    pageHead({
      title: "Executive Physicals NYC — Umbrella Health",
      description: "A half-day clinical deep dive for principals and partners — imaging, biomarkers, cardiac and metabolic profiling, all in one place.",
      path: "/longevity/executive-physicals",
      crumbs: [{ label: "Home", to: "/" }, { label: "Longevity", to: "/longevity" }, { label: "Executive Physicals" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Executive Physical",
          italic: "A half-day,",
          title: "for the next decade.",
          description: "The most comprehensive single-visit workup we offer — imaging, advanced labs, cardiac, sleep, and a written plan.",
          image: IMG.exec,
          imageAlt: "Executive physical at Umbrella",
          tone: "mint",
          crumbs: [{ label: "Home", to: "/" }, { label: "Longevity", to: "/longevity" }, { label: "Executive Physicals" }],
        },
        intro: {
          heading: "What's",
          accent: "included.",
          body: "One scheduled day. Multiple specialties. A single, clear summary — and a plan we'll run with you all year.",
          bullets: [
            { icon: ClipboardCheck, title: "Full medical workup", body: "Internal medicine, cardiology, and longevity-medicine touchpoints in one day." },
            { icon: ScanLine, title: "Comprehensive imaging", body: "EKG, vascular ultrasound, and selected screening imaging." },
            { icon: FlaskConical, title: "Advanced biomarkers", body: "Full lipid (ApoB/Lp(a)), metabolic, hormonal, and inflammation panels." },
          ],
        },
        pills: {
          label: "Who it's for",
          items: ["Founders & operators", "Law firm partners", "C-suite executives", "Anyone scaling responsibility"],
        },
      }}
    />
  ),
});
