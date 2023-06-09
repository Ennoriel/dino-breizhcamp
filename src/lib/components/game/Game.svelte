<script lang="ts">
	import { onMount } from 'svelte';
	import Board from './Board.svelte';
	import { DINO_EDGES, type Cactus as CactusType } from './utils';

	let jumping = false;
	let jumpedAt = 0;
	let jumpPos = 0;
	let dinoPos = 0;

	let lost = false;
	let highScore = 0;

	let svgRef: SVGSVGElement;
	let cactusRef: SVGPathElement;

	const CONST = {
		START_POSITION: 1000,
		SPEED: 6
	};

	let cactuses: Array<CactusType> = [
		{
			position: CONST.START_POSITION,
			variant: 0
		}
	];

	onMount(() => {
		const id = setInterval(() => {
			if (lost) return;

			// increment dinosaur position & high score
			dinoPos = dinoPos + CONST.SPEED;
			highScore = Math.max(highScore, dinoPos);

			// Add a cactus if the last one is too far left
			const lastCactusPos = cactuses[cactuses.length - 1].position;
			if (dinoPos > lastCactusPos - CONST.START_POSITION) {
				cactuses.push({
					position: lastCactusPos + 500 + Math.random() * 250,
					variant: Math.random() > 0.5 ? 0 : 1
				});
			}

			// Remove the first cactus if it has already been jumped over.
			// This way, the first cactus is always the one to search for for collision
			if (cactuses[0].position < dinoPos - 100) {
				cactuses = cactuses.slice(1);
			}

			// increment jumpedAt and compute the dinosaur jump position
			jumpedAt++;

			const MAX_JUMP_X = 240 / CONST.SPEED; // max jump width span
			const MAX_JUMP_Y = 120; // max jump height
			const a = (-4 * MAX_JUMP_Y) / MAX_JUMP_X / MAX_JUMP_X; // a coefficient
			const b = (4 * MAX_JUMP_Y) / MAX_JUMP_X; // b coefficient
			const f = (x: number) => a * x * x + b * x; // y = a * x^2 + b*x

			if (jumping && jumpedAt <= MAX_JUMP_X) {
				// if the jump is in progress, we compute the jump height
				jumpPos = f(jumpedAt);
			} else {
				jumping = false;
			}

			// handle collision with native svg element isPointInFill method
			const firstCactusRelativePos = cactuses[0].position - dinoPos;
			if (firstCactusRelativePos > 50 && firstCactusRelativePos < 100) {
				if (jumpPos < 100) {
					const dinoPoints = svgRef
						? DINO_EDGES.map(([x, y]) => {
								const point = svgRef.createSVGPoint();

								point.x = x;
								point.y = y - jumpPos;

								return point;
						  })
						: [];
					if (dinoPoints.some((point) => cactusRef.isPointInFill(point))) {
						lost = true;
					}
				}
			}
		}, 20);

		return () => clearInterval(id);
	});

	function keydown(e: KeyboardEvent) {
		if (e.code === 'Space' && !jumping) {
			jumping = true;
			jumpedAt = 0;
			e.preventDefault();
			e.stopPropagation();
		}
	}

	function keypress(e: KeyboardEvent) {
		if (e.code === 'Space') {
			e.preventDefault();
			e.stopPropagation();
		}
	}

	function click() {
		if (lost) {
			lost = false;
			jumping = false;
			jumpedAt = 0;
			dinoPos = 0;
			jumpPos = 0;
			cactuses = [
				{
					position: CONST.START_POSITION,
					variant: 0
				}
			];
		}
	}
</script>

<svelte:window on:keydown={keydown} on:click={click} on:keypress={keypress} />

<div class="floor" />

<Board position={{ x: dinoPos, y: jumpPos }} {cactuses} bind:svgRef bind:cactusRef />

{#if lost}
	<p>Vous avez perdu.</p>
{/if}

<p>
	Score : {(dinoPos / 10).toFixed()}
</p>
<p>
	Meilleur score : {(highScore / 10).toFixed()}
</p>
