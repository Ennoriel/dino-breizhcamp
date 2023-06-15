<div>
	<img
		src="/breizhassic-world.png"
		alt="logo du BreihCamp customisé avec un dinosaure de Jurassic Pafc"
	/>

	<span>
		<h1>
			Bienvenue sur le site du tutoriel de Svelte & SvelteKit pour le workshop du 28 juin 2023
		</h1>

		<ul>
			<li>
				<a href="/presentation" data-sveltekit-preload-data="tap" data-sveltekit-reload
					>présentation</a
				>
			</li>
			<li>Tutoriel 1 : <a href="/tuto/dinodex/00-introduction">dinodex</a></li>
			<li>Tutoriel 2 : <a href="/tuto/dino-game/00-introduction">dino game</a></li>
		</ul>
	</span>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: black;
		color: white;
	}
	div > * {
		margin: 64px;
	}

	img {
		margin: auto;
	}

	a {
		color: white;
		text-decoration: underline;
	}
</style>
