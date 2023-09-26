// // /** @type {import('@sveltejs/kit').Load} */

import { PUBLIC_NEWS_API } from "$env/static/public";

export const load = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${PUBLIC_NEWS_API}`;
    const url = `https://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=${PUBLIC_NEWS_API}`;
    // const url = `https://newsapi.org/v2/top-headlines?sources=the-hindu&category=sports&apiKey=${PUBLIC_NEWS_API}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    if (data.status === 'ok') {
        return {
            error: false,
            news: {
                len: data.totalResults,
                articles: data.articles
            }
        }
    } else {
        return {
            error: true,
            news: null
        }
    }
}