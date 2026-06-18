import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { pageHead } from "@/lib/page-head";
import { pillars, articlesByPillar } from "@/data/articles";
import { ArticleCard } from "./resources.index";

const p = pillars["longevity"];

export const Route = createFileRoute("/resources/longevity-prevention")({
  head: () =>
    pageHead({
      title: `${p.title} — Umbrella Health Resources`,
      description: p.description,
      path: `/resources/${p.slug}`,
      crumbs: [{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: p.title }],
    }),
  component: () => (
    <main>
      <PageHero
        eyebrow="Resources · Longevity"
        italic="Longevity &"
        title="prevention."
        description={p.description}
        image={p.image}
        imageAlt={p.title}
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: p.title }]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {articlesByPillar("longevity").map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.05}><ArticleCard article={a} /></Reveal>
            ))}
            {articlesByPillar("longevity").length === 0 && (
              <p className="text-sm text-muted-foreground">New articles coming soon.</p>
            )}
          </div>
        </Container>
      </section>
      <CTABanner />
    </main>
  ),
});
