"use client";

import { ArrowUpRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { collaborationSlots } from "@/data/siteContent";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Collaborations() {
  return (
    <section id="collaborations" className="collaborations-section section-pad">
      <div className="section-shell">
        <div className="collaborations-heading-row">
          <Reveal>
            <SectionHeading
              index="05"
              eyebrow="COLLABORATIONS"
              title={<>Better ideas<br />travel together.</>}
              description="A space for the people and organizations who build alongside AXIOS."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="collaborations-side-note">
              PARTNERSHIPS<br />BUILT ON SHARED CURIOSITY
            </p>
          </Reveal>
        </div>

        <div className="collaboration-cloud">
          {collaborationSlots.map((slot, index) => (
            <Reveal key={slot.id} delay={index * 0.08}>
              <motion.article
                className={`collaboration-card collaboration-card--${index + 1}`}
                whileHover={{ y: -8, rotate: index % 2 ? 1.5 : -1.5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="collaboration-card-number">{slot.number}</span>
                <div className="collaboration-logo-slot" aria-hidden="true">
                  <span className="collaboration-logo-orbit" />
                  <Plus size={22} strokeWidth={1.2} />
                </div>
                <div className="collaboration-card-label">
                  <span>{slot.label}</span>
                  <span>ADD VERIFIED DETAILS</span>
                </div>
                <ArrowUpRight className="collaboration-arrow" size={17} aria-hidden="true" />
              </motion.article>
            </Reveal>
          ))}
        </div>
        <div className="collaboration-footnote">
          <span />
          <p>PARTNER NAMES AND LOGOS WILL BE ADDED WHEN CONFIRMED.</p>
        </div>
      </div>
    </section>
  );
}
