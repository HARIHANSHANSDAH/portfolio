"use client";
import { useState } from "react";
import { ExternalLink, GitBranch, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "AutoSaathi Jsr",
    description: "A mobile app built to help users in Jamshedpur find Correct fair",
    tags: ["React Native", "Docker"],
    type: "Frontend",
    featured: true,
    links: { github: "https://github.com/HARIHANSHANSDAH/autosaathi-jsr", live: "http://203.57.85.248:3000/" },
  },
  {
    id: "02",
    title: "Content Generator",
    description: "An AI-powered content generation platform using Grok AI and n8n workflows to automate creation of blogs, social media posts, and Artical.",
    tags: ["Next.js", "n8n", "Docker", "Grok AI"],
    type: "AI/ML",
    featured: true,
    links: { github: "https://github.com/HARIHANSHANSDAH/content-generator", live: "ttp://203.57.85.248:4000/" },
  },
  {
    id: "03",
    title: "Finance Dashboard",
    description: "A comprehensive financial analytics dashboard built with Next.js featuring real-time portfolio tracking and expense management.",
    tags: ["Next.js"],
    type: "Full Stack",
    featured: false,
    links: { github: "https://github.com/HARIHANSHANSDAH/finance_dashboard" },
  },
  {
    id: "04",
    title: "Flutter Workflow Prototype",
    description: "An Android inventory management app built with Flutter that lets you track stock levels, update item statuses in real-time, manage categories, and get low-stock alerts — all from your mobile device.",
    tags: ["Flutter", "Dart"],
    type: "Android Development",
    featured: false,
    links: { github: "https://github.com/HARIHANSHANSDAH/flutter-workflow-prototype", live: "NO" },
  },
  {
    id: "05",
    title: "Coffee Order App",
    description: "A sleek mobile app for ordering coffee from local cafés. Features menu browsing, custom order builder and order via Mail.",
    tags: ["Kotlin",  "Android Studio"],
    type: "Android Development",
    featured: false,
    links: { github: "https://github.com/HARIHANSHANSDAH/ANDROID_DEV/tree/main/Coffee%20App" },
  },
  {
    id: "06",
    title: "Indian currency note detection",
    description: "An Android app designed for visually impaired users that uses the phone camera to instantly detect and identify Indian currency note denominations, announcing the value via text-to-speech so users can independently handle cash.",
    tags: ["Kotlin", "Android Studio"],
    type: "Android Development",
    featured: false,
    links: { github: "NO", live: "NO" },
  },
  {
    id: "07",
    title: "Meme Gallery",
    description: "A React app that fetches the latest and trending memes from Reddit's API and displays them in a clean and scrollable gallery.",
    tags: ["React", "Express", "JavaScript", "JSON"],
    type: "Full Stack",
    featured: false,
    links: { github: "https://github.com/HARIHANSHANSDAH/meme_gallery", live: "NO" },
  },
  {
    id: "08",
    title: "AI Agent for Data Analysis",
    description: "An autonomous AI agent that accepts raw datasets, performs exploratory data analysis, generates visualizations, and produces natural language insights reports automatically.",
    tags: ["React", "Express", "JavaScript", "Gemini AI"],
    type: "Full Stack",
    featured: false,
    links: { github: "https://github.com/HARIHANSHANSDAH/ai_agent_frontend", live: "NO" },
  },
  {
    id: "09",
    title: "Real Estates ML",
    description: "A machine learning model that predicts real estate prices based on location, amenities, and market trends.",
    tags: ["Python", "Scikit-learn", "Pandas", "Numpy", "Matplotlib"],
    type: "AI/ML",
    featured: false,
    links: { github: "https://github.com/HARIHANSHANSDAH/Real_Estates_ML", live: "NO" },
  },
  {
    id: "10",
    title: "Count Counter",
    description: "An Android basketball scoreboard app to track and update points for two teams in real-time during a game with score reset.",
    tags: ["Kotlin", "Android Studio"],
    type: "Android Development",
    featured: false,
    links: { github: "https://github.com/HARIHANSHANSDAH/ANDROID_DEV/tree/main/Count%20Counter", live: "NO" },
  },
  {
    id: "11",
    title: "Comparison of Deep Learning approaches to predict COVID-19 infection",
    description: "A research project comparing CNN, RNN, GUR and LSTM models.",
    tags: ["Python", "TensorFlow", "Matplotlib", "Scikit-learn"],
    type: "AI/ML",
    featured: false,
    links: { github: "NO", live: "NO" },
  },{
    id: "12",
    title: "Chat Bot",
    description: "Real-time chat bot built with Python.",
    tags: ["Python"],
    type: "AI/ML",
    featured: false,
    links: { github: "NO", live: "NO" },
  },
  ,{
    id: "13",
    title: "Best Refuel Station in USA",
    description: "A FAST API that takes your current location and destination as input and returns the most optimized fuel stations along your route, minimizing detour distance and fuel cost for a smarter road trip experience.",
    tags: ["Python", "FastAPI"],
    type: "All",
    featured: false,
    links: { github: "NO", live: "NO" },
  },
  ,{
    id: "14",
    title: "MessangerX",
    description: "A real-time messaging platform with end-to-end encryption built on WebSockets.",
    tags: ["React", "MongoDB", "Express", "JavaScript", "WebSockets"],
    type: "Full Stack",
    featured: false, 
    links: { github: "NO", live: "NO" },
  },
];

