import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, LinkedIn, Behance, WhatsApp.",
};

export default function ContactPage() {
  return (
    <RoutePlaceholder
      eyebrow="Contact"
      title="Parlons de votre projet ou de votre équipe."
      description="Canaux de contact directs (email/LinkedIn/Behance en priorité, WhatsApp en secondaire) — construit en Phase 2."
    />
  );
}
