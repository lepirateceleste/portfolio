type ClassValue = string | number | null | false | undefined;

/**
 * Fusionne des classes conditionnelles. Volontairement minimal (pas de
 * dépendance clsx/tailwind-merge en Phase 1) — à remplacer par
 * `tailwind-merge` si des conflits de classes apparaissent en Phase 2+.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
