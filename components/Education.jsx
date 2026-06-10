"use client";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Birla Institute of Technology, Mesra",
    location: "Ranchi, Jharkhand",
    year: "2020 — 2024",
    description: "Focused on algorithms, Cloud Architecture, Image Processing, Machine Learning,and software engineering.",
    courses: ["Data Structures", "Operating Systems", "Computer Networks", "Database Systems", "Cloud Computing", "Image Processing", "Machine Learning", "Software Engineering"],
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "S.D.S.M School For Excellence",
    location: "Jamshedpur, Jharkhand",
    year: "2017 — 2019",
    description: "Science stream with Physics, Chemistry, Mathematics and Computer Science.",
    courses: ["English", "Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
  {
    degree: "Secondary (10th)",
    institution: "Baridih High School",
    location: "Jamshedpur, Jharkhand",
    year: "2017",
    description: "Top 10th position in School.",
    courses: ["Mathematics", "Science", "English", "Social Studies", "Hindi", "Computer"],
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "120px 10vw", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <p className="mono" style={{ color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: 16 }}>
          04. EDUCATION
        </p>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 64, letterSpacing: -1 }}>
          Where I <span style={{ color: "var(--accent)" }}>learned.</span>
        </h2>

        <div style={{ position: "relative" }}>

          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background: "var(--border)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {education.map((edu, i) => (
              <div
                key={i}
                style={{
                  paddingLeft: 48,
                  paddingBottom: 64,
                  position: "relative",
                }}
              >
                <div style={{
                  position: "absolute",
                  left: -6,
                  top: 6,
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 10px var(--accent)",
                }} />

                <span className="mono" style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  letterSpacing: 2,
                  display: "block",
                  marginBottom: 12,
                }}>
                  {edu.year}
                </span>

                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "32px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                    <div>
                      <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, marginBottom: 6 }}>
                        {edu.degree}
                      </h3>
                      <p style={{ color: "var(--muted)", fontSize: 14 }}>
                        {edu.institution} — {edu.location}
                      </p>
                    </div>
                  </div>

                  <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                    {edu.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="mono"
                        style={{
                          fontSize: 10,
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                          padding: "3px 10px",
                          letterSpacing: 1,
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}