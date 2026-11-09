"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journeyMilestones } from "@/data/siteContent";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineProgress = useTransform(scrollYProgress, [0.12, 0.88], [0, 1]);
  const orbY = useTransform(scrollYProgress, [0, 1], [70, -100]);

  return (
    <section ref={sectionRef} id="journey" className="journey-section section-pad">
      <div className="section-shell journey-layout">
        <div className="journey-intro">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="OUR JOURNEY"
              title={<>Still<br />unfolding.</>}
              description="Every club story is made of moments worth remembering."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="journey-note">
              When verified milestones are ready to share, they will find a
              place along this path.
            </p>
          </Reveal>
        </div>

        <div className="journey-track-wrap">
          <div className="journey-track" aria-hidden="true">
            <span className="journey-track-base" />
            <motion.span
              className="journey-track-progress"
              style={reducedMotion ? { scaleY: 0.18 } : { scaleY: lineProgress }}
            />
            <motion.span
              className="journey-orb"
              style={reducedMotion ? undefined : { y: orbY }}
            />
            {[0, 1, 2].map((marker) => (
              <span className={`journey-marker journey-marker--${marker + 1}`} key={marker} />
            ))}
          </div>

          {journeyMilestones.length > 0 ? (
            <div className="journey-milestones">
              {journeyMilestones.map((milestone) => (
                <Reveal key={milestone.id}>
                  <article className="journey-milestone">
                    <p>{milestone.date}</p>
                    <h3>{milestone.title}</h3>
                    <span>{milestone.description}</span>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="journey-empty-reveal">
              <div className="journey-empty-card">
                <span className="journey-empty-index">MILESTONES / TO COME</span>
                <h3>The next chapter is yours to write.</h3>
                <p>
                  Share the verified moments that shaped AXIOS and we’ll add
                  them to the journey.
                </p>
                <span className="journey-empty-seal" aria-hidden="true">
                  A
                </span>
              </div>
            </Reveal>
          )}
        </div>
      </div>
      <span className="journey-watermark" aria-hidden="true">IN MOTION</span>
    </section>
  );
}
