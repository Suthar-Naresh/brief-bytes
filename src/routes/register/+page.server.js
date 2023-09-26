import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ locals, request }) => {
        // console.log('AT register...');
        const formData = await request.formData();
        // console.log('Got form data');
        const {name, email, password, confirm_password} = Object.fromEntries([...formData]);
        // console.log('Created object out of it');
        // console.log(data);

        try {
            // console.log('working on data entry!');
            const newUser = await locals.pb.collection('devTable').create({
                "username": name,
                "email": email,
                "emailVisibility": true,
                "password": password,
                "passwordConfirm": confirm_password,
            });
            // console.log(newUser);

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