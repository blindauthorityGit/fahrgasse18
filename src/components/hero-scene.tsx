"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const titleSequence: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.12, staggerChildren: 0.11 } },
};

const titleLine: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

function HeroCopy({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="hero-copy">
      <motion.h1
        id="hero-title"
        variants={titleSequence}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.span className="hero-title-line" variants={titleLine}>Geschenke</motion.span>
        <motion.span className="hero-title-line" variants={titleLine}>für alle</motion.span>
        <motion.span className="hero-title-line hero-title-accent" variants={titleLine}>Sinne.</motion.span>
      </motion.h1>
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        Von außergewöhnlichen Taschen und kleinen Lieblingsstücken über
        duftende Seifen bis zu feinen Genussideen: In der FAHRGASSE 18 gibt es
        Dinge, die Freude machen – beim Entdecken und beim Verschenken.
      </motion.p>
    </div>
  );
}

function EntranceImage({
  src,
  alt,
  delay,
  reduceMotion,
  sizes,
}: {
  src: string;
  alt: string;
  delay: number;
  reduceMotion: boolean;
  sizes: string;
}) {
  return (
    <motion.div
      className="hero-gallery-entry"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.78, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image src={src} alt={alt} fill priority sizes={sizes} />
    </motion.div>
  );
}

export function HeroScene() {
  const hero = useRef<HTMLElement>(null);
  const mainFrame = useRef<HTMLDivElement>(null);
  const topFrame = useRef<HTMLDivElement>(null);
  const bottomFrame = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const copyX = useTransform(smoothScrollProgress, [0, 1], ["0%", "-34%"]);
  const copyY = useTransform(smoothScrollProgress, [0, 1], ["0%", "-3%"]);
  const copyOpacity = useTransform(smoothScrollProgress, [0, 0.88], [1, 0]);

  useGSAP(
    () => {
      if (reduceMotion || !hero.current) return;

      const scrollRange = {
        trigger: hero.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.9,
        invalidateOnRefresh: true,
      };

      [
        { target: mainFrame.current, yPercent: -21 },
        { target: topFrame.current, yPercent: -13 },
        { target: bottomFrame.current, yPercent: 18 },
      ].forEach(({ target, yPercent }) => {
        if (!target) return;
        gsap.to(target, { yPercent, ease: "none", scrollTrigger: { ...scrollRange } });
      });
    },
    { scope: hero, dependencies: [reduceMotion], revertOnUpdate: true },
  );

  return (
    <section ref={hero} className="hero content-wrap" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy-scroll"
        style={reduceMotion ? undefined : { x: copyX, y: copyY, opacity: copyOpacity }}
      >
        <HeroCopy reduceMotion={reduceMotion} />
      </motion.div>
      <div className="hero-gallery" aria-label="Einblicke in den Laden und das Sortiment">
        <div ref={mainFrame} className="hero-gallery-main">
          <EntranceImage
            src="/images/hero-storefront.jpg"
            alt="Blumen vor dem Fachwerkhaus der FAHRGASSE 18"
            delay={0.2}
            reduceMotion={reduceMotion}
            sizes="(max-width: 700px) 62vw, 32vw"
          />
        </div>
        <div ref={topFrame} className="hero-gallery-side-top">
          <EntranceImage
            src="/images/hero-bag.jpg"
            alt="Tasche aus recycelten Materialien"
            delay={0.34}
            reduceMotion={reduceMotion}
            sizes="(max-width: 700px) 30vw, 15vw"
          />
        </div>
        <div ref={bottomFrame} className="hero-gallery-side-bottom">
          <EntranceImage
            src="/images/hero-display.jpg"
            alt="Taschen und Accessoires im Laden"
            delay={0.48}
            reduceMotion={reduceMotion}
            sizes="(max-width: 700px) 30vw, 15vw"
          />
        </div>
      </div>
    </section>
  );
}
