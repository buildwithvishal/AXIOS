import { ArrowUpRight, ArrowUp } from "lucide-react";
import { contactChannels } from "@/data/siteContent";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="contact-section section-pad">
        <div className="section-shell contact-layout">
          <Reveal>
            <SectionHeading
              index="09"
              eyebrow="CONTACT"
              title={<>Let’s make<br />something real.</>}
              description="Have an idea, a question or a collaboration in mind? Find AXIOS through the official channels below."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="contact-orb-scene" aria-hidden="true">
              <span className="contact-orb contact-orb--large" />
              <span className="contact-orb contact-orb--small" />
              <span className="contact-orb-ring" />
              <span className="contact-scene-caption">OPEN CHANNEL</span>
            </div>
          </Reveal>
          <div className="contact-channel-list">
            {contactChannels.map((channel, index) => (
              <Reveal key={channel.id} delay={index * 0.06}>
                <div className="contact-channel">
                  <span className="contact-channel-number">0{index + 1}</span>
                  <span className="contact-channel-name">{channel.label}</span>
                  {channel.href ? (
                    <a href={channel.href} target="_blank" rel="noreferrer">
                      {channel.value} <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="contact-channel-placeholder">{channel.value}</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <a className="footer-wordmark" href="#top" aria-label="AXIOS Development Club, back to top">
            <span>AXIOS</span>
            <span>DEVELOPMENT CLUB · IIIT BHOPAL</span>
          </a>
          <p>IDEAS INTO INNOVATION</p>
          <a className="back-to-top" href="#top">
            BACK TO TOP <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="section-shell footer-bottom">
          <span>AXIOS DEVELOPMENT CLUB</span>
          <span>BUILT WITH CURIOSITY</span>
          <a href="#contact">CONTACT <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}
