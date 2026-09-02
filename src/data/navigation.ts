/**
 * Définition centrale des routes de navigation principale.
 * /journal est préparé (voir app/(routes future)) mais volontairement
 * absent de cette liste — non affiché en V1.
 */
export interface NavItem {
  order: number;
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { order: 1, label: "Projets", href: "/projets" },
  { order: 2, label: "Expertise", href: "/expertise" },
  { order: 3, label: "À propos", href: "/a-propos" },
  { order: 4, label: "CV", href: "/cv" },
];

export const footerNav = {
  quickLinks: mainNav,
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
  ],
};
