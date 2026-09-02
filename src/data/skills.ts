import type { SkillCategory } from "@/types/content";

/**
 * Compétences & outils, organisés selon la structure validée pour /a-propos :
 * - 3 catégories principales : Design & Communication, UX/UI & Product, Web & No-code
 * - 1 catégorie complémentaire : Contenu & Motion (pas une catégorie principale)
 *
 * Repris et réorganisé depuis la V1 (colonnes "Design" + "Outils & Logiciels").
 * Les icônes référencées correspondent à des noms lucide-react ; à mapper en Phase 2+.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "design-communication",
    title: "Design & Communication",
    kind: "primary",
    items: [
      { label: "Design de produit" },
      { label: "Identité visuelle" },
      { label: "Stratégie de marque" },
      { label: "Figma", icon: "figma" },
      { label: "Adobe XD" },
      { label: "Suite Adobe (Illustrator / Photoshop)" },
    ],
  },
  {
    id: "ux-ui-product",
    title: "UX/UI & Product",
    kind: "primary",
    items: [
      { label: "Conception UX/UI" },
      { label: "Systèmes de design" },
      { label: "Architecture de l'information" },
      { label: "Prototypage interactif" },
      { label: "Apps mobiles & Web" },
    ],
  },
  {
    id: "web-no-code",
    title: "Web & No-code",
    kind: "primary",
    items: [
      { label: "HTML / CSS" },
      { label: "Tailwind CSS" },
      { label: "Framer" },
      { label: "WordPress" },
      { label: "Carrd" },
    ],
  },
  {
    id: "contenu-motion",
    title: "Contenu & Motion",
    kind: "complementary",
    items: [
      { label: "Logic Pro" },
      { label: "Premiere Pro / CapCut" },
      { label: "Meta Business Suite" },
    ],
  },
];
