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

        const title = $('h1.title').text().trim();
        const subTitle = $('h2.sub-title').text().trim() || $('h3.sub-title').text().trim();
        const pubDate = $('.publish-time').first().text().trim() || $('.updated-date').first().text().trim();
        const author = $('.author-name:first').text().trim();
        const image = $('picture > source[sizes="320px"]').attr('srcset') || $('picture > source').first().attr('srcset');

        /** @type {string[]} */
        let parr = [];

        $('.schemaDiv > p').each((index, element) => {
            const text = $(element).text().trim();
            if (text.length > 20) {
                parr.push(text);
            }
        });

        if (parr.length === 0) {
            $('.articlebodycontent > p:not([class])').each((index, element) => {
                const text = $(element).text().trim();
                if (text.length > 20) {
                    parr.push(text);
                }
            });
        }

        return { url, title, subTitle, pubDate, author, image, parr };
    }, 60 * 60 * 1000);
};
