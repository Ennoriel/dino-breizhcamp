---
layout: false
---

Code de l'API :

```typescript
import { fail, redirect } from '@sveltejs/kit';

const URL_PATTERN =
	/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name');
		const content = data.get('content');
		const picture = data.get('picture');

		const errors: {
			name?: string;
			picture?: string;
		} = {};

		if (!name || typeof name !== 'string' || name.length < 3) {
			errors.name = 'Le nom du dinosaure doit faire 3 caractères au minimum.';
		}

		if (!picture || typeof picture !== 'string' || !picture || !URL_PATTERN.test(picture.trim())) {
			errors.picture = 'Le nom du dinosaure doit faire 3 caractères au minimum.';
		}

		if (Object.keys(errors).length) {
			return fail(400, errors);
		}

		const dino = {
			name,
			content,
			picture
		};

		// save dino to db

		// then redirects in case of a successful save
		throw redirect(303, '/dinodex');
	}
};
```

Code de la page :

```svelte
<script>
	import { enhance } from '$app/forms';

	export let form;
</script>

<div>
	<h1>Ajouter un dinosaure</h1>

	<a href="/dinodex">Retour à la liste des dinosaures</a>

	<form method="POST" use:enhance>
		<label>
			Nom
			<input name="name" />
		</label>
		{#if form?.name}
			<p class="error">
				{form.name}
			</p>
		{/if}
		<label>
			Présentation
			<input name="content" />
		</label>
		<label>
			Image (url externe)
			<input name="picture" />
		</label>
		{#if form?.picture}
			<p class="error">
				{form.picture}
			</p>
		{/if}
		<blockquote>
			La création de dinosaure n'est pas fonctionnelle car il n'y a pas de base de données derrière.
			Vous développerez "juste" les appels HTTP, la vérification des données sans l'enregistrement
			en base de données
		</blockquote>
		<button type="submit"> Créer le dinosaure </button>
	</form>
</div>

<style>
	div {
		max-width: 800px;
		margin: auto;
		padding: 8px;
	}

	.error {
		background-color: #fff9f9;
		border: 1px solid pink;
		padding: 4px 8px;
		border-radius: 4px;
	}

	blockquote {
		margin-bottom: 16px;
	}
</style>
```
