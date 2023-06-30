---
layout: tuto
tuto: dinodex
slug: 02-list
title: Liste des dinosaures
---

## Ajouter du HTML & CSS

Ouvrez le fichier `/routes/+page.svelte`. Ce fichier, comme tout fichier `+page.svelte` définit une route (ou url). Son contenu est affiché dans votre navigateur.

Vous pouvez ajouter un lien dans ce fichier pour pointer vers le futur dinodex :

```html
<a href="/dinodex">Accéder au Dinodex</a>
```

Après avoir enregistré le fichier, le lien apparait dans votre navigateur. Si c'est le cas, la configuration de Svelte & SvelteKit est fonctionnelle. :)

Dans une application SvelteKit, les url dépendront de l'aborescence à l'intérieur du dossier `routes`. Pour ajouter une page `/dinodex`, créez un dossier `/routes/dinodex` dans lequel vous créez un fichier `+page.svelte`.

Le fichier `+page.svelte`, comme tout composant Svelte aura la structure suivante (dans cet ordre) :

- le **script**, à l'intérieur de balises `<script></script>` (ou éventuellement `<script lang="ts"></script>` pour un script typescript) : le code métier du composant se trouvera ici ;
- les **balises HTML**, directement dans le fichier, par convention, en dessous du `script` ;
- le **style**, à l'intérieur de balises `<style></style>`, ou l'on peut écrire du css, qui ne sera appliqué qu'aux balises HTML du composant courant.

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
		font-family: 'Jurassic Parc', sans-serif;
		font-size: 48px;
		text-align: center;
	}

	@font-face {
		font-family: 'Jurassic Parc';
		src: url('/jurassic-parc.ttf') format('truetype');
	}
</style>
```

Le bloc css `@font-face` permet de charger la police et de la nommer `'Jurassic Parc'`.

> Dès que vous enregistrez, l'application se met à jour automatiquement dans votre navigateur à l'aide du **hot reloading** ! Elle n'est pas belle la vie de développeur moderne ?

## Afficher la liste des dinosaures

Pour importer le contenu du JSON, il suffit de l'importer avec un import javascript classique (`$lib` correspond à un alias vers le dossier `/src/lib`) :

```svelte
<script>
	import dinos from '$lib/dino.json';
</script>
```

> Par convention, la balise script vient tout en haut du fichier (**script** puis **html** puis **css**) ;)

### Itérer sur une liste : le bloc `#each`

Pour afficher une liste, on utilisera une syntaxe particulière à Svelte, le bloc `#each`. Vous pouvez la copier en dessous du titre :

```svelte
{#each dinos as dino}
	<p>{dino.name}</p>
{/each}
```

Amusez-vous à afficher d'autres propriétés d'un dinosaure, et même l'image ! N'hésitez pas à ouvrir le fichier `dinos.json` pour voir les propriétés du fichier.

Pour utiliser une propriété en tant qu'attribut, vous pouvez utiliser la syntaxe :

```svelte
<img src={dino.picture} />
```

> Notez qu'un warning va peut-être s'afficher dans votre IDE sur la balise image. Ceci vient de l'analyseur statique de Svelte qui ajoute des warning d'accessibilité. Pour le corriger, vous pouvez ajouter un attribut `alt="{dino.name}"`. Ces warning sont nombreux et bien pratiques pour faciliter le développement en respectant l'accessibilité !

### Ajouter du style

Pour que le dinodex ressemble à quelque chose, vous pouvez ajouter du style. Comme nous l'avons vu plus haut, le style va dans le bloc `style`. Vous pouvez ajouter des noms de classes comme en html avec du texte mais aussi avec une variable :

```svelte
<p class="dino-diet {dino.diet}">...</p>

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
<script>
	let margin = 8;
</script>

<style>
	<p style:margin="8px">
	<p style:--my-variable="{margin}px">
</style>
```

> Il existe encore d'autres manières d'appliquer du style en Svelte mais vous avez compris l'essentiel ;)

### Afficher conditionnellement : le bloc `#if`

Si vous souhaitez afficher une propriété conditionnellement, il existe un bloc similaire à `#each`, le bloc `#if` qui s'écrit de la manière suivante (le bloc `:else` est facultatif) :

