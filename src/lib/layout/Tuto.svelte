<script lang="ts">
	import { getNextTuto, getTutos } from '$lib/static';

	const { title, slug } = $$restProps;

	const tutosPromise = getTutos();
</script>

<article>
	<h1>{title}</h1>

	<slot />

	{#await tutosPromise}
		...
	{:then tutos}
		{@const nextTuto = getNextTuto(tutos, slug)}
		<p>
			Vous avez fini l'étape, bravo ! Vous pouvez passer à l'étape suivante : <a
				href={nextTuto?.slug}>{nextTuto?.title}</a
			>.
		</p>
	{/await}
</article>
