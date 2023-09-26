<script>
    import { page, navigating } from "$app/stores";
    import Footer from "../../components/Footer.svelte";
    import ScaletonCard from "../../components/ScaletonCard.svelte";

    const navLinks = [
        { title: "top headlines", urlPath: "/news" },
        { title: "business", urlPath: "/news/business" },
        { title: "technology", urlPath: "/news/technology" },
        { title: "sports", urlPath: "/news/sports" },
        { title: "entertainment", urlPath: "/news/entertainment" },
    ];

    const active =
        "inline-block p-4 border-b-2 border-transparent rounded-t-lg uppercase text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
    const nonactive =
        "inline-block p-4 border-b-2 border-transparent rounded-t-lg uppercase hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
</script>

<!-- bg-white fixed w-full z-20 top-0 left-0 sticky!! -->

<div
    class=" text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
>
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
</div>

{#if $navigating && $page.url.pathname.startsWith('/news/')}
Loading....
  <!-- {console.log("From:", $page.url.pathname)} -->

<div class="grid grid-cols-2 gap-x-5 p-3">
    {#each Array(8) as _}
    <ScaletonCard />
    {/each}
</div>
{:else}
<!-- {$page.url.pathname} -->
    <slot />
{/if}

<!-- FOOTER -->
<Footer />