```svelte
{#if condition}
	<h2>Le BreizhCamp est génial</h2>
{:else}
	<h2>Le BreizhCamp est vraiment génial</h2>
{/if}

<!-- ou -->
{#if condition}
	<h2>Le BreizhCamp est génial</h2>
{/if}
```

Vous pouvez continuer jusqu'à obtenir des cartes, les afficher proprement, de manière responsive.

## Créer un composant

Une fois ceci fait, on va s'attarder à créer un composant `DinoCard` pour séparer l'affichage d'un dinosaure de celui de la liste.

Pour créer un composant, rien de plus simple, il suffit de créer un fichier Svelte avec l'extension `.svelte`. Il peut être créé dans le dossier `routes`, mais on préfère généralement les ajouter dans `/src/lib/components`. Par exemple : `/src/lib/components/DinoCard.svelte` (sur le repo Github du projet, tout est dans `/src/routes/dinodex` par simplicité pour que vous retrouviez tout au même endroit).

Vous pouvez alors déplacer le code d'une carte de dinosaure dans le nouveau composant. Pour déclarer une propriété `dino`, il faut préfixer le nom de la propriété par `export` :

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

Dans le composant `DinoCard`, votre IDE va se plaindre des types non définis. Cela devrait fonctionner sans le corriger et on va le corriger dans la partie suivante !

## Typescript

Pour utiliser typescript, il suffit de rajouter `lang="ts"` à la balise script : `&lt;script lang="ts">`, le code à l'intérieur de la balise sera alors en typescript !

```svelte
<script lang\="ts">
	import type { Dino } from '$lib/utils.ts';

	export let dino: Dino;
</script>

<h2>{dino.name}</h2>
```

Vous pouvez utiliser le type suivant :

```ts
export type Dino = {
	name: string;
	namedBy?: string | null;
	meaning: string;
	picture: string;
	pronounciation: string;
	content?: string | null;
	diet: string;
	food?: string | null;
	eraItLived?: string | null;
	whenItLived: Array<number>;
	teeth?: string | null;
	length?: number | null;
	weight?: string | null;
	foundIn: string;
	howItMoved?: string | null;
	taxonomy: Array<string>;
	dinoType: string;
	speciesType: string;
};
```

Les erreurs devraient avoir disparues !

## Mettre en place un serveur !

Jusqu'à maintenant, nous avions importé les dinosaures (fichier `dino.json`) directement dans la page. Si nous avions souhaité créer un site web statique avec des données fixes, c'était une très bonne solution et SvelteKit peut être configuré facilement pour générer un site statique (sans serveur).

Si nous travaillions avec une base de données, on ne pourrait pas faire ça. On va considérer que notre fichier est notre base de données. On va donc déplacer le fichier dans `/src/lib/server`. Ce dossier est particulier : vous ne pourrez pas importer son contenu depuis une page directement ! (vous pouvez essayer, ça ne devrait pas marcher !)

Avec SvelteKit, un fichier `+page.svelte` définit une page accessible dans un navigateur. De la même manière, tout fichier `+page.server.ts` avec une méthode `load` définit un endpoint qui pourra être appelé avec une requête HTTP de type `GET`.

Lorsque les deux fichiers `+page.svelte` et `+page.server.ts` sont définis en même temps, SvelteKit va jouer l'API contenue dans `+page.server.ts` et l'injecter directement dans la page `+page.svelte`. C'est le mécanisme que nous allons utiliser.

Vous pouvez créer le fichier `+page.server.ts` à côté du fichier `+page.svelte` avec le contenu suivant :

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

L'objet `{ dinos }` retourné par cette méthode sera directement injecté dans la propriété spéciale `data` (`data.dinos`) :

```svelte
<script>
	export let data;
</script>

{#each data.dinos as dino}
	<DinoCard {dino} />
{/each}
```

La gestion des routes et de l'API est faite avec SvelteKit. Ce mécanisme a un rôle central et a plusieurs bénéfices :

- en réalité, lorsqu'un client va demander la page, SvelteKit va exécuter le code source `+page.svelte` et de `+page.server.ts` côté serveur, c'est ce que l'on appelle le **rendu côté serveur** ;
- le passage de l'objet du back au front est complètement typé : vous pouvez essayer de lire une propriété qui n'existe pas côté front, cela ne fonctionnera pas (par exemple `data.doesNotExist` ou `data.dinos[0]` potentiellement undefined).
