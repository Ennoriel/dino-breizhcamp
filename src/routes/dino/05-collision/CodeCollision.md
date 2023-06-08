```typescript
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
```