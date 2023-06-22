<script lang="ts">
	import { Seo } from 'chyme-svelte';
	import 'chyme/css/reset.css';
	import 'chyme/css/tokens.css';
	import 'chyme/css/a11y.css';
	import 'chyme/css/code.css';
</script>

<Seo title="Tutoriels Svelte BreizhCamp" />

<slot />

<style>
	:global(code[class*='language-']),
	:global(pre[class*='language-']) {
		color: #fafafa;
	}
	:global(.token.tag) {
		color: #76d9e6;
	}
</style>
