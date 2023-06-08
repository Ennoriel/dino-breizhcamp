---
layout: tuto
tuto: dino-game
slug: 03-ajouter-le-cycle-de-vie-de-l-application
title: Ajouter le cycle de vie de l'application
---

<script>
	import CodeCactusArray from './CodeCactusArray.md';
</script>

## créer les cactus

De la même manière que le dinosaure, vous pouvez créer un cactus avec le code suivant :

```svelte
<script>
	export let position = 0;
	export let variant: number;
</script>

<path
	d="M{position},170 h4 v16 h4 v-24 h4 l4,4 v20 h4 v-20 l4,4 v20 l-4,4 h-4 v32 h-8 v-32 h-8 Z"
	stroke="none"
	fill={variant === 1 ? 'lightgreen' : 'green'}
/>
```

Dans ce composant, nous avons défini nos deux premières propriétés (props pour les intimes) `position` et `variant`. Une variable devient props dès qu'elle est exportée avec le mot clé `export`. Dans le cas d'un projet Svelte avec typescript, ces propriétés peuvent être typées ! 

`variant` détermine la couleur de l'arbre via l'attribut html `fill` ; `position` définit la position du cactus.

Vous pouvez importer le cactus dans l'arbre et passer des propriétés fictives pour le moment :

```svelte
<Cactus position={500} variant={1}/>
```

> A ce stade, vous avez tous les composants Svelte pour continuer. Nous allons les modifier pour finaliser le jeu. Si vous êtez perdu, vous pouvez retrouver le code source sur Github.

Pour aller plus loin, vous pouvez faire des variantes de cactus de différentes tailles, formes, couleurs, etc. Cela n'impactera pas la suite du tutoriel.

## Ajouter un objet de configuration des cactus

Dans le jeu du dinosaures, plusieurs cactus sont présents en même temps sur le plateau. Les positions et variantes de cactus sont stockés dans un objet de configuration. Dans `Game.svelte`, vous pouvez ajouter une constante `cactuses` et l'initialiser avec un tableau avec un cactus.

Essayez de le passer comme props à `Board` puis d'utiliser la syntaxe de boucle pour définir plusieurs `Cactus` dans le DOM. La syntaxe de boucle en Svelte est la suivante :

```svelte
{#each my_array_variable as my_array_item}
	{my_array_item.my_property}
{/each}
```

<details>
	<summary>Solution (avant de lire la solution, n'hésitez pas à lire la <a href="https://svelte.dev/docs#template-syntax-each" target="_blank">documentation Svelte</a> !)</summary>
	<CodeCactusArray/>
</details>

## Mise en place de la logique du jeu

Maintenant que nous avons tous les éléments graphiques du jeu, il va falloir passer à l'implémentation de la logique. Beaucoup de chose vont se faire dans le composant `<Game/>`.

Pour gérer l'avancée du dinosaure, nous pouvons utiliser une variable `dinoPos` que nous incrémenterons dans une boucle infinie. La boucle infinie doit être initialisé à l'instantiation du composant : une méthode est là pour ça : `onMount` (et en réalité, c'est une des seule, utilisée à plus de 99% dans mon cas :p)

```typescript
import { onMount } from 'svelte';

// initialisation des variables
// ...

onMount(() => {
	const id = setInterval(() => {
		// boucle infinie
	}, 20);

	return () => {
		// nettoyage de la boucle infinie
		clearInterval(id);
	};
});
```

`onMount` prend comme argument une méthode qui sera exécuté à l'instantiation du composant. Cette méthode peut renvoyer une méthode, si celle-ci est définie, elle sera appelé à la desctruction du composant, ce qui est bien pratique dans notre cas pour nettoyer la boucle infinie !

Vous pouvez maintenant incrémenter la position du dinosaure dans la boucle infinie et utiliser la variable pour positionner les cactus aux bons endroits afin de simuler l'avancée du dinosaure.

A ce stade, vous aurez l'impression que le dinosaure avance ! Mais voilà, il n'y a qu'un cactus !

TODO ajout de cactus