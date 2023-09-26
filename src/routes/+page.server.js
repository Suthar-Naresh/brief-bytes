// // /** @type {import('@sveltejs/kit').Load} */

import { PUBLIC_NEWS_API } from "$env/static/public";
import * as cheerio from 'cheerio';


export const load = async () => {
    /*const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${PUBLIC_NEWS_API}`

    const res = await fetch(url);
    const data = await res.json();

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
    }*/

    const url = `https://www.thehindu.com/news/`;

    const res = await fetch(url);
    const data = await res.text();

    const $ = cheerio.load(data);
    
    
    
    /**
     * @type {{ text: string; url: string | undefined; img: string | undefined; alt: string | undefined; }[]}
     */
    let arr = [];

    $('.element').each((index, el) => {
        const aTag = $(el).find('.title > a');
        const pic = $(el).find('.picture > img');

        // console.log(aTag.text(),'--->',pic.attr('data-original'));

        arr.push({
            text:aTag.text(),
            url:aTag.attr('href'),
            img:pic.attr('data-original')??undefined,
            alt:pic.attr('alt')??undefined,
        });
    });


    // const news = $('.articlebodycontent > p').text();

    return{
        news:arr
    }
}

/*
// can scrape using jsdom package just like scraping from browser
export const load = async () =>{
    let news = '';
    let url = 'https://www.thehindu.com/news/national/pm-narendra-modi-interview-on-growth-g20-india-world/article67266189.ece';

    const res = await fetch(url);
    const data = await res.text();

    
    console.log(data);

    return {
        url,
        news
    };
}
*/