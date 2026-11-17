"use client";

import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import { useRef } from "react";
import { ParallaxMedia } from "@/components/parallax-media";

const sectionSequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.36 } },
};

const copySequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.19 } },
};

const headingSequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.04, staggerChildren: 0.11 } },
};

const detailSequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.02, staggerChildren: 0.14 } },
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function VisitSection() {
  const section = useRef<HTMLElement>(null);
  const entered = useInView(section, { once: true, amount: 0.38, margin: "0px 0px -8% 0px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      ref={section}
      className="visit-section content-wrap"
      id="kontakt"
      aria-labelledby="visit-title"
      variants={sectionSequence}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : entered ? "visible" : "hidden"}
    >
      <motion.div className="visit-copy" variants={copySequence}>
        <motion.h2 id="visit-title" variants={headingSequence}>
          <motion.span className="visit-title-line" variants={itemReveal}>Komm rein.</motion.span>
          <motion.span className="visit-title-line" variants={itemReveal}>Schau dich um.</motion.span>
          <motion.span className="visit-title-line" variants={itemReveal}>
            <span className="visit-title-accent">Finde etwas<br />Schönes.</span>
          </motion.span>
        </motion.h2>
        <motion.p className="visit-intro" variants={itemReveal}>
          Du findest uns in der Fahrgasse 18, mitten in Dreieichenhain. Komm
          vorbei, lass dich inspirieren und entdecke die kleinen und großen
          Besonderheiten unseres Ladens.
        </motion.p>
        <motion.div className="contact-details" variants={detailSequence}>
          <motion.address variants={itemReveal}>Fahrgasse 18<br />63303 Dreieich</motion.address>
          <motion.div variants={itemReveal}>
            <a href="tel:+4961039883740">06103 – 988 37 40</a><br />
            <a href="mailto:info@fahrgasse18.de">info@fahrgasse18.de</a>
          </motion.div>
        </motion.div>
        <motion.div className="opening-hours" variants={itemReveal}>
          <strong>Öffnungszeiten:</strong>
          <dl>
            <div><dt>Donnerstag–Freitag:</dt><dd>10–13 / 15–18 Uhr</dd></div>
            <div><dt>Samstag:</dt><dd>10–16 Uhr</dd></div>
          </dl>
        </motion.div>
      </motion.div>
      <motion.div className="visit-photo-motion" variants={itemReveal}>
        <ParallaxMedia
          className="visit-photo"
          src="/images/contact-shop.jpg"
          alt="Eingang und Schaufenster der FAHRGASSE 18"
        />
      </motion.div>
    </motion.section>
  );
}
