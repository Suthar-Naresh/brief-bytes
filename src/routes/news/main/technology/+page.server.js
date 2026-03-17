import { fetchNews } from "$lib/fetchNews";
import { error } from '@sveltejs/kit';

export const load = async () => {
    try {
        const news = await fetchNews('https://www.thehindu.com/sci-tech/technology/');
        return { news };
    } catch (e) {
        error(503, 'Unable to fetch technology news. Please try again later.');
    }
};
