import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "À propos",
  description: "Parcours, expérience et compétences de Christ Yao.",
};

export default function AProposPage() {
  return (
    <RoutePlaceholder
      eyebrow="À propos"
      title="Le parcours."
      description="Bio détaillée, timeline et compétences par catégorie (Design & Communication, UX/UI & Product, Web & No-code, Contenu & Motion) — construit en Phase 2."
    />
  );
}
