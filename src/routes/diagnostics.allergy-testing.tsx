import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, ClipboardList, Activity } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/diagnostics/allergy-testing")({
  head: () =>
    pageHead({
      title: "Allergy Testing NYC — Umbrella Health",
      description: "Comprehensive skin and lab-based allergy testing for environmental, food, and contact allergies.",
      path: "/diagnostics/allergy-testing",
      crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Allergy Testing" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Allergy Testing",
          italic: "Pinpoint the trigger,",
          title: "not the symptom.",
          description: "Skin-prick and lab-based allergy testing with a treatment plan that goes beyond an over-the-counter shrug.",
          image: IMG.microscope,
          imageAlt: "Allergy testing in lab",
          crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Allergy Testing" }],
        },
        intro: {
          heading: "Comprehensive testing,",
          accent: "real plans.",
          body: "We identify the actual triggers and build a treatment plan that integrates with your overall medical record.",
          bullets: [
            { icon: FlaskConical, title: "Skin & lab panels", body: "Skin-prick and serum IgE testing for common allergens." },
            { icon: Activity, title: "Treatment options", body: "From medication to immunotherapy referrals when appropriate." },
            { icon: ClipboardList, title: "Integrated record", body: "Results live alongside primary care and pulmonary." },
          ],
        },
      }}
    />
  ),
});
