<script>
    import { navigating, page } from "$app/stores";
    import Footer from "../../../components/Footer.svelte";
    import ScaletonCard from "../../../components/ScaletonCard.svelte";

    const params = new URLSearchParams($page.url.search);

    const navLinks = [
        { title: "top headlines", urlPath: "/news/main" },
        { title: "business", urlPath: "/news/main/business" },
        { title: "technology", urlPath: "/news/main/technology" },
        { title: "sports", urlPath: "/news/main/sports" },
        { title: "entertainment", urlPath: "/news/main/entertainment" },
    ];

    const active =
        "inline-block p-4 border-b-2 border-transparent rounded-t-lg uppercase text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
    const nonactive =
        "inline-block p-4 border-b-2 border-transparent rounded-t-lg uppercase hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

    export let data;
</script>

<div
    class=" text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
>
    <div class="flex justify-between items-center">
        <ul class="flex flex-wrap -mb-px">
            <li class="mr-2">
                <span
                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg font-semibold text-gray-900 tracking-wider uppercase"
                    >Brief Bytes</span
                >
            </li>
            {#each navLinks as nl}
                <li class="mr-2">
                    <a
                        href={nl.urlPath}
                        class={$page.url.pathname === nl.urlPath
                            ? active
                            : nonactive}>{nl.title}</a
                    >
                </li>
            {/each}
        </ul>
        <div class="flex items-center space-x-3">
            <p class="uppercase text-black">welcome</p><span>{data.user.username}</span>
            <form action="/logout" method="post">
                <button
                    type="submit"
                    class="text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-blue-800 inline-flex items-center"
                    >Logout</button
                >
            </form>
        </div>
    </div>
</div>

{#if $navigating && $page.url.pathname.startsWith("/news/")}
    Loading....
    <!-- {console.log("From:", $page.url.pathname)} -->

    <div class="grid grid-cols-2 gap-x-5 p-3">
        {#each Array(8) as _}
            <ScaletonCard />
        {/each}
    </div>
{:else}
    <!-- {$page} -->
    <slot />
{/if}

<!-- FOOTER -->
<Footer />
