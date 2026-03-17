import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.pb = new PocketBase(env.PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090');

    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = event.locals.pb.authStore.record;
    }

    try {
        event.locals.pb.authStore.isValid && await event.locals.pb.collection('newsUsers').authRefresh();
    } catch (_) {
        event.locals.pb.authStore.clear();
    }

    const response = await resolve(event);

    response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie({ httpOnly: false, path: '/' }));

    return response;
}
