---
layout: false
---

Code de l'API :

```typescript
import dinos from '$lib/server/dino.json';
import type { Dino } from '../utils.js';

export const load = async ({ params }) => {
	return (dinos as Array<Dino>).find((dino) => dino.name === params.name);
};
```

Code de la page :

```svelte
<script lang="ts">
	import DinoCard from '../DinoCard.svelte';

	export let data;
</script>

{#if data.name}
	<DinoCard dino={data} />
{/if}

<a href="/dinodex">Retourner au dinodex</a>
```
