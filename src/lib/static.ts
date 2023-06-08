import type { Tuto } from '$lib/types/tuto';

type GlobReturn<T> = Record<string, () => Promise<{ metadata: T }>>;
type Glob<T> = [string, () => Promise<{ metadata: T }>];

async function convertMetadata<T>([, page]: Glob<T>) {
	const { metadata } = await page();
	return {
		...metadata,
		step: parseInt(metadata.slug.split('-')[0])
	};
}

export async function getTutos() {
	const tutos = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/dino/*/+page.md') as GlobReturn<Tuto>).map(
			async (arg) => convertMetadata(arg)
		)
	);
	// tutos.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
	return tutos;
}

export function getNextTuto(tutos: Array<Tuto>, slug: string) {
	const currTuto = tutos.find((tuto) => tuto.slug === slug) || { step: 0 };
	return tutos.find((tuto) => tuto.step === currTuto?.step + 1);
}
