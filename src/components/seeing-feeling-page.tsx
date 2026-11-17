"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

type ProductStory = {
  name: string;
  subtitle?: string;
  paragraphs: string[];
  image: string;
  alt: string;
  fit?: "contain";
};

const stories: ProductStory[] = [
  {
    name: "Refished",
    paragraphs: [
      "In 2012 kam Sissi Vogler auf einer Reise durch Südostasien die Idee, den farbenfrohen Fischfutter- und Zementsäcken, die vor Ort entsorgt werden sollten, neues Leben einzuhauchen.",
      "In 2013 waren dann die ersten Produkte fertiggestellt. Mittlerweile ist eine komplette Kollektion mit vielfältigen Taschen und Accessoires entstanden.",
      "Wir freuen uns, dass wir einen Auszug aus der Produktpalette anbieten können.",
    ],
    image: "/images/sortiment-refished.jpg",
    alt: "Upcycling-Tasche aus einem farbenfrohen Reissack",
  },
  {
    name: "Bal Designs",
    paragraphs: [
      "Hier werden alte Basketbälle zu stylischen Taschen verarbeitet. Jedes Teil ist ein echtes Unikat und wird in Deutschland handgefertigt.",
      "Wir freuen uns immer, wenn eine Lieferung eintrifft, weil es jedes Mal ein Überraschungspaket ist.",
      "Sucht euch einfach euer individuelles Unikat bei uns vor Ort aus.",
    ],
    image: "/images/sortiment-sehen-taschen.jpg",
    alt: "Handgefertigte Tasche aus einem alten Basketball",
  },
  {
    name: "AirPaq",
    subtitle: "Schrott sei Dank, die Reise geht weiter.",
    paragraphs: [
      "Hier wird Material vom Schrottplatz und Ausschussware der Automobilindustrie neues Leben eingehaucht. Aussortierte Airbags, Gurtschlösser verschiedenster Hersteller und verschrottete Sicherheitsgurte lassen stylische Rucksäcke entstehen, die durch Barcodes, Stempel und Naht-Elemente zum echten Unikat werden.",
    ],
    image: "/images/sortiment-airpaq.jpg",
    alt: "Gurtverschluss eines Upcycling-Rucksacks von AirPaq",
  },
  {
    name: "Redoggo",
    paragraphs: [
      "Redoggo ist mehr als nur eine Marke für Hundespielzeug und Accessoires. Jedes Produkt wird mit Bedacht entwickelt, um sowohl Hunden als auch der Umwelt gerecht zu werden.",
      "Die Spielzeuge bestehen aus upgecycelten Autoteilen wie Airbags und Sitzgurten. Diese robusten, chemisch geprüften Materialien reduzieren Abfall und bieten nachhaltige Lösungen für Hunde.",
    ],
    image: "/images/sortiment-sehen-illustration.png",
    alt: "Illustration für das Sortiment Sehen und Fühlen",
    fit: "contain",
  },
  {
    name: "Feuerwear",
    subtitle: "Unikate aus Feuerwehrschläuchen",
    paragraphs: [
      "Die Brüder Martin und Robert entwerfen nachhaltige Taschen und Accessoires durch Upcycling von Feuerwehrschläuchen. Nicht nur bei der Materialverwendung, sondern bei der gesamten Produktion achten sie auf Nachhaltigkeit.",
      "Die Feuerwehrschläuche wurden im Einsatz durch Schlamm und Geröll gezogen, haben Feuer und Hitze getrotzt und viele tausend Kubikmeter Wasser transportiert. Der Feuerwehrschlauch erhält so individuelle Spuren, die jedes Teil einzigartig macht. Feuerwear-Produkte gibt es in den Schlauchfarben Rot, Weiß und Schwarz.",
    ],
    image: "/images/sortiment-feuerwear.jpg",
    alt: "Tasche aus einem roten Feuerwehrschlauch",
  },
  {
    name: "Original Duckhead",
    subtitle: "Auf der Suche nach nachhaltigen Regenschirmen, sind wir auf Original Duckhead gestoßen.",
    paragraphs: [
      "Nun, wenn sich einer mit Regen auskennt, dann sind es die Briten. Daher war es naheliegend, auch hier den passenden Regenschirm zu finden. Für die Bespannung werden recycelte Plastikflaschen verwendet. Pro Schirm sind das immerhin 9 Stück. Hinzu kommt der lustige Griff aus Birkenholz in Form eines Entenkopfes – Duckhead eben!",
      "Die Schirme sind handgefertigt und für eine lange Lebensdauer ausgelegt. Da Regenwetter in der Regel trist ist, haben wir uns die farbenfrohen Ausführungen ausgesucht.",
    ],
    image: "/images/sortiment-sehen-schirme.jpg",
    alt: "Farbige Regenschirme und Entenkopf-Griffe",
  },
  {
    name: "Eydl",
    subtitle: "Individueller Holzschmuck",
    paragraphs: [
      "EYDL steht für die jeweils ersten Buchstaben des Ausspruchs „Energize Your Daily Life!“ EYDL verkörpert Ausgeglichenheit, Wohlgefühl, Individualität & Ästhetik. Spirituelle Linien & Formen geben Kraft.",
      "Der Schmuck von Eydl wird in Österreich handgemacht und wird aus heimischen Hölzern gefertigt. Die Natürlichkeit der Rohstoffe gepaart mit ihren individuellen Eigenschaften erschaffen ein rund um harmonisches Produkt.",
    ],
    image: "/images/sortiment-eydl.jpg",
    alt: "Handgefertigter Schmuck aus Holz mit filigranen Mustern",
  },
  {
    name: "Bikezac",
    subtitle: "Die Fahrradtasche aus der Fahrradhauptstadt Europas Kopenhagen von Cobag",
    paragraphs: [
      "Es handelt sich hierbei um eine Tasche aus strapazierfähigem Material, die für den langfristigen Einsatz gedacht ist. Die Taschen werden aus gebrauchten Reissäcken (hauptsächlich Vietnam) hergestellt. Die Reissäcke werden eingeschmolzen und zu neuem gewebten Material recycelt.",
      "Die Bikezac kann zu einem handlichen Format zusammengelegt werden, so dass man sie einfach transportieren kann. Und man hat sie dabei, wenn man sie wirklich mal braucht.",
    ],
    image: "/images/sortiment-sehen-fahrrad.jpg",
    alt: "Fahrradtaschen aus recyceltem Material am Fahrrad",
  },
  {
    name: "Zirkeltraining",
    subtitle: "BY BERND DÖRR",
    paragraphs: [
      "Extravagante Taschenunikate und Accessoires in Handarbeit aus altem Leder und Turnmatten. Turnvater Bernd Dörr hatte bereits 2007 die zündende Idee, aus alten Sportgeräten und recycelten Turnmatten, die er auf dem Sperrmüll gefunden hat, Taschen und Accessoires zu fertigen. Zwischenzeitlich hat er diverse Preise mit seinen Produkten gewonnen, zuletzt den German Design Award 2020.",
      "Jedes Teil ist ein absolutes Unikat. Daher teilt er auch mit uns die Meinung, dass man diese Teile nur kaufen sollte, wenn man sie vorher gesehen und angefasst hat.",
    ],
    image: "/images/sortiment-zirkeltraining.jpg",
    alt: "Tasche aus recyceltem Leder und Turnmatte",
  },
  {
    name: "Got Bag",
    paragraphs: [
      "GOT BAG stellt Taschen, Rucksäcke und Koffer aus recycelten Materialien her. So werden zum Beispiel für Rucksäcke aus dem Meer gefischte PET-Flaschen verwendet. Das Basismaterial für einige Taschen sind recycelte Fischernetze. Für Koffer und Sonnenbrillen werden ausrangierte Wasserbehälter zu stylischen Produkten verarbeitet.",
      "Als autorisierter Partner haben wir immer eine Auswahl der neuesten Produkte für euch im Sortiment.",
    ],
    image: "/images/sortiment-gotbag.jpg",
    alt: "Rucksack von Got Bag als Begleiter im Alltag",
  },
];

