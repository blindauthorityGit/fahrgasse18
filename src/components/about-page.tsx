"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

const sequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.06 } },
};

const copySequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const photoReveal: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] } },
};

export function AboutPage() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="about-page">
      <motion.section
        className="about-page-hero content-wrap"
        aria-labelledby="about-page-title"
        variants={sequence}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
      >
        <motion.div className="about-page-hero-copy" variants={copySequence}>
          <motion.h1 id="about-page-title" variants={reveal}>
            Ein Laden<br />voller Ideen.<br /><span>Und Freude<br />am Entdecken.</span>
          </motion.h1>
          <motion.p variants={reveal}>
            Manchmal sind es gerade die nicht alltäglichen Dinge, die besonders viel Freude machen.
            Genau für solche Entdeckungen gibt es die FAHRGASSE 18.
          </motion.p>
        </motion.div>
        <motion.div className="about-page-hero-photo" variants={photoReveal}>
          <Image
            src="/images/ueber-uns-hero.jpg"
            alt="Blumen im Vordergrund, dahinter der Laden in der Fahrgasse"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 42vw"
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="about-page-story content-wrap"
        aria-labelledby="about-story-title"
        variants={sequence}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.28, margin: "0px 0px -4% 0px" }}
      >
        <motion.div className="about-page-story-copy" variants={copySequence}>
          <motion.h2 id="about-story-title" variants={reveal}>Die Idee hinter<br /><span>FAHRGASSE 18</span></motion.h2>
          <motion.p variants={reveal}>
            Im August 2021 hat Anja Spiegel in Dreieichenhain einen kleinen Laden eröffnet.
            Ihre Vorstellung: ein Ort für brauchbare und außergewöhnliche Geschenke – für nette Menschen und ausdrücklich auch für einen selbst.
          </motion.p>
          <motion.p variants={reveal}>
            Seitdem steht bei uns das Entdecken im Mittelpunkt. Taschen, kleine Alltagsbegleiter,
            duftende Seifen und feine Köstlichkeiten: Das Sortiment verbindet ganz unterschiedliche
            Dinge, die uns neugierig machen und die wir gern weiterempfehlen.
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.div
        className="about-page-gallery content-wrap"
        aria-label="Einblicke in und rund um die FAHRGASSE 18"
        variants={sequence}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -4% 0px" }}
      >
        <motion.div className="about-page-gallery-photo about-page-gallery-exterior" variants={photoReveal}>
          <Image
            src="/images/ueber-uns-aussen.jpg"
            alt="Außenansicht der FAHRGASSE 18 mit dem Ladenschild"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div className="about-page-gallery-photo about-page-gallery-inside" variants={photoReveal}>
          <Image
            src="/images/ueber-uns-einblick.jpg"
            alt="Einblick in den Laden während einer Begegnung mit Kundinnen und Kunden"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </motion.div>
      </motion.div>

      <motion.section
        className="about-page-values content-wrap"
        aria-labelledby="about-values-title"
        variants={sequence}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.3, margin: "0px 0px -5% 0px" }}
      >
        <motion.div className="about-page-values-copy" variants={copySequence}>
          <motion.h2 id="about-values-title" variants={reveal}>Nicht einfach mehr.<br /><span>Sondern etwas Besonderes.</span></motion.h2>
          <motion.p variants={reveal}>
            Wir suchen nach Dingen, die uns selbst gefallen und hinter denen eine interessante Idee steckt.
            Manchmal ist es das Design, manchmal ein ungewöhnliches Material, eine besondere Herstellung
            oder einfach die Freude, die ein Produkt auslöst.
          </motion.p>
          <motion.p variants={reveal}>
            Dabei interessieren uns auch die Menschen und Geschichten hinter den Marken.
            Statt riesiger Auswahl möchten wir Dinge zeigen, die man gern verschenkt – und über die man gern spricht.
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
}
