"use client";

import {
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { domains } from "@/data/siteContent";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const domainIcons = {
  web: Code,
  app: Smartphone,
  cloud: Cloud,
  data: Database,
  ai: Brain,
  hardware: Cpu,
};

export default function Domains() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <section id="domains" className="domains-section section-pad">
      <div className="section-shell">
        <div className="domains-intro-row">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="OUR DOMAINS"
              title={<>Six ways<br />to make.</>}
              description="Pick a direction, follow a question, and find the tools to bring an idea to life."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="domains-side-copy">
              DIFFERENT DISCIPLINES.<br />
              ONE SHARED CURIOSITY.
            </p>
          </Reveal>
        </div>

        <div className="domains-grid">
          {domains.map((domain, index) => {
            const Icon = domainIcons[domain.icon];
            const isActive = activeDomain === domain.id;

            return (
              <Reveal key={domain.id} delay={(index % 3) * 0.08}>
                <motion.article
                  className={`domain-card domain-card--${domain.id}${isActive ? " is-active" : ""}`}
                  whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <button
                    type="button"
                    className="domain-card-button"
                    aria-expanded={isActive}
                    aria-controls={`domain-detail-${domain.id}`}
                    onClick={() => setActiveDomain(isActive ? null : domain.id)}
                  >
                    <span className="domain-card-topline">
                      <span>{domain.number} / DOMAIN</span>
                      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.6} />
                    </span>
                    <span className="domain-icon-wrap">
                      <Icon aria-hidden="true" size={28} strokeWidth={1.35} />
                      <span className="domain-icon-glint" />
                    </span>
                    <span className="domain-card-title">{domain.name}</span>
                    <span className="domain-card-phrase">{domain.phrase}</span>
                    <span
                      id={`domain-detail-${domain.id}`}
                      className="domain-card-detail"
                      hidden={!isActive}
                    >
                      {domain.description}
                      <span className="domain-focus-list">
                        {domain.focus.map((topic) => (
                          <span key={topic}>{topic}</span>
                        ))}
                      </span>
                    </span>
                  </button>
                  <span className="domain-card-index" aria-hidden="true">
                    {domain.number}
                  </span>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className="domains-bottom-rule" aria-hidden="true">
        <span>BUILD WITH INTENTION</span>
        <span />
        <span>IIIT BHOPAL</span>
      </div>
    </section>
  );
}
