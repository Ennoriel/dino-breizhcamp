import dinos from '$lib/server/dino.json';
import type { Dino } from '../utils.js';

export const load = async ({ params }) => {
	return (dinos as Array<Dino>).find((dino) => dino.name === params.dinoName);
};
