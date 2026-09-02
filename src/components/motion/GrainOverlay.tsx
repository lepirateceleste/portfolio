/**
 * GrainOverlay — texture de bruit subtile en surimpression.
 * Reprend le principe de grain SVG de la V1 (feTurbulence, opacité 0.03).
 * Purement décoratif, non interactif.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="grain pointer-events-none fixed inset-0 -z-10 opacity-60"
    />
  );
}
