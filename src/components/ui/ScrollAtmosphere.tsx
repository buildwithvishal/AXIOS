"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollAtmosphere() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.25 });
  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const orbThreeY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <>
      <motion.div
        className="reading-progress"
        style={{ scaleX: reducedMotion ? 0 : progress }}
        aria-hidden="true"
      />
      <div className="ambient-layer" aria-hidden="true">
        <motion.span
          className="ambient-orb ambient-orb--one"
          style={reducedMotion ? undefined : { y: orbOneY }}
        />
        <motion.span
          className="ambient-orb ambient-orb--two"
          style={reducedMotion ? undefined : { y: orbTwoY }}
        />
        <motion.span
          className="ambient-orb ambient-orb--three"
          style={reducedMotion ? undefined : { y: orbThreeY }}
        />
      </div>
    </>
  );
}
