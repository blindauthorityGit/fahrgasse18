import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Datenschutzerklärung",
  "Informationen zum Datenschutz bei FAHRGASSE 18: Hosting mit Vercel, Vercel Web Analytics, Adobe Fonts und OpenStreetMap.",
  "/datenschutz",
);

export default function DatenschutzRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="datenschutz-page">
          <header className="datenschutz-hero content-wrap">
            <h1>Datenschutzerklärung</h1>
            <p>Hier erfahren Sie, welche personenbezogenen Daten beim Besuch unserer Website verarbeitet werden und welche Rechte Sie haben.</p>
          </header>

          <article className="datenschutz-content content-wrap">
            <section id="verantwortliche" className="datenschutz-section">
              <div>
                <h2>Verantwortliche Stelle</h2>
                <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:</p>
                <address>
                  FAHRGASSE 18 Nachhaltigkeitsgesellschaft mbh<br />
                  GFin Anja Spiegel<br />
                  Fahrgasse 18<br />
                  63303 Dreieich-Dreieichenhain
                </address>
                <p>
                  Telefon: <a href="tel:+4961039883740">06103-9883740</a><br />
                  E-Mail: <a href="mailto:info@fahrgasse18.de">info@fahrgasse18.de</a>
                </p>
              </div>
            </section>

            <section id="hosting" className="datenschutz-section">
              <div>
                <h2>Hosting und Serverprotokolle</h2>
                <p>Diese Website wird über Vercel Inc. bereitgestellt. Wenn Sie die Website aufrufen, verarbeitet Vercel technische Verbindungsdaten, die für die Auslieferung, Stabilität und Sicherheit erforderlich sind. Dazu können insbesondere Ihre IP-Adresse, Zeitpunkt und Ziel des Aufrufs, Referrer sowie Angaben zu Browser, Betriebssystem und Gerät gehören.</p>
                <p>Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einem sicheren und zuverlässigen Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO). Die konkrete Speicherung technischer Protokolle richtet sich nach den Vercel-Einstellungen und den für unser Projekt geltenden Vertragsbedingungen.</p>
                <p>Vercel betreibt eine globale Infrastruktur; eine Verarbeitung außerhalb der EU/des EWR kann daher nicht ausgeschlossen werden. Welche Übermittlungsgrundlagen und Schutzmaßnahmen für unser Projekt gelten, ergibt sich aus den jeweils geltenden Vereinbarungen. Weitere Informationen finden Sie in der <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Vercel-Datenschutzerklärung</a> und im <a href="https://vercel.com/legal/dpa" target="_blank" rel="noreferrer">Vercel Data Processing Addendum</a>.</p>
              </div>
            </section>

            <section id="analytics" className="datenschutz-section">
              <div>
                <h2>Vercel Web Analytics</h2>
                <p>Wir verwenden Vercel Web Analytics, um die Nutzung unserer Website in zusammengefasster Form auszuwerten und unser Angebot zu verbessern. Dabei können insbesondere aufgerufene Seiten und URLs, Referrer, Zeitpunkt des Aufrufs, grobe Standortdaten sowie Browser-, Betriebssystem- und Gerätetyp verarbeitet werden. Wir senden keine eigenen Analytics-Ereignisse.</p>
                <p>Vercel Analytics setzt nach Angaben des Anbieters keine Cookies ein. Zur Bildung einer kurzlebigen Besucherkennung wird ein Hash aus der eingehenden Anfrage gebildet; dieser wird nach 24 Stunden verworfen. Vercel beschreibt die Auswertung als anonymisiert und aggregiert. Rechtsgrundlage ist unser berechtigtes Interesse an der nutzungsbezogenen Verbesserung der Website (Art. 6 Abs. 1 lit. f DSGVO).</p>
                <p>Mehr dazu erfahren Sie in den <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noreferrer">Datenschutzinformationen zu Vercel Web Analytics</a>.</p>
              </div>
            </section>

            <section id="fonts" className="datenschutz-section">
              <div>
                <h2>Adobe Fonts</h2>
                <p>Für die einheitliche Darstellung der Schriftarten laden wir Adobe Fonts. Dabei stellt Ihr Browser eine Verbindung zu Servern von Adobe her, insbesondere zu <code>use.typekit.net</code>. Adobe erhält dabei die IP-Adresse, um die Schriftdateien auszuliefern, sowie technische Angaben zum verwendeten Webfont-Projekt und zur aufrufenden Website.</p>
                <p>Adobe gibt an, die IP-Adresse für die Fontauslieferung zu empfangen, aber nicht zu speichern. Für die Auslieferung von Webfonts setzt Adobe nach eigenen Angaben keine Cookies. Rechtsgrundlage ist unser berechtigtes Interesse an einer ansprechenden und einheitlichen Darstellung unseres Internetauftritts (Art. 6 Abs. 1 lit. f DSGVO).</p>
                <p>Weitere Informationen: <a href="https://www.adobe.com/privacy/policies/adobe-fonts.html" target="_blank" rel="noreferrer">Datenschutzinformationen zu Adobe Fonts</a>.</p>
              </div>
            </section>

            <section id="maps" className="datenschutz-section">
              <div>
                <h2>OpenStreetMap</h2>
                <p>Auf unserer Kontaktseite binden wir eine Karte von OpenStreetMap ein. Beim Aufruf der Kontaktseite wird die Karte von Servern der OpenStreetMap Foundation (OSMF) geladen. Dabei wird eine direkte Verbindung zwischen Ihrem Browser und OSMF hergestellt. Übermittelt werden können insbesondere IP-Adresse, Browser- und Geräteinformationen, Betriebssystem, Referrer sowie Zeitpunkt und aufgerufener Karteninhalt.</p>
                <p>Die Einbindung dient dazu, unseren Standort zu zeigen und die Anfahrt zu erleichtern. Rechtsgrundlage ist unser berechtigtes Interesse an einer hilfreichen Darstellung unseres Ladenstandorts (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen finden Sie in der <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noreferrer">Datenschutzerklärung der OpenStreetMap Foundation</a>.</p>
              </div>
            </section>

            <section id="kontakt" className="datenschutz-section">
              <div>
                <h2>Kontaktaufnahme</h2>
                <p>Auf dieser Website gibt es kein Kontaktformular. Wenn Sie uns telefonisch oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Angaben, um Ihre Anfrage zu bearbeiten und gegebenenfalls Anschlussfragen zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn es um vorvertragliche Anliegen geht, ansonsten unser berechtigtes Interesse an der Beantwortung Ihrer Nachricht (Art. 6 Abs. 1 lit. f DSGVO).</p>
                <p>Wir löschen die Angaben, sobald Ihre Anfrage abschließend bearbeitet ist, sofern keine gesetzlichen Aufbewahrungspflichten bestehen und keine weitere Speicherung zur Wahrung unserer Rechte erforderlich ist. Die E-Mail-Übertragung erfolgt über die von Ihnen verwendeten E-Mail-Anbieter.</p>
              </div>
            </section>

            <section id="cookies" className="datenschutz-section">
              <div>
                <h2>Cookies und externe Dienste</h2>
                <p>Wir setzen auf dieser Website keine eigenen Werbe- oder Marketing-Cookies ein. Vercel Web Analytics und Adobe Fonts verwenden nach den oben verlinkten Anbieterinformationen keine Cookies für die beschriebenen Funktionen. Die OpenStreetMap-Karte wird als externer Inhalt geladen; dabei gelten zusätzlich die Datenschutzinformationen der OpenStreetMap Foundation.</p>
              </div>
            </section>

            <section id="rechte" className="datenschutz-section datenschutz-rights">
              <div>
                <h2>Ihre Rechte</h2>
                <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft über Ihre personenbezogenen Daten sowie auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Soweit wir Daten auf Grundlage berechtigter Interessen verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch einlegen. Wenn eine Verarbeitung ausnahmsweise auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                <p>Zur Ausübung Ihrer Rechte genügt eine Nachricht an <a href="mailto:info@fahrgasse18.de">info@fahrgasse18.de</a>. Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für Hessen ist dies der <a href="https://datenschutz.hessen.de/service/beschwerde-uebermitteln" target="_blank" rel="noreferrer">Hessische Beauftragte für Datenschutz und Informationsfreiheit</a>.</p>
                <p>Eine automatisierte Entscheidungsfindung einschließlich Profiling findet auf dieser Website nicht statt.</p>
              </div>
            </section>

            <p className="datenschutz-updated">Stand: November 2026</p>
          </article>
        </div>
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
