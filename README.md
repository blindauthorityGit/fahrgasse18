# FAHRGASSE 18

Website-Grundlage mit Next.js App Router, Sanity Studio, Motion for React und GSAP ScrollTrigger.

## Lokal starten

```powershell
npm install
Copy-Item .env.local.example .env.local
npm run dev
```

Die Website läuft unter `http://localhost:3000`, das eingebettete Sanity Studio unter `http://localhost:3000/studio`.

## Sanity verbinden

1. Ein Sanity-Projekt und ein Dataset anlegen.
2. In `.env.local` `NEXT_PUBLIC_SANITY_PROJECT_ID` durch die Projekt-ID ersetzen und das gewünschte Dataset setzen.
3. In Sanity die lokale Studio-Origin erlauben und mit `npx sanity@latest login` anmelden.
4. Studio unter `/studio` öffnen und Inhalte in den Dokumenttypen **Seite** und **Seiteneinstellungen** pflegen.

Die Inhalte werden noch nicht automatisch aus Sanity auf den öffentlichen Seiten geladen. Die Verbindung, das eingebettete Studio und erste Schemas sind vorbereitet; als nächster Schritt folgen GROQ-Abfragen und die Überführung der Figma-Inhalte und Medien in Sanity.

## Designregeln

`DESIGN.md` ist die visuelle Referenz für die Umsetzung. Die zentralen Farb- und Schriftrollen liegen in `src/app/tokens.css`; responsive Grundstile sind in `src/app/globals.css` definiert.

## Animation

- `motion` (Import aus `motion/react`) für kleine UI- und Eintrittsanimationen.
- `gsap`, `@gsap/react` und `ScrollTrigger` für scrollgebundene Sequenzen und Parallax. Die wiederverwendbare Komponente `src/components/parallax-media.tsx` ist dafür vorbereitet.
- Animationen beachten `prefers-reduced-motion`.

## Befehle

```bash
npm run dev
npm run build
npm run start
npm run lint
```
