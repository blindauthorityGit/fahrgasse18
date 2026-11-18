import type { Metadata } from "next";

export const siteUrl = "https://fahrgasse18.de";
const shareImage = "/images/open-graph.png";

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  const fullTitle = `${title} | FAHRGASSE 18`;
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: "FAHRGASSE 18",
      title: fullTitle,
      description,
      url: pathname,
      images: [{ url: shareImage, width: 1200, height: 630, alt: "FAHRGASSE 18 – Geschenke für alle Sinne" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: shareImage, alt: "FAHRGASSE 18 – Geschenke für alle Sinne" }],
    },
  };
}
