import type { Crumb } from "@/components/site/PageHero";

interface HeadOpts {
  title: string;
  description: string;
  path: string;
  type?: string;
  crumbs?: Crumb[];
  extraSchema?: object[];
}

export function pageHead({
  title,
  description,
  path,
  type = "website",
  crumbs,
  extraSchema = [],
}: HeadOpts) {
  const scripts: { type: string; children: string }[] = [];

  if (crumbs && crumbs.length > 0) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          item: c.to ?? path,
        })),
      }),
    });
  }

  for (const s of extraSchema) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(s),
    });
  }

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts,
  };
}
