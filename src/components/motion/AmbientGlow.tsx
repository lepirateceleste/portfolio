/**
 * AmbientGlow — orbes lumineuses ambre animées en arrière-plan.
 * Repris et affiné depuis la V1 (glow-1/2/3, blob). Purement décoratif :
 * ne doit jamais transporter de contenu ni bloquer les interactions
 * (pointer-events-none, aria-hidden).
 *
 * Respecte prefers-reduced-motion via la classe .grain / animations
 * neutralisées globalement dans globals.css (voir la règle
 * @media (prefers-reduced-motion: reduce)).
 */
export function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-40 -left-20 h-[36rem] w-[36rem] rounded-full opacity-40 blur-[110px] motion-safe:animate-glow-1"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.9) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full opacity-30 blur-[110px] motion-safe:animate-glow-2"
        style={{
          background:
            "radial-gradient(circle, rgba(217,119,6,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full opacity-25 blur-[110px] motion-safe:animate-glow-3"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.7) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
