```svelte
<script>
	import Board from './Board.svelte';
	import { type Cactus as CactusType } from './utils';

	let cactuses: Array<CactusType> = [
		{
			position: CONST.START_POSITION,
			variant: 0
		}
	];
</script>
```

Notez l'import d'un type du script `utils` :

```typescript
export type Cactus = {
	position: number;
	variant: number;
};
```