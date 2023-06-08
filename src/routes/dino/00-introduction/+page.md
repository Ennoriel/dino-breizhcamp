---
layout: tuto
tuto: dino-game
slug: 00-introduction
title: Introduction
---

<script>
    import Game from '$lib/components/game/Game.svelte';
</script>

Ce workshop vous permettra de créer un jeu du dinosaure comme celui présent juste en dessous avec Svelte ! Il est constitué d'un svg, d'une boucle infinie pour gérer l'avancée du dinosaure et de gestionnaires d'événements (onClick & co).

<div class="board-wrapper">
    <Game/>
</div>

Vous n'aurez évidement absolument pas reconnu un dinosaure célèbre dans ce jeu !

Les commandes sont simples :

- barre espace pour sauter ;
- n'importe quelle touche pour relancer le jeu s'il est perdu.

Le tutoriel se passera en plusieurs étapes, en commençant par l'installation. Il n'y a pas de version intérmédiaire pour le code de l'application mais vous pouvez retrouver le code source final sur le repo Github TODO. Le code important sera directement accessible dans le tutoriel.

Enfin, à la fin de chaque étape vous retrouverez des étapes facultatives pour aller plus loin et dont vous ne trouverez pas la solution avec le code source. Mais n'hésitez pas à me poser des questions !

00. introduction
    1. svelte & svelte kit
    2. liens vers la documentation, tutoriels, repl
01. installation
    1. création projet svelte
    2. installation des dépendances
    3. tour des fichiers de config (vite, svelte, tsconfig, package)
    4. tour des fichiers "source" (dossier src, static)
    5. lancement du projet
02. créer le dino
    1. dans +page.svelte
    2. création de Board.svelte
    3. création de Dino.svelte
03. ajouter du cycle de vie
    1. création de Tree.svelte
    2. objet de configuration des arbres
    3. onMount + gestion de la boucle infinie
04. sauter !
    1. création d'un composant Game.svelte
    2. on:click
05. collision
    1. la théorie
    2. la pratique
    3. recommancer le jeu
06. gestion du score
    1. simple
    2. gérer un highscore board

- vous n'aurez pas le même code source que moi, mais ce n'est pas grave !

<style>
    .board-wrapper {
        max-width: 600px;
        margin: auto;
    }
</style>