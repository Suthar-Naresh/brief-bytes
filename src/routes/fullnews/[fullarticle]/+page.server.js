// // /** @type {import('@sveltejs/kit').Load} */

import { getURL } from '$lib/URLExtract.js';
import { fetchArticle } from '$lib/fetchArticle.js';



// @ts-ignore
export const load = async ({ params }) => {
    // @ts-ignore
    const article = await fetchArticle(getURL(params.fullarticle));

    // console.log(article);

    return { article }
}