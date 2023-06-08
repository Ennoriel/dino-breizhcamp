---
layout: tuto
tuto: dino-game
slug: 03-ajouter-le-cycle-de-vie-de-l-application
title: Ajouter le cycle de vie de l'application
---

## créer les cactus

De la même manière que le dinosaure, vous pouvez créer un cactus avec le code suivant :

```svelte
<script lang="ts">
  export let position = 0;
  export let variant: number;

</script>

<path
  bind:this={ref}
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

Dans le jeu du dinosaures, plusieurs cactus sont présents en même temps sur le plateau. Même si c'est le dinosaure qui avance vers les cactus, dans le jeu, ce sont les cactus qui se déplacent vers les 

    1. création de Tree.svelte
    2. objet de configuration des arbres
    3. onMount + gestion de la boucle infinie