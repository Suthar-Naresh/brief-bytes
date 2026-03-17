/** @type {Map<string, { data: any, expiry: number }>} */
const store = new Map();

/**
 * @param {string} key
 * @param {() => Promise<any>} fetcher
 * @param {number} ttlMs - time to live in milliseconds
 */
export async function cached(key, fetcher, ttlMs = 5 * 60 * 1000) {
    const entry = store.get(key);
    if (entry && Date.now() < entry.expiry) {
        return entry.data;
    }

    const data = await fetcher();
    store.set(key, { data, expiry: Date.now() + ttlMs });

    if (store.size > 200) {
        const oldest = store.keys().next().value;
        if (oldest) store.delete(oldest);
    }

    return data;
}
