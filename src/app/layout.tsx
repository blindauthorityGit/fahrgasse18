import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FAHRGASSE 18 – nachhaltig schenken",
    template: "%s | FAHRGASSE 18",
  },
  description: "Entdecke nachhaltige Geschenke, fair produzierte Lieblingsstücke und feine Genussideen im Herzen von Dreieichenhain.",
  applicationName: "FAHRGASSE 18",
  creator: "FAHRGASSE 18",
  publisher: "FAHRGASSE 18",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "FAHRGASSE 18",
    title: "FAHRGASSE 18 – nachhaltig schenken",
    description: "Nachhaltige Geschenke, besondere Lieblingsstücke und feine Genussideen aus Dreieichenhain.",
    url: "/",
    images: [{ url: "/images/contact-shop.jpg", width: 2048, height: 1229, alt: "Der Eingang von FAHRGASSE 18 in Dreieichenhain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAHRGASSE 18 – nachhaltig schenken",
    description: "Nachhaltige Geschenke, besondere Lieblingsstücke und feine Genussideen aus Dreieichenhain.",
    images: ["/images/contact-shop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lpclpws.css" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "@id": `${siteUrl}/#store`,
              name: "FAHRGASSE 18",
              alternateName: "FAHRGASSE 18 – nachhaltig schenken",
              legalName: "FAHRGASSE 18 Nachhaltigkeitsgesellschaft mbH",
              url: siteUrl,
              logo: `${siteUrl}/images/logo.svg`,
              image: `${siteUrl}/images/contact-shop.jpg`,
              description: "Ein liebevoll kuratierter Geschenkeladen mit nachhaltigen Produkten, Taschen, Naturkosmetik, Kaffee, Tee und Schokolade in Dreieichenhain.",
              telephone: "+49-6103-9883740",
              email: "info@fahrgasse18.de",
              founder: { "@type": "Person", name: "Anja Spiegel" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Fahrgasse 18",
                addressLocality: "Dreieich",
                addressRegion: "Hessen",
                postalCode: "63303",
                addressCountry: "DE",
              },
              geo: { "@type": "GeoCoordinates", latitude: 50.0000492, longitude: 8.713466 },
              hasMap: "https://www.openstreetmap.org/?mlat=50.0000492&mlon=8.713466#map=18/50.0000492/8.713466",
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday", "Friday"], opens: "10:00", closes: "13:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday", "Friday"], opens: "15:00", closes: "18:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              url: siteUrl,
              name: "FAHRGASSE 18",
              inLanguage: "de-DE",
              publisher: { "@id": `${siteUrl}/#store` },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
