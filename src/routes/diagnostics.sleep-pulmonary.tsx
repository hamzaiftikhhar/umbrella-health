import { createFileRoute } from "@tanstack/react-router";
import { Moon, Wind, ClipboardList } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/diagnostics/sleep-pulmonary")({
  head: () =>
    pageHead({
      title: "Home Sleep Study & Pulmonary Testing NYC — Umbrella",
      description: "Diagnostic-grade home sleep studies and pulmonary function testing — without an overnight lab.",
      path: "/diagnostics/sleep-pulmonary",
      crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Sleep & Pulmonary" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Sleep & Pulmonary",
          italic: "Diagnostics,",
          title: "delivered to your home.",
          description: "Calibrated home sleep tests and PFT — clinical-grade, clinically interpreted, designed for the way you actually live.",
          image: IMG.sleepStudy,
          imageAlt: "Home sleep study device",
          crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Sleep & Pulmonary" }],
        },
        intro: {
          heading: "What we test",
          accent: "& why.",
          body: "Sleep apnea is one of the most under-diagnosed cardiometabolic risk factors. We screen it at scale and act on it.",
          bullets: [
            { icon: Moon, title: "Home sleep study", body: "Diagnostic-grade at-home apnea testing with full clinical interpretation." },
            { icon: Wind, title: "Pulmonary function (PFT)", body: "Spirometry and lung function testing in-clinic." },
            { icon: ClipboardList, title: "Treatment plan", body: "From CPAP to oral appliance to lifestyle — matched to your case." },
          ],
        },
      }}
    />
  ),
});
