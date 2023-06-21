---
layout: false
---

<script>
    export let paths;
    const separator = " > ";
</script>

Le tutoriel se passera en plusieurs étapes, en commençant par l'installation. Vous pouvez retrouver le code source final sur le [repo Github](https://github.com/Ennoriel/dino-breizhcamp) sous **{paths.join(separator)}**. Le code important sera directement accessible dans le tutoriel.

Enfin, à la fin de chaque étape, vous retrouverez des étapes facultatives pour aller plus loin et dont vous ne trouverez pas la solution avec le code source. Mais, n'hésitez pas à me poser des questions !

## Svelte & SvelteKit

Svelte est un framework de développement d'interfaces avec quelques spécificités :

1. c'est un compilateur, le code écrit sera compilé en code javascript exécuté par le navigateur (pas d'interprétation par un "moteur" Svelte) ;
2. pas de DOM virtuel (si ça ne vous parle pas, ce n'est pas très grave puisqu'il n'y en n'a pas !);
3. très proche du HTML, Javascript et css natifs, à tel point qu'un fichier HTML est valide en Svelte. Svelte vient ajouter des structures supplémentaires (boucles, conditions, etc.) ;
4. super réactif et gère super facilement les animations.

Vous pouvez consulter [la documentation de Svelte](https://svelte.dev/docs) et même écrire du code Svelte en ligne dans l'[éditeur en ligne (REPL)](https://svelte.dev/repl).

SvelteKit est un framework pour construire des applications (fullstack : front + back !) basé sur le framework Svelte. Il permet de construire des applications de type SPA (application sur une seule page comme GMail), des MPA (gestion des routes / urls nativement) avec du rendu côté serveur =&gt; beaucoup plus performant ! Vous pouvez consulter [la documentation de SvelteKit](https://kit.svelte.dev/docs/introduction) en ligne.

Voilà, c'était la petite partie théorique. Si vous n'avez pas tout compris, ce n'est pas très grave, passons à la pratique !

> Vous n'aurez pas le même code source que moi, mais ce n'est pas grave !
