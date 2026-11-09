"use client";

import { ChevronLeft, ChevronRight, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { eventSlots } from "@/data/siteContent";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Events() {
  const trackRef = useRef<HTMLDivElement>(null);

  const moveTrack = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({
      left: direction * Math.max(trackRef.current.clientWidth * 0.76, 300),
      behavior: "smooth",
    });
  };

  return (
    <section id="events" className="events-section section-pad">
      <div className="section-shell">
        <div className="events-heading-row">
          <Reveal>
            <SectionHeading
              index="04"
              eyebrow="EVENTS"
              title={<>Where ideas<br />meet people.</>}
              description="Workshops, conversations and shared experiments belong here."
            />
          </Reveal>
          <div className="carousel-controls" aria-label="Event carousel controls">
            <button type="button" onClick={() => moveTrack(-1)} aria-label="Previous events">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={() => moveTrack(1)} aria-label="Next events">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="events-carousel" ref={trackRef} aria-label="Event placeholders">
          {eventSlots.map((event, index) => (
            <Reveal key={event.id} className="event-carousel-item" delay={index * 0.08}>
              <motion.article
                className="event-card"
                whileHover={{ y: -7 }}
                transition={{ duration: 0.28 }}
              >
                <div className={`event-art event-art--${event.artwork}`} aria-hidden="true">
                  <span className="event-art-grid" />
                  <span className="event-art-orb event-art-orb--one" />
                  <span className="event-art-orb event-art-orb--two" />
                  <span className="event-art-label">EVENT ARTWORK SLOT</span>
                  <span className="event-art-number">{event.number}</span>
                </div>
                <div className="event-card-info">
                  <div className="event-card-meta">
                    <span>{event.date}</span>
                    <span>CONTENT SLOT {event.number}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <span className="event-card-link">
                    DETAILS TO BE ADDED <MoveUpRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <p className="carousel-hint">SWIPE OR SCROLL TO EXPLORE</p>
      </div>
    </section>
  );
}
