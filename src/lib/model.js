import { analyze } from 'textlens';

/**
 * Summarizes an article using extractive summarization.
 * Uses textlens for position + keyword frequency weighted extraction.
 * @param {string} newsArticle
 * @returns {Promise<string>}
 */
export const summarize = async (newsArticle) => {
    if (!newsArticle || newsArticle.trim().length === 0) {
        return 'No content available to summarize.';
    }

    try {
        const result = analyze(newsArticle);
        const sentences = result.summary?.sentences;

        if (sentences && sentences.length > 0) {
            return sentences.slice(0, 5).join(' ');
        }

        return newsArticle.split('.').slice(0, 3).join('.') + '.';
    } catch (error) {
        console.error('Summarization failed:', error);
        return newsArticle.split('.').slice(0, 3).join('.') + '.';
    }
};
