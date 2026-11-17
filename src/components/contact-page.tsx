"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const sequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.06 } },
};

const copySequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const mapReveal: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.86, ease: [0.22, 1, 0.36, 1] } },
};

const mapSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=8.708%2C49.9965%2C8.719%2C50.0038&layer=mapnik&marker=50.0000492%2C8.7134660";

export function ContactPage() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      className="contact-page content-wrap"
      aria-labelledby="contact-page-title"
      variants={sequence}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
    >
      <motion.div className="contact-page-copy" variants={copySequence}>
        <motion.h1 id="contact-page-title" variants={reveal}>
          Wir freuen<br />uns auf<br /><span>deinen<br />Besuch!</span>
        </motion.h1>
        <motion.p className="contact-page-intro" variants={reveal}>
          Ob du eine bestimmte Geschenkidee suchst oder einfach mal stöbern möchtest:
          Komm gern in der FAHRGASSE 18 vorbei.
        </motion.p>
        <motion.p className="contact-page-location-intro" variants={reveal}>
          Du findest uns mitten in Dreieichenhain.
        </motion.p>
        <motion.div className="contact-page-details" variants={reveal}>
          <address>Fahrgasse 18<br />63303 Dreieich</address>
          <div>
            <a href="tel:+4961039883740">06103 – 988 37 40</a>
            <a href="mailto:info@fahrgasse18.de">info@fahrgasse18.de</a>
          </div>
        </motion.div>
        <motion.div className="contact-page-hours" variants={reveal}>
          <strong>Öffnungszeiten:</strong>
          <dl>
            <div><dt>Donnerstag–Freitag:</dt><dd>10–13 / 15–18 Uhr</dd></div>
            <div><dt>Samstag:</dt><dd>10–16 Uhr</dd></div>
          </dl>
        </motion.div>
      </motion.div>

      <motion.div className="contact-map-card" variants={mapReveal}>
        <iframe
          className="contact-map-frame"
          src={mapSrc}
          title="OpenStreetMap-Karte – FAHRGASSE 18, Fahrgasse 18, Dreieich-Dreieichenhain"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="contact-map-wash" aria-hidden="true" />
        <div className="contact-map-overlay" aria-hidden="true">
          <svg className="contact-map-pin" viewBox="0 0 64 84" fill="none">
            <path d="M32 2C15.43 2 2 15.43 2 32c0 22.24 30 50 30 50s30-27.76 30-50C62 15.43 48.57 2 32 2Z" fill="currentColor" />
            <circle cx="32" cy="31" r="11" fill="var(--color-terracotta)" />
          </svg>
          <div className="contact-map-label">
            <strong>FAHRGASSE 18</strong>
            <span>63303 Dreieich-Dreieichenhain</span>
          </div>
        </div>
        <a
          className="contact-map-route"
          href="https://www.openstreetmap.org/directions?to=50.0000492%2C8.7134660"
          target="_blank"
          rel="noreferrer"
        >
          Route planen <span aria-hidden="true">↗</span>
        </a>
      </motion.div>
    </motion.section>
  );
}
