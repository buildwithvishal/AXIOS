"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="ice-grid" />
      <div className="ice-glow glow-one" />
      <div className="ice-glow glow-two" />

      <div className="hero-topline">
        <span><i /> THE TECHNOLOGY COMMUNITY</span>
        <span>IIIT BHOPAL | EST. 2024</span>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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

        <div className="ice-art">
          <motion.div
            className="axios-mark-wrap"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.3 }}
          >
            <svg
              className="axios-mark-svg"
              viewBox="0 0 377 297"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="AXIOS triangular glass symbol"
            >
              <defs>
                <linearGradient id="leftGlass" x1="80" y1="15" x2="180" y2="220" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#102438" />
                  <stop offset=".35" stopColor="#526F84" />
                  <stop offset=".55" stopColor="#A4B9C8" />
                  <stop offset=".8" stopColor="#29475F" />
                  <stop offset="1" stopColor="#102438" />
                </linearGradient>

                <linearGradient id="rightGlass" x1="230" y1="70" x2="330" y2="260" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#102438" />
                  <stop offset=".35" stopColor="#526F84" />
                  <stop offset=".55" stopColor="#A4B9C8" />
                  <stop offset=".8" stopColor="#29475F" />
                  <stop offset="1" stopColor="#102438" />
                </linearGradient>

                <linearGradient id="baseGlass" x1="30" y1="235" x2="250" y2="275" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#102438" />
                  <stop offset=".4" stopColor="#526F84" />
                  <stop offset=".65" stopColor="#A4B9C8" />
                  <stop offset="1" stopColor="#29475F" />
                </linearGradient>
              </defs>

              <g
                stroke="#EAF4FA"
                strokeWidth="2"
                strokeLinejoin="round"
              >
                {/* Left glass piece */}
                <path
                  d="M60 218 L198 16 L224 56 L111 218 Z"
                  fill="url(#leftGlass)"
                />

                {/* Right glass piece */}
                <path
                  d="M218 78 L244 45 L360 230 L303 230 Z"
                  fill="url(#rightGlass)"
                />

                {/* Bottom glass piece */}
                <path
                  d="M30 240 L250 240 L225 286 L5 286 Z"
                  fill="url(#baseGlass)"
                />
              </g>

              <g
                stroke="#FFFFFF"
                strokeOpacity=".3"
                strokeWidth="1.5"
                fill="none"
              >
                <path d="M198 16 L224 56 L60 218" />
                <path d="M218 78 L244 45 L360 230" />
                <path d="M30 240 L250 240 L5 286" />
              </g>
            </svg>
          </motion.div>

          <div className="axios-wordmark">AXIOS</div>

          <motion.div
            className="floating-club-title"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            DEVELOPMENT CLUB
          </motion.div>
        </div>
      </div>

      <div className="hero-footer">
        <span>DESIGN | DEVELOP | INNOVATE</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
