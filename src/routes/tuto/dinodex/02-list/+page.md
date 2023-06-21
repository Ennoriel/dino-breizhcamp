---
layout: tuto
tuto: dinodex
slug: 02-list
title: Liste des dinosaures
---

## Ajouter du HTML & CSS

Nous allons commencer par afficher la liste des dinosaures. Si vous avez déjà fait le tutoriel dino-game, vous pouvez créer une route supplémentaire. Pour cela, il suffit de créer un dossier avec un fichier `+page.svelte`. La page sera consultable sur la même url que l'arborescence de dossier créé.

Tout fichier `+page.svelte` créera une route supplémentaire. Il s'agit d'un composant Svelte, presque comme les autres. En particulier, comme tout composant Svelte, il sera constitué de 3 parties :

- le script, à l'intérieur de balises `<script></script>` (ou éventuellement `<script lang="ts"></script>` pour un script typescript) : le code métier du composant se trouvera ici ;
- les balises HTML, directement dans le fichier, par convention, en dessous du `script` ;
- le style, à l'intérieur de balises `<style></style>`, ou l'on peut écrire du css, qui ne sera appliqué qu'aux balises HTML du composant courant.

Chaque partie est facultative.

Dans le fichier, vous pouvez commencer à ajouter un titre (balise `h1`), du texte et du style pour voir le fonctionnement du composant.

Exemple :

```svelte
<h1>Dinodex</h1>

<style>
	h1 {
		color: blue;
	}
</style>
```

Vous pouvez déjà, à ce stade, définir et importer la police Jurassic Parc :

```svelte
<style>
	h1 {
		color: blue;
		font-familly: 'Jurassic Parc', sans-serif;
		font-size: 48px;
		align-text: center;
	}

	@font-face {
		font-family: 'Jurassic Parc';
		src: url('/jurassic-parc.ttf') format('truetype');
	}
</style>
```

> A ce stade, vous avez dû vous rendre compte que l'application se met à jour automatiquement dans votre navigateur à l'aide du **hot reloading** ! Elle n'est pas belle la vie de développeur moderne ?

## Afficher la liste des dinosaures

Pour importer le contenu du JSON, il suffit de l'importer avec un import javascript classique (`$lib` correspond à un alias vers le dossier `/src/lib`) :

```svelte
<script>
	import dinos from '$lib/dino.json';
</script>
```

Pour afficher une liste, on utilisera une syntaxe particulière à Svelte, le bloc `#each` :

```svelte
{#each dinos as dino}
	<p>{dino.name}</p>
{/each}
```

Vous pouvez alors déjà vous amuser à afficher toutes les propriétés d'un dinosaure, et même l'image !

Pour utiliser une propriété en tant qu'attribut, vous pouvez utiliser la même syntaxe :

```svelte
<img src={dino.picture} />
```

Vous pouvez jouer avec le style de la manière suivante :

```svelte
<p class="dino-diet {dino.diet}">

<style>
  .dino-diet.carnivorous {
    color: red;
  }
  .dino-diet.herbivorous {
    color: green;
  }
  .dino-diet.omnivorous {
    color: orange;
  }
</style>
```

Ou écrire du style directement (en le combinant éventuellement avec des variables) :

```svelte
<p class:margin="8px">
<p class:--my-variable="8px">
```

Si vous souhaitez afficher une propriété conditionnellement, il existe un bloc similaire à `#each`, le bloc `#if` qui s'écrit de la manière suivante (le bloc `:else` est facultative) :

```svelte
{#if condition}
	<h2>Le BreizhCamp est génial</h2>
{:else}
	<h2>Le BreizhCamp est vraiment génial</h2>
{/if}
```

Vous pouvez continuer jusqu'à obtenir des cartes, les afficher proprement, de manière responsive.

## Créer un composant

Une fois ceci fait, on va s'attarder à créer un composant `DinoCard` pour séparer l'affichage d'un dinosaure de celui de la liste.

