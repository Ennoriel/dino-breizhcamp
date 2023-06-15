---
layout: tuto
tuto: dinodex
slug: 05-create
title: Ajouter un dinosaure
---

<script>
  import CodeCreation from './CodeCreation.md';
</script>

## Ajouter un nouveau dinosaure

La dernière étape est la création d'un formulaire pour ajouter un nouveau dinosaure !

Nous n'irons pas jusqu'au bout car il n'y a pas de vrai base de données mais nous allons tout de même simuler une création de données !

Vous pouvez créer une troisième route `/create` qui sera utilisée pour la création. Dans le fichier `+page.svelte`, vous pouvez ajouter un formulaire :

```svelte
<form method="POST">
	<label>
		Nom
		<input name="name" />
	</label>
	<label>
		Présentation
		<input name="content" />
	</label>
	<label>
		Image (url externe)
		<input name="picture" />
	</label>
	<button type="submit"> Créer le dinosaure </button>
</form>
```

Il n'y a pas toutes les propriétés du dinosaure mais pour la démonstration, c'est suffisant. La méthode `POST` sur le formulaire aura pour incidénce de ne pas ajouter les valeurs du formulaire dans l'url mais via un appel HTTP post et un passage des valeurs en **formData**.

Cette requête pourra être récupéré dans le même fichier `+page.server.ts` dans l'objet `actions`, propriété `default` (il est possible de définir plusieurs actions pour une route) :

```svelte
export const actions = {
	default: async (event) => {
	}
};
```

Dans la méthode, vous pouvez récupérer le contenu du formulaire de la manière suivante :

```
const data = await event.request.formData();
const name = data.get('name');
```

Notez que depuis le début, les écritures sont à la fois nouvelles, et à la fois connus, dans ce cas, data est un objet `FormData` javascript natif, vous pouvez donc réutiliser vos connaissances ou lire la doc sur n'importe quel site de documentation Javascript.

Dans cette méthode, on peut vérifier la validité des données (avec des règles simplettes) :

```typescript
if (!name || typeof name !== 'string' || name.length < 3) {
	return fail(400, { name: 'Le nom du dinosaure doit faire 3 caractères au minimum.' });
}
```

La méthode `fail` permet de retourner un objet d'erreur au front. Cette objet sera retourné dans l'attribut exporté `form` (se sont les deux seules attributs particuliers avec `data` sur une route) :

```svelte
<script>
	import { enhance } from '$app/forms';
</script>

<form>
	<label>
		Nom
		<input name="name" />
	</label>
	{#if form?.name}
		<p class="error">
			{form.name}
		</p>
	{/if}
	<!-- ... -->
</form>
```

Vous pouvez ajouter des règles de validation sur les autres champs.

Une fois validé, il faudrait ajouter le dinosaure à la base de données. Nous n'avons pas de base de données ici et n'allons pas le faire mais cela se passe comme pour n'importe quel appel à une base de données ;)

Une fois le dinosaure "enregistré", on peut rediriger l'utilisateur vers la liste des dinosaures avec la méthode `fail` :

```typescript
throw redirect(303, '/dinodex');
```

<details>
  <summary>Je vous laisse modifier le code à votre guise et vous propose une solution complète</summary>
  <CodeCreation/>
</details>

Bravo ! Vous avez maintenant fini le tutoriel !

Vous avez vu à la fois un pan minuscule de Svelte et SvelteKit et à la fois une partie gigantesque ! Vous pourriez dès demain construire une application simple mais fonctionnelle ! Il y a d'autres choses à découvrir : les stores, et leur utilisation ultra simple ; les animations et transitions ultra simples aussi ! Le langage Svelte à d'ailleurs beaucoup été fait pour ça ([comme cette animation de prix Nobel](https://www.spiegel.de/wissenschaft/zirkel-der-genies-a-90c50289-30ac-4a4b-bc49-348676ce6687)), la gestion de l'authentification, etc.

Vous pouvez continuer à ajouter des fonctionnalités, en regardant éventuellement la documentation [Svelte](https://svelte.dev/docs), la documentation [SvelteKit](https://kit.svelte.dev/docs/introduction) ou le [tutoriel interactif](https://learn.svelte.dev/tutorial/introducing-sveltekit).

Vous pouvez également rejoint le [Discord anglophone](https://svelte.dev/chat) ou le [Discord francophone](https://discord.gg/bk2PE5Qs6).

Enfin, vous pouvez passer à [la deuxième partie : le jeu du dinosaure](/tuto/dino-game/00-introduction) !
