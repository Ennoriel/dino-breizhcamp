---
layout: tuto
tuto: dino-game
slug: 04-sauter
title: Sauter
---

<script>
	import CodeJumpPos from './CodeJumpPos.md';
</script>

Il reste 3 choses à faire pour que le jeu ressemble à quelque chose :

1. permettre au dinosaure de sauter
2. gérer la collision
3. le tableau de score

Commençons par permettre au dinosaure de sauter. Nous allons avoir besoin de trois variables et vous pouvez dors et déjà les créer dans le composant `Game`.

- `jumping` un booléen qui vaudra vrai / faux pour savoir si le dinosaure est en train de sauter
- `jumpedAt` un nombre pour fixer la position de début de saut, nécessaire pour le calcul de la hauteur du dinosaure
- `jumpPos` un nombre, la hauteur du dinosaure

Pour "écouter" un événément clavier sur l'ensemble de la fenêtre il est possible d'utiliser l'événement particulier Svelte : `<svelte:window>`. A ce composant (comme à n'importe lequel autre), il est possible d'ajouter un event listener via : `on:myEvent={myHandler}`. Dans notre cas, nous aurons donc :

```svelte
<script>
	function keydown(e: KeyboardEvent) {
		if (e.code === 'Space' && !jumping) {
			// à implémenter
		}
		e.preventDefault();
		e.stopPropagation();
	}
</script>

<svelte:window on:keydown={keydown} />
```

Vous pouvez copier le code et compléter pour changer les valeurs de `jumping` et réinitialiser `jumpedAt`.

Dans la boucle infinie, il faut maintenant calculer la position `jumpPos` en fonction des deux premières variables. Vous pouvez implémenter une version simple dans un premier temps :

- position haute si l'on vient d'appuyer sur la touche espace
- retour en position normale sinon

Dans un second temps, il faut calculer les coefficients d'une équation du second degré pour avoir un saut plus propre. Je vous passe les détails et vous pouvez directement regarder la correction ;)

<details>
	<summary>Solution</summary>
	<CodeJumpPos/>
</details>

Nous n'avions pas défini de props au composant `Dino`, c'est le moment d'ajouter une props pour fixer sa hauteur. Vous pouvez alors calculer sa hauteur avec la propriété html `transform` :

```html
<g transform="translate(0 -{position})"></g>
```

A ce stade, vous devriez avoir un dinosaure qui avance (ou qui semble avancer) et qui saute !

Pour aller plus loin, vous pouvez ajouter une notion de "force" pour sauter plus ou moins haut/loin.
