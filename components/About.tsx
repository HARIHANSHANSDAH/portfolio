"use client";

const stats = [
  { value: "5+", label: "Domains Explored" },
  { value: "10+", label: "Projects Shipped" },
  { value: "35+", label: "Tech Stack" },
  { value: "∞", label: "Curiosity to Learn" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 10vw", borderTop: "1px solid var(--border)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        {/* Left — Bio */}
        <div>
          <p className="mono" style={{ color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: 16 }}>01. ABOUT</p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 32, letterSpacing: -1 }}>
            Shipping code,<br /><span style={{ color: "var(--accent)" }}>not excuses.</span>
          </h2>
          {/* Bio paragraphs... */}
        </div>

        {/* Right — Stats grid + terminal */}
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)" }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ background: "var(--surface)", padding: "40px 32px" }}>
                <div style={{ fontSize: 52, fontWeight: 800, color: "var(--accent)", letterSpacing: -2 }}>{value}</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginTop: 8, textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Fake terminal */}
          <div style={{ marginTop: 24, background: "#0a0a0a", border: "1px solid var(--border)", padding: "20px 24px" }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div className="mono" style={{ fontSize: 12, lineHeight: 2, color: "var(--muted)" }}>
              <span style={{ color: "var(--accent)" }}>$</span> whoami<br />
              <span style={{ color: "var(--text)" }}>fullstack_dev + devops + ai_enthusiast</span><br />

              <span style={{ color: "var(--accent)" }}>$</span> cat passion.txt<br />
              <span style={{ color: "var(--text)" }}>building_things_that_matter</span><br />

              <span style={{ color: "var(--accent)" }}>$</span> git log --oneline<br />
              <span style={{ color: "var(--text)" }}>10+ projects shipped 🚀</span><br />

              <span style={{ color: "var(--accent)" }}>$</span> echo $STATUS<br />
              <span style={{ color: "var(--text)" }}>open_to_opportunities</span><br />

              <span style={{ color: "var(--accent)" }}>$</span> uname -a<br />
              <span style={{ color: "var(--text)" }}>explorer | quick_adapter | growth_mindset</span><br />

              <span style={{ color: "var(--accent)" }}>$</span> curl -X GET /opportunities<br />
              <span style={{ color: "var(--text)" }}>200 OK — ready_to_contribute</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}