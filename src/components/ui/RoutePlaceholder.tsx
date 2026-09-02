interface RoutePlaceholderProps {
  eyebrow: string;
  title: string;
  description: string;
}

/**
 * Placeholder générique pour les routes créées en Phase 1 mais dont le
 * contenu réel arrive en Phase 2+. Permet de valider le routing et le
 * layout sans construire prématurément le design final de chaque page.
 */
export function RoutePlaceholder({
  eyebrow,
  title,
  description,
}: RoutePlaceholderProps) {
  return (
    <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-start justify-center gap-4 px-6 py-32 md:px-10">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
        {title}
      </h1>
      <p className="max-w-xl text-text-secondary">{description}</p>
    </div>
  );
}
