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
		<h1>Quelques règles</h1>
		<ul>
			<li>Bienveillance 👾</li>
			<li>Règle des deux pieds 👣</li>
			<li>Les questions ✋</li>
		</ul>
		<aside class="notes">
			Le premier pied représente ce que cette présentation m’apporte. Le second pied représente ce
			que je peux apporter moi-même à cet présentation. La règle des deux pieds est : si l’événement
			ne m’apporte rien et si ma présence n’apporte rien à l’événement, je n’ai plus de fondation,
			je prends mes pieds et je m’en vais vivre ce temps ailleurs. Personne ne se vexera, je suis
			libre et tout le monde comprendra que je préfère être bien ailleurs que mal ici.
		</aside>
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
