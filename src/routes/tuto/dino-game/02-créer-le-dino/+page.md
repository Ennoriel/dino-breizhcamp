---
layout: tuto
tuto: dino-game
slug: 02-créer-le-dino
title: Créer le dino
---

<script>
    import Game from '$lib/components/game/Game.svelte';
    import CodeA from './CodeA.md';
</script>

Le contenu que vous pouvez voir dans votre navigateur <a href="http://localhost:5173" target="_blank">http://localhost:5173</a> se situe dans le fichier `/src/routes/+page.svelte`. Nous allons faire les premières étapes du tutoriel dans ce fichier.

Commencer par supprimer le conteu du fichier et ajouter un titre :

```svelte
<h1>Le super jeu du dinosaure du BreizhCamp !</h1>
```

Vous pouvez ajouter du style dans une balise de style (après le html) comme suit :

```svelte
<style>
	h1 {
		font-size: 48px;
	}
</style>
```

A ce stade, on assume tout, n'hésitez pas à ajouter le meilleur css que vous connaissez !

> Remarque : vous voyez bien ici que du code HTML valide fonctionne vraiment très bien.

## Ajouter un plateau de jeu

Pour rappel, le jeu que nous essayons de construire est le suivant :

<div class="board-wrapper">
    <Game/>
</div>

Le plateau du jeu est un élément HTML de type `svg`. Vous pouvez donc commencer à :

1. définir le conteneur `svg`.
2. ajouter un fond que vous pouvez choisir au choix. Moi j'ai pris un fond gris très simple !
3. ajouter un sol. Dans un élément `svg` l'origine est en haut à gauche, la valeur de x croissante vers la droite et de y croissante vers le bas (contre intuitif).

<details>
  <summary>Solution</summary>
    <CodeA/>
</details>

## Ajouter le dinosaure

Vous pouvez ajouter le dinosaure :

```svelte
<g>
	<path
		d="M80,178h-4v14h-4v6h-4v4h-4v16h4v4h-8v-12h-4v-4h-4v4h-4v4h-4v4h4v4h-8v-16h-4v-4h-4v-4h-4v-4h-4v-4h-4v-24h4v8h4v4h4v4h8v-4h4v-4h6v-4h6v-4h4v-26h4v-4h32v4h4v18h-20v4h12v4h-16v8h8v8h-4v-4z"
		stroke="none"
		fill="#535353"
	/>
	<path d="M68,142v4h4v-4h-4z" stroke="none" fill="#EFEFEF" />
</g>
```

La balise `<g>` permettra par la suite de gérer le déplacement du dinosaure.

Si la position du dinosaure n'est pas adéquat, avec le sol, n'hésitez pas à reprendre exactement la solution au dessus.

## Utiliser des composants

Le code qui se trouve dans le fichier `+page.svelte` n'est pas très long ni très compliqué mais il regroupe plusieurs objets métiers (un dinosaure, un plateau de jeu, un terrain) et ce serait bien de commencer à créer des composants ! Cela facilite la compréhension et le débuggage par la suite. Pour ça rien de plus simple :

Créer le dossier `lib` dans `src` à côté de `routes` si ce n'est pas déjà fait.

Créer le dossier `components` dans le dossier `lib`.

Tout fichier avec l'extension `.svelte` pourra être utilisé comme composant Svelte. Par convention, les composants commencent avec une majuscule. Vous pouvez donc créer

- `Dino.svelte` et y ajouter le code du dinosaure
- `Board.svelte` : pour utiliser le dinosaure dans le plateau, il faudra l'importer comme suite :

```svelte
<script>
	import Dino from './Dino.svelte';
</script>

<svg viewBox="0 0 1000 240" bind:this={svgRef}>
	<rect x="0" y="0" width="1000" height="240" fill="#EFEFEF" />
	<Dino />
	<path d="M0,230H1000V226H0Z" stroke="none" fill="#535353" />
</svg>
```

Vous pouvez importer le plateau `Board` de la même manière dans le fichier `+page.svelte`.

> Tout fichier définissant une route ou un composant pourra être constitué des trois blocs `<script>`, le html et `<style>`, par convention dans cet ordre.

## Créer un composant Game

Les composants `Board`, `Dino` (et par la suite `Cactus`) sont des composants d'affichage et n'auront pas de logique. Pour ne pas placer la logique directement dans `+page.svelte`, créez un nouveau composant `Game.svelte` qui importe le composant `Board` et utilisez le dans `+page.svelte`.

Ce nouveau composant contiendra le code métier.

<style>
    .board-wrapper {
        max-width: 600px;
        margin: auto;
    }
</style>
