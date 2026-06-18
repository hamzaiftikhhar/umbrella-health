import { createFileRoute } from "@tanstack/react-router";
import { Moon, Activity, ClipboardList } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/specialties/sleep-medicine")({
  head: () =>
    pageHead({
      title: "Sleep Medicine & Home Sleep Study NYC — Umbrella Health",
      description:
        "Home sleep studies and apnea care designed for busy professionals. Diagnose, treat, and track — without an overnight lab.",
      path: "/specialties/sleep-medicine",
      crumbs: [{ label: "Home", to: "/" }, { label: "Specialties", to: "/specialties" }, { label: "Sleep Medicine" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Sleep Medicine",
          italic: "Better sleep,",
          title: "measured at home.",
          description: "Home sleep studies, apnea care, and treatment plans tuned for the way New Yorkers actually live and travel.",
          image: IMG.sleepStudy,
          imageAlt: "Patient using a home sleep study device",
          crumbs: [{ label: "Home", to: "/" }, { label: "Specialties", to: "/specialties" }, { label: "Sleep Medicine" }],
        },
        intro: {
          heading: "Designed for",
          accent: "real lives.",
          body: "A traditional sleep lab is a hassle. We start at home — with calibrated devices and full clinical interpretation.",
          bullets: [
            { icon: Moon, title: "Home sleep study", body: "Diagnostic-grade at-home apnea testing with same-week results." },
            { icon: Activity, title: "CPAP, oral appliance, lifestyle", body: "Treatment options matched to your sleep pattern and travel schedule." },
            { icon: ClipboardList, title: "Cardio-coordinated", body: "We loop in cardiology when apnea is a heart risk factor." },
          ],
        },
        pills: {
          label: "What we treat",
          items: ["Obstructive sleep apnea", "Snoring", "Insomnia", "Restless legs", "Shift-work sleep disorder", "Travel & jet lag"],
        },
      }}
    />
  ),
});
