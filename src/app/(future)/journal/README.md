# /journal — préparé, non activé en V1

Ce dossier est volontairement placé dans un route group `(future)` — les
parenthèses empêchent Next.js de le traiter comme un segment d'URL actif,
donc **aucune route `/journal` n'est publiée en V1**, conformément à la
décision produit validée.

## Pour activer /journal plus tard (Phase future)

1. Déplacer ce dossier de `src/app/(future)/journal` vers `src/app/journal`.
2. Créer `src/app/journal/page.tsx` (index) et `src/app/journal/[slug]/page.tsx`
   (article).
3. Créer `src/data/journal.ts` sur le même modèle que `src/data/projects.ts`
   (source unique de vérité, champs TODO explicites tant que le contenu
   n'est pas rédigé).
4. Ajouter l'entrée correspondante dans `src/data/navigation.ts`
   (`mainNav`) pour qu'elle apparaisse dans le Header/Footer.

Aucun contenu de Journal n'existe à ce stade (Phase 1) — cette note sert
uniquement à documenter le chemin d'activation.
