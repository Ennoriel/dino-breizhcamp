<script>
	import { getNextTuto } from '$lib/static';

	const { title, slug } = $$restProps;
	export let data;

	$: nextTuto = getNextTuto(data?.tutos, slug);
</script>

<article>
	<h1>{title}</h1>

	<slot />

	{#if nextTuto}
		<p>
			Vous avez fini l'étape, bravo ! Vous pouvez passer à l'étape suivante : <a
				href={nextTuto?.slug}>{nextTuto?.title}</a
			>.
		</p>
	{/if}
</article>

<style>
	article {
		max-width: 800px;
		margin: auto;
		padding: 8px;
	}
</style>
