import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/news/main');
    }
}

export const actions = {
    default: async ({ locals, request }) => {
        const formData = await request.formData();
        const { name, email, password, confirm_password } = Object.fromEntries([...formData]);

        try {
            await locals.pb.collection('newsUsers').create({
                "username": name,
                "email": email,
                "emailVisibility": true,
                "password": password,
                "passwordConfirm": confirm_password,
            });

        } catch (error) {
            console.log('ERRORRRRRRRRRRRRRRRR....\n', error);
            return {
                error: 'ERROR',
                when: 'During registration.'
            }
        }

        throw redirect(303, '/login');
    }
}