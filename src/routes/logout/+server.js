import { redirect } from "@sveltejs/kit";

export const POST = ({ locals }) => {
    locals.pb.authStore.clear();
    // @ts-ignore
    locals.user = undefined;

    throw redirect(303, '/');
}