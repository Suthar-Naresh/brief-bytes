export const extractSlug = (/** @type {string} */ url) => {
    const match = url.match(/([^/]+)$/);
    if (match && match.length > 1) {
        const desiredPart = match[1];
        return desiredPart;
    } else {
        return 'NOTHING';
    }
}

export const prettyURL = (/** @type {string} */ url) => {
    const parts = url.split('/');

    const mergedString = parts.slice(3).join('_|_');
    if (parts.length > 1) {
        return mergedString;
    } else {
        return '';
    }
}

export const getURL = (/** @type {string} */ url) => {
    const parts = url.split('_|_');
    const mergedString = parts.join('/');
    return `https://www.thehindu.com/${mergedString}`;
}