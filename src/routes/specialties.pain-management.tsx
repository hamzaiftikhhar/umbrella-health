import { createFileRoute } from "@tanstack/react-router";
import { Activity, Award, Stethoscope } from "lucide-react";
import { LeafPage } from "@/components/site/LeafPage";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/specialties/pain-management")({
  head: () =>
    pageHead({
      title: "Interventional Pain Management NYC — Umbrella Health",
      description:
        "Fellowship-trained interventional pain procedures and integrated care for chronic and complex pain. NYC clinic.",
      path: "/specialties/pain-management",
      crumbs: [{ label: "Home", to: "/" }, { label: "Specialties", to: "/specialties" }, { label: "Pain Management" }],
    }),
  component: () => (
    <LeafPage
      config={{
        hero: {
          eyebrow: "Interventional Pain",
          italic: "Pain treated,",
          title: "not just managed.",
          description: "Fellowship-trained interventional procedures combined with primary care continuity — so chronic pain isn't a parallel medical life.",
          image: IMG.examRoom,
          imageAlt: "Pain management procedure room at Umbrella Health",
          crumbs: [{ label: "Home", to: "/" }, { label: "Specialties", to: "/specialties" }, { label: "Pain Management" }],
        },
        intro: {
          heading: "Founder-led,",
          accent: "fellowship-trained.",
          body: "Our founding physician completed an interventional pain fellowship — this is the specialty Umbrella was built around.",
          bullets: [
            { icon: Award, title: "Fellowship credentials", body: "Interventional pain trained at an academic medical center." },
            { icon: Activity, title: "Procedures we offer", body: "Epidural steroid injections, facet joint blocks, radiofrequency ablation, trigger point therapy." },
            { icon: Stethoscope, title: "Integrated medical care", body: "Pain plans coordinated with primary care, neurology, and PT recommendations." },
          ],
        },
        pills: {
          label: "Conditions we treat",
          items: ["Low back pain", "Sciatica", "Cervical radiculopathy", "Facet joint pain", "Migraine procedures", "Post-surgical pain", "Myofascial pain"],
        },
      }}
    />
  ),
});
