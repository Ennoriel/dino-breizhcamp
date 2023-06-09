import type { Tuto } from '$lib/types/tuto';

type GlobReturn<T> = Record<string, () => Promise<{ metadata: T }>>;
type Glob<T> = [string, () => Promise<{ metadata: T }>];

async function convertMetadata([, page]: Glob<Omit<Tuto, 'step'>>) {
	const { metadata } = await page();
	return {
		...metadata,
		step: parseInt(metadata.slug.split('-')[0])
	};
}

export async function getTutos() {
	const tutos = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/tuto/**/+page.md') as GlobReturn<Tuto>).map(
			async (arg) => convertMetadata(arg)
		)
	);
	return tutos;
}

export function getNextTuto(tutos: Array<Tuto> | undefined, slug: string, tutoName: string) {
	const currTutos = tutos?.filter((tuto) => tuto.tuto === tutoName);
	const currTuto = currTutos?.find((tuto) => tuto.slug === slug) || { step: 0 };
	return currTutos?.find((tuto) => tuto.step === currTuto?.step + 1);
}
