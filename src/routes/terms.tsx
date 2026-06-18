import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProseSection } from "@/components/site/PageBuilding";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { pageHead } from "@/lib/page-head";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Service — Umbrella Health",
      description: "Terms governing your use of the Umbrella Health website.",
      path: "/terms",
      crumbs: [{ label: "Home", to: "/" }, { label: "Terms" }],
    }),
  component: () => (
    <main>
      <PageHero
        eyebrow="Legal"
        italic="Terms of"
        title="service."
        description="The rules of the road for using this website."
        image={IMG.busyPro}
        imageAlt="Terms"
        crumbs={[{ label: "Home", to: "/" }, { label: "Terms" }]}
        tone="mint"
      />
      <ProseSection>
        <p>By using this website you agree to these terms. The site is for general informational purposes and is not a substitute for individualized medical advice. For clinical questions, please contact our care team.</p>
        <h3>Use of content</h3>
        <p>Content on this site is © Umbrella Health and may not be reproduced without permission, except for personal, non-commercial use.</p>
        <h3>Disclaimer</h3>
        <p>The information on this site does not create a doctor-patient relationship. Always seek the advice of a qualified clinician for any questions you may have about your health.</p>
      </ProseSection>
      <CTABanner />
    </main>
  ),
});
