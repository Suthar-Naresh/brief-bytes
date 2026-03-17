import { fetchNews } from "$lib/fetchNews";
import { error } from '@sveltejs/kit';

export const load = async () => {
    try {
        const news = await fetchNews('https://www.thehindu.com/entertainment/');
        return { news };
    } catch (e) {
        error(503, 'Unable to fetch entertainment news. Please try again later.');
    }
};
