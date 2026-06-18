import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { articles } from "@/data/articles";
import { pageHead } from "@/lib/page-head";

const article = articles.find((a) => a.slug === "glp1-what-to-expect")!;

export const Route = createFileRoute("/resources/busy-professionals/glp1-what-to-expect")({
  head: () =>
    pageHead({
      title: `${article.title} — Umbrella Health`,
      description: article.excerpt,
      path: `/resources/busy-professionals/${article.slug}`,
      type: "article",
      crumbs: [
        { label: "Home", to: "/" },
        { label: "Resources", to: "/resources" },
        { label: "Busy Professionals", to: "/resources/busy-professionals" },
        { label: article.title },
      ],
      extraSchema: [
        { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt },
      ],
    }),
  component: () => <ArticlePage article={article} />,
});
