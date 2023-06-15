import { fail, redirect } from '@sveltejs/kit';

const URL_PATTERN =
	/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name');
		const content = data.get('content');
		const picture = data.get('picture');

		const errors: {
			name?: string;
			picture?: string;
		} = {};

		if (!name || typeof name !== 'string' || name.length < 3) {
			errors.name = 'Le nom du dinosaure doit faire 3 caractères au minimum.';
		}

		if (!picture || typeof picture !== 'string' || !picture || !URL_PATTERN.test(picture.trim())) {
			errors.picture = 'Le nom du dinosaure doit faire 3 caractères au minimum.';
		}

		if (Object.keys(errors).length) {
			return fail(400, errors);
		}

		const dino = {
			name,
			content,
			picture
		};

		// save dino to db

		// then redirects in case of a successful save
		throw redirect(303, '/dinodex');
	}
};
