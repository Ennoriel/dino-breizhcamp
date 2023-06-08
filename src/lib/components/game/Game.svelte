<script lang="ts">
	import { onMount } from 'svelte';
	import Board from './Board.svelte';
	import { DINO_EDGES, type Tree as TreeType } from './utils.js';
	import { tweened } from 'svelte/motion';

	let pressed = false;
	let power = 0;
	let jumpAt = 0;
	const jumpPos = tweened(0, {
		duration: 20
	});

	let lost = false;
	let score = 0;
	let bestScore = 0;
	
	let svgRef: SVGSVGElement;
	let treeRef: SVGPathElement;
	let dinoRef: SVGPathElement;

	const CONST = {
		START_POSITION: 1000,
		TRESHOLD_NEW_TREE: .6,
		TRESHOLD_RANDOM: .95,
		JUMP_HEIGHT: 150,
		JUMP_POWER: 7,
		SPEED: 6,
		TREES: [
			{
				height: 80,
				width: 50,
				color: "green"
			},
			{
				height: 40,
				width: 40,
				color: "lightgreen"
			}
		],
	}
	
	let trees: Array<TreeType> = [
		{
			position: CONST.START_POSITION,
			variant: 0
		}
	] 
	
	onMount(() => {
		const id = setInterval(() => { 
			if (lost) return;
			
			trees.map(tree => tree.position = tree.position - CONST.SPEED);
			
			if (!trees || trees[trees.length - 1].position < CONST.TRESHOLD_NEW_TREE * CONST.START_POSITION) {
				if (Math.random() > CONST.TRESHOLD_RANDOM) {
					trees.push({
						position: CONST.START_POSITION,
						variant: Math.random() > 0.5 ? 0 : 1 
					})
				}
			}
			
			if (trees[0].position < -100) {
				trees = trees.slice(1)
			}
			
			if (pressed) power = Math.min(10, power + 1); 
			
			jumpAt++;
			score++;
			bestScore = Math.max(bestScore, score);
						
			const MAX_JUMP_X = 240 / CONST.SPEED;
			const MAX_JUMP_Y = 120;
			const a = -4 * MAX_JUMP_Y / MAX_JUMP_X / MAX_JUMP_X;
			const b = 4 * MAX_JUMP_Y / MAX_JUMP_X
			const f = (x: number) => a * x * x + b * x
			
			if (pressed && jumpAt <= MAX_JUMP_X) {
				jumpPos.set(f(jumpAt));
			} else {
				jumpPos.set(Math.max(0, $jumpPos - CONST.JUMP_POWER));
			}
			
			const firstTree = trees[0];
			const firstTreeType = CONST.TREES[firstTree.variant];
			if (trees[0].position < 100 && trees[0].position > 50 - firstTreeType.width) {
				if ($jumpPos < firstTreeType.height) {
					const dinoPoints = svgRef ? DINO_EDGES.map(([x, y]) => {
		const point = svgRef.createSVGPoint();

		point.x = x;
		point.y = y - $jumpPos;
		
		return point
	}) : [];
					if (dinoPoints.some((point) => {
						const res = treeRef.isPointInFill(point);
						if(res) console.log(point);
						return res;
					})) {
						lost = true;
					}
				}
			}
			
			trees = trees;
		}, 20);
		
		return () => clearInterval(id)
	})
	
	function keydown(e: KeyboardEvent) {
		if (e.keyCode === 32 && !pressed && $jumpPos === 0) {
			pressed = true;
			power = 0;
			jumpAt = 0;
			e.preventDefault();
			e.stopPropagation();
		}
	}
	
	function keypress(e: KeyboardEvent) {
		if (e.keyCode === 32) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	
	function keyup() {
		pressed = false;
	}
	
	function click() {
		if (lost) {
			lost = false;
			pressed = false;
			power = 0;
			jumpAt = 0;
			jumpPos.set(0);
			score = 0;
			trees = [
				{
					position: CONST.START_POSITION,
					variant: 0
				}
			]
		}
	}
</script>

<svelte:window on:keydown={keydown} on:keyup={keyup} on:click={click} on:keypress={keypress}/>

<div class="floor"/>

<Board position={$jumpPos} {trees} bind:svgRef bind:dinoRef bind:treeRef />

{#if lost}
	<p>
		Vous avez perdu.
	</p>
{/if}

<p>
	Score : {(score / 10).toFixed()}
</p>
<p>
	Meilleur score : {(bestScore / 10).toFixed()}
</p>
