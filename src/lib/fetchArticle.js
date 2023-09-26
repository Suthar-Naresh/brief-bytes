// // /** @type {import('@sveltejs/kit').Load} */

import * as cheerio from 'cheerio';

export const fetchArticle = async (/** @type {RequestInfo | URL} */ url) => {

    const res = await fetch(url);
    const data = await res.text();

    const $ = cheerio.load(data);

    const title = $('h1.title').text();
    const subTitle = $('h3.sub-title').text();
    const pubDate = $('p.publish-time').text();
    const author = $('.author-name').text();
    const image = $('picture > source[sizes="320px"]').attr('srcset');
    /**
     * @type {string[]}
     */
    let parr = [];

    $('.articlebodycontent > p:not([class])').each((index, element) => {
        // console.log($(element).text());
        if ($(element).find('b > a').length === 0 && $(element).find('i > a').length === 0) {
            // console.log($(element).text());
            parr.push($(element).text());
          }
      });
      
    return {
        url,
        title,
        subTitle,
        pubDate,
        author,
        image,
        parr
    };

}