import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ExpertCTA from "../components/ExpertCTA";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThirdWay - Re-shaping Cities, Transforming Communities",
  description: "As a land bank company, we lead the way in urban land development, crafting innovative and sustainable communities that redefine modern living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ExpertCTA />
        <Navbar />
        <div className="pt-28">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
