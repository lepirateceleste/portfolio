/**
 * Types partagés pour les données de contenu centralisées.
 *
 * Convention TODO : tout champ dont la valeur n'est pas confirmée doit
 * être renseigné avec la chaîne "TODO" (ou une valeur explicitement
 * commentée // TODO: ...) plutôt que d'être deviné ou inventé.
 * Voir /src/data/README.md pour le détail de cette convention.
 */

export type Pillar =
  | "branding"
  | "communication-digitale"
  | "ux-ui-product"
  | "web-digital";

export type ProjectStatus = "featured" | "secondary";

export interface ProjectMeta {
  /** Nom de l'organisation ou du projet — remplace l'ancien champ rigide "Client" */
  organisation: string;
  /** Année de réalisation. "TODO" si non confirmée. */
  annee: string;
  /** Rôle exact de Christ sur ce projet — jamais générique, jamais survendu. */
  monRole: string;
  /** Domaines couverts par le projet (peut recouper plusieurs piliers). */
  domaines: string[];
}

export interface ProjectContent {
  /** Slug utilisé dans l'URL /projets/[slug] pour les projets featured. */
  slug: string;
  title: string;
  /** Piliers associés — sert au filtrage sur /projets. */
  pillars: Pillar[];
  status: ProjectStatus;
  /** Ordre d'affichage parmi les projets featured (1-6). Ignoré si secondary. */
  featuredOrder?: number;
  /** Catégorie courte affichée sous le titre (ex. "Communication digitale / Social Media"). */
  categoryLabel: string;
  meta: ProjectMeta;
  /** Résumé court utilisé sur les cartes (home, /projets). */
  summary: string;
  /** Contenu long de la case study — vide/TODO tant que non rédigé. */
  brief?: string;
  approche?: string;
  /**
   * Contexte chiffré ou résultat, UNIQUEMENT si vérifiable.
   * Ne jamais inventer une métrique. Laisser undefined si aucune donnée fiable.
   */
  resultatVerifie?: string;
  /** Chemins d'assets attendus — peuvent ne pas encore exister, voir ASSETS.md. */
  coverImage?: string;
  gallery?: string[];
  /** Lien externe vers le projet en ligne, si disponible et pertinent. */
  externalUrl?: string;
  /** Précisions ou avertissements éditoriaux (ex. contexte de métrique tierce). */
  editorialNote?: string;
}

export interface ExperienceEntry {
  id: string;
  /** Période affichée telle quelle (ex. "2025 — Présent"). "TODO" si incertaine. */
  period: string;
  role: string;
  organisation: string;
  /** true si la donnée doit encore être confirmée par Christ avant publication. */
  unconfirmed?: boolean;
}

export type SkillCategoryId =
  | "design-communication"
  | "ux-ui-product"
  | "web-no-code"
  | "contenu-motion";

export interface SkillItem {
  label: string;
  /** Nom d'icône (lucide-react) si applicable. */
  icon?: string;
}

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  /** "primary" pour les 3 catégories principales, "complementary" pour Contenu & Motion. */
  kind: "primary" | "complementary";
  items: SkillItem[];
}

export interface PillarDefinition {
  id: Pillar;
  order: number;
  title: string;
  shortDescription: string;
  tags: string[];
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  priority: "primary" | "secondary";
}
