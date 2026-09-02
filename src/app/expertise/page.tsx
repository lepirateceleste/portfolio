import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Les 4 piliers : Branding, Communication digitale, UX/UI & Product, Web.",
};

export default function ExpertisePage() {
  return (
    <RoutePlaceholder
      eyebrow="Ce que je fais"
      title="Expertise."
      description="Détail des 4 piliers — construit en Phase 2. Données déjà centralisées dans /src/data/pillars.ts."
    />
  );
}
