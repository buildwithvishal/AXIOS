"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { href: "#about", label: "ABOUT" },
  { href: "#domains", label: "DOMAINS" },
  { href: "#journey", label: "JOURNEY" },
  { href: "#events", label: "EVENTS" },
  { href: "#team", label: "TEAM" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-navbar">
      <div className="nav-inner">
        <Link href="/#top" className="nav-brand" aria-label="AXIOS Development Club home">
          <span className="nav-logo-frame">
            <Image
              src="/axios-logo.png"
              alt=""
              width={567}
              height={630}
              sizes="58px"
              preload
              className="nav-logo"
            />
          </span>
          <span className="nav-brand-copy">
            <strong>AXIOS</strong>
            <span>DEVELOPMENT CLUB · IIIT BHOPAL</span>
          </span>
        </Link>

        <nav
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>
            LET’S CONNECT <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            className="nav-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
