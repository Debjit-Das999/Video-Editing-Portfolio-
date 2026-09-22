import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { content } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
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
    <html lang="en" className={jakarta.variable}>
      <body>
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
