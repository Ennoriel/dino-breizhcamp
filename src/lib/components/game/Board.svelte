<script lang="ts">
	import Dino from './Dino.svelte';
	import Tree from './Tree.svelte';
	import type { Tree as TreeType } from './utils.js';

	export let position = 0;
	export let trees: Array<TreeType> = [];
	
	export let svgRef: SVGSVGElement;
	export let treeRef: SVGPathElement;
	export let dinoRef: SVGPathElement;
</script>

<svg viewBox="0 0 1000 240" bind:this={svgRef}>
	<rect x="0" y="0" width="1000" height="240" fill="#EFEFEF"/>
	<Dino {position} bind:ref={dinoRef}/>
	{#each trees as tree, index}
		{#if index}
			<Tree {...tree}/>
		{:else}
			<Tree {...tree} bind:ref={treeRef}/>
		{/if}
	{/each}
	<path d="M0,230H1000V226H0Z" stroke="none" fill="#535353"/>
</svg>