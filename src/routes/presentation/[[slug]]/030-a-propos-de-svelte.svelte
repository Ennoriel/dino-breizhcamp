<script>
	import { Code, Slide } from 'svelte-reveal.js';
</script>

<Slide>
	<Slide>
		<h1>Le framework</h1>
	</Slide>

	<Slide>
		<h1>Le framework</h1>
		<img
			src="https://avatars.githubusercontent.com/u/1162160?v=4"
			height="200"
			style:margin-right="64px"
			alt="Rich Harris face"
		/>
		<ul>
			<li>Rich Harris</li>
			<li class="fragment">2016: Ractive.js</li>
			<li class="fragment">2019: Svelte v3</li>
			<li class="fragment">2021: SvelteKit</li>
			<li class="fragment">22 juin 2023: Svelte v4</li>
		</ul>
		<aside class="notes">The guardian</aside>
	</Slide>

	<Slide>
		<h1>Pourquoi j'ai choisi Svelte</h1>
		<ul>
			<li class="fragment">HTML, JS, CSS, HTTP natifs</li>
			<li class="fragment">tout intégré (routes, SSR, store)</li>
			<li class="fragment">léger + rapide à mettre en place</li>
			<li class="fragment">binding</li>
			<li class="fragment">animations</li>
		</ul>
	</Slide>

	<Slide>
		<h1>Exemple de code Svelte</h1>
		<Code id="code-animation" trim lineNumbers="1-3|5-14|16-20" language="svelte">
			{@html `
&lt;script lang="ts"&gt;
	let name: string = "";
&lt;/script&gt;

&lt;label&gt;
	Nom
	&lt;input bind:value={name} /&gt;
&lt;/label&gt;

&lt;button
	on:click={() =&gt; fetch('/api', { name })}
&gt;
	Valider
&lt;/button&gt;

&lt;style&gt;
	input {
		border: 1px solid black;
	}	
&lt;/style&gt;`}
		</Code>
	</Slide>

	<Slide>
		<h1>Exemple SvelteKit</h1>
		<ul>
			<li>
				/routes
				<ul>
					<li>
						/login
						<ul>
							<li>/+page.svelte</li>
							<li>/+page.server.ts</li>
						</ul>
					</li>
					<li>
						/app
						<ul>
							<li>/+page.svelte</li>
							<li>/+page.server.ts</li>
						</ul>
					</li>
					<li>/+layout.svelte</li>
				</ul>
			</li>
		</ul>
	</Slide>

	<Slide backgroundColor="aquamarine">
		<h1>Cette présentation est écrite en Svelte !</h1>
	</Slide>
</Slide>

<style>
	h1 {
		font-size: 72px !important;
		margin-bottom: 72px !important;
	}
</style>
