import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/specialties", changefreq: "monthly", priority: "0.9" },
  { path: "/specialties/primary-care", changefreq: "monthly", priority: "0.8" },
  { path: "/specialties/cardiology-vascular", changefreq: "monthly", priority: "0.8" },
  { path: "/specialties/neurology", changefreq: "monthly", priority: "0.7" },
  { path: "/specialties/sleep-medicine", changefreq: "monthly", priority: "0.7" },
  { path: "/specialties/pain-management", changefreq: "monthly", priority: "0.7" },
  { path: "/diagnostics", changefreq: "monthly", priority: "0.9" },
  { path: "/diagnostics/imaging-cardiac", changefreq: "monthly", priority: "0.7" },
  { path: "/diagnostics/sleep-pulmonary", changefreq: "monthly", priority: "0.7" },
  { path: "/diagnostics/biomarkers", changefreq: "monthly", priority: "0.7" },
  { path: "/diagnostics/autonomic-testing", changefreq: "monthly", priority: "0.6" },
  { path: "/diagnostics/cancer-screening", changefreq: "monthly", priority: "0.7" },
  { path: "/diagnostics/allergy-testing", changefreq: "monthly", priority: "0.6" },
  { path: "/diagnostics/sample-report", changefreq: "monthly", priority: "0.7" },
  { path: "/weight-loss-glp1", changefreq: "weekly", priority: "0.9" },
  { path: "/longevity", changefreq: "monthly", priority: "0.9" },
  { path: "/longevity/executive-physicals", changefreq: "monthly", priority: "0.7" },
  { path: "/longevity/healthspan-programs", changefreq: "monthly", priority: "0.7" },
  { path: "/longevity/hormone-optimization", changefreq: "monthly", priority: "0.7" },
  { path: "/longevity/waitlist", changefreq: "monthly", priority: "0.6" },
  { path: "/our-physicians", changefreq: "monthly", priority: "0.8" },
  { path: "/employers", changefreq: "monthly", priority: "0.8" },
  { path: "/insurance", changefreq: "monthly", priority: "0.8" },
  { path: "/reviews", changefreq: "weekly", priority: "0.6" },
  { path: "/resources", changefreq: "weekly", priority: "0.7" },
  { path: "/resources/decoding-your-diagnostics", changefreq: "weekly", priority: "0.6" },
  { path: "/resources/decoding-your-diagnostics/cholesterol-panel-explained", changefreq: "yearly", priority: "0.5" },
  { path: "/resources/longevity-prevention", changefreq: "weekly", priority: "0.6" },
  { path: "/resources/busy-professionals", changefreq: "weekly", priority: "0.6" },
  { path: "/resources/busy-professionals/glp1-what-to-expect", changefreq: "yearly", priority: "0.5" },
  { path: "/resources/busy-professionals/sleep-debt-guide", changefreq: "yearly", priority: "0.5" },
  { path: "/refer-a-friend", changefreq: "monthly", priority: "0.5" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/visit-us", changefreq: "monthly", priority: "0.7" },
  { path: "/portal", changefreq: "yearly", priority: "0.3" },
  { path: "/locations", changefreq: "monthly", priority: "0.7" },
  { path: "/locations/union-square", changefreq: "monthly", priority: "0.6" },
  { path: "/locations/tribeca-fidi", changefreq: "monthly", priority: "0.6" },
  { path: "/locations/soho", changefreq: "monthly", priority: "0.6" },
  { path: "/locations/brooklyn", changefreq: "monthly", priority: "0.6" },
  { path: "/careers", changefreq: "monthly", priority: "0.4" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/hipaa-accessibility", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
