import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekky Mulia Lasardi",
  description: "Ekky Mulia Lasardi/Ekky Mulialasardi (Ekky/Kiki) - Personal Portfolio Website showcasing my work, skills, and projects in the field of Computer Science and AI.",
  openGraph: {
    title: "Ekky Mulia Lasardi | Personal Portfolio",
    description: "Explore my portfolio featuring AI-driven solutions, innovative projects, and my journey in technology.",
    url: "https://kymulia.tech", 
    siteName: "Ekky Mulia Lasardi's Portfolio",
    images: [
      {
        url: "https://kymulia.tech/favicon.ico", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Ekky Mulia Lasardi - Personal Portfolio",
      },
    ],
    type: "website",
  },
  // canonical: "https://kymulia.tech", // Replace with actual URL
  robots: "index, follow", // Directs search engines to index the page and follow links
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
        {children}
      </body>
    </html>
  );
}
