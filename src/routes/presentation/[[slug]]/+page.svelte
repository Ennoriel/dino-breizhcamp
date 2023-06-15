<script>
	import { RevealJsContext } from 'svelte-reveal.js';
	import S000 from './000-introduction.svelte';
	import S010 from './010-maxime-dupont.svelte';
	import S020 from './020-deroulement.svelte';

	import 'reveal.js/dist/reset.css';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/white.css';
</script>

<!-- a container with fixed size is required -->
<div style:width="100%" style:height="100vh">
	<RevealJsContext
		options={{
			controls: true,
			progress: true,
			center: true,
			hash: true
		}}
	>
		<S000 />
		<S010 />
		<S020 />
	</RevealJsContext>
</div>

<!--
	- pourquoi j'ai décidé de travailler avec Svelte :
		- animations
		- binding
		- HTML, JS, CSS, HTTP natifs
		- tout intégré (routes, SSR, store)
		- léger + rapide à mettre en place
	- les bases des bases avec Svelte
	- les bases des bases avec SvelteKit
	- les 2 tutoriels
-->