const bands = [
  { tone: "sand", stories: stories.slice(0, 2) },
  { tone: "cream", stories: stories.slice(2, 4) },
  { tone: "sand", stories: stories.slice(4, 6) },
  { tone: "cream", stories: stories.slice(6, 8) },
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

export function SeeingFeelingPage() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="seeing-page">
      <motion.section
        className="seeing-hero content-wrap"
        aria-labelledby="seeing-title"
        variants={heroSequence}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
      >
        <motion.div className="seeing-hero-art" variants={reveal}>
          <Image
            src="/images/sortiment-sehen-illustration.png"
            alt=""
            fill
            priority
            sizes="(max-width: 760px) 42vw, 480px"
          />
        </motion.div>
        <motion.h1 id="seeing-title" variants={reveal}>
          Sehen & <span>Fühlen</span>
        </motion.h1>
      </motion.section>

      <div className="seeing-products">
        {bands.map((band, bandIndex) => (
          <div className={`seeing-band seeing-band-${band.tone}`} key={`${band.tone}-${bandIndex}`}>
            {band.stories.map((story, storyInBandIndex) => {
              const index = bandIndex * 2 + storyInBandIndex;
              const reversed = index % 2 === 1;
              return (
                <motion.section
                  key={story.name}
                  className={`seeing-product-row ${reversed ? "is-reversed" : ""} ${index % 2 === 0 && index < stories.length - 1 ? "has-divider" : ""}`}
                  aria-labelledby={`seeing-product-${index}`}
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
                      <motion.h2 id={`seeing-product-${index}`} variants={reveal}>{story.name}</motion.h2>
                      <motion.div className="seeing-title-rule" variants={drawRule} aria-hidden="true" />
                      {story.subtitle && <motion.p className={`seeing-subtitle ${story.subtitle === "BY BERND DÖRR" ? "is-label" : ""}`} variants={reveal}>{story.subtitle}</motion.p>}
                      {story.paragraphs.map((paragraph, paragraphIndex) => (
                        <motion.p className="seeing-body" key={`${story.name}-${paragraphIndex}`} variants={reveal}>{paragraph}</motion.p>
                      ))}
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
