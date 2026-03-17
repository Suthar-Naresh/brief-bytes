import * as cheerio from 'cheerio';
import { cached } from './cache.js';

/**
 * @param {string} url
 * @returns {Promise<Array<{text: string, url: string|undefined, img: string|undefined, alt: string|undefined}>>}
 */
export const fetchNews = async (url) => {
    return cached(`news:${url}`, async () => {
        const res = await fetch(url);
        const data = await res.text();
        const $ = cheerio.load(data);

        /** @type {{ text: string; url: string | undefined; img: string | undefined; alt: string | undefined; }[]} */
        let arr = [];

        $('.element').each((index, el) => {
            const aTag = $(el).find('.title > a');
            const pic = $(el).find('.picture > img');

            arr.push({
                text: aTag.text(),
                url: aTag.attr('href'),
                img: pic.attr('data-original') ?? undefined,
                alt: pic.attr('alt') ?? undefined,
            });
        });

        return arr;
    }, 5 * 60 * 1000);
};
