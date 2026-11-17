import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/sortiment/sehen-fuehlen`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/sortiment/riechen`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/sortiment/schmecken`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/ueber-uns`, changeFrequency: "yearly", priority: 0.65 },
    { url: `${siteUrl}/kontakt`, changeFrequency: "yearly", priority: 0.75 },
    { url: `${siteUrl}/impressum`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/datenschutz`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
