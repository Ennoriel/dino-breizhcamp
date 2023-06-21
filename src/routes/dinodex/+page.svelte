<script lang="ts">
	import DinoCard from './DinoCard.svelte';
	import Pagination from './Pagination.svelte';

	export let data;

	$: nbPage = Math.floor(data.totalCount / data.perPage);
</script>

<div>
	<h1>Dinodex</h1>

	<h2>Filtres</h2>

	<form>
		<input name="name" />
		<button type="submit">Filtrer</button>
	</form>

	<p><a href="/dinodex/create">Ajouter un dinosaure à la liste</a></p>

	<h2>Résultats</h2>

	<p>
		Il y a {data.totalCount} dinosaures trouvés et {data.displayCount} affichés sur la page {data.page +
			1} ({nbPage + 1} pages au total).
	</p>

	<ul>
		{#each data.dinos as dino}
			<DinoCard {dino} />
		{/each}
	</ul>

	<Pagination name={data.name} currPage={data.page} {nbPage} />
</div>

<style>
	div {
		max-width: 800px;
		margin: auto;
	}

	form {
		display: flex;
		gap: 16px;
	}

	ul {
		padding: 0;
		display: grid;
	}

	.link-page {
		padding: 0 4px;
	}

	.link-page[aria-current='page'] {
		color: black;
		text-decoration: none;
	}

	nav {
		text-align: center;
		padding-bottom: 32px;
	}

	@media (min-width: 768px) {
		ul {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
