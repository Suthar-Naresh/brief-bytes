<script>
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

            <div class="flex flex-col">
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
