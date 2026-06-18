import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { articles } from "@/data/articles";
import { pageHead } from "@/lib/page-head";

const article = articles.find((a) => a.slug === "cholesterol-panel-explained")!;

export const Route = createFileRoute("/resources/decoding-your-diagnostics/cholesterol-panel-explained")({
  head: () =>
    pageHead({
      title: `${article.title} — Umbrella Health`,
      description: article.excerpt,
      path: `/resources/decoding-your-diagnostics/${article.slug}`,
      type: "article",
      crumbs: [
        { label: "Home", to: "/" },
        { label: "Resources", to: "/resources" },
        { label: "Decoding Your Diagnostics", to: "/resources/decoding-your-diagnostics" },
        { label: article.title },
      ],
      extraSchema: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
        },
      ],
    }),
  component: () => <ArticlePage article={article} />,
});
