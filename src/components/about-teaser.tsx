"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import { ParallaxMedia } from "@/components/parallax-media";

const sectionSequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.76, staggerChildren: 0.24 } },
};

const contentReveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] } },
};

export function AboutTeaser() {
  const section = useRef<HTMLElement>(null);
  const entered = useInView(section, { once: true, amount: 0.32 });
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.16, 0.84, 1], [0.94, 1, 1, 0.94]);

  return (
    <motion.section
      ref={section}
      className="about-teaser"
      id="ueber-uns"
      aria-labelledby="about-title"
      variants={sectionSequence}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : entered ? "visible" : "hidden"}
      style={reduceMotion ? undefined : { opacity: scrollOpacity }}
    >
      <motion.div
        className="about-background"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: reduceMotion || entered ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
      <motion.div className="about-photo-wrap" variants={contentReveal}>
        <ParallaxMedia
          className="about-photo"
          src="/images/about-street.jpg"
          alt="Blick durch die historische Fahrgasse in Dreieichenhain"
        />
      </motion.div>
      <motion.div className="about-copy" variants={contentReveal}>
        <h2 id="about-title">Nicht alltäglich.<br /><span>Genau deshalb<br />besonders.</span></h2>
        <p>
          Im August 2021 hat Anja Spiegel die FAHRGASSE 18 im Herzen von
          Dreieichenhain eröffnet. Ihre Idee: ein kleiner Laden für brauchbare,
          außergewöhnliche Geschenke und für Menschen, die gern etwas Besonderes
          entdecken.
        </p>
        <p>
          Hier geht es nicht um endlose Produktlisten. Es geht um Dinge mit
          Charakter, um persönliche Begegnungen und darum, Geschenke vor Ort zu
          sehen, zu fühlen und auszusuchen.
        </p>
        <Link className="card-link about-link" href="/ueber-uns">Mehr über uns</Link>
      </motion.div>
    </motion.section>
  );
}
