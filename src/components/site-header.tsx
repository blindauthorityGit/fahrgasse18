import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="FAHRGASSE 18 – Startseite">
        <Image src="/images/logo.svg" alt="FAHRGASSE 18 – Geschenke für alle Sinne" width={158} height={88} priority />
      </Link>
      <nav className="main-nav" aria-label="Hauptnavigation">
        <details className="nav-dropdown">
          <summary aria-haspopup="true">Sortiment <span aria-hidden="true" /></summary>
          <div className="nav-dropdown-menu">
            <Link href="/sortiment/sehen-fuehlen">Sehen &amp; Fühlen</Link>
            <Link href="/sortiment/riechen">Riechen</Link>
            <Link href="/sortiment/schmecken">Schmecken</Link>
          </div>
        </details>
        <Link href="/ueber-uns">Über uns</Link>
        <Link className="nav-contact" href="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}
