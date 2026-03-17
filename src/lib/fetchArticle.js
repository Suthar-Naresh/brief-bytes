import * as cheerio from 'cheerio';
import { cached } from './cache.js';

/**
 * @param {string} url
 */
export const fetchArticle = async (url) => {
    return cached(`article:${url}`, async () => {
        const res = await fetch(url);
        const data = await res.text();
        const $ = cheerio.load(data);

        const title = $('h1.title').text();
        const subTitle = $('h3.sub-title').text();
        const pubDate = $('p.publish-time').text();
        const author = $('.author-name:first').text();
        const image = $('picture > source[sizes="320px"]').attr('srcset');

        /** @type {string[]} */
        let parr = [];

        $('.articlebodycontent > p:not([class])').each((index, element) => {
            if ($(element).find('b > a').length === 0 && $(element).find('i > a').length === 0 && $(element).find('a').length === 0) {
                parr.push($(element).text());
            }
        });

        return { url, title, subTitle, pubDate, author, image, parr };
    }, 60 * 60 * 1000);
};
