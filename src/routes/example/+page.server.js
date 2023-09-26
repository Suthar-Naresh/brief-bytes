// // // /** @type {import('@sveltejs/kit').Load} */

// import * as cheerio from 'cheerio';

// export const load = async () => {
//     // const url = `https://www.thehindu.com/news/national/two-let-terrorists-encircled-by-jk-police-in-anantnag/article67306002.ece`;
//     const url = `https://www.thehindu.com/sport/`;

//     const res = await fetch(url);
//     const data = await res.text();

//     const $ = cheerio.load(data);

//     /**
//      * @type {(string | undefined)[]}
//      */
    
//     let arr = [];

//     $('.element').each((index, el) => {
//         // console.log($(el).find('.title > a').attr('href'));
//         arr.push($(el).find('.title > a').text());

//     });


//     // const news = $('.articlebodycontent > p').text();

//     return{
//         news:arr
//     }
// }