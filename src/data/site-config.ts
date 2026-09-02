import type { ContactChannel } from "@/types/content";

/**
 * Configuration centrale du site — identité, copy validée, canaux de contact.
 * Toute chaîne encore incertaine est marquée TODO.
 */
export const siteConfig = {
  name: "Christ Yao",
  title: "Designer Digital & Créatif",
  pillarsLine:
    "Branding • Communication digitale • UX/UI & Product • Web",
  tagline:
    "Je transforme des idées et des besoins métiers en identités, contenus et expériences digitales clairs, cohérents et utiles.",
  location: "Basé à Abidjan · Ouvert aux opportunités",
  url: "https://christyao.website", // TODO: confirmer l'URL définitive de la V2 (peut différer de la V1)
  defaultLocale: "fr" as const,
  // Préparé pour une future version anglaise sans restructuration :
  supportedLocales: ["fr"] as const, // "en" à ajouter en Phase future

  hero: {
    ctaPrimary: { label: "Voir mes projets", href: "/projets" },
    ctaSecondary: { label: "Télécharger mon CV", href: "/cv" },
  },

  finalCta: {
    heading: "Une opportunité, un projet ou une collaboration ?",
    ctaPrimary: { label: "Me contacter", href: "/contact" },
    ctaSecondary: { label: "Voir mon CV", href: "/cv" },
  },

  socialProofLabel: "Projets & collaborations",
} as const;

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "christmarvin2003@gmail.com", // repris de la V1
    href: "mailto:christmarvin2003@gmail.com",
    priority: "primary",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "TODO", // TODO: la V1 pointait vers linkedin.com générique — remplacer par le vrai profil
    href: "https://www.linkedin.com", // TODO: lien réel à confirmer
    priority: "primary",
  },
  {
    id: "behance",
    label: "Behance",
    value: "christyaoux", // repris de la V1
    href: "https://www.behance.net/christyaoux",
    priority: "primary",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+225 05 84 05 12 18", // repris de la V1
    href: "https://wa.me/2250584051218?text=Bonjour%20Christ%2C%20j%27ai%20vu%20votre%20portfolio%20et%20je%20souhaite%20échanger.",
    priority: "secondary",
  },
];
