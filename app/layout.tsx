import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://ikramagicolio.vercel.app/"
  ),
  title: "a:portfolio | Ikrame Saadi | FullStack Developer | @ikramagic on Github",
  description: "Developer Portfolio",
  keywords: ["Developer", "Portfolio", "Fullstack", "Front-end", "Back-end", "Frontend", "Backend", "Developer Portflio", "ikramagic", "ikrame saadi"],
  openGraph: {
    title: "Ikrame Saadi",
    description: "FullStack Web Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
