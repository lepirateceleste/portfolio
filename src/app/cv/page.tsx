import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "CV",
  description: "CV interactif — plusieurs versions selon le domaine.",
};

export default function CvPage() {
  return (
    <RoutePlaceholder
      eyebrow="Mon CV"
      title="Trois versions, un parcours."
      description="Sélecteur Communication & Design / UX/UI & Product / Web & Digital — construit en Phase 2. PDFs à fournir, voir ASSETS.md."
    />
  );
}
