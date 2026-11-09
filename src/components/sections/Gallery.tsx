"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { gallerySlots } from "@/data/siteContent";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeSlot = activeIndex === null ? null : gallerySlots[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("lightbox-open");
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("lightbox-open");
    };
  }, [activeIndex]);

  const moveLightbox = (direction: -1 | 1) => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + direction + gallerySlots.length) % gallerySlots.length);
  };

  return (
    <section id="gallery" className="gallery-section section-pad">
      <div className="section-shell">
        <div className="gallery-heading-row">
          <Reveal>
            <SectionHeading
              index="08"
              eyebrow="GALLERY"
              title={<>Little moments.<br />Big energy.</>}
              description="The people, the process and the moments in between."
              tone="dark"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="gallery-aside-note">A LIVING COLLECTION<br />OF AXIOS MOMENTS</p>
          </Reveal>
        </div>

        <div className="gallery-grid">
          {gallerySlots.map((slot, index) => (
            <Reveal className={`gallery-cell gallery-cell--${index + 1}`} key={slot.id} delay={(index % 3) * 0.06}>
              <button
                type="button"
                className={`gallery-tile gallery-tile--${index + 1}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Open ${slot.label.toLowerCase()} ${index + 1}`}
              >
                {slot.imageSrc ? (
                  <Image
                    src={slot.imageSrc}
                    alt={slot.label}
                    width={1000}
                    height={800}
                    sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw"
                  />
                ) : (
                  <span className="gallery-placeholder-art" aria-hidden="true">
                    <span className="gallery-placeholder-orb" />
                    <span className="gallery-placeholder-frame" />
                    <span className="gallery-placeholder-tag">PHOTO SLOT {String(index + 1).padStart(2, "0")}</span>
                  </span>
                )}
                <span className="gallery-tile-caption">
                  <span>{slot.label}</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeSlot ? (
          <motion.div
            className="gallery-lightbox"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null);
            }}
          >
            <motion.div
              className="lightbox-panel"
              role="dialog"
              aria-modal="true"
              aria-label={activeSlot.label}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
            >
              <button className="lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery">
                <X size={20} />
              </button>
              <button className="lightbox-arrow lightbox-arrow--left" type="button" onClick={() => moveLightbox(-1)} aria-label="Previous gallery item">
                <ChevronLeft size={22} />
              </button>
              <div className="lightbox-art">
                {activeSlot.imageSrc ? (
                  <Image src={activeSlot.imageSrc} alt={activeSlot.label} fill sizes="90vw" />
                ) : (
                  <div className="lightbox-placeholder">
                    <span className="lightbox-placeholder-orb" />
                    <p>PHOTO SLOT / {String((activeIndex ?? 0) + 1).padStart(2, "0")}</p>
                    <span>Add an approved AXIOS photo to this space.</span>
                  </div>
                )}
              </div>
              <button className="lightbox-arrow lightbox-arrow--right" type="button" onClick={() => moveLightbox(1)} aria-label="Next gallery item">
                <ChevronRight size={22} />
              </button>
              <p className="lightbox-caption">{activeSlot.label}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
