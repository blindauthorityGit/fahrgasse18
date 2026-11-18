"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

const stories = [
  {
    name: "Hopery",
    image: "/images/sortiment-hopery.jpg",
    alt: "Seifendose und Pflegeprodukte von Hopery",
    paragraphs: [
      "HOPERY blickt auf eine 30-jährige Familientradition im Bereich Kosmetik zurück. Bei uns findest du Pflegeprodukte und passende Seifendosen aus Bambus und Mais.",
      "Laut Hersteller gehen mit jedem verkauften HOPERY Produkt 20 Cent an Orangutan Outreach.",
    ],
  },
  {
    name: "Kleine Auszeit",
    image: "/images/sortiment-kleine-auszeit.jpg",
    alt: "Handgemachte Dusch- und Haarseifen von Kleine Auszeit",
    paragraphs: [
      "Die Dusch- und Haarseifen von Kleine Auszeit entstehen in der Manufaktur von Nicole Hensel.",
      "Dazu gibt es eine Deocreme auf Natronbasis – handgemachte Pflege für eine kleine Auszeit im Alltag.",
    ],
  },
  {
    name: "puremetics",
    image: "/images/sortiment-riechen-illustration.png",
    alt: "Illustration von Seife, Pflegeöl und Kräutern",
    fit: "contain",
    paragraphs: [
      "Bei puremetics findest du Dusch-Fluffs und kosmetische Öle. Besonders beliebt sind bei uns die 3in1 Dusch-Fluffs.",
    ],
  },
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

export function RiechenPage() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="seeing-page">
      <motion.section
        className="seeing-hero content-wrap"
        aria-labelledby="riechen-title"
        variants={heroSequence}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
      >
        <motion.div className="seeing-hero-art" variants={reveal}>
          <Image
            src="/images/sortiment-riechen-illustration.png"
            alt=""
            fill
            priority
            sizes="(max-width: 760px) 42vw, 480px"
          />
        </motion.div>
        <motion.h1 id="riechen-title" variants={reveal}>Riechen</motion.h1>
      </motion.section>

      <div className="seeing-products seeing-band-sand riechen-products">
        {stories.map((story, index) => (
          <motion.section
            key={story.name}
            className={`seeing-product-row ${index % 2 ? "is-reversed" : "has-divider"} riechen-product-row`}
            aria-labelledby={`riechen-product-${index}`}
            variants={revealSequence}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.22, margin: "0px 0px -5% 0px" }}
          >
            <div className="seeing-product-inner">
              <motion.div className={`seeing-product-image ${story.fit === "contain" ? "is-contained" : ""}`} variants={reveal}>
                <Image src={story.image} alt={story.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              </motion.div>
              <motion.div className="seeing-product-copy" variants={textSequence}>
                <motion.h2 id={`riechen-product-${index}`} variants={reveal}>{story.name}</motion.h2>
                <motion.div className="seeing-title-rule" variants={drawRule} aria-hidden="true" />
                {story.paragraphs.map((paragraph, paragraphIndex) => (
                  <motion.p className="seeing-body" key={`${story.name}-${paragraphIndex}`} variants={reveal}>{paragraph}</motion.p>
                ))}
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
