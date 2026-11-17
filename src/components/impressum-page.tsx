export function ImpressumPage() {
  return (
    <div className="impressum-page">
      <header className="impressum-hero content-wrap" aria-labelledby="impressum-title">
        <div className="impressum-hero-copy">
          <h1 id="impressum-title">Impressum</h1>
          <p>FAHRGASSE 18 Nachhaltigkeitsgesellschaft mbh – GFin Anja Spiegel</p>
        </div>
      </header>

      <div className="impressum-content content-wrap">
        <section className="impressum-block impressum-company" aria-labelledby="impressum-company-title">
          <div>
            <h2 id="impressum-company-title">FAHRGASSE 18</h2>
          </div>
          <div className="impressum-details">
            <address>Fahrgasse 18<br />63303 Dreieich-Dreieichenhain</address>
            <p>
              Telefon: <a href="tel:+4961039883740">06103-9883740</a><br />
              Mobil: <a href="tel:+491632831501">0163-2831501</a><br />
              E-Mail: <a href="mailto:info@fahrgasse18.de">info@fahrgasse18.de</a>
            </p>
            <p>USt-IdNr.: DE344391688</p>
          </div>
        </section>

        <section className="impressum-block impressum-hours" aria-labelledby="impressum-hours-title">
          <div>
            <h2 id="impressum-hours-title">Öffnungszeiten</h2>
          </div>
          <dl>
            <div><dt>Donnerstag–Freitag</dt><dd>10–13 Uhr / 15–18 Uhr</dd></div>
            <div><dt>Samstag</dt><dd>10–16 Uhr</dd></div>
          </dl>
        </section>

        <section className="impressum-block impressum-credits" aria-labelledby="impressum-credits-title">
          <div>
            <h2 id="impressum-credits-title">Bildnachweis &amp; Copyright</h2>
          </div>
          <div className="impressum-details">
            <p>Eigene Aufnahmen von Julia Spiegel und Alexander zur Nieden sowie freigegebene Bilder der Hersteller.</p>
            <p><strong>© 2022</strong><br />Alle auf dieser Webseite vorhandenen Bilder, Grafiken, Texte und andere Inhalte unterliegen dem Copyright beziehungsweise sind urheberrechtlich geschützt. Die Verwendung ist nicht gestattet.</p>
          </div>
        </section>

        <section className="impressum-block impressum-production" aria-labelledby="impressum-production-title">
          <div>
            <h2 id="impressum-production-title">Konzeption &amp; Betrieb</h2>
          </div>
          <div className="impressum-details">
            <p>Webdesign: Sabocon GmbH</p>
          </div>
        </section>
      </div>
    </div>
  );
}
