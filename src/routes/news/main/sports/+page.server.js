import { fetchNews } from "$lib/fetchNews";
import { error } from '@sveltejs/kit';

export const load = async () => {
    try {
        const news = await fetchNews('https://www.thehindu.com/sport/');
        return { news };
    } catch (e) {
        error(503, 'Unable to fetch sports news. Please try again later.');
    }
};
