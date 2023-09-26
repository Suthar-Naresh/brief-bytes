import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ locals, request }) => {
        // console.log('AT login...');
        const formData = await request.formData();
        // console.log('Got form data');
        const { name, password } = Object.fromEntries([...formData]);
        // console.log('Created object out of it');
        // console.log(data);

        try {
            // console.log('working on data entry!');

            const authData = await locals.pb.collection('devTable').authWithPassword(name.toString(), password.toString());

            // after the above you can also access the auth data from the authStore
            // console.log(locals.pb.authStore.isValid);
            // console.log(locals.pb.authStore.token);
            // console.log(locals.pb.authStore.model?.id);
            // console.log(newUser);

        } catch (error) {
            console.log('ERRORRRRRRRRRRRRRRRR....\n', error);
        }

        throw redirect(303, '/');
    }
}