import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { ServiceCard } from "@/components/site/primitives/ServiceCard";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

const diagnostics = [
  { title: "In-House Imaging & Cardiac Testing", description: "Ultrasound, EKG, telemetry — read by the team that knows your history.", to: "/diagnostics/imaging-cardiac", badge: "Owned" },
  { title: "Sleep & Pulmonary Diagnostics", description: "Home sleep studies and pulmonary function testing.", to: "/diagnostics/sleep-pulmonary" },
  { title: "Advanced Biomarker & Lab Panels", description: "Full lipid, hormonal, metabolic — mapped to your plan.", to: "/diagnostics/biomarkers" },
  { title: "Autonomic & Sudomotor Testing", description: "Specialized testing rarely in-house anywhere else.", to: "/diagnostics/autonomic-testing", badge: "Rare" },
  { title: "Cancer Screening & Radiology", description: "Coordinated preventive screening across modalities.", to: "/diagnostics/cancer-screening" },
  { title: "Allergy Testing", description: "Comprehensive skin and lab-based allergy panels.", to: "/diagnostics/allergy-testing" },
];

export const Route = createFileRoute("/diagnostics/")({
  head: () =>
    pageHead({
      title: "In-House Diagnostics & Data — Umbrella Health NYC",
      description:
        "Imaging, labs, sleep, autonomic, and biomarker testing all owned in-house. Faster answers, in context with your care team.",
      path: "/diagnostics",
      crumbs: [{ label: "Home", to: "/" }, { label: "Diagnostics" }],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Diagnostics & Data"
        italic="Your numbers,"
        title="in our walls."
        description="Most clinics send your tests away. We own ours — imaging, labs, sleep, biomarkers, autonomic. The team that orders is the team that reads."
        image={IMG.lab}
        imageAlt="Umbrella Health in-house lab"
        crumbs={[{ label: "Home", to: "/" }, { label: "Diagnostics" }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading as="h2" eyebrow="Capabilities" title="Owned," accent="not outsourced." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {diagnostics.map((d, i) => (
              <Reveal key={d.to} delay={i * 0.04}>
                <ServiceCard {...d} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner title="See what your numbers" italic="actually mean." />
    </main>
  );
}
