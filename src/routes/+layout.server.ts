import { getTutos } from '$lib/static';

export const load = async () => {
	return { tutos: await getTutos() };
};
