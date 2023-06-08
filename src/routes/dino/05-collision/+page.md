---
layout: tuto
tuto: dino-game
slug: 05-collision
title: Collision
---

<script>
	import CodeCollision from './CodeCollision.md';
</script>

On commence à s'approcher de la fin. Le dinosaure peut sauter et avancer mais impossible de perdre ! Il est temps de gérer les collisions.

## La théorie

La gestion des collision dans les jeux vidéos, c'est asssez simple en théorie, beaucoup plus compliqué en pratique.

En théorie, il suffit de savoir quand le dinosaure touche un cactus. En pratique, c'est assez compliqué car les deux formes ne sont pas régulières et les courbes des deux formes pas évidents.

En pratique, il existe plein de solutions d'approximation (on pourrait considérer que nos objets sont rectangulaires ou circulaires) ce qui a longtemps été fait dans les jeux vidéos.

Dans notre cas, nous allons utiliser une méthode bien pratique des éléments svg : `element.isPointInFill(point)`. Avec cette méthode, il est possible de déterminer si un point est à l'intérieur d'un élément.

## la pratique

J'ai défini 5 points aux extrémités du dinosaures, pour lesquels on va aller vérifier qu'ils ne sont pas dans le premier cactus.

Les fameux points : 

```typescript
export const DINO_EDGES = [
	[46, 220],
	[66, 220],
	[82, 180],
	[90, 164],
	[98, 156]
];
```

<div class="dino-wrapper">
	<svg viewBox="0 0 100 100">
		<g transform="translate(0 -128)">
			<path
				d="M80,178h-4v14h-4v6h-4v4h-4v16h4v4h-8v-12h-4v-4h-4v4h-4v4h-4v4h4v4h-8v-16h-4v-4h-4v-4h-4v-4h-4v-4h-4v-24h4v8h4v4h4v4h8v-4h4v-4h6v-4h6v-4h4v-26h4v-4h32v4h4v18h-20v4h12v4h-16v8h8v8h-4v-4z"
				stroke="none"
				fill="#535353"
			/>
			<path d="M68,142v4h4v-4h-4z" stroke="none" fill="#EFEFEF" />
			{#each [
				[46, 220],
				[66, 220],
				[82, 180],
				[90, 164],
				[98, 156]
			] as [x, y]}
				<path d="M{x},{y}h0.01" stroke="red" stroke-width="3" stroke-linecap="round" />
			{/each}
		</g>
	</svg>
</div>

Pour vérifier que ces points sont situés dans ou en dehors du premier cactus, nous devrons écrire quelque chose similaire à : `cactus.isPointInFill(points)`. Nous aurons donc besoin de la référence au premier cactus ainsi que la référence à l'élément `<svg>` pour instancier un `Point`.

En svelte, pour récupérer la référence d'un objet, on peut utiliser `document.getElementById()` mais il y a une solution beaucoup plus simple, en utilisant la notation de binding de référence d'éléments HTML :

Dans le composant cactus, on aura maintenant le composant complet :

```svelte
<script> // rajouter lang="ts"
	export let position = 0;
	export let variant: number;

	export let ref: SVGPathElement | undefined = undefined;
</script>

<path
	bind:this={ref}
	d="M{position},170 h4 v16 h4 v-24 h4 l4,4 v20 h4 v-20 l4,4 v20 l-4,4 h-4 v32 h-8 v-32 h-8 Z"
	stroke="none"
	fill={variant === 1 ? 'lightgreen' : 'green'}
/>
```

et le `Board` :

```svelte
<script> // ajouter lang="ts"
	import Dino from './Dino.svelte';
	import Cactus from './Cactus.svelte';
	import type { Cactus as CactusType } from './utils.js';

	export let position = {
		x: 0,
		y: 0
	};
	export let cactuses: Array<CactusType> = [];

	export let svgRef: SVGSVGElement;
	export let cactusRef: SVGPathElement;
</script>

<svg viewBox="0 0 1000 240" bind:this={svgRef}>
	<rect x="0" y="0" width="1000" height="240" fill="#EFEFEF" />
	<Dino position={position.y} />
	{#each cactuses as cactus, index}
		{#if index}
			<Cactus variant={cactus.variant} position={cactus.position - position.x} />
		{:else}
			<Cactus
				variant={cactus.variant}
				position={cactus.position - position.x}
				bind:ref={cactusRef}
			/>
		{/if}
	{/each}
	<path d="M0,230H1000V226H0Z" stroke="none" fill="#535353" />
</svg>
```

On a "bindé" la référence à l'élément `svg` et récupéré la ref du premier cactus. Plutôt sobre comme écriture ? Vous pouvez faire la même chose pour rammener les deux ref dans `Game`.

Vous pouvez maintenant retourner dans notre boucle infinie pour détecter la collision et utiliser une variable `lost` pour savoir si le joueur a perdu ou non !

<details>
	<summary>Solution</summary>
	<CodeCollision/>
</details>

Le jeu est maintenant presque fini ! Votre dinosaure avance, peut sauter et éviter les obstacles ! S'il tombe sur un cactus, la partie est perdue ! Mais qu'en est-il du score ?!

<style>
	.dino-wrapper {
        max-width: 200px;
        margin: auto;
	}
</style>