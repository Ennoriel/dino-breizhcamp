<script lang="ts">
	export let position = 0;
	export let variant: number;

	export let ref: SVGPathElement | undefined = undefined;
</script>

<path
	bind:this={ref}
	d="M{position},170 h4 v16 h4 v-24 h4 l4,4 v20 h4 v-20 l4,4 v20 l-4,4 h-4 v32 h-8 v-32 h-8 Z"
	stroke="none"
	fill={variant === 1 ? 'lightgreen' : 'green'}
/>
