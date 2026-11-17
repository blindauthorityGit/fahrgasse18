"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef } from "react";

type Sense = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

const sectionSequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.06, staggerChildren: 0.96 } },
};

const headingSequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.04, staggerChildren: 0.12 } },
};

const titleSequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.03, staggerChildren: 0.11 } },
};

const titleLine: Variants = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.74, ease: [0.22, 1, 0.36, 1] } },
};

const introReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const gridSequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.02, staggerChildren: 0.16 } },
};

const cardSequence: Variants = {
  hidden: { opacity: 0, y: 58, scale: 0.975 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } },
};

const parallaxRanges = [
  [-28, 28],
  [38, -38],
  [-48, 48],
] as const;

export function SenseSection({ senses }: { senses: Sense[] }) {
  const section = useRef<HTMLElement>(null);
  const heading = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const shouldEnter = useInView(heading, {
    once: true,
    amount: 0.65,
    margin: "0px 0px -10% 0px",
  });
  const { scrollYProgress } = useScroll({
    target: grid,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });
  const firstCardY = useTransform(smoothProgress, [0, 1], [...parallaxRanges[0]]);
  const secondCardY = useTransform(smoothProgress, [0, 1], [...parallaxRanges[1]]);
  const thirdCardY = useTransform(smoothProgress, [0, 1], [...parallaxRanges[2]]);
  const cardParallax = [firstCardY, secondCardY, thirdCardY];

  return (
    <motion.section
      ref={section}
      className="sense-section content-wrap"
      id="sortiment"
      aria-labelledby="sense-title"
      variants={sectionSequence}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : shouldEnter ? "visible" : "hidden"}
    >
      <motion.div ref={heading} className="section-heading" variants={headingSequence}>
        <motion.div className="section-heading-title" variants={titleSequence}>
          <motion.h2 id="sense-title" variants={titleSequence}>
            <motion.span className="sense-heading-line" variants={titleLine}>Drei Sinneswelten.</motion.span>
            <motion.span className="sense-heading-line" variants={titleLine}>
              <span className="sense-heading-accent">Unendlich viele Ideen.</span>
            </motion.span>
          </motion.h2>
        </motion.div>
        <motion.div className="section-heading-copy" variants={introReveal}>
          <motion.p variants={introReveal}>
            Unterschiedliche Dinge, eine gemeinsame Idee: Freude am Entdecken.
            Ein kleiner Einblick in das, was dich bei uns erwartet.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div ref={grid} className="sense-grid" variants={gridSequence}>
        {senses.map((sense, index) => (
          <motion.div
            key={sense.title}
            className="sense-card-parallax"
            variants={{ hidden: { opacity: 1 }, visible: { opacity: 1 } }}
            style={reduceMotion ? undefined : { y: cardParallax[index] }}
          >
            <motion.article className="sense-card" variants={cardSequence}>
              <Link className={`sense-image sense-image-${index + 1}`} href={sense.href} aria-label={`${sense.title} entdecken`}>
                <Image src={sense.image} alt={sense.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </Link>
              <div className="sense-card-copy">
                <h3>{sense.title}</h3>
                <p className="sense-subtitle">{sense.subtitle}</p>
                <p className="sense-description">{sense.description}</p>
                <Link className="card-link" href={sense.href}>Jetzt entdecken</Link>
              </div>
            </motion.article>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
