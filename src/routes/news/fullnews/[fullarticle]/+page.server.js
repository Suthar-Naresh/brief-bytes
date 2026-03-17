import { getURL } from '$lib/URLExtract.js';
import { fetchArticle } from '$lib/fetchArticle.js';
import { summarize } from '$lib/model.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    try {
        const article = await fetchArticle(getURL(params.fullarticle));
        const articleString = article.parr.join(' ');
        const summary = await summarize(articleString);
        return { article, summary };
    } catch (e) {
        error(503, 'Unable to load article. Please try again later.');
    }
};
