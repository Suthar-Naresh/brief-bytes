<script>
    const navLinks = [
        { title: "top headlines", urlPath: "/news/main" },
        { title: "business", urlPath: "/news/main/business" },
        { title: "technology", urlPath: "/news/main/technology" },
        { title: "sports", urlPath: "/news/main/sports" },
        { title: "entertainment", urlPath: "/news/main/entertainment" },
    ];

    const currentYear = new Date().getFullYear();
</script>

<footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="/news/main" class="flex items-center">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BRIEF BYTES</span>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Categories</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        {#each navLinks as nl}
                            <li class="mb-4">
                                <a href={nl.urlPath} class="hover:underline">{nl.title}</a>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4"><span class="hover:underline cursor-pointer">Privacy Policy</span></li>
                        <li><span class="hover:underline cursor-pointer">Terms &amp; Conditions</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; {currentYear} BRIEF BYTES&trade;. All Rights Reserved.
            </span>
        </div>
    </div>
</footer>
