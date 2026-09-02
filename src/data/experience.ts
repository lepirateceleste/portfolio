import type { ExperienceEntry } from "@/types/content";

/**
 * Timeline d'expérience — source unique de vérité.
 *
 * Ces entrées sont reprises telles qu'affichées dans la V1 (index.html).
 * Elles n'ont PAS été reconfirmées dans le cadre de cette refonte : chaque
 * entrée est marquée `unconfirmed: true` tant que Christ ne les a pas
 * validées explicitement pour la V2. Ne jamais retirer ce flag sans
 * confirmation directe.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "marvin-studio",
    period: "2025 — Présent",
    role: "Fondateur & Directeur Créatif",
    organisation: "Marvin Studio",
    unconfirmed: true,
  },
  {
    id: "oracle-immobilier",
    period: "2026",
    role: "Digital & Visual Branding Designer",
    organisation: "Oracle Immobilier",
    unconfirmed: true,
  },
  {
    id: "lambano-groupe",
    period: "2024 — 2026",
    role: "UX/UI Designer",
    organisation: "Lambano Groupe",
    unconfirmed: true,
  },
  {
    id: "freelance",
    period: "2023 — Présent",
    role: "UI/UX & Frontend Developer",
    organisation: "Freelance",
    unconfirmed: true,
  },
];
