import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { pageHead } from "@/lib/page-head";
import { pillars, articles } from "@/data/articles";
import { IMG } from "@/data/images";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources/")({
  head: () =>
    pageHead({
      title: "Resources — Umbrella Health Learning Hub",
      description: "Plain-English health writing across diagnostics, longevity, and real-world health for busy professionals.",
      path: "/resources",
      crumbs: [{ label: "Home", to: "/" }, { label: "Resources" }],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        italic="Plain-English"
        title="health writing."
        description="From decoding biomarkers to thinking clearly about longevity — written by clinicians, for the people they actually treat."
        image={IMG.busyPro}
        imageAlt="Reading Umbrella resources"
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources" }]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading as="h2" eyebrow="Pillars" title="Three" accent="content pillars." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {Object.values(pillars).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  to={`/resources/${p.slug}` as "/resources/decoding-your-diagnostics"}
                  className="group block overflow-hidden rounded-3xl border border-border/60 bg-card transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Browse <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-28">
        <Container>
          <SectionHeading as="h2" eyebrow="Latest" title="Recent" accent="articles." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.05}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </main>
  );
}

export function ArticleCard({ article }: { article: typeof articles[number] }) {
  const pillar = pillars[article.pillar];
  return (
    <Link
      to={`/resources/${pillar.slug}/${article.slug}` as "/resources/decoding-your-diagnostics/cholesterol-panel-explained"}
      className="group block h-full overflow-hidden rounded-3xl border border-border/60 bg-card transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img src={article.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-primary/70">{pillar.title}</p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">{article.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <p className="mt-4 text-xs text-muted-foreground">{article.readTime}</p>
      </div>
    </Link>
  );
}
