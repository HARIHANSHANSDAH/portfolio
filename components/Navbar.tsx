"use client";
import { useState, useEffect } from "react";

const links = ["about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "20px 40px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s",
    }}>
      <a href="#" className="mono" style={{ color: "var(--accent)", fontSize: 14, letterSpacing: 2, textDecoration: "none" }}>
        &lt;HariHansHansdah /&gt;
      </a>
      <div style={{ display: "flex", gap: 32 }}>
        {links.map((l) => (
          <a key={l} href={`#${l}`} onClick={() => setActive(l)} className="mono"
            style={{
              fontSize: 12, textDecoration: "none",
              color: active === l ? "var(--accent)" : "var(--muted)",
              letterSpacing: 1, transition: "color 0.2s", textTransform: "uppercase",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = active === l ? "var(--accent)" : "var(--muted)")}
          >{l}</a>
        ))}
      </div>
    </nav>
  );
}