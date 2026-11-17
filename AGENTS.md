# Projektregeln

- Vor Design- oder UI-Änderungen zuerst [DESIGN.md](./DESIGN.md) lesen und als visuelle Leitlinie verwenden.
- Globale Farben, Typografie-Rollen und Inhaltsbreiten zentral in `src/app/tokens.css` pflegen. Komponenten sollen vorhandene Tokens verwenden.
- Adobe Fonts Kit `https://use.typekit.net/lpclpws.css` laden. Display-Headlines verwenden `dm-serif-display`; Fließtext und UI verwenden `dm-sans`. `dm-serif-text` nur für passende Serifentext-Einsätze verwenden.
- Server Components sind der Standard. Client Components nur für interaktive UI und Animationen einsetzen.
- Motion aus `motion/react` für komponentennahe UI-Animationen verwenden. GSAP mit ScrollTrigger für komplexe, an den Scroll-Fortschritt gebundene Animationen und Parallax einsetzen.
- Scrollanimationen müssen `prefers-reduced-motion` respektieren. Nichts darf das natürliche Scrollen blockieren.
- Sanity-Schemas liegen in `sanity/schemaTypes.ts`; Sanity Studio ist unter `/studio` eingebettet. Zugangsdaten und Projekt-ID ausschließlich über Umgebungsvariablen konfigurieren.
- Für Next.js APIs die installierte Dokumentation unter `node_modules/next/dist/docs/` oder die offiziellen Docs der passenden Version prüfen.
