// // /** @type {import('@sveltejs/kit').Load} */

import { fetchNews } from "$lib/fetchNews"

export const load = async () => {
    let news = fetchNews('https://www.thehindu.com/sport/');
    return { news }
}