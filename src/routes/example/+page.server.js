// // /** @type {import('@sveltejs/kit').Load} */

function demoPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Promise resolved with data!";
            resolve(data);
        }, 5000);
    });
}

export const load = async () => {
    const data = await demoPromise();

    return{
        data
    }
}