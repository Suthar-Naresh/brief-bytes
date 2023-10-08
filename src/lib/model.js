import { SummarizerManager } from "node-summarizer";

export const model = (/** @type {string} */ newsArticle) => {
    let Summarizer = new SummarizerManager(newsArticle, 5);
    let summary = Summarizer.getSummaryByFrequency().summary;

    return summary;
}
