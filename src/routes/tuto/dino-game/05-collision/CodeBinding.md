---
layout: false
---

```svelte
<script lang\="ts">
	import Dino from './Dino.svelte';
	import Cactus from './Cactus.svelte';
	import type { Cactus as CactusType } from './utils.js';

	export let position = {
		x: 0,
		y: 0
	};
	export let cactuses: Array<CactusType> = [];

	export let svgRef: SVGSVGElement;
	export let cactusRef: SVGPathElement;
</script>

<svg viewBox="0 0 1000 240" bind:this={svgRef}>
	<rect x="0" y="0" width="1000" height="240" fill="#EFEFEF" />
	<Dino position={position.y} />
	{#each cactuses as cactus, index}
		{#if index}
			<Cactus variant={cactus.variant} position={cactus.position - position.x} />
		{:else}
			<Cactus
				variant={cactus.variant}
				position={cactus.position - position.x}
				bind:ref={cactusRef}
			/>
		{/if}
	{/each}
	<path d="M0,230H1000V226H0Z" stroke="none" fill="#535353" />
</svg>
```
