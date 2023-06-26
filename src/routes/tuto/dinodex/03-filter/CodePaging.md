---
layout: false
---

code source de l'API :

```typescript
import dinos from '$lib/server/dino.json';
import type { Dino } from './utils';

export const load = async ({ url }) => {
	const name = url.searchParams.get('name') || undefined;
	const page = parseInt(url.searchParams.get('page') || '0');
	const perPage = parseInt(url.searchParams.get('perPage') || '10');
	const nameRegExp = name ? new RegExp(name, 'i') : undefined;

	const filteredDinos = (dinos as Array<Dino>).filter(
		(dino) => !name || nameRegExp?.test(dino.name)
	);

	const pagedDinos = [...filteredDinos].splice(page * perPage, perPage);

	return {
		dinos: pagedDinos,
		totalCount: filteredDinos.length,
		displayCount: pagedDinos.length,
		page,
		perPage,
		name
	};
};
```

code source du composant de pagination `Pagination.svelte` qui prendra 3 paramètres `name`, `currPage` et `nbPage` :

```svelte
<script lang\="ts">
	export let name: string | undefined;
	export let currPage: number;
	export let nbPage: number;
</script>

<nav>
	pages
	{#if currPage > 4}
		<a href="/?page=0{name ? `&dino-name=${name}` : ''}" class="link-page">1</a> ...
	{/if}
	{#each new Array(7) as _, page}
		{@const nextPage = currPage + page - 3}
		{#if nextPage >= 0 && nextPage <= nbPage}
			<a
				href="/?page={nextPage}{name ? `&dino-name=${name}` : ''}"
				class="link-page"
				aria-current={nextPage === currPage ? 'page' : undefined}>{nextPage + 1}</a
			>
		{/if}
	{/each}
	{#if currPage < nbPage - 4}
		... <a href="/?page={nbPage}{name ? `&dino-name=${name}` : ''}" class="link-page"
			>{nbPage + 1}</a
		>
	{/if}
</nav>

<style>
	nav {
		padding-bottom: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a {
		padding: 8px 4px;
	}

	a[aria-current='page'] {
		color: black;
		text-decoration: none;
	}
</style>
```

Vous pouvez alors utiliser le composant dans `+page.svelte` :

```svelte
<script>
	...

	// ajouter :
	$: nbPage = Math.floor(data.totalCount / data.perPage);
</script>

<Pagination name={data.name} currPage={data.page} {nbPage} />
```

Notez que l'utilisation de `$: nbPage = ` permet de créer un bloc réactif tout en définissant une nouvelle variable `nbPage`.
