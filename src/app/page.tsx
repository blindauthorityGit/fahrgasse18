import Image from "next/image";
import Link from "next/link";
import { HeroScene } from "@/components/hero-scene";
import { SenseSection } from "@/components/sense-section";
import { AboutTeaser } from "@/components/about-teaser";
import { VisitSection } from "@/components/visit-section";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Nachhaltige Geschenke in Dreieich",
  "Entdecke besondere, nachhaltige Geschenke, Taschen, Naturkosmetik und feine Genussideen bei FAHRGASSE 18 in Dreieichenhain.",
  "/",
);

const senses = [
  {
    title: "Sehen & Fühlen",
    subtitle: "Dinge die man gerne in der Hand hat",
    description:
      "Taschen mit Charakter, besondere Accessoires und kleine Alltagsbegleiter, die auffallen und Freude machen.",
    image: "/images/sense-sehen.jpg",
    alt: "Frau mit Tasche auf einem Feldweg",
    href: "/sortiment/sehen-fuehlen",
  },
  {
    title: "Riechen",
    subtitle: "Kleine Auszeiten zum Verschenken.",
    description:
      "Duftende Seifen und ausgewählte Pflegeideen für ein bisschen Verwöhnzeit zwischendurch.",
    image: "/images/sense-riechen.jpg",
    alt: "Ausgewählte Seifen und Pflegeprodukte im Laden",
    href: "/sortiment/riechen",
  },
  {
    title: "Schmecken",
    subtitle: "Genuss, der Freude macht.",
    description:
      "Schokolade, Kaffee, Tee, Gewürze und feine Spezialitäten für alle, die gute Kleinigkeiten zu schätzen wissen.",
    image: "/images/sense-schmecken.jpg",
    alt: "Handgemachte Schokolade und Kakaopulver",
    href: "/sortiment/schmecken",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <HeroScene />

        <SenseSection senses={senses} />

        <AboutTeaser />

        <VisitSection />
      </main>

      <footer className="site-footer">
        <Link className="footer-brand" href="/" aria-label="FAHRGASSE 18 – Startseite">
          <Image src="/images/logo.svg" alt="" width={112} height={62} />
        </Link>
        <div className="footer-grid content-wrap">
          <div>
            <h2>Kontakt:</h2>
            <p>Fahrgasse 18<br />63303 Dreieich</p>
            <a href="tel:+4961039883740">06103 – 988 37 40</a>
            <a href="mailto:info@fahrgasse18.de">info@fahrgasse18.de</a>
          </div>
          <div>
            <h2>Öffnungszeiten:</h2>
            <dl>
              <div><dt>Donnerstag–Freitag:</dt><dd>10–13 / 15–18 Uhr</dd></div>
            <div><dt>Samstag:</dt><dd>10–16 Uhr</dd></div>
            </dl>
          </div>
          <div>
            <h2>Links:</h2>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
