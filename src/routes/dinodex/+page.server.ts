import dinos from '$lib/server/dino.json';
import type { Dino } from './utils';

export const load = async ({ url }) => {
	const name = url.searchParams.get('name') || undefined;
	const page = parseInt(url.searchParams.get('page') || '0');
	const perPage = parseInt(url.searchParams.get('perPage') || '10');
	const nameRegExp = name ? new RegExp(name, 'i') : undefined;

	const filteredDinos = (dinos as Array<Dino>).filter(
		(dino) => !name || nameRegExp?.test(dino.name)
	);

	const pagedDinos = [...filteredDinos].splice(page * perPage, perPage);

	return {
		dinos: pagedDinos,
		totalCount: filteredDinos.length,
		displayCount: pagedDinos.length,
		page,
		perPage,
		name
	};
};
