<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { Seo } from 'chyme-svelte';
	import 'chyme/css/reset.css';
	import 'chyme/css/tokens.css';
	import 'chyme/css/a11y.css';
	import 'chyme/css/code.css';

	let open = false;
</script>

<Seo title="Tutoriels Svelte BreizhCamp" />

{#if !$page.route.id?.startsWith('/presentation')}
	<button class="menu" on:click={() => (open = !open)}>
		<img src="/menu.svg" alt="menu" />
	</button>
{/if}

{#if open}
	<nav transition:fade={{ duration: 200 }}>
		<button on:click={() => (open = false)}>Fermer le menu</button>
		<a href="/" on:click={() => (open = false)}>Accueil</a>
		<a href="/dinodex" on:click={() => (open = false)}>Dinodex</a>
		<a href="/tuto/dinodex/00-introduction" on:click={() => (open = false)}>Tuto du Dinodex</a>
		<a href="/dinogame" on:click={() => (open = false)}>Dino game</a>
		<a href="/tuto/dino-game/00-introduction" on:click={() => (open = false)}>Tuto du Dino game</a>
	</nav>
{/if}

<slot />

<style>
	:global(code[class*='language-']),
	:global(pre[class*='language-']) {
		color: #fafafa;
	}
	:global(.token.tag) {
		color: #76d9e6;
	}

	.menu {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 7px grey;
		background-color: white;
		transition: all 0.2s;
		cursor: pointer;
		z-index: 10000;
	}
	.menu:hover {
		box-shadow: 0 0 7px 1px #333;
	}

	nav {
		position: absolute;
		inset: 0;
		background-color: white;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	nav * {
		background-color: transparent;
		color: black;
		cursor: pointer;
		font-family: 'Jurassic Parc';
		font-size: 64px;
		line-height: 1.15;
	}
	nav *:hover {
		text-decoration: underline;
	}
</style>