const filters = ["All", "Full Stack", "Android Development", "AI/ML"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.type === activeFilter
  );

  return (
    <section id="projects" style={{ padding: "120px 10vw", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p className="mono" style={{ color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: 16 }}>
          03. PROJECTS
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -1 }}>
            Things I&apos;ve <span style={{ color: "var(--accent)" }}>built.</span>
          </h2>
          <div style={{ display: "flex", gap: 8 }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="mono"
                style={{
                  background: activeFilter === f ? "var(--accent)" : "transparent",
                  color: activeFilter === f ? "#000" : "var(--muted)",
                  border: `1px solid ${activeFilter === f ? "var(--accent)" : "var(--border)"}`,
                  padding: "8px 16px",
                  fontSize: 11,
                  letterSpacing: 1,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textTransform: "uppercase",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 1}}>
          {filtered.map((project) => (
            <div
              key={project.id}
              style={{
                padding: "36px",
                position: "relative",
                background: "var(--bg)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0d0d0d")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
            >
              

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <span className="mono" style={{ fontSize: 9, letterSpacing: 2, color: "var(--accent)", background: "var(--accent-dim)", padding: "3px 8px", textTransform: "uppercase" }}>
                  {project.type}
                </span>
                {project.featured && (
                  <span className="mono" style={{ fontSize: 9, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase" }}>
                    ★ Featured
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, letterSpacing: -0.5 }}>
                {project.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
                {project.tags.map((t) => (
                  <span key={t} className="mono" style={{ fontSize: 10, color: "var(--muted)", border: "1px solid var(--border)", padding: "3px 8px" }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* <div style={{ display: "flex", gap: 16 }}>
                <a
                  href={project.links.github && project.links.}
                  style={{ color: "var(--muted)", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  <GitBranch size={14} /> Code
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    style={{ color: "var(--muted)", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    <ExternalLink size={14} /> Live <ArrowRight size={12} />
                  </a>
                )}
              </div> */}
            
            <div style={{ display: "flex", gap: 16 }}>
  {project.links.github && project.links.github !== "NO" && (
    <a
      href={project.links.github}
      style={{ color: "var(--muted)", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      <GitBranch size={14} /> Code
    </a>
  )}
  {project.links.live && project.links.live !== "NO" && (
    <a
      href={project.links.live}
      style={{ color: "var(--muted)", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      <ExternalLink size={14} /> Live <ArrowRight size={12} />
    </a>
  )}
</div>





            </div>
          ))}
        </div>
      </div>
    </section>
    );
}