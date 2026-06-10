"use client";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 30,
        transition: "background 0.3s",
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(200, 240, 74, 0.07), transparent 80%)`,
      }}
    />
  );
}