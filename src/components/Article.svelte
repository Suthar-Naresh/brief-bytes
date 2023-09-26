<script>
    import Footer from "./Footer.svelte";

    /**
     * @type {{ article: { url: string; title: string; subTitle: string; pubDate: string; image: string | undefined; author: string; parr: string[] }; }}
     */
    export let data;
</script>

<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
            <button
                on:click={() => history.back()}
                type="button"
                class="text-indigo-500 inline-flex items-center border border-indigo-500 px-3 py-2 rounded"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                </svg>
                &nbsp;&nbsp; Back
            </button>
            <h3 class="text-5xl font-bold text-gray-800">
                {data.article.title}
            </h3>
            <h5 class="text-lg text-gray-600 font-semibold mt-6">
                {data.article.subTitle}
            </h5>

            <p class="text-sm text-gray-400 mt-2 mb-10">
                {data.article.pubDate}
            </p>

            <div class="rounded-lg overflow-hidden">
                <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src={data.article.image}
                />
            </div>

            <div
                class="sm:w-1/3 text-center sm:pr-8 sm:py-8 flex justify-between"
            >
                <div
                    class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                <div
                    class="flex flex-col items-center text-center justify-center min-w-max"
                >
                    <h2
                        class="uppercase font-medium title-font mt-4 text-gray-900 text-base"
                    >
                        {data.article.author}
                    </h2>
                    <div class="w-full h-1 bg-indigo-500 rounded mt-2 mb-4" />
                </div>
            </div>
            <div class="hidden border-dotted border-blue-400 border-2 p-2 rounded text-justify mb-4">
                EU industry chief Thierry Breton has urged Apple CEO Tim
                Cook to open Apple's ecosystem to competitors under the
                Digital Markets Act. Breton's request comes after their
                meeting in Brussels. He emphasized the need for iPhone users
                to access competitive services like electronic wallets,
                browsers, and app stores. Apple has not responded. The Act
                aims to boost competition, and Breton challenged Apple's
                security and privacy arguments, stating that EU regulation
                can foster innovation while ensuring security and privacy.
            </div>
            <div
                class="py-2 flex justify-between items-center border-spacing-6 border-dashed border-b-2 border-blue-500"
            >
                <div class="flex">
                    <p class="font-semibold text-gray-800">
                        Don't have time to read?
                    </p>
                    <span>&nbsp;&nbsp;Summarize the article!</span>
                </div>
                <button
                    disabled
                    type="button"
                    class="text-white bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                    <!-- <svg
                        aria-hidden="true"
                        role="status"
                        class="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                        />
                    </svg> -->
                    Summarize
                </button>
            </div>

            <div class="mt-5 flex flex-col">
                <!-- for each para render p tag  -->
                {#each data.article.parr as p}
                    <p class="leading-relaxed text-base mb-4">
                        {p}
                    </p>
                {/each}

                <a
                    target="_blank"
                    href={data.article.url}
                    class="text-indigo-500 inline-flex items-center"
                    >Read Original Article
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<Footer />
