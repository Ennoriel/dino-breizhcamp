<script lang="ts">
	import type { Dino } from './utils';

	export let dino: Dino;
</script>

<li>
	<h3>
		<a href="/dinodex/{dino.name}">{dino.name}</a>
	</h3>
	<div>
		<img src={dino.picture} alt="Dessin du dinosaure {dino.name}" />
	</div>
	{#if dino.content}
		<p>{dino.content}</p>
		<hr />
	{/if}
	<p>
		<strong>nom</strong> : {dino.name} (<strong>signification</strong> : {dino.meaning} -
		<strong>prononciation</strong> : {dino.pronounciation})
	</p>
	{#if dino.namedBy}
		<p><strong>nommé par</strong> : {dino.namedBy}</p>
	{/if}
	<p>
		<strong>régime alimentaire</strong> : {dino.diet}
		{#if dino.food}
			(<strong>nourriture</strong> : {dino.food})
		{/if}
	</p>
	{#if dino.eraItLived}
		<p>
			<strong>ère</strong> : {dino.eraItLived} (il y a {dino.whenItLived.join(' - ')} millions d'années)
		</p>
	{/if}
	{#if dino.teeth}
		<p><strong>dents</strong> : {dino.teeth}</p>
	{/if}
	{#if dino.length}
		<p><strong>taille</strong> : {dino.length}m</p>
	{/if}
	{#if dino.weight}
		<p><strong>poids</strong> : {dino.weight}</p>
	{/if}
	<p><strong>région où il a été découvert</strong> : {dino.foundIn}</p>
	{#if dino.howItMoved}
		<p><strong>mode de déplacement</strong> : {dino.howItMoved}</p>
	{/if}
	<p><strong>classification</strong> : {dino.taxonomy.join(' > ')}</p>
	<p><strong>type de dinosaure</strong> : {dino.dinoType}</p>
	<p><strong>type d'espèce</strong> : {dino.speciesType}</p>
</li>

<style>
	li {
		display: block;
		list-style-type: none;
		background-color: darkblue;
		color: white;
		padding: 4px 8px;
		border-radius: 8px;
		margin: 8px;
	}

	h3 {
		line-height: 1;
		margin: 0;
		font-family: 'Jurassic Parc', serif;
		font-size: 48px;
		text-align: center;
	}

	h3 a {
		color: white;
	}

	p {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	hr {
		width: 160px;
		margin: 8px auto;
	}

	div {
		background-color: white;
		display: flex;
		justify-content: center;
		overflow: hidden;
	}

	img {
		max-height: 160px;
		max-width: 100%;
		transition: all 0.2s;
	}

	div:hover img {
		transform: scale(1.05);
	}
</style>
