import { error } from '@sveltejs/kit';
import { dienstenBySlug } from '$lib/data/diensten';

export function load({ params }) {
	const dienst = dienstenBySlug[params.slug];

	if (!dienst) {
		error(404, 'Dienst niet gevonden');
	}

	return { dienst };
}
