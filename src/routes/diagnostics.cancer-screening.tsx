import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, ScanLine, Calendar } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/diagnostics/cancer-screening")({
  head: () =>
    pageHead({
      title: "Cancer Screening & Preventive Radiology NYC — Umbrella",
      description: "Coordinated cancer screening — colon, breast, skin, lung, prostate — built into annual preventive care.",
      path: "/diagnostics/cancer-screening",
      crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Cancer Screening" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Cancer Screening",
          italic: "Prevention,",
          title: "on schedule.",
          description: "Modern preventive screening coordinated by your primary doctor — so you're not chasing 12 different reminders from 12 different offices.",
          image: IMG.examRoom,
          imageAlt: "Screening exam room",
          crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics", to: "/diagnostics" }, { label: "Cancer Screening" }],
        },
        intro: {
          heading: "Screening,",
          accent: "stewarded.",
          body: "Guideline-based screening that fits your risk profile — and a system that actually keeps you on cadence.",
          bullets: [
            { icon: ShieldCheck, title: "Guideline-based intervals", body: "USPSTF and specialty-society aligned, adjusted for personal risk." },
            { icon: ScanLine, title: "Coordinated imaging", body: "Mammography, low-dose lung CT, colonoscopy — managed for you." },
            { icon: Calendar, title: "We keep the calendar", body: "Annual reminders, prep instructions, and follow-up baked in." },
          ],
        },
      }}
    />
  ),
});
