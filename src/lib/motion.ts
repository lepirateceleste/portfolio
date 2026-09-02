/**
 * Système de motion centralisé — durées, easings et variants réutilisables.
 * Cohérent avec le Motion System défini dans la direction artistique validée.
 *
 * Toute nouvelle animation doit puiser dans ces constantes plutôt que
 * d'inventer des valeurs ad hoc, pour garder un rythme homogène sur tout
 * le site.
 */
import type { Variants } from "motion/react";

export const easing = {
  signature: [0.16, 1, 0.3, 1] as const, // ease-out expo — hero, reveals
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const duration = {
  fast: 0.2,
  base: 0.3,
  medium: 0.4,
  slow: 0.6,
  hero: 0.8,
};

/** Fade + translation légère vers le haut — reveal générique au scroll. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.out },
  },
};

/** Fade simple — utilisé notamment comme repli prefers-reduced-motion. */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease: easing.out },
  },
};

/** Container à stagger — à combiner avec fadeUp/fadeOnly sur les enfants. */
export function staggerContainer(staggerChildren = 0.08): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren },
    },
  };
}

/** Reveal hero — légèrement plus lent, easing signature. */
export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.hero, ease: easing.signature },
  },
};

/**
 * Paramètres par défaut pour `whileInView`, réutilisables sur tous les
 * composants de section (reveal une seule fois, léger avant déclenchement).
 */
export const viewportOnce = { once: true, margin: "-15% 0px -15% 0px" };
