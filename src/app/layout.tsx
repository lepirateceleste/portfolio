import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { GrainOverlay } from "@/components/motion/GrainOverlay";
import { siteConfig } from "@/data/site-config";

/**
 * Plus Jakarta Sans est auto-hébergée (fichier variable woff2 dans
 * /public/fonts) plutôt que chargée via next/font/google. Choix délibéré :
 * évite une dépendance réseau à l'exécution/au build vers
 * fonts.googleapis.com, ce qui est aussi une meilleure pratique de
 * performance (déjà recommandée dans l'audit V1 — moins de requêtes
 * bloquantes tierces). Fichier source : @fontsource-variable/plus-jakarta-sans.
 */
const plusJakartaSans = localFont({
  src: "../../public/fonts/plus-jakarta-sans-variable.woff2",
  variable: "--font-plus-jakarta-sans",
  weight: "200 800",
  display: "swap",
});

// TODO: confirmer l'URL définitive de production avant de publier ces metadata
// (siteConfig.url reprend actuellement l'URL de la V1 par défaut).
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
    // TODO: image OG dédiée — voir ASSETS.md (og-image.jpg manquant)
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
  },
  // TODO: favicon dédié à la nouvelle direction artistique — voir ASSETS.md
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <AmbientGlow />
        <GrainOverlay />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
