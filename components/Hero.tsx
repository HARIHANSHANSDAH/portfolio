"use client";
import { useEffect, useState } from "react";
import ProfilePic from "@/assets/hari.png";

const ArrowDown = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const roles = ["Full Stack Developer", "DevOps Engineer", "Cloud Engineer", "CI/CD Specialist", "Android Developer", "Python Developer", "AI/ML Developer"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="grid-bg" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 10vw 0 10vw", position: "relative" }}>
      {/* Decorative SVG circles top-right */}
      <div style={{ position: "absolute", top: 80, right: 80, opacity: 0.15 }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--accent)" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="var(--accent)" strokeWidth="0.5" />
        </svg>
      </div>

        <div className="name-n-photo" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 60  }}>
          <div style={{ maxWidth: 800, flex: 1 }}>
              <p className="mono" style={{ color: "var(--accent)", fontSize: 13, letterSpacing: 3, marginBottom: 24 }}>// HELLO WORLD</p>
              <h1 
              style={{ fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: -2, marginBottom: 16 }}>
                Hari<br />
              <span style={{ color: "var(--accent)" }}>Hans</span>
                <br />
                Hansdah
              </h1>
              <div style={{ fontSize: "clamp(18px, 2.5vw, 28px)", color: "var(--muted)", marginBottom: 40, minHeight: "1.4em" }}>
                <span style={{ color: "var(--text)" }}>{displayed}</span>
                <span style={{ color: "var(--accent)", animation: "blink 1s infinite" }}>_</span>
              </div>
              <p style={{ maxWidth: 480, color: "var(--muted)", lineHeight: 1.7, fontSize: 16, marginBottom: 48 }}>
                Passionate about building things from scratch. I write code, break things, fix them, and ship fast.
              </p>
              <div style={{ display: "flex", gap: 16 }}>
                <a href="#projects" style={{ background: "var(--accent)", color: "#000", padding: "14px 32px", fontWeight: 700, fontSize: 13, letterSpacing: 2, textDecoration: "none", textTransform: "uppercase", fontFamily: "'Space Mono', monospace" }}>View Work</a>
                <a href="#contact" style={{ border: "1px solid var(--border-hover)", color: "var(--text)", padding: "14px 32px", fontWeight: 700, fontSize: 13, letterSpacing: 2, textDecoration: "none", textTransform: "uppercase", fontFamily: "'Space Mono', monospace" }}>Contact Me</a>
              </div>
            </div>

            <div className="photoo" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <img src={ProfilePic.src} alt="Profile Photo" style={{ width: "80%", height: "auto" }} />
            </div>
        </div>
            


      
      <a href="#about" style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", color: "var(--muted)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textDecoration: "none", animation: "float 2s infinite" }}>
        <span className="mono" style={{ fontSize: 10, letterSpacing: 2 }}>SCROLL</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}