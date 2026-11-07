"use client";

export default function Navbar() {
  return (
    <header className="site-navbar">
      <a href="/" className="nav-brand">
        <img
          src="/axios-logo.png"
          alt="AXIOS Development Club"
          className="nav-logo"
        />
      </a>

      <nav className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#domains">DOMAINS</a>
        <a href="#events">EVENTS</a>
        <a href="#team">OUR TEAM</a>
      </nav>

      <a href="#contact" className="nav-contact">
        LET'S CONNECT <span>↗</span>
      </a>

      <style jsx>{`
        .site-navbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 82px;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 20;
          border-bottom: 1px solid rgba(255,255,255,.65);
          background: rgba(241,249,253,.55);
          backdrop-filter: blur(24px) saturate(150%);
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          box-shadow: 0 5px 25px rgba(75,133,164,.05);
        }
        .nav-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .nav-logo {
          width: 112px;
          height: 58px;
          object-fit: contain;
          object-position: left center;
        }
        .nav-links {
          display: flex;
          gap: 34px;
        }
        .nav-links a, .nav-contact {
          color: #647d8e;
          text-decoration: none;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .12em;
          transition: color .2s ease;
        }
        .nav-links a:hover, .nav-contact:hover {
          color: #2996ca;
        }
        .nav-contact {
          color: #29485e;
          padding: 12px 15px;
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,.95);
          background: rgba(255,255,255,.5);
          box-shadow: 0 4px 14px rgba(72,132,165,.08), inset 0 1px 1px white;
        }
        .nav-contact span {
          margin-left: 10px;
          color: #51aeda;
          font-size: 14px;
        }
        @media (max-width: 700px) {
          .site-navbar { height: 70px; }
          .nav-links { display: none; }
          .nav-logo { width: 100px; height: 52px; }
          .nav-contact { font-size: 8px; padding: 10px; }
        }
      `}</style>
    </header>
  );
}
