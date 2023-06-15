import { getTutos } from '$lib/static';

export const load = async () => {
	// console.log(await getTutos());
	return { tutos: await getTutos() };
};
