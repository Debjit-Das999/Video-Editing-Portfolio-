import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { content } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const { name, tagline, intro } = content.profile;

export const metadata: Metadata = {
  title: `${name} — ${tagline}`,
  description: intro,
  openGraph: {
    title: `${name} — ${tagline}`,
    description: intro,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — ${tagline}`,
    description: intro,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
