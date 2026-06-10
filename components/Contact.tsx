"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      icon: <img src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-webp@latest/dark/github.webp" alt="GitHub" style={{ width: 20, height: 20, objectFit: "contain" }} />,
      label: "GitHub",
      href: "https://github.com/harihanshansdah",
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/webp/linkedin-light.webp" alt="LinkedIn" style={{ width: 20, height: 20, objectFit: "contain" }} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harihanshansdah/",
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/webp/x-light.webp" alt="X" style={{ width: 20, height: 20, objectFit: "contain" }} />,
      label: "Twitter",
      href: "https://x.com/harihanshansdah",
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/webp/gmail-light.webp" alt="Email" style={{ width: 20, height: 20, objectFit: "contain" }} />,
      label: "Email",
      href: "mailto:hharihans0405@gmail.com",
    },
  ];

  const inputStyle = {
    width: "100%",
    background: "#0a0a0a",
    border: "1px solid var(--border)",
    color: "var(--text)",
    padding: "14px 16px",
    fontSize: 14,
    fontFamily: "'Syne', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "120px 10vw", borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>

   
        <div>
          <p className="mono" style={{ color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: 16 }}>
            05. CONTACT
          </p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: -1 }}>
            Let&apos;s build<br />
            <span style={{ color: "var(--accent)" }}>something.</span>
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 15, marginBottom: 40 }}>
            Open to full-time roles, freelance projects, and interesting collaborations.
            If you have a problem that needs solving — let&apos;s talk.
          </p>

          <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
            {socials.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 44, height: 44,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.background = "var(--accent-dim)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          <div style={{ padding: "24px", background: "var(--bg)", border: "1px solid var(--border)" }}>
            <p className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>CURRENT STATUS</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
              <span style={{ fontSize: 14, color: "var(--text)" }}>Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}