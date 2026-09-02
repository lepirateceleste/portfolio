import type { ProjectContent } from "@/types/content";

/**
 * Source unique de vérité pour tous les projets (featured + secondaires).
 *
 * Règles :
 * - Les 6 projets featured ont un `featuredOrder` (1 à 6) et sont les seuls
 *   à obtenir une page dédiée /projets/[slug] en Phase 2+.
 * - Aucune métrique ("X abonnés générés", "X% de conversion"...) ne doit être
 *   ajoutée ici sans confirmation explicite de Christ. Utiliser `editorialNote`
 *   pour donner du contexte factuel sans revendiquer un résultat non prouvé.
 * - Champs incertains : marquer littéralement "TODO" plutôt que deviner.
 */

export const projects: ProjectContent[] = [
  // ---- FEATURED (ordre définitif validé) ----
  {
    slug: "raissa",
    title: "Raïssa",
    pillars: ["communication-digitale"],
    status: "featured",
    featuredOrder: 1,
    categoryLabel: "Communication digitale / Social Media",
    meta: {
      organisation: "Raïssa",
      annee: "TODO",
      monRole: "TODO", // TODO: préciser le rôle exact de Christ (stratégie ? direction artistique ? design de contenu ?)
      domaines: ["Communication digitale", "Réseaux sociaux"],
    },
    summary: "TODO", // TODO: rédiger un résumé court factuel
    brief: undefined, // TODO
    approche: undefined, // TODO
    resultatVerifie: undefined, // Ne pas inventer — voir editorialNote
    editorialNote:
      "Le compte TikTok accompagné compte plus de 220 000 abonnés. Ce chiffre est donné comme contexte du compte, pas comme un résultat généré par Christ — à formuler avec précaution dans le contenu final.",
  },
  {
    slug: "mamyz",
    title: "Mamyz App",
    pillars: ["ux-ui-product"],
    status: "featured",
    featuredOrder: 2,
    categoryLabel: "UX/UI / Product / FinTech",
    meta: {
      organisation: "Mamyz",
      annee: "TODO",
      monRole: "Lead UX/UI Designer (projet Lambano Groupe)", // repris de la V1, à confirmer
      domaines: ["UX/UI", "Product Design", "FinTech"],
    },
    summary:
      "Conception d'une expérience financière mobile intuitive, sécurisée et accessible.", // repris/reformulé de la V1, à valider
    brief: undefined, // TODO: détailler le contexte complet
    approche:
      "Design system épuré, parcours utilisateurs simplifiés, interface en mode sombre.", // base V1, à enrichir
    resultatVerifie: undefined,
  },
  {
    slug: "oracle-immobilier",
    title: "Oracle Immobilier",
    pillars: ["branding", "web-digital"],
    status: "featured",
    featuredOrder: 3,
    categoryLabel: "Branding / Digital / Web",
    meta: {
      organisation: "Oracle Immobilier",
      annee: "2026", // repris de la V1 (section Expérience), à confirmer
      monRole: "Digital & Visual Branding Designer", // repris de la V1
      domaines: ["Branding", "Digital", "Web"],
    },
    summary:
      "Modernisation de l'image de marque d'une agence immobilière haut de gamme.", // base V1, à enrichir
    brief: undefined, // TODO
    approche: "Refonte du branding, charte graphique, supports digitaux.", // base V1
    resultatVerifie: undefined,
  },
  {
    slug: "aliwax",
    title: "Aliwax",
    pillars: ["branding", "web-digital"],
    status: "featured",
    featuredOrder: 4,
    categoryLabel: "Brand Identity / Webdesign",
    meta: {
      organisation: "Aliwax",
      annee: "TODO",
      monRole: "TODO", // V1 disait "UI/UX & Frontend Developer" — à reconfirmer pour ce nouveau cadrage
      domaines: ["Brand Identity", "Webdesign"],
    },
    summary:
      "Mise en valeur de créations textiles africaines à travers une vitrine moderne.", // base V1, à enrichir
    brief: undefined, // TODO
    approche: undefined, // TODO
    resultatVerifie: undefined,
  },
  {
    slug: "federation-gabonaise-natation",
    title: "Fédération Gabonaise de Natation",
    pillars: ["ux-ui-product"],
    status: "featured",
    featuredOrder: 5,
    categoryLabel: "UX/UI institutionnel",
    meta: {
      organisation: "Fédération Gabonaise de Natation",
      annee: "TODO",
      monRole: "TODO",
      domaines: ["UX/UI", "Institutionnel"],
    },
    summary: "TODO", // TODO: aucun contenu existant en V1 — à rédiger entièrement
    brief: undefined, // TODO
    approche: undefined, // TODO
    resultatVerifie: undefined,
  },
  {
    slug: "lambano",
    title: "Lambano Groupe",
    pillars: ["web-digital", "ux-ui-product"],
    status: "featured",
    featuredOrder: 6,
    categoryLabel: "Web / UX",
    meta: {
      organisation: "Lambano Groupe",
      annee: "2024 — 2026", // repris de la V1 (section Expérience), à confirmer
      monRole: "UX/UI Designer", // repris de la V1
      domaines: ["Web", "UX", "Architecture de l'information"],
    },
    summary:
      "Structuration de l'écosystème numérique multi-services sous une identité cohérente.", // base V1, à enrichir
    brief: undefined, // TODO
    approche:
      "Architecture de l'information repensée, refonte des interfaces, templates modulaires.", // base V1
    resultatVerifie: undefined,
  },

  // ---- SECONDAIRES (grille compacte /projets uniquement, pas de page dédiée) ----
  {
    slug: "famien-family-office",
    title: "Famien Family Office",
    pillars: ["branding", "web-digital"],
    status: "secondary",
    categoryLabel: "Product Designer & Front-End",
    meta: {
      organisation: "Famien Family Office",
      annee: "TODO",
      monRole: "Product Designer & Front-End", // repris de la V1
      domaines: ["Branding", "Front-End"],
    },
    summary:
      "Refonte de l'identité numérique d'un cabinet de gestion de patrimoine privé.", // base V1
    editorialNote:
      "Reste en secondaire tant qu'il n'y a pas assez de contenu/visuels pour une case study forte.",
  },
  {
    slug: "journee-carriere",
    title: "Direction Artistique — Journée Carrière",
    pillars: ["branding"],
    status: "secondary",
    categoryLabel: "Directeur Artistique",
    meta: {
      organisation: "TODO", // TODO: nom exact de l'organisation/événement
      annee: "TODO",
      monRole: "Directeur Artistique", // repris de la V1
      domaines: ["Direction artistique", "Événementiel"],
    },
    summary:
      "Création d'un univers visuel pour un événement d'orientation destiné à la jeunesse.", // base V1
  },
  {
    slug: "areel-evenements",
    title: "Areel Événements",
    pillars: ["web-digital", "ux-ui-product"],
    status: "secondary",
    categoryLabel: "UI/UX & Web Designer",
    meta: {
      organisation: "Areel Événements",
      annee: "TODO",
      monRole: "UI/UX & Web Designer", // repris de la V1
      domaines: ["UX Flow", "Web Design"],
    },
    summary:
      "Parcours d'achat de billets optimisé pour des événements et concerts.", // base V1
  },
  {
    slug: "effuzion-web",
    title: "Effuzion Web",
    pillars: ["web-digital"],
    status: "secondary",
    categoryLabel: "Frontend Developer & Designer",
    meta: {
      organisation: "Effuzion",
      annee: "TODO",
      monRole: "Frontend Developer & Designer", // repris de la V1
      domaines: ["Front-End", "Animations web"],
    },
    summary:
      "Plateforme web interactive avec animations fluides et design minimaliste.", // base V1
  },
  {
    slug: "identite-visuelle-branding",
    title: "Identité Visuelle & Branding",
    pillars: ["branding"],
    status: "secondary",
    categoryLabel: "Brand Designer",
    meta: {
      organisation: "TODO", // TODO: multi-clients — à préciser ou reformuler en projet générique assumé
      annee: "TODO",
      monRole: "Brand Designer",
      domaines: ["Branding", "Stratégie de marque"],
    },
    summary:
      "Création d'identités de marque pour divers porteurs de projets.", // base V1
  },

  // Note : "Production Audiovisuelle & Réalisation" (V1) est volontairement
  // RETIRÉ du portfolio public V2 — positionnement strictement Design & Digital.
];

export const featuredProjects = projects
  .filter((p) => p.status === "featured")
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));

export const secondaryProjects = projects.filter(
  (p) => p.status === "secondary"
);

export function getProjectBySlug(slug: string): ProjectContent | undefined {
  return projects.find((p) => p.slug === slug);
}
