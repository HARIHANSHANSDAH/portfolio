import type { Metadata } from "next";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: "Hari Hans Hansdah",
  description: "Hari Hans Hansdah's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <head>
          <link rel="icon" type="image/x-icon" href="https://img.icons8.com/?size=100&id=jQqkFm4H3JUl&format=png&color=000000" />
        </head>
        <div className="noise" />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}