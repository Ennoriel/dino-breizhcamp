---
layout: tuto
tuto: dino-game
slug: 06-score
title: Score
---

<script>
    import CodeHighScore from './CodeHighScore.md';
</script>

Le score est assez simple puisque l'on peut directement utiliser la position du dinosaure pour afficher le score :

```svelte
<p>
	Score : {(dinoPos / 10).toFixed()}
</p>
```

J'ai choisi de diviser la position par 10 pour que ce soit plus lisible à l'écran.

Vous pouvez également définir le score maximal atteint par un joueur.

<details>
	<summary>Solution</summary>
	<CodeHighScore/>
</details>

Vous avez fini le tutoriel mais il y a plein d'améliorations possibles :

- faire bouger les pattes du dinosaure pour simuler son mouvement
- ajouter un décor (nuage, pierres) pour simuler encore plus vrai que nature le déplacement du dinosaure
- gérer la puissance (durée) d'appui sur la touche espace pour sauter plus ou moins loin
- ajouter un champ texte pour écrire son nom lorsque l'on a fait le meilleur score
- enregistrer le meilleur score côté backend

Si vous ne l'avez pas déjà fait, vous pouvez faire le [dinodex](/tuto/dinodex/00-introduction).
