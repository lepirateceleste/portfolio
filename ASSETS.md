# ASSETS.md — Assets nécessaires pour la V2

Ce document liste tous les fichiers (images, documents) attendus par le
code déjà en place ou par la direction artistique validée, mais qui
**n'existent pas encore dans `/public`**. Rien n'a été inventé ou
placeholder-généré à leur place — les composants Phase 2+ devront gérer
leur absence proprement (fallback visuel, pas de lien cassé).

Chemins suggérés — à ajuster librement, l'important est de renseigner
les mêmes chemins dans `src/data/*.ts` une fois les fichiers fournis.

## Portrait / Hero

- [ ] `public/images/hero/portrait.jpg` (ou `.webp`) — portrait de Christ
      pour le Hero. Traitement N&B/duotone suggéré par la direction
      artistique, format vertical (ratio ~4:5).
- [ ] Favicon dédié à la nouvelle direction artistique
      (`src/app/favicon.ico` ou `public/favicon.ico` — actuellement absent,
      la V1 réutilisait `avatar.png`, non repris ici).
- [ ] `public/images/og-image.jpg` — image Open Graph par défaut
      (1200×630px recommandé). Référencée dans `layout.tsx` (TODO).

## Projets featured (pages `/projets/[slug]`)

Pour chacun des 6 projets suivants : une cover principale + une petite
galerie complémentaire (3-6 visuels). Aucun visuel n'existe actuellement
(la V1 n'avait qu'un bloc "Aperçu visuel / Mockup" vide).

- [ ] `public/images/projects/raissa/cover.jpg` + galerie
- [ ] `public/images/projects/mamyz/cover.jpg` + galerie
- [ ] `public/images/projects/oracle-immobilier/cover.jpg` + galerie
- [ ] `public/images/projects/aliwax/cover.jpg` + galerie
- [ ] `public/images/projects/federation-gabonaise-natation/cover.jpg` + galerie
- [ ] `public/images/projects/lambano/cover.jpg` + galerie

## Projets secondaires (grille `/projets`)

Une vignette simple suffit pour chacun :

- [ ] `public/images/projects/famien-family-office/cover.jpg`
- [ ] `public/images/projects/journee-carriere/cover.jpg`
- [ ] `public/images/projects/areel-evenements/cover.jpg`
- [ ] `public/images/projects/effuzion-web/cover.jpg`
- [ ] `public/images/projects/identite-visuelle-branding/cover.jpg`

## CV (page `/cv`)

- [ ] `public/cv/christ-yao-communication-design.pdf`
- [ ] `public/cv/christ-yao-ux-ui-product.pdf`
- [ ] `public/cv/christ-yao-web-digital.pdf`

## Bandeau "Projets & collaborations"

- [ ] Éventuels logos/marques si un traitement visuel (pas juste texte) est
      retenu — `public/images/collaborations/*.svg`. Optionnel selon la
      décision finale du composant.

## Données textuelles encore marquées TODO

Voir la section dédiée dans le README et directement dans les fichiers
`src/data/*.ts` — chaque champ incertain y est marqué `"TODO"` ou
commenté `// TODO`. Les principaux :

- Rôle exact de Christ sur Raïssa, Aliwax, Fédération Gabonaise de
  Natation
- Années de réalisation de plusieurs projets
- Contenu complet (brief/approche) de chaque case study
- Lien LinkedIn réel (actuellement générique)
- Confirmation des dates/intitulés de la timeline d'expérience
- Contenu juridique de `/mentions-legales` et `/confidentialite`

---

**Règle de contribution** : quand un asset ci-dessus est fourni, cocher
la case, ajouter le fichier au chemin indiqué (ou au chemin réellement
choisi), puis mettre à jour le champ correspondant dans `src/data/*.ts`
(`coverImage`, `gallery`, etc.). Ne jamais committer d'image ou de PDF
placeholder à la place d'un vrai asset.
