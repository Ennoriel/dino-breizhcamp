---
layout: tuto
tuto: dinodex
slug: 00-introduction
title: Introduction
---

<script>
    import GeneralDetails from '../../dino-game/00-introduction/GeneralDetails.md';
</script>

Le <a href="/dinodex" target="_blank">dinodex</a> (allez voir ! Gardez l'onglet ouvert dans votre navigateur) que vous allez créer est une petite application qui permet de visualiser et filtrer une liste de dinosaures, afficher la page détaillée d'un dinosaure et ajouter un dinosaure. N'hésitez pas à aller jouer avec. L'application consistera a créer trois pages :

- `/dinodex` : la liste des dinosaures, filtrable et paginée,
- `/dinodex/<dinodame>` : pour avoir le détail des dinosaures
- `/dinodex/create` : pour ajouter un nouveau dinosaure à la base de données

<GeneralDetails paths={["src", "routes", "dinodex"]}/>
