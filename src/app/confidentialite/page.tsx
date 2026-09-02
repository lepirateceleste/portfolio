import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <RoutePlaceholder
      eyebrow="Légal"
      title="Confidentialité."
      // TODO: politique de confidentialité réelle à rédiger/fournir avant publication
      description="Contenu à rédiger — TODO."
    />
  );
}
