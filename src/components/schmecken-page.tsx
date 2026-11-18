"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

const stories = [
  {
    name: "Stadtgärtner",
    imageShape: "landscape",
    image: "/images/sortiment-stadtgaertner.jpg",
    alt: "Kleine Kräuter- und Gemüsegärten für die Fensterbank",
    paragraphs: [
      "Ab sofort wird auf der Fensterbank gegärtnert und zwar mit den Minigärten von den Stadtgärtnern. Wir haben eine kleine Auswahl für euch im Sortiment, zum Beispiel Chili, Minze, Erdnuss oder vielleicht Maggikraut. Einfach den Beutel aufschneiden, Samen rein und gießen.",
      "Dann müsst ihr nur noch warten, bis die Ernte ansteht. Außerdem haben wir immer eine kleine Auswahl an saisonalen Produkten im Angebot.",
    ],
  },
  {
    name: "Fairafric",
    imageShape: "square",
    image: "/images/sortiment-fairafric.jpg",
    alt: "Bunte Schokoladentafeln von fairafric",
    paragraphs: [
      "Seit 2016 stellt fairafric gemeinsam mit lokalen Partner*innen Schokolade in Ghana her. Die Besonderheit: Der Kakao wird dort nicht nur angebaut, sondern auch vor Ort zur fertigen Tafel verarbeitet.",
      "fairafric zufolge fällt das lokale Einkommen pro Tonne Kakao dadurch viermal so hoch aus wie beim Verkauf der Bohnen allein. Vor Ort entstehen außerdem Arbeitsplätze in der Weiterverarbeitung. Für die Prüfung von Preisen und Arbeitsbedingungen arbeitet das Unternehmen nach eigenen Angaben mit dem Weltladen-Dachverband; alle zwei Jahre findet zusätzlich ein externes Audit statt.",
      "Uns gefällt, dass Anbau und Weiterverarbeitung hier zusammenkommen. Deshalb haben wir sieben Sorten mit unterschiedlichen Kakaoanteilen im Laden. Komm vorbei und probier dich durch!",
    ],
  },
  {
    name: "Pfälzer Latwerg",
    imageShape: "portrait",
    subtitle: "mit gewöhnlichem Pflaumenmus nicht zu vergleichen!",
    image: "/images/sortiment-pfaelzer-latwerg.jpg",
    alt: "Gläser mit hausgemachtem Pfälzer Latwerg",
    paragraphs: [
      "Latwerg ist ein typisch pfälzisches Pflaumenmus mit einer speziellen Gewürzmischung. In früheren Zeiten wurde um die Zwetschgen-Latwerg ein richtiger Kult betrieben. Um diese wunderbare Spezialität herzustellen, haben sich Frauen, um sich beim Rühren der Latwerg, die stundenlang im kupfernen Waschkessel auf offenem Feuer kochen musste, abzuwechseln.",
      "Unser Latwerg entstand nach uraltem Originalrezept in mühevoller Arbeit auf einem Obsthof in der Pfalz. Die Zwetschgen stammen aus der Region rund um Freinsheim, wurden entkernt und danach zerkleinert. Das Mus wird bei mäßiger Hitze gerührt und ca. 24 Stunden geköchelt. Hierbei wird das Mus solange reduziert, bis es dunkel und zäh ist. Überzeugen Sie sich von diesem unglaublich leckerem Pfälzer Latwerg!",
      "Wir sind uns einig: Genuss pur!",
    ],
  },
  {
    name: "Kaffee Braun",
    subtitle: "und unsere Espressobar",
    imageShape: "landscape",
    image: "/images/sortiment-schmecken-illustration.png",
    alt: "Illustration einer dampfenden Tasse Kaffee mit Schokolade und Gewürzen",
    fit: "contain",
    paragraphs: [
      "Bei uns findest du verschiedene Kaffeespezialitäten. In unserer Espressobar servieren wir einen Espresso mit Noten von Zartbitterschokolade und milder Säure.",
    ],
  },
  {
    name: "Berglandkräuter",
    imageShape: "landscape",
    image: "/images/sortiment-berglandkraeuter.jpg",
    alt: "Kräutertees und Gewürzmischungen von Berglandkräuter",
    paragraphs: [
      "Bei uns findest du Kräutertees und -mischungen von Berglandkräuter. Grünen und schwarzen Tee führen wir nicht.",
      "Ergänzt wird die Auswahl durch ausgewählte Gewürzmischungen.",
    ],
    highlight: "Unser Highlight hier – Kräuter der Provinz!",
  },
];

const bands = [
  { tone: "sand", stories: stories.slice(0, 2) },
  { tone: "cream", stories: stories.slice(2, 4) },
  { tone: "sand", stories: stories.slice(4, 6) },
];

const revealSequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.04 } },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const drawRule: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const textSequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

const heroSequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.08 } },
};

export function SchmeckenPage() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="seeing-page">
      <motion.section
        className="seeing-hero content-wrap"
        aria-labelledby="schmecken-title"
        variants={heroSequence}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
      >
        <motion.div className="seeing-hero-art" variants={reveal}>
          <Image
            src="/images/sortiment-schmecken-illustration.png"
            alt=""
            fill
            priority
            sizes="(max-width: 760px) 42vw, 480px"
          />
        </motion.div>
        <motion.h1 id="schmecken-title" variants={reveal}>Schmecken</motion.h1>
      </motion.section>

      <div className="seeing-products">
        {bands.map((band, bandIndex) => (
          <div className={`seeing-band seeing-band-${band.tone}`} key={`${band.tone}-${bandIndex}`}>
            {band.stories.map((story, storyInBandIndex) => {
              const index = bandIndex * 2 + storyInBandIndex;
              return (
                <motion.section
                  key={story.name}
                  className={`seeing-product-row schmecken-product-row ${index % 2 ? "is-reversed" : "has-divider"}`}
                  aria-labelledby={`schmecken-product-${index}`}
                  variants={revealSequence}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView={reduceMotion ? undefined : "visible"}
                  viewport={{ once: true, amount: 0.22, margin: "0px 0px -5% 0px" }}
                >
                  <div className="seeing-product-inner">
                    <motion.div className={`seeing-product-image schmecken-image-${story.imageShape} ${story.fit === "contain" ? "is-contained" : ""}`} variants={reveal}>
                      <Image src={story.image} alt={story.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                    </motion.div>
                    <motion.div className="seeing-product-copy" variants={textSequence}>
                      <motion.h2 id={`schmecken-product-${index}`} variants={reveal}>{story.name}</motion.h2>
                      <motion.div className="seeing-title-rule" variants={drawRule} aria-hidden="true" />
                      {story.subtitle && <motion.p className="seeing-subtitle" variants={reveal}>{story.subtitle}</motion.p>}
                      {story.paragraphs.map((paragraph, paragraphIndex) => (
                        <motion.p className="seeing-body" key={`${story.name}-${paragraphIndex}`} variants={reveal}>{paragraph}</motion.p>
                      ))}
                      {story.highlight && <motion.p className="seeing-subtitle" variants={reveal}>{story.highlight}</motion.p>}
                    </motion.div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
