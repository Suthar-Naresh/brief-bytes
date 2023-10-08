import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
    // console.log(locals.pb.authStore.model) same as locals.user

    if (locals.pb.authStore.isValid && locals.user && locals.user.id) {
        // console.log(locals.user.username);
        return {
            // user: JSON.parse(JSON.stringify(locals.user))
            user: locals.user
        }
    }else{
        // console.log('no one loggedIN');
        throw redirect(303, '/');
    }
}