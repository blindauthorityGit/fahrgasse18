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
      "Das Unternehmen ist aus einer Leidenschaft entstanden, die Wertschöpfungskette in der Schokoladenindustrie zu verändern. Seit 2016 wird zusammen mit lokalen Partner*innen die erste Schokolade aus Westafrika produziert. Durch die Verlagerung der gesamten Wertschöpfungskette in das Kakaoanbauland wird das lokale Einkommen pro Tonne Kakao vervierfacht: Statt nur den Kakaopreis zu zahlen, unterstützt fairafric den Aufbau lokaler wirtschaftlicher Strukturen und schafft mittelständische Jobs in der Weiterverarbeitung.",
      "Damit hebt fairafric den fairen Handel aufs nächste Level und schafft für Menschen im Kakaoanbauland Ghana einen Weg in den Mittelstand. Faire Preise, Arbeitsbedingungen und absolute Transparenz werden durch den Weltladen-Dachverband gewährleistet und alle zwei Jahre bei einem externen Audit überprüft.",
      "Für uns ist das echte „Entwicklungshilfe“ und wir wollen fairafric dabei unterstützen. Daher bieten wir sieben verschiedene Schokoladen mit unterschiedlichen Schokoladenanteilen in unserem Lädchen an. Einfach vorbei kommen und probieren!",
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
      "Der Kaffee ist fair gehandelt und stammt aus den besten Anbaugebieten der Welt. Wir haben diverse Spezialitäten in Bioqualität im Sortiment.",
      "In unserer Espressobar verarbeiten wir den Barista Bio Espresso, der sich durch seinen ausgeprägten Geschmack nach Zartbitterschokolade und einen geringen Säureanteil auszeichnet.",
    ],
  },
  {
    name: "Berglandkräuter",
    imageShape: "landscape",
    image: "/images/sortiment-berglandkraeuter.jpg",
    alt: "Kräutertees und Gewürzmischungen von Berglandkräuter",
    paragraphs: [
      "Die Kräutertees und -mischungen stammen fast ausschließlich aus biologischem Anbau in Hessen. Deshalb sucht man grünen und schwarzen Tee vergeblich.",
      "Wir haben jetzt auch eine kleine Auswahl an Gewürzmischungen von Berglandkräuter im Sortiment.",
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
