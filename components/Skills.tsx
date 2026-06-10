"use client";

const skillGroups = [
  {
    category: "Languages",
    icon: "◈",
    skills: [
      { name: "C/C++", level: 95 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "Java", level: 75 },
    ],
  },
  {
    category: "Frontend",
    icon: "◈",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: "◉",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express", level: 80 },
      { name: "Django", level: 85 },
      { name: "FastAPI", level: 88 },
    ],
  },
  {
    category: "Databases",
    icon: "◎",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Supabase", level: 83 },
      { name: "Prisma", level: 92 },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "◎",
    skills: [
      { name: "Docker / Kubernetes", level: 90 },
      { name: "AWS / GCP", level: 85 },
      { name: "CI/CD (GitHub Actions)", level: 92 },
    ],
  },
  {
    category: "Tooling",
    icon: "◇",
    skills: [
      { name: "Linux / Bash", level: 90 },
      { name: "Git / GitHub", level: 95 },
      { name: "Nginx / Caddy", level: 82 },
    ],
  },
];

const techStack = [
  { name: "C/C++",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "JSON",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
  { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "WebSocket",   icon: "https://cdn.jsdelivr.net/gh/selfhst/icons/webp/websocket.webp" },
  { name: "Bootstrap",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Django",      icon: "https://img.icons8.com/?size=100&id=IuuVVwsdTi2v&format=png&color=000000" },
  { name: "FastAPI",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Flutter",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Kotlin",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" }, 
  { name: "Docker",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "GCP",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "AWS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Firebase",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }, 
  { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Prisma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "n8n",         icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/n8n.png" }, 
  { name: "Linux",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Terraform",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Nginx",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Figma",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "VS Code",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Jupyter",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },  
  { name: "CodeSandBox",       icon: "https://assets.streamlinehq.com/image/private/w_50,h_50,ar_1/f_auto/v1/icons/1/codesandbox-icon-irmzdb5ge3jbdttfd7y0vl.png/codesandbox-icon-h057iw3goocsnpknp8frxc.png?_a=DATAiZAAZAA0" },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 14, color: "var(--text)" }}>{name}</span>
        {/* <span className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>{level}%</span> */}
      </div>
      {/* <div style={{ height: 2, background: "var(--border)" }}>
        <div style={{ height: "100%", width: `${level}%`, background: "linear-gradient(90deg, var(--accent), rgba(200,240,74,0.4))" }} />
      </div> */}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "120px 10vw", borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p className="mono" style={{ color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: 16 }}>
          02. SKILLS
        </p>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 64, letterSpacing: -1 }}>
          Tools of the <span style={{ color: "var(--accent)" }}>trade.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "var(--border)", marginBottom: 80 }}>
          {skillGroups.map(({ category, icon, skills }) => (
            <div key={category} style={{ background: "var(--bg)", padding: "40px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                <span style={{ fontSize: 20, color: "var(--accent)" }}>{icon}</span>
                <h3 className="mono" style={{ fontSize: 13, letterSpacing: 2, color: "var(--text)", textTransform: "uppercase" }}>
                  {category}
                </h3>
              </div>
              {skills.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          ))}
        </div>

        {/* Tech Stack heading */}
        <h3 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: -1, marginBottom: 48, textAlign: "center" }}>
          TECH <span style={{ color: "var(--accent)" }}>STACK</span>
        </h3>

        {/* Tech Stack grid */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {techStack.map(({ name, icon }) => (
            <div
              key={name}
              style={{
                width: 100,
                height: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                cursor: "default",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background = "var(--accent-dim)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--bg)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img src={icon} alt={name} style={{ width: 40, height: 40, objectFit: "contain" }} />
              <span className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: 1, textAlign: "center" }}>
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}