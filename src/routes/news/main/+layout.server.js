import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
    if (locals.pb.authStore.isValid && locals.user && locals.user.id) {
        return {
            user: structuredClone(locals.user)
        };
    }

    redirect(303, '/');
};
