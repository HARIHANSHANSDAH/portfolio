import type { Metadata } from "next";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: "Dev Portfolio — Full Stack & DevOps",
  description: "Full Stack Developer & DevOps Engineer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}