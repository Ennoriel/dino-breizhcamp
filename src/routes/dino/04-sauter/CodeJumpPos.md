```typescript
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
```