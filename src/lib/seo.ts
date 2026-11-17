import type { Metadata } from "next";

export const siteUrl = "https://fahrgasse18.de";
const shareImage = "/images/contact-shop.jpg";

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
      images: [{ url: shareImage, width: 2048, height: 1229, alt: "Der Eingang von FAHRGASSE 18 in Dreieichenhain" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: shareImage, alt: "Der Eingang von FAHRGASSE 18 in Dreieichenhain" }],
    },
  };
}