Pour créer un composant, rien de plus simple, il suffit de créer un fichier Svelte avec l'extension `.svelte`. Il peut être créé dans le dossier `routes`, mais on préfère généralement les ajouter dans `/src/lib/components`. Par exemple : `/src/lib/components/DinoCard.svelte` (sur le repo Github du projet, tout est dans `/src/routes/dinodex` par simplicité pour que vous retrouviez tout au même endroit).

Vous pouvez alors déplacer le code du composant dans le nouveau composant. Pour déclarer une propriété `dino`, il faut préfixer le nom de la propriété par `export` :

```svelte
<script>
	export let dino;
</script>
```

Pour utiliser le composant :

```svelte
<script>
	import DinoCard from './DinoCard.svelte';
</script>

{#each dinos as dino}
	<DinoCard {dino} />

	<!-- vous pouvez également utiliser la syntaxe raccourcie
  lorsque le nom de la propriété est le même que le nom de la variable : -->
	<DinoCard {dino} />
{/each}
```

Vous pouvez alors déplacer tout le code et le style que vous aviez écrit dans le composant !

## Typescript

Si vous souhaitez utiliser typescript, il suffit de rajouter `lang="ts"` à la balise script : `&lt;script lang="ts">`, le code à l'intérieur de la balise sera alors en typescript !

```svelte
<script lang="tts">
	// J'écris "tts" dans mes exemples, mais il faut bien écrire "ts".
	// Pour une raison obscure, ajouter "ts" casse le rendu de la page...

	import type { Dino } from '$lib/utils.ts';

	export let dino: Dino;
</script>

<h2>{dino.name}</h2>
```

Vous pouvez utiliser le type suivant :

```ts
export type Dino = {
	name: string;
	namedBy?: string;
	meaning: string;
	picture: string;
	pronounciation: string;
	content?: string;
	diet: string;
	food?: string;
	eraItLived?: string;
	whenItLived: Array<number>;
	teeth?: string;
	length?: number;
	weight?: string;
	foundIn: string;
	howItMoved?: string;
	taxonomy: Array<string>;
	dinoType: string;
	speciesType: string;
};
```

## Mettre en place un serveur !

Jusqu'à maintenant, nous avions importé les dinosaures directement dans la page. Si nous avions souhaité créer un site web statique avec des données fixes, c'était une très bonne solution et SvelteKit peut être configuré facilement pour générer un site statique (sans serveur).

Si nous travaillions avec une base de données, on ne pourrait pas faire ça. On va considérer que notre fichier est notre base de données. On va donc déplacer le fichier dans `/src/lib/server`. Ce dossier est particulier : vous ne pourrez pas importer son contenu depuis une page directement ! (vous pouvez essayer, ça ne devrait pas marcher !)

Il va alors falloir remonter les données via un fichier back. Celui-ci est à créer au même endroit que la route, avec le nom `+page.server.ts` avec le contenu suivant :

```ts
// fichier +page.server.ts
import dinos from '$lib/server/dino.json';
import type { Dino } from '$lib/utils';

export const load = async () => {
	return {
		dinos: dinos as Array<Dino>
	};
};
```

Tout fichier `+page.server.ts` avec une méthode `load` définit un endpoint qui pourra être appelé avec une requête HTTP de type `GET`. L'objet retourné par cette méthode sera directement injecté dans la propriété de page spéciale `data` :

```svelte
<script>
	export let data;
</script>

{#each data.dinos as dino}
	<DinoCard {dino} />
{/each}
```

La gestion des routes et de l'API est faite avec SvelteKit. Ce mécanisme a un rôle central et a plusieurs bénéfices :

- en réalité, lorsqu'un client va demander la page, SvelteKit va exécuter le code source `+page.svelte` côté serveur, se rendre compte qu'une api est associée, exécuter l'api et renvoyer la page déjà **hydratée** au client : c'est ce que l'on appelle le **rendu côté serveur** ;
- le passage de l'objet du back au front est complètement typé : vous pouvez essayer de lire une propriété qui n'existe pas, cela ne fonctionnera pas (par exemple `data.doesNotExist` ou `data.dinow[0]` => potentiellement undefined).
