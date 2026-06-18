import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import type { Article } from "@/data/articles";
import { pillars } from "@/data/articles";

export function ArticlePage({ article }: { article: Article }) {
  const p = pillars[article.pillar];
  return (
    <main>
      <PageHero
        eyebrow={`Resources · ${p.title}`}
        title={article.title}
        description={article.excerpt}
        image={article.image}
        imageAlt={article.title}
        tone="mint"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/resources" },
          { label: p.title, to: `/resources/${p.slug}` },
          { label: article.title },
        ]}
      />
      <section className="py-20 sm:py-28">
        <Container size="sm">
          <Reveal>
            <p className="text-xs text-muted-foreground">{article.readTime}</p>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-foreground/85">
              {article.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
      <CTABanner />
    </main>
  );
}
