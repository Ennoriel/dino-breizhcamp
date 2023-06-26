---
layout: tuto
tuto: dinodex
slug: 04-detail-page
title: Page de détails d'un dinosaure
---

<script>
  import CodeDetailPage from './CodeDetailPage.md';
</script>

Le dinodex est composée de trois pages distinctes : nous venons de créer la page qui continent la liste des dinosaures. Nous allons maintenant créer une page pour chaque dinosaure. Celle-ci pourra par exemple afficher plus de détails. Pour ce faire, il faut créer une route avec un **paramètre**.

## Créer une page dédiée pour chaque dinosaure

La prmeière étape est d'ajouter un lien vers la nouvelle page. Dans le composant `DinoCard`, vous pouvez ajouter un lien pour accéder à la page de détail d'un dinosaure :

```svelte
<a href="/{dino.name}">
	<h2>
		{dino.name}
	</h2>
</a>
```

Pour créer une route avec un **paramètre** nommé `name`, il faut créer un dossier dans `routes` qui contiendra `[name]` entre crochets. Vous pouvez donc créer le dosier `/routes/dinodex/[name]`.

Dans ce dossier, vous pouvez alors créer les fichiers `+page.svelte`et `+page.server.ts` qui correspondront à la nouvelle page. Le paramètre `name` sera disponible via l'argument `params` (`params.name`) côté serveur :

```typescript
import dinos from '$lib/server/dino.json';
import type { Dino } from '../utils.js';

export const load = async ({ params }) => {
	// vous pouvez utiliser params.name et compléter la méthode
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
