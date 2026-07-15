import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { IntroLoader } from "@/components/motion/IntroLoader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { GlobalSakura } from "@/components/ui/SakuraParticles";
import { PetalCursor } from "@/components/ui/PetalCursor";
import { siteConfig } from "@/data/site";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Premium Esports`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg">
      <body
        className={`${bebasNeue.variable} ${outfit.variable} ${geist.variable} min-h-screen bg-bg font-sans text-foreground antialiased`}
      >
        <SmoothScrollProvider>
          <IntroLoader />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <GlobalSakura />
          <PetalCursor />
          <div className="noise-overlay" aria-hidden />
          <Navbar />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
