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
