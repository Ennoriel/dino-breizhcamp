---
layout: tuto
tuto: dino-game
slug: 01-installation
title: Installation
---

Si vous avez déjà créé le projet avec le tutoriel DinoDex, vous pouvez passer cette étape !

Aujourd'hui, quand on démarre un projet Svelte, il est recommandé d'utiliser SvelteKit dans tous les cas. Les options de compilation permettent de générer des applications statiques ou dynamiques, de pouvoir les inclure dans une application existente, etc.

Créons donc un nouveau projet !

## Prérequis

Pour ce faire, vous devez avoir un ordinateur, si ce n'est pas le cas, cherchez un ami avec qui travailler ! Sur cette ordinateur, vous devez avoir node (minimum 14) / npm. Si ce n'est pas le cas, vous pouvez [télécharger node en ligne](https://nodejs.org/en) (npm vient automatiquement avec node).

> vous êtes libres (et même encouragés) d'utiliser yarn ou pnpm 

## Créer le projet

dans un terminal, lancez la commande suivante

```
npm init svelte dino-tuto
```

Cette commande initialise un nouveau projet SvelteKit dans un dossier `dino-tuto` là ou vous êtes situés. Vous allez devoir faire quelques choix pour configurer l'application. Je vous conseille de sélectionner :

1. Skeleton project
2. Yes, using TypeScript syntax
3. "Add ESLint for code linting" et "Add Prettier for code formatting"

A ce stade, vous pouvez ouvrir le dossier dans un IDE (VSCode ou autre).

Les fichiers de configurations importants sont les suivants :

- package.json : ce fichier définit tout projet node. La commande pour lancer le projet en local est `npm run dev`.
- svelte.config.js : c'est le fichier de configuration de Svelte & SvelteKit. Pour nous tout est bon, il n'y a rien à change.
- vite.config.js : c'est le fichier de configuration de vite, librairie utilisé par SvelteKit pour la compilation. Pour nous tout est bon, il n'y a rien à change.
- tsconfig.json : c'est le fichier de configuration de typescript (si vous avez choisi typescript). Il n'y a rien a changé non plus.

Ces fichiers permettent de configurer un projet de manière générale. Par défaut, il n'y a rien de bien compliqué, et la configuration par défaut permet même de déployer son application sur des services externes (Github pages, Vercel, Netlify, CloudFlare pages, etc.)

Le code source est concentré dans l'arborescence suivante :

- /static : les fichiers statiques...
- /src/routes : toutes les routes de l'application. Les routes suivront l'arborescence.
- /src/lib : le dossier n'existe pas encore, vous allez le créer dans l'étape suivante. C'est l'emplacement du code métier.

## Installer les dépendances

Si vous êtes toujours sur le terminal précédent :

```
cd dino-tuto
```

puis :

```
npm i
```

Et voilà, le projet est démarré et les dépendances sont installées !

## Tester l'application

Vous pouvez maintenant démarrer le projet :

```
npm run dev
```

Vous pouvez cliquer sur le lien dans la console ou aller sur <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>.