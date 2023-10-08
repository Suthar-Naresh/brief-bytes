import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/news/main');
    }
}

export const actions = {
    default: async ({ locals, request }) => {
        const formData = await request.formData();
        const { email, password } = Object.fromEntries([...formData]);

        try {
            await locals.pb.collection('newsUsers').authWithPassword(email.toString(), password.toString());
        } catch (error) {
            console.log('ERRORRRRRRRRRRRRRRRR....\n', error);
        }

        throw redirect(303, '/news/main');
    }
}