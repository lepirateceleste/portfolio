import type { PillarDefinition } from "@/types/content";

/**
 * Les 4 piliers d'expertise — positionnement validé :
 * "Christ Yao — Designer Digital & Créatif"
 * Branding • Communication digitale • UX/UI & Product • Web
 */
export const pillars: PillarDefinition[] = [
  {
    id: "branding",
    order: 1,
    title: "Branding & identité visuelle",
    shortDescription: "TODO", // TODO: rédiger une description courte et factuelle
    tags: ["Logo", "Charte graphique", "Système d'identité"],
  },
  {
    id: "communication-digitale",
    order: 2,
    title: "Communication digitale",
    shortDescription: "TODO", // TODO
    tags: ["Réseaux sociaux", "Stratégie de contenu", "Direction artistique"],
  },
  {
    id: "ux-ui-product",
    order: 3,
    title: "UX/UI & Product",
    shortDescription: "TODO", // TODO
    tags: ["Design de produit", "Prototypage", "Design system"],
  },
  {
    id: "web-digital",
    order: 4,
    title: "Web & Digital",
    shortDescription: "TODO", // TODO
    tags: ["Sites web", "No-code", "Front-end"],
  },
];
