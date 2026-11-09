import { Plus } from "lucide-react";
import { sponsorSlots } from "@/data/siteContent";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-section section-pad">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow="SPONSORS"
            title={<>Good work<br />needs good company.</>}
            description="A place to recognize the organizations that make the work possible."
            align="center"
          />
        </Reveal>
        <div className="sponsor-stage">
          <span className="sponsor-stage-light sponsor-stage-light--one" aria-hidden="true" />
          <span className="sponsor-stage-light sponsor-stage-light--two" aria-hidden="true" />
          <div className="sponsor-slots">
            {sponsorSlots.map((slot, index) => (
              <Reveal key={slot.id} delay={index * 0.06}>
                <div className={`sponsor-pedestal sponsor-pedestal--${index + 1}`}>
                  <span className="sponsor-logo-slot">
                    <Plus size={22} strokeWidth={1.2} aria-hidden="true" />
                    <span>LOGO SLOT {slot.number}</span>
                  </span>
                  <span className="sponsor-pedestal-base" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="sponsor-placeholder-note">SPONSOR NAMES AND MARKS WILL APPEAR HERE WHEN CONFIRMED.</p>
      </div>
    </section>
  );
}
