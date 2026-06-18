import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, Activity, ScanLine } from "lucide-react";
import { LeafPage, faqSchema } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

const faqs = [
  { q: "Do you do EKG and echo on-site?", a: "Yes — EKG, ambulatory telemetry, and vascular ultrasound are all owned and read in-house." },
  { q: "How fast do I get results?", a: "Most cardiac and vascular results are reviewed the same day, with a follow-up plan inside 48 hours." },
];

export const Route = createFileRoute("/specialties/cardiology-vascular")({
  head: () =>
    pageHead({
      title: "Cardiology & Vascular Care NYC — Umbrella Health",
      description:
        "In-house EKG, telemetry, and vascular ultrasound from board-certified cardiologists. Same-day results, integrated with your primary care.",
      path: "/specialties/cardiology-vascular",
      crumbs: [{ label: "Home", to: "/" }, { label: "Specialties", to: "/specialties" }, { label: "Cardiology & Vascular" }],
      extraSchema: [faqSchema(faqs)],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Cardiology & Vascular",
          italic: "Your heart, ",
          title: "in real time.",
          description: "Board-certified cardiologists with owned diagnostics — so the answer arrives the same day, not the next week.",
          image: IMG.ekg,
          imageAlt: "Cardiac diagnostic equipment at Umbrella Health",
          crumbs: [{ label: "Home", to: "/" }, { label: "Specialties", to: "/specialties" }, { label: "Cardiology & Vascular" }],
        },
        intro: {
          heading: "Faster results,",
          accent: "same team.",
          body: "Owning the diagnostics means your cardiologist reads your own data — not a referral packet from a stranger.",
          bullets: [
            { icon: HeartPulse, title: "In-house EKG & telemetry", body: "Resting EKG and ambulatory monitoring done at the clinic." },
            { icon: ScanLine, title: "Vascular ultrasound", body: "Carotid, abdominal, and peripheral vascular ultrasound on-site." },
            { icon: Activity, title: "Risk stratification", body: "Advanced lipid panels and longitudinal tracking against your baseline." },
          ],
        },
        pills: {
          label: "Conditions we treat",
          items: ["Hypertension", "Atrial fibrillation", "Coronary artery disease", "Lipid disorders", "Peripheral vascular disease", "Palpitations", "Syncope"],
        },
        related: {
          heading: "Pair it with",
          accent: "diagnostics.",
          cards: [
            { title: "Imaging & Cardiac Testing", description: "EKG, telemetry, ultrasound.", to: "/diagnostics/imaging-cardiac", badge: "Owned" },
            { title: "Advanced Biomarkers", description: "ApoB, Lp(a), advanced lipid panels.", to: "/diagnostics/biomarkers" },
            { title: "Sleep Diagnostics", description: "Sleep apnea is a cardiac risk factor.", to: "/diagnostics/sleep-pulmonary" },
          ],
        },
        faqs,
      }}
    />
  ),
});
