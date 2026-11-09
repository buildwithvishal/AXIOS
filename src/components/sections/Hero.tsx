"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], [0, 118]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.12]);
  const artOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.18]);

  return (
    <motion.section ref={heroRef} id="top" className="hero-section">
      <div className="ice-grid" />
      <div className="ice-glow glow-one" />
      <div className="ice-glow glow-two" />
      <span className="hero-orb hero-orb--one" aria-hidden="true" />
      <span className="hero-orb hero-orb--two" aria-hidden="true" />
      <span className="hero-orb hero-orb--three" aria-hidden="true" />

      <div className="hero-topline">
        <span><i /> THE TECHNOLOGY COMMUNITY</span>
        <span>IIIT BHOPAL | EST. 2024</span>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          style={reducedMotion ? undefined : { opacity: copyOpacity }}
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 1 }}
        >
          <p className="hero-kicker">IDEAS INTO INNOVATION</p>

          <h1>
            THINK
            <br />
            <span className="outline-word">CREATE.</span>
            <br />
            REPEAT<span className="blue-dot">.</span>
          </h1>

          <p className="hero-description">
            A community of curious minds, creative thinkers and
            technology enthusiasts building what comes next.
          </p>

          <div className="hero-actions">
            <a href="#domains" className="ice-button">
              EXPLORE AXIOS <span>↗</span>
            </a>
            <a href="#about" className="text-button">
              DISCOVER OUR STORY
            </a>
          </div>
        </motion.div>

        <motion.div
          className="ice-art"
          style={reducedMotion ? undefined : { y: artY, opacity: artOpacity }}
        >
          <motion.div
            className="axios-mark-wrap"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.85, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 1.3 }}
          >
            <svg
              className="axios-mark-svg"
              viewBox="0 0 440 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="AXIOS triangular glass symbol"
            >
              <defs>
                <linearGradient id="leftGlass" x1="226" y1="22" x2="115" y2="276" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#102438" />
                  <stop offset=".24" stopColor="#192F43" />
                  <stop offset=".46" stopColor="#253E52" />
                  <stop offset=".65" stopColor="#142B40" />
                  <stop offset=".84" stopColor="#1E374B" />
                  <stop offset="1" stopColor="#102438" />
                </linearGradient>

                <linearGradient id="rightGlass" x1="267" y1="89" x2="373" y2="342" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#102438" />
                  <stop offset=".24" stopColor="#192F43" />
                  <stop offset=".46" stopColor="#253E52" />
                  <stop offset=".65" stopColor="#142B40" />
                  <stop offset=".84" stopColor="#1E374B" />
                  <stop offset="1" stopColor="#102438" />
                </linearGradient>

                <linearGradient id="baseGlass" x1="185" y1="290" x2="185" y2="342" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#213C52" />
                  <stop offset=".32" stopColor="#142B40" />
                  <stop offset=".68" stopColor="#1E374B" />
                  <stop offset="1" stopColor="#102438" />
                </linearGradient>
              </defs>

              <g
                stroke="#7890A3"
                strokeOpacity=".84"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              >
                {/* Three separate glass pieces, shaped to match the reference mark. */}
                <path
                  d="M226 22 L257 76 L145 276 L85 276 Z"
                  fill="url(#leftGlass)"
                />
                <path
                  d="M267 89 L235 147 L343 342 L403 342 Z"
                  fill="url(#rightGlass)"
                />
                <path
                  d="M76 290 L302 290 L331 342 L50 342 Z"
                  fill="url(#baseGlass)"
                />
              </g>

              <g
                fill="none"
                stroke="#D5E1EA"
                strokeOpacity=".56"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M230 30 L248 75 L100 265" />
                <path d="M265 98 L241 146 L350 335" />
                <path d="M80 295 H287" />
              </g>

              <g
                fill="none"
                stroke="#8EA3B4"
                strokeOpacity=".46"
                strokeWidth="1.4"
                strokeLinecap="round"
              >
                <path d="M242 66 L157 221" />
                <path d="M251 119 L342 281" />
                <path d="M62 329 H257" />
              </g>
            </svg>
          </motion.div>

          <div className="axios-wordmark">AXIOS</div>

          <motion.div
            className="floating-club-title"
            animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            DEVELOPMENT CLUB
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-footer">
        <span>DESIGN | DEVELOP | INNOVATE</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </motion.section>
  );
}
