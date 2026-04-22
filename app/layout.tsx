import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Now this pulls in our upgraded nav

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ski Barn | Baker, FL",
  description: "Precision Jet Ski Salvage and Performance Diagnostics in Baker, FL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-navy text-white antialiased`}>
        {/* The component handles everything now */}
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}