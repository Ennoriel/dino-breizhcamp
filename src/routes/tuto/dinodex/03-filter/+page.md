---
layout: tuto
tuto: dinodex
slug: 03-filter
title: Filtrer
---

<script>
  import CodePaging from './CodePaging.md';
</script>

Dans un premier temps, nous allons filtrer les résultats affichés côté front, dans un second temps, nous le ferons côté back.

## Filtrer côté front

Le filtrage côté front, dans le fichier `+page.svelte`, est présenté uniquement pour voir des fonctionnalités de Svelte mais nous le passerons côté back ensuite.

Vous pouvez ajouter un input pour filtrer le nom du dinosaure :

```svelte
<h2>Filtrer</h2>
<label>
	Nom du dinosaure
	<input type="text" name="dino-name" />
</label>
```

Pour récupérer le contenu de l'input, vous pouvez binder une variable sur la valeur de l'input :

```svelte
<script>
	let name;
</script>

<h2>Filtrer</h2>
<label>
	Nom du dinosaure
	<input type="text" name="dino-name" bind:value={name} />
</label>
```

Le mot clé `bind:` permet d'avoir le binding dans les deux sens : si vous initialisez `name`, cela initialisera le champ ; et si l'utilisateur saisit du texte dans le champ, il sera récupéré dans la variable `name`.

Pour utiliser et filtrer de manière réactive, vous pouvez utiliser la structure `$:` et changer l'affichage de `data.dinos` par `filteredDinos` :

```svelte
<script>
	export let data;

	let name;
	let filteredDinos = data.dinos;

	$: {
		const nameRegExp = name ? new RegExp(name, 'i') : undefined;

		filteredDinos = data.dinos.filter((dino) => !nameRegExp || nameRegExp.test(dino.name));
	}
</script>

<h2>Filtrer</h2>
<label>
	Nom du dinosaure
	<input type="text" name="name" bind:value={name} />
</label>

{#each filteredDinos as dino}
	<DinoCard {dino} />
{/each}
```

> Le contenu du bloc `$:` sera réexécuté dès qu'une des valeurs à l'intérieur change, en particulier, dès que la variable `name` change.

A ce stade, la liste des dinosaures est filtrée en temps réel !

Si vous souhaitez ajouter des filtres supplémentaires, sachez que les binding des checkbox et radio est un peu différent. N'hésitez pas à aller lire la [documentation à ce sujet](https://svelte.dev/docs/element-directives#bind-property) et ajouter des filtres !

## Filtrer côté back

Le filtrage côté front est simple, mais avec beaucoup de données, nous devons gérer le filtrage (et la pagination) côté back !

Pour ce faire, vous pouvez supprimer le binding précédemment créé et on va passer par un formulaire natif :

```svelte
<!-- remplacer -->
<label>
	Nom du dinosaure
	<input type="text" name="name" bind:value={name} />
</label>

<!-- par -->
<form>
	<input name="name" />
	<button type="submit">Filtrer</button>
</form>
```

En cliquant sur le bouton, le formulaire va nativement rediriger l'utilisateur avec un query param `name` : `/dinodex?name=rex`.

Il est alors possible de récupérer le query param côté back, dans `+page.server.ts` et de filtrer les résultats :

```typescript
export const load = async ({ url }) => {
	const name = url.searchParams.get('name');

	const nameRegExp = name ? new RegExp(name, 'i') : undefined;

	const filteredDinos = (dinos as Array<Dino>).filter(
		(dino) => !nameRegExp || nameRegExp.test(dino.name)
	);

	return {
		dinos: filteredDinos
	};
};
```

Ce n'est pas plus compliqué que ça ! L'avantage de ce mécanisme qui pourrait sembler archaïque (formulaire natif sans passer par une librairie externe) est en fait super intéressant car il a l'avantage de fonctionner sans javascript côté client !

Notez aussi que la logique est mise dans la méthode `load` mais il est également possible de séparer le code métier afin de pouvoir le tester unitairement.

## Pagination

Je vous laisse réfléchir à la meilleure manière d'implémenter la pagination. N'hésitez pas à passer un peu de temps sur cette partie ! ;)

<details>
  <summary>Petite aide (conseillée)</summary>
  Je vous conseille de fonctionner avec des query param et d'ajouter des liens vers `/dinodex?page=1`, `/dinodex?page=2`, etc. N'oubliez pas de prendre en compte vos filtres déjà existants !
  
  Si vous avez besoin de repasser le paramètre `page` du serveur au front, vous pouvez le passer en plus de `dinos` dans le retour de la méthode `load` !
</details>

<details>
  <summary>Solution</summary>
  <CodePaging/>
</details>
