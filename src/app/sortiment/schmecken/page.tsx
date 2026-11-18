import Image from "next/image";
import Link from "next/link";
import { SchmeckenPage } from "@/components/schmecken-page";
import { VisitSection } from "@/components/visit-section";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Kaffee, Tee & Schokolade in Dreieich",
  "Entdecke Kaffee, Espresso aus unserer Espressobar, Kräutertee, Schokolade, Gewürze und Pfälzer Latwerg bei FAHRGASSE 18 in Dreieichenhain.",
  "/sortiment/schmecken",
);

export default function SchmeckenRoute() {
  return (
    <>
      <SiteHeader />

      <main>
        <SchmeckenPage />
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
