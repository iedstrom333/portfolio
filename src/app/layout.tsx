import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ina Edstrom — AI Researcher & Software Engineer",
  description:
    "Portfolio of Ina Edstrom: AI researcher, national pole vault champion, published author, and MS Computer Science graduate based in Austin, TX.",
  keywords: [
    "Ina Edstrom",
    "AI researcher",
    "machine learning",
    "software engineer",
    "pole vault",
    "React",
    "Python",
    "portfolio",
  ],
  authors: [{ name: "Ina Edstrom" }],
  openGraph: {
    title: "Ina Edstrom — AI Researcher & Software Engineer",
    description:
      "AI researcher, national pole vault champion, published IEEE author, and MS Computer Science graduate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
