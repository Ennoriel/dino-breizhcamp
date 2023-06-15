---
layout: tuto
tuto: dino-game
slug: 00-introduction
title: Introduction
---

<script>
    import Game from '$lib/components/game/Game.svelte';
    import GeneralDetails from './GeneralDetails.md';
</script>

Ce workshop vous permettra de créer un jeu du dinosaure comme celui présent juste en dessous avec Svelte ! Il est constitué d'un svg, d'une boucle infinie pour gérer l'avancée du dinosaure et de gestionnaires d'événements (onClick & co).

<div class="board-wrapper">
    <Game/>
</div>

Vous n'aurez évidement absolument pas reconnu un dinosaure célèbre dans ce jeu !

Les commandes sont simples :

- barre espace pour sauter ;
- n'importe quelle touche pour relancer le jeu s'il est perdu.

<GeneralDetails paths={["src", "lib", "components", "game"]}/>

<style>
    .board-wrapper {
        max-width: 600px;
        margin: auto;
    }
</style>
