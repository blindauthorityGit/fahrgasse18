"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="FAHRGASSE 18 – Startseite" onClick={closeMobileMenu}>
        <Image src="/images/logo.svg" alt="FAHRGASSE 18 – Geschenke für alle Sinne" width={158} height={88} priority />
      </Link>
      <button
        className={`menu-toggle${mobileMenuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={mobileMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="primary-navigation" className={`main-nav${mobileMenuOpen ? " is-open" : ""}`} aria-label="Hauptnavigation">
        <details className="nav-dropdown">
          <summary aria-haspopup="true">Sortiment <span aria-hidden="true" /></summary>
          <div className="nav-dropdown-menu">
            <Link href="/sortiment/sehen-fuehlen" onClick={closeMobileMenu}>Sehen &amp; Fühlen</Link>
            <Link href="/sortiment/riechen" onClick={closeMobileMenu}>Riechen</Link>
            <Link href="/sortiment/schmecken" onClick={closeMobileMenu}>Schmecken</Link>
          </div>
        </details>
        <Link href="/ueber-uns" onClick={closeMobileMenu}>Über uns</Link>
        <Link className="nav-contact" href="/kontakt" onClick={closeMobileMenu}>Kontakt</Link>
      </nav>
    </header>
  );
}
