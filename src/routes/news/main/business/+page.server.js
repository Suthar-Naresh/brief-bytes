import { fetchNews } from "$lib/fetchNews";
import { error } from '@sveltejs/kit';

export const load = async () => {
    try {
        const news = await fetchNews('https://www.thehindu.com/business/');
        return { news };
    } catch (e) {
        error(503, 'Unable to fetch business news. Please try again later.');
    }
};
