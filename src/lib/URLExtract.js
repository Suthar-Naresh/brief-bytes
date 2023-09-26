export const extractSlug = (/** @type {string} */ url) => {
    const match = url.match(/([^/]+)$/);

    if (match && match.length > 1) {
        const desiredPart = match[1];
        // console.log(desiredPart); // Output: "us-aims-create-nuclear-fusion-facility-10-years-says-energy-chief"
        return desiredPart;
    } else {
        // console.log('Pattern not found');
        return 'NOTHING';
    }
}

export const prettyURL = (/** @type {string} */ url) => {
    const parts = url.split('/');

    const mergedString = parts.slice(3).join('_|_');
    if (parts.length > 1) {
        // const modifiedUrl = parts[1];
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