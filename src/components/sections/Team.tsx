"use client";

import { ArrowUpRight, UserRound } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { teamCategories, type TeamCategoryKey } from "@/data/siteContent";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryKeys = Object.keys(teamCategories) as TeamCategoryKey[];

export default function Team() {
  const [activeCategory, setActiveCategory] = useState<TeamCategoryKey>("leadership");
  const category = teamCategories[activeCategory];

  return (
    <section id="team" className="team-section section-pad">
      <div className="section-shell">
        <div className="team-heading-row">
          <Reveal>
            <SectionHeading
              index="06"
              eyebrow="LEADERSHIP & TEAM"
              title={<>Made by<br />many minds.</>}
              description="Meet the people who give AXIOS its energy."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="team-aside-note">REAL PEOPLE.<br />REAL NAMES. ADDED SOON.</p>
          </Reveal>
        </div>

        <div className="team-tabs" role="tablist" aria-label="Team categories">
          {categoryKeys.map((key) => (
            <button
              key={key}
              id={`team-tab-${key}`}
              type="button"
              role="tab"
              aria-selected={activeCategory === key}
              aria-controls="team-panel"
              tabIndex={activeCategory === key ? 0 : -1}
              className={activeCategory === key ? "is-active" : ""}
              onClick={() => setActiveCategory(key)}
            >
              {teamCategories[key].label}
              <span>{String(teamCategories[key].slots.length).padStart(2, "0")}</span>
            </button>
          ))}
        </div>

        <div
          id="team-panel"
          className="team-grid"
          role="tabpanel"
          aria-labelledby={`team-tab-${activeCategory}`}
        >
          <AnimatePresence mode="popLayout">
            {category.slots.map((slot, index) => (
              <motion.article
                className={`team-card team-card--${index + 1}`}
                key={slot}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.38, delay: index * 0.06 }}
              >
                <div className="team-portrait" aria-hidden="true">
                  <span className="team-portrait-halo" />
                  <span className="team-portrait-rings" />
                  <UserRound size={38} strokeWidth={1.1} />
                  <span className="team-portrait-label">PHOTO SLOT</span>
                </div>
                <div className="team-card-info">
                  <span>{category.label.toUpperCase()} / {String(index + 1).padStart(2, "0")}</span>
                  <h3>Name to be added</h3>
                  <p>Role to be added</p>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
        <p className="team-placeholder-note">NAMES, ROLES AND PHOTOGRAPHS WILL BE ADDED AFTER CONFIRMATION.</p>
      </div>
    </section>
  );
}
