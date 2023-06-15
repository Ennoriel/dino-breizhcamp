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
	const nameRegExp = name ? new RegExp(name) : undefined;

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

code source du composant de pagination :

```svelte
<script lang="ts">
	export let name: string | undefined;
	export let page: number;
	export let nbPage: number;
</script>

<nav>
	pages
	{#if page > 4}
		<a href="/dinodex?page=0{name ? `&dino-name=${name}` : ''}" class="link-page">1</a> ...
	{/if}
	{#each new Array(7) as _, page}
		{@const nextPage = page + page - 3}
		{#if nextPage >= 0 && nextPage <= nbPage}
			<a
				href="/dinodex?page={nextPage}{name ? `&dino-name=${name}` : ''}"
				class="link-page"
				aria-current={nextPage === page ? 'page' : undefined}>{nextPage + 1}</a
			>
		{/if}
	{/each}
	{#if page < nbPage - 4}
		... <a href="/dinodex?page={nbPage}{name ? `&dino-name=${name}` : ''}" class="link-page"
			>{nbPage + 1}</a
		>
	{/if}
</nav>
```
