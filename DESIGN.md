# Designregeln - FAHRGASSE 18

Dieses Dokument fasst die sichtbaren Gestaltungsregeln des Desktop-Entwurfs zusammen. Es dient als Leitlinie für die Umsetzung und lässt bewusst Spielraum bei Details, die nicht systematisch im Entwurf festgelegt sind.

## Referenz und Umfang

- Referenz: [Figma-Datei](https://www.figma.com/design/jSmBlgQ11spLU3wMwx0e4L/fashrgasse18?node-id=29-2) und das begleitende PDF `Design/fashrgasse18.pdf`.
- Die vorliegenden Entwürfe sind für eine Arbeitsfläche von **1440 px Breite** angelegt.
- Enthalten sind eine Startseite, die drei Sortimentsseiten **Sehen & Fühlen**, **Riechen** und **Schmecken**, eine **Über-uns-Seite** sowie eine Kontaktseite.
- Die Angaben zu Farben und Größen sind aus dem PDF abgeleitete Referenzwerte. Sie sind als verlässliche Richtwerte zu verstehen, nicht als starre Pixelvorgaben.
- Mobile und Tablet-Layouts sind in diesen Referenzen nicht definiert. Das Desktop-Raster muss für kleinere Viewports neu angeordnet werden.

## Gestalterische Leitidee

Die Website soll sich wie ein liebevoll kuratierter, lokaler Geschenkeladen anfühlen: warm, persönlich, naturverbunden und hochwertig, ohne kühl oder luxuriös zu wirken. Große redaktionelle Headlines geben den Seiten Charakter; echte Produkt- und Ladenfotografie macht das Sortiment greifbar. Die Gestaltung bleibt ruhig und großzügig, mit wenigen, gezielt eingesetzten Akzentfarben.

## Farben

Die folgenden Werte stammen aus den im PDF verwendeten Flächenfarben:

| Rolle | Wert | Verwendung |
| --- | --- | --- |
| Waldgrün | `#284737` | Primäre Headlines, Fließtext, dunkle Flächen und Footer |
| Terrakotta | `#C16C49` | Hervorgehobene Wörter, kurze Unterstreichungen, aktive Navigation und Akzente |
| Warmes Weiß | `#F7F3EA` | Helle Inhaltsflächen und Karten |
| Helles Beige | `#EEE9DD` | Grundfläche und wechselnde Abschnittshintergründe |
| Sand | `#DCD4BC` | Feine Trenner und zurückhaltende Konturen |
| Gedämpftes Oliv | `#72866A` | Seltener unterstützender Naturakzent |

**Anwendung:** Waldgrün und Terrakotta bilden das wiedererkennbare Paar. Terrakotta bleibt sparsam und markiert Bedeutung statt große Textmengen zu tragen. Helle Hintergründe dürfen zwischen warmem Weiß und Beige wechseln, um lange Seiten in ruhige Abschnitte zu gliedern. Reines Schwarz ist im Entwurf keine tragende Textfarbe.

## Typografie

Die Vorlage kombiniert **DM Serif Display** für charaktervolle, überwiegend kursive Headlines mit **DM Sans** für gut lesbare Navigation, Text und Metadaten. Für ausgewählte Serifentext-Einsätze ist außerdem **DM Serif Text** im Adobe Fonts Kit enthalten. Headlines erscheinen meist in Waldgrün; einzelne Zeilen oder Wörter wechseln zu Terrakotta. Sortimentsnamen und Kartentitel nutzen DM Serif Display ebenfalls, jedoch deutlich kleiner.

| Einsatz | Richtwert bei 1440 px | Stil |
| --- | ---: | --- |
| Hero-Headline | ca. 96 px | Serif, kräftig, kursiv, eng gesetzte Zeilen |
| Abschnittsheadline | ca. 64 px | Serif, kräftig, kursiv |
| Große Seitentitel / Kartenheadline | ca. 36 px | Serif, kräftig, kursiv |
| Fließtext | ca. 16 px | Sans Serif, normal, großzügige Zeilenhöhe |
| Kleine Beschreibung / Navigation / CTA | ca. 14 px | Sans Serif; Navigation und CTAs oft in Versalien |

Die Schriften werden über das Adobe Fonts Kit `https://use.typekit.net/lpclpws.css` geladen. Display-Headlines verwenden `dm-serif-display` mit normalem Schnitt und kursivem Stil; Fließtext nutzt `dm-sans`. Größen auf kleineren Bildschirmen proportional reduzieren; Lesbarkeit geht vor der Desktop-Punktgröße.

## Layout und Abstände

- Den Entwurf als **breite, zentrierte Desktop-Komposition** behandeln. Auf der Startseite liegen die Außenränder bei 1440 px grob um 100 px; andere Inhaltsbereiche variieren leicht.
- Für reguläre Inhaltsbereiche ist ein flexibler Maximalbereich von ungefähr **1200-1240 px** ein guter Ausgangspunkt. Nicht jede Sektion muss dieselbe Breite nutzen: die Vorlage wechselt zwischen breiten Bildflächen und eingerückten Text-/Bildgruppen.
- Großzügige vertikale Abstände sind ein wesentlicher Teil des Eindrucks. Hero, Sortimentskarten, redaktionelle Abschnitte und Kontaktbereich sollen klar voneinander getrennt bleiben.
- Zweispaltige Inhaltsblöcke verwenden ungefähr gleichwertige Text- und Bildbereiche. Bild und Text können je nach Abschnitt die Seite wechseln.
- Auf den Sortimentsseiten alternieren Text und Bild von Reihe zu Reihe. Dezente horizontale Linien trennen zusammengehörige Produktgeschichten, wenn der Hintergrund gleich bleibt.
- Größere Hintergrundwechsel strukturieren lange Seiten in zusammengehörige Kapitel. Die Trennung soll weich und flächig wirken, nicht wie ein enges Kartenraster.
- Im Footer stehen drei Informationsgruppen nebeneinander; das Logo sitzt mittig am Übergang zwischen Inhaltsfläche und dunklem Footer.

## Bildsprache und Formen

- Vorrang haben authentische Bilder des Ladens, der Produkte und ihrer Nutzung. Die Fotografie ist warm, natürlich und leicht editorial; die Bilder sollen ein Sortiment und eine Geschichte vermitteln, nicht wie generische Stockbilder wirken.
- Bilder sind großzügig dimensioniert. Produktgeschichten nutzen meist ein großes Bild neben einem passenden Textblock; auf der Startseite bilden drei Bildkarten einen Überblick über die Sinneswelten.
- Bildausschnitte dürfen variieren, sollen aber Motive bewusst zeigen. Geeignete `object-fit: cover`-Ausschnitte festlegen, statt wichtige Produktdetails zufällig abzuschneiden.
- Charakteristisch sind **asymmetrisch gerundete Ecken**: oft ist eine Ecke deutlich stärker gerundet oder zwei diagonal gegenüberliegende Ecken. Keine pauschal gleichmäßig pillenförmigen Bildkacheln verwenden.
- Die Startseitenkarten haben ruhig gerundete Außenkanten; Bild und Text bleiben als zusammengehörige Karte erkennbar.
- Zarte handgezeichnete Illustrationen erscheinen als ergänzende Dekoration in den Kopfbereichen der Sortimentsseiten. Sie bleiben hell und zurückhaltend, damit Titel und Produktfotografie dominieren.

## Seitentypen und wiederkehrende Bereiche

### Kopfzeile

- Logo links, Navigation rechts, auf heller Fläche.
- Navigation klein, in Versalien und mit deutlichem Abstand zwischen den Punkten.
- Der aktive bzw. hervorgehobene Navigationspunkt kann Terrakotta verwenden; die übrigen Links bleiben dunkelgrün.
- Die Kopfzeile soll präsent, aber gegenüber den großen Headlines visuell leise sein.

### Startseite

- Hero mit großer mehrzeiliger Headline links und einer asymmetrischen Bildkomposition rechts.
- Die Hauptaussage kann gezielt zwischen Waldgrün und Terrakotta wechseln.
- Danach folgt eine redaktionelle Überschrift mit drei gleichwertigen Karten für **Sehen & Fühlen**, **Riechen** und **Schmecken**.
- Eine Laden-/Über-uns-Sektion kombiniert ein großes Foto mit Text auf kontrastierend heller Fläche.
- Der Kontaktteaser nutzt wieder die zweispaltige Komposition aus mehrzeiliger Headline, Adresse/Öffnungszeiten und Ladenfoto.

### Sortimentsseiten

- Große Seitentitel und blasse, lineare Themenillustrationen eröffnen die Seite.
- Produkte und Marken werden als wiederholte redaktionelle Reihen aus Bild, Titel und erklärendem Text erzählt.
- Text und Bild wechseln regelmäßig die Seite; Reihen dürfen in Höhe und Inhalt variieren.
- Hintergrundfarben wechseln abschnittsweise zwischen Beige und Warmweiß.
- Am Seitenende folgt der gemeinsame Kontaktteaser und anschließend der Footer.

### Kontaktseite

- Große, links ausgerichtete Headline; zentrale Besuchsinformationen und Öffnungszeiten in klaren Gruppen.
- Rechts steht eine große, terrakottafarbene Kartenfläche als Platzhalter für den Karten-/Standortinhalt.
- Die Kontaktseite teilt Kopfzeile und Footer mit den übrigen Seiten.

### Über-uns-Seite

- Eine große, redaktionelle Headline führt in die Geschichte und Haltung des Ladens ein.
- Textabschnitte werden durch großzügige Laden- und Sortimentsfotografie ergänzt; die Bilder dürfen als abwechslungsreiche Collage statt als streng gleichförmige Produktreihe angeordnet sein.
- Helle Flächen und die vertraute Kombination aus Waldgrün und Terrakotta halten die Seite mit den übrigen Seitentypen zusammen.

### Footer

- Durchgehende Waldgrünfläche mit hellen Texten und Markenlogo mittig am oberen Rand.
- Drei Spalten: Kontakt, Öffnungszeiten und rechtliche Links.
- Kleine Schrift bleibt gut lesbar; Links sollen als Links erkennbar und erreichbar sein.

## Interaktion und Umsetzung

- Links und CTAs wirken ruhig und eindeutig; kurze, feine Akzente wie Unterstreichungen können Terrakotta verwenden.
- Hover-, Fokus- und aktive Zustände sollen die Farbwelt nutzen und ausreichend erkennbar sein. Tastaturfokus nicht zugunsten der Optik entfernen.
- Inhalte sollen responsiv umfließen: zweispaltige Reihen auf schmalen Screens stapeln, Karten in eine passende ein- oder zweispaltige Anordnung überführen und Außenabstände an die Viewportbreite anpassen.
- Die Referenz definiert keine verbindlichen Breakpoints, Interaktionsanimationen oder exakten Abstands-Token. Diese Details dürfen bei der Umsetzung passend zum vorhandenen Frontend festgelegt werden, solange der ruhige Rhythmus und die Hierarchie erhalten bleiben.

## Kurzcheck für neue Bereiche

1. Ist die Hierarchie aus großer Serif-Headline, lesbarem Sans-Text und sparsamem Akzent erkennbar?
2. Sind Waldgrün, Terrakotta und die warmen hellen Flächen im Gleichgewicht?
3. Haben Bilder genug Raum und zeigen sie echte Produkte bzw. den Laden?
4. Gliedern großzügige Abstände, wechselnde helle Abschnitte und asymmetrische Bildradien die Seite?
5. Bleiben Text, Links und Bedienung auch bei kleineren Viewports lesbar und zugänglich?
