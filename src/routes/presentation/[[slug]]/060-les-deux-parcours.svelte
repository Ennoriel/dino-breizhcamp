<script>
	import Game from '$lib/components/game/Game.svelte';
	import { Slide } from 'svelte-reveal.js';
</script>

<Slide>
	<Slide>
		<h1>Workshops</h1>
		<ul>
			<li>dinodex</li>
			<li>dino game</li>
		</ul>
	</Slide>

	<Slide backgroundIframe="https://dino-breizhcamp.vercel.app/dinodex" />

	<Slide>
		<h1>dino game</h1>
		<Game />
	</Slide>

	<Slide>
		<h1>lien des tutoriels</h1>
		<a href="https://dino-breizhcamp.vercel.app" target="_blank"
			>https://dino-breizhcamp.vercel.app</a
		>
		<p><strong>dinoWifi</strong> : dinoPassw0rd</p>
	</Slide>
</Slide>

<style>
	h1 {
		font-size: 72px !important;
		margin-bottom: 72px !important;
	}
</style>
