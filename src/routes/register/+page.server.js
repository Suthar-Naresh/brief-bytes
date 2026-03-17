import { fail, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        redirect(303, '/news/main');
    }
};

export const actions = {
    default: async ({ locals, request }) => {
        const formData = await request.formData();
        const { name, email, password, confirm_password } = Object.fromEntries([...formData]);

        if (password !== confirm_password) {
            return fail(400, { error: 'Passwords do not match.' });
        }

        try {
            await locals.pb.collection('newsUsers').create({
                username: name,
                email: email,
                emailVisibility: true,
                password: password,
                passwordConfirm: confirm_password,
            });
        } catch (error) {
            return fail(400, { error: 'Registration failed. Please try again with different credentials.' });
        }

        redirect(303, '/login');
    }
};
