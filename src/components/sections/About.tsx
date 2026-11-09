"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const wordY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const orbY = useTransform(scrollYProgress, [0, 1], [100, -110]);
  const orbScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.8, 1.05, 0.86]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
      aria-label="About AXIOS"
    >
      <div className="about-pin">
        <div className="about-scene" aria-hidden="true">
          <motion.span
            className="about-giant-word"
            style={reducedMotion ? undefined : { y: wordY }}
          >
            CURIOUS
          </motion.span>
          <motion.div
            className="about-crystal"
            style={reducedMotion ? { rotate: 24 } : { y: orbY, scale: orbScale, rotate: 24 }}
          >
            <span className="about-crystal-core" />
            <span className="about-crystal-edge" />
          </motion.div>
          <span className="about-orbit about-orbit--one" />
          <span className="about-orbit about-orbit--two" />
        </div>

        <div className="about-content">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="ABOUT AXIOS"
              title={<>Ideas move<br />when we make.</>}
              description="A technology community at IIIT Bhopal for curious minds, creative thinkers and people who want to build what comes next."
              tone="dark"
            />
          </Reveal>

          <Reveal delay={0.14}>
            <div className="about-manifesto">
              <p>
                We learn by making, share what we discover, and turn curiosity
                into working ideas.
              </p>
              <div className="about-values" aria-label="AXIOS values">
                <span>EXPLORE</span>
                <i />
                <span>CREATE</span>
                <i />
                <span>SHARE</span>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="about-side-note">A PLACE FOR IDEAS TO TAKE SHAPE</p>
        <div className="about-scroll-cue" aria-hidden="true">
          <span />
          KEEP EXPLORING
        </div>
      </div>
    </section>
  );
}
