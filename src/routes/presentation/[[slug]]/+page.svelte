<script lang="ts">
	import { onMount } from 'svelte';
	import { RevealJsContext } from 'svelte-reveal.js';
	import type Reveal from 'reveal.js';

	import S000 from './000-introduction.svelte';
	import S010 from './010-maxime-dupont.svelte';
	import S020 from './020-deroulement.svelte';
	import S030 from './030-a-propos-de-svelte.svelte';
	import S040 from './040-doc-et-outils.svelte';
	import S060 from './060-les-deux-parcours.svelte';

	import 'reveal.js/dist/reset.css';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/white.css';
	import 'reveal.js/plugin/highlight/monokai.css';

	let plugins: Reveal.PluginFunction[];

	onMount(async () => {
		plugins = [
			await import('reveal.js/plugin/highlight/highlight').then((res) => res.default)
			// await import('reveal.js/plugin/markdown/markdown').then(res => res.default)
		];
	});
</script>

<!-- a container with fixed size is required -->
<div style:width="100%" style:height="100vh">
	{#if plugins}
		<RevealJsContext
			options={{
				controls: true,
				progress: true,
				center: true,
				hash: true,
				plugins,
				keyboard: {
					32: null
				}
			}}
		>
			<S000 />
			<S010 />
			<S020 />
			<S030 />
			<S040 />
			<S060 />
		</RevealJsContext>
	{/if}
</div>
