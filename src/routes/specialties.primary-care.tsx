import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope, ClipboardList, Heart } from "lucide-react";
import { LeafPage, faqSchema } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

const faqs = [
  { q: "Do you handle annual physicals?", a: "Yes — comprehensive physicals are core to primary care at Umbrella, with same-day labs and EKG when needed." },
  { q: "Can I keep one doctor over time?", a: "Yes. Continuity is the point — your primary doctor stays with you across years and coordinates every specialist visit." },
  { q: "Do you offer telehealth?", a: "Yes, across New York State for follow-ups, refills, and acute concerns when in-person isn't necessary." },
];

export const Route = createFileRoute("/specialties/primary-care")({
  head: () =>
    pageHead({
      title: "Primary Care & Internal Medicine NYC — Umbrella Health",
      description:
        "Comprehensive primary care for busy New Yorkers. One doctor, one record, coordinated specialists. Insurance accepted.",
      path: "/specialties/primary-care",
      crumbs: [{ label: "Home", to: "/" }, { label: "Specialties", to: "/specialties" }, { label: "Primary Care" }],
      extraSchema: [faqSchema(faqs)],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Primary Care",
          italic: "One doctor.",
          title: "One coordinated relationship.",
          description: "Annual physicals, chronic disease management, urgent concerns, and the calm of a doctor who actually knows you.",
          image: IMG.doctorPatient,
          imageAlt: "Primary care physician with patient",
          crumbs: [{ label: "Home", to: "/" }, { label: "Specialties", to: "/specialties" }, { label: "Primary Care" }],
        },
        intro: {
          heading: "Care that ages",
          accent: "with you.",
          body: "Most NYC clinics treat you like a 15-minute slot. We treat you like someone with a 30-year health story we're trying to make better.",
          bullets: [
            { icon: Stethoscope, title: "Annual physicals + same-day diagnostics", body: "Labs, EKG, and ultrasound on the same visit when needed." },
            { icon: Heart, title: "Chronic disease management", body: "Hypertension, diabetes, cholesterol, thyroid — measured and tracked over time." },
            { icon: ClipboardList, title: "Coordinated specialists", body: "Cardiology, neuro, sleep, pain — all in the same record, all in the same building." },
          ],
        },
        pills: {
          label: "Conditions we manage",
          items: ["Hypertension", "Diabetes", "Cholesterol", "Thyroid", "Anxiety & depression", "GI concerns", "Preventive screening", "Vaccinations"],
        },
        related: {
          heading: "Pair it with",
          accent: "diagnostics.",
          cards: [
            { title: "Advanced Biomarker Panels", description: "Full lipid, metabolic, hormonal — explained.", to: "/diagnostics/biomarkers", badge: "Owned" },
            { title: "Imaging & Cardiac Testing", description: "EKG, telemetry, ultrasound in-house.", to: "/diagnostics/imaging-cardiac" },
            { title: "Cancer Screening & Radiology", description: "Coordinated preventive screening.", to: "/diagnostics/cancer-screening" },
          ],
        },
        faqs,
      }}
    />
  ),
});
