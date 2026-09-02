# Christ Yao — Portfolio V2

Portfolio personnel de Christ Yao (Designer Digital & Créatif), refonte
complète de la V1 (HTML monofichier) vers une architecture Next.js
moderne.

**Branche de travail : `portfolio-v2`.** La branche `main` (production)
n'est pas touchée avant validation complète.

## État du projet — Phase 1 (fondation technique)

Cette phase pose la fondation technique uniquement : architecture,
design system, données centralisées, layout global, composants
transverses. **La homepage complète n'est pas encore construite** — voir
`src/app/page.tsx`, qui est un placeholder volontaire en attendant la
Phase 2.

## Stack

- [Next.js](https://nextjs.org) 16 — App Router
- TypeScript
- Tailwind CSS v4 (configuration CSS-first via `@theme`, voir
  `src/app/globals.css`)
- [Motion](https://motion.dev) (succession de Framer Motion — mêmes APIs
  via `motion/react`)

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run lint    # ESLint
```

## Architecture

```
src/
├── app/                    Routes (App Router)
│   ├── layout.tsx          Layout global : police, metadata, Header/Footer/AmbientGlow/GrainOverlay
│   ├── page.tsx            Homepage (placeholder Phase 1)
│   ├── globals.css         Design tokens (couleurs, typographie, motion, keyframes)
│   ├── projets/
│   │   ├── page.tsx        Index /projets (placeholder)
│   │   └── [slug]/page.tsx Case study dynamique, connectée à src/data/projects.ts
│   ├── expertise/page.tsx
│   ├── a-propos/page.tsx
│   ├── cv/page.tsx
│   ├── contact/page.tsx
│   ├── mentions-legales/page.tsx
│   ├── confidentialite/page.tsx
│   └── (future)/journal/   Préparé, NON routé (route group inactif) — voir son README
│
├── components/
│   ├── layout/              Header, Footer
│   ├── motion/               AmbientGlow, GrainOverlay
│   └── ui/                    RoutePlaceholder (composant temporaire Phase 1)
│
├── data/                    Source unique de vérité pour tout le contenu
│   ├── projects.ts           Les 11 projets (6 featured + 5 secondaires)
│   ├── experience.ts         Timeline d'expérience
│   ├── skills.ts              Compétences par catégorie
│   ├── pillars.ts             Les 4 piliers d'expertise
│   ├── site-config.ts         Identité, copy validée, canaux de contact
│   └── navigation.ts          Définition de la nav principale/footer
│
├── lib/
│   ├── motion.ts              Constantes et variants Motion réutilisables
│   └── cn.ts                   Utilitaire de fusion de classes
│
└── types/
    └── content.ts              Types partagés pour toutes les données
```

## Convention TODO — données non confirmées

**Aucune donnée incertaine n'est hardcodée sans avertissement.** Toute
information reprise de la V1 ou non encore validée par Christ est
marquée explicitement dans `src/data/*.ts` :

- Un champ dont la valeur exacte manque est renseigné `"TODO"`.
- Un champ repris de la V1 mais pas reconfirmé porte un commentaire
  `// TODO: ...` ou `// repris de la V1, à confirmer`.
- Les entrées de `src/data/experience.ts` portent toutes
  `unconfirmed: true` tant qu'elles n'ont pas été validées pour la V2.

Voir la liste complète des éléments encore TODO en fin de ce document et
dans `ASSETS.md` pour les assets manquants (images, PDF).

## Design system

Tokens définis dans `src/app/globals.css` (`:root` + `@theme inline`,
syntaxe Tailwind v4) :

- **Couleurs** : fond `#08080a`, surface `#121216`, accent ambre
  `#f59e0b` / `#fbbf24` / `#d97706`, texte en nuances de `stone`.
- **Typographie** : Plus Jakarta Sans (`next/font/google`), échelle
  fluide via `clamp()` pour les titres.
- **Motion** : durées et easings centralisés dans `src/lib/motion.ts`,
  cohérents avec le Motion System validé en direction artistique.
  `prefers-reduced-motion` est respecté globalement (règle CSS dans
  `globals.css` + classes `motion-safe:` sur les animations décoratives).

## Routes

| Route | Statut Phase 1 |
|---|---|
| `/` | Placeholder — Phase 2 |
| `/projets` | Placeholder — Phase 2 |
| `/projets/[slug]` | Connectée aux données, contenu visuel Phase 2 |
| `/expertise` | Placeholder — Phase 2 |
| `/a-propos` | Placeholder — Phase 2 |
| `/cv` | Placeholder — Phase 2 |
| `/contact` | Placeholder — Phase 2 |
| `/mentions-legales` | Placeholder, contenu juridique TODO |
| `/confidentialite` | Placeholder, contenu juridique TODO |
| `/journal` | Préparé, non routé — voir `src/app/(future)/journal/README.md` |

## Assets manquants

Voir [`ASSETS.md`](./ASSETS.md) pour la liste complète des images et PDF
attendus par le code mais pas encore fournis.

## Récupérer le projet / pousser sur GitHub

Ce projet a été développé localement dans le sandbox avec `git init` sur
la branche `portfolio-v2` (aucune branche `main` n'a été créée ni
touchée). Pour le rapatrier sur ton dépôt GitHub :

```bash
# Depuis le dossier récupéré (voir méthode de transfert fournie séparément)
cd portfolio-v2
git remote add origin https://github.com/<ton-compte>/<ton-repo>.git
git push -u origin portfolio-v2
```

Si le dépôt GitHub existe déjà avec une branche `main`, `portfolio-v2`
sera poussée comme branche additionnelle — aucune fusion ni écrasement
de `main` ne se produit automatiquement ; une Pull Request reste
nécessaire pour fusionner, à ton initiative.
