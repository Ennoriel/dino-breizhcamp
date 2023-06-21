---
layout: false
---

J'ai placé juste après l'ajout du cactus suivant :

```typescript
// Remove the first cactus if it has already been jumped over.
// This way, the first cactus is always the one to search for for collision
if (cactuses[0].position < dinoPos - 100) {
	cactuses = cactuses.slice(1);
}
```
