<script>
	import { enhance } from '$app/forms';

	export let form;
</script>

<div>
	<h1>Ajouter un dinosaure</h1>

	<a href="/dinodex">Retour à la liste des dinosaures</a>

	<form method="POST" use:enhance>
		<label>
			Nom
			<input name="name" />
		</label>
		{#if form?.name}
			<p class="error">
				{form.name}
			</p>
		{/if}
		<label>
			Présentation
			<input name="content" />
		</label>
		<label>
			Image (url externe)
			<input name="picture" />
		</label>
		{#if form?.picture}
			<p class="error">
				{form.picture}
			</p>
		{/if}
		<blockquote>
			La création de dinosaure n'est pas fonctionnelle car il n'y a pas de base de données derrière.
			Vous développerez "juste" les appels HTTP, la vérification des données sans l'enregistrement
			en base de données
		</blockquote>
		<button type="submit"> Créer le dinosaure </button>
	</form>
</div>

<style>
	div {
		max-width: 800px;
		margin: auto;
		padding: 8px;
	}

	.error {
		background-color: #fff9f9;
		border: 1px solid pink;
		padding: 4px 8px;
		border-radius: 4px;
	}

	blockquote {
		margin-bottom: 16px;
	}
</style>
