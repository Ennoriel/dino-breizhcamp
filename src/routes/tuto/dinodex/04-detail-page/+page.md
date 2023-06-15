---
layout: tuto
tuto: dinodex
slug: 04-detail-page
title: Page de détails d'un dinosaure
---

<script>
  import CodeDetailPage from './CodeDetailPage.md';
</script>

## Créer une page dédié pour chaque dinosaure

Nous allons afficher la liste avec des informations limitées pour chaque dinosaure et pour chaque dinosaure, une page dédiée, plus complète. Pour ce faire, il faut créer une route avec un **paramètre**. Rien de plus simple, il faut créer un dossier avec un nom de paramètre entre crochets : `/routes/dinodex/[name]`.

Vous pouvez alors créer le fichier `+page.svelte`et `+page.server.ts`. Le paramètre `name` sera disponible via l'argument `params` :

```typescript
import dinos from '$lib/server/dino.json';
import type { Dino } from '../utils.js';

export const load = async ({ params }) => {
	// vous pouvez utiliser params.name
	return;
};
```

Je vous laisse réfléchir 5 minutes au filtrage nécessaire et ce qu'il faut retourner au front.

Dans mon cas, j'ai directement utilisé le même composant `DinoCard` mais on pourrait imaginer une propriété de type booléen `fullDisplay` qui dans le cas du composant utilisé dans la liste est initialisé à `false` et dans la route dédiée à `true`.

> Le paramètre `params` est automatiquement typé en fonction de la route par SvelteKit ! Si vous aviez une route `/routes/[type]/[name]`, vous auriez accès aux deux attributs !

<details>
  <summary>Solution</summary>
  <CodeDetailPage/>
</details>
