import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <RoutePlaceholder
      eyebrow="Légal"
      title="Mentions légales."
      // TODO: contenu juridique réel à rédiger/fournir avant publication
      description="Contenu à rédiger — TODO."
    />
  );
}
