/**
 * Placeholder Phase 1 — la homepage complète (Hero, Selected Work,
 * Expertise, etc.) sera construite en Phase 2. Cette page sert uniquement
 * à valider que la fondation technique (layout, tokens, Header/Footer,
 * AmbientGlow/GrainOverlay) fonctionne de bout en bout.
 */
export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-start justify-center gap-4 px-6 py-32 md:px-10">
      <p className="eyebrow">Fondation technique — Phase 1</p>
      <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
        Christ Yao<span className="text-accent">.</span>
      </h1>
      <p className="max-w-xl text-text-secondary">
        Cette page est un placeholder. La homepage complète (Hero, Selected
        Work, Expertise, À propos, Méthode, CTA) sera construite en Phase 2.
      </p>
    </div>
  );
}
