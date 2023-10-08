// // /** @type {import('@sveltejs/kit').Load} */

import { getURL } from '$lib/URLExtract.js';
import { fetchArticle } from '$lib/fetchArticle.js';
import { model } from '$lib/model.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const article = await fetchArticle(getURL(params.fullarticle));

    let articleString = '';
    article.parr.forEach(str => {
        articleString += str;
    });
    // console.log(articleString);

    const summary = await model(articleString);
    // console.log(summary);

    return { article, summary }
}