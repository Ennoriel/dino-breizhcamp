<script lang="ts">
	import 'chyme/css/reset.css';
	import 'chyme/css/tokens.css';
	// import 'chyme/css/scroll.css';
	import 'chyme/css/a11y.css';
	import 'chyme/css/code.css';
</script>

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
