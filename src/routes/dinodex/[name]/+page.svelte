<script lang="ts">
	import DinoCard from '../DinoCard.svelte';

	export let data;
</script>

{#if data.name}
	<DinoCard dino={data} />
{/if}

<a href="/dinodex">Retourner au dinodex</a>
