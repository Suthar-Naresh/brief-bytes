// // /** @type {import('@sveltejs/kit').Load} */

import * as cheerio from 'cheerio';

export const load = async () => {

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

        arr.push({
            text:aTag.text(),
            url:aTag.attr('href'),
            img:pic.attr('data-original')??undefined,
            alt:pic.attr('alt')??undefined,
        });
    });

    return{
        news:arr
    }
}