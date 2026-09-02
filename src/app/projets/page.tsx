import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Projets",
  description: "Tous les projets — sélection featured et secondaires.",
};

export default function ProjetsPage() {
  return (
    <RoutePlaceholder
      eyebrow="Portfolio"
      title="Tous les projets."
      description="Grille filtrable des projets featured et secondaires — construite en Phase 2, voir wireframe /projets validé."
    />
  );
}
