import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredProjects, getProjectBySlug } from "@/data/projects";
import { RoutePlaceholder } from "@/components/ui/RoutePlaceholder";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Seuls les projets `status: "featured"` obtiennent une page dédiée
 * (décision produit validée). Les projets secondaires ne sont jamais
 * générés ici — ils restent sur /projets en modale courte (Phase 2+).
 */
export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary !== "TODO" ? project.summary : undefined,
  };
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.status !== "featured") {
    notFound();
  }

  return (
    <RoutePlaceholder
      eyebrow={project.categoryLabel}
      title={project.title}
      description="Structure de case study (Contexte / Approche / Rôle / Galerie) construite en Phase 2 — voir wireframe validé. Données actuelles issues de /src/data/projects.ts."
    />
  );
}
