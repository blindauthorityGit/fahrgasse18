"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ParallaxMedia({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reduceMotion || !image.current) return;

      gsap.to(image.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container, dependencies: [reduceMotion], revertOnUpdate: true },
  );

  return (
    <div ref={container} className={className}>
      <Image
        ref={image}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 760px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
