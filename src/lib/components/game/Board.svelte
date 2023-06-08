<script lang="ts">
	import Dino from './Dino.svelte';
	import Cactus from './Cactus.svelte';
	import type { Cactus as CactusType } from './utils.js';

	export let position = 0;
	export let cactuses: Array<CactusType> = [];

	export let svgRef: SVGSVGElement;
	export let cactusRef: SVGPathElement;
	export let dinoRef: SVGPathElement;
</script>

<svg viewBox="0 0 1000 240" bind:this={svgRef}>
	<rect x="0" y="0" width="1000" height="240" fill="#EFEFEF" />
	<Dino {position} bind:ref={dinoRef} />
	{#each cactuses as cactus, index}
		{#if index}
			<Cactus {...cactus} />
		{:else}
			<Cactus {...cactus} bind:ref={cactusRef} />
		{/if}
	{/each}
	<path d="M0,230H1000V226H0Z" stroke="none" fill="#535353" />
</svg>
