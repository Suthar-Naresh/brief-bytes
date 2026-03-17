<script>
    import { navigating, page } from "$app/stores";
    import Footer from "../../../components/Footer.svelte";
    import SkeletonCard from "../../../components/SkeletonCard.svelte";

    let { children } = $props();

    const navLinks = [
        { title: "top headlines", urlPath: "/news/main" },
        { title: "business", urlPath: "/news/main/business" },
        { title: "technology", urlPath: "/news/main/technology" },
        { title: "sports", urlPath: "/news/main/sports" },
        { title: "entertainment", urlPath: "/news/main/entertainment" },
    ];

    const active =
        "inline-block px-3 py-3 md:p-4 border-b-2 rounded-t-lg uppercase text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500 text-xs md:text-sm whitespace-nowrap";
    const nonactive =
        "inline-block px-3 py-3 md:p-4 border-b-2 border-transparent rounded-t-lg uppercase hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-xs md:text-sm whitespace-nowrap";
</script>

<svelte:head>
    <title>Brief Bytes - News Summarized</title>
    <meta name="description" content="Short on time? Get concise, AI-powered news summaries from top headlines, business, technology, sports, and entertainment." />
    <meta property="og:title" content="Brief Bytes - News Summarized" />
    <meta property="og:description" content="Short on time? Get concise news summaries powered by machine learning." />
    <meta property="og:type" content="website" />
</svelte:head>

<div
    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 sticky top-0 bg-white z-10"
>
    <div class="flex items-center max-w-7xl mx-auto px-2 md:px-4">
        <a href="/"
            class="hidden sm:inline-block p-4 border-b-2 border-transparent rounded-t-lg font-semibold text-gray-900 tracking-wider uppercase shrink-0"
            >Brief Bytes</a
        >
        <a href="/"
            class="sm:hidden inline-block p-3 border-b-2 border-transparent rounded-t-lg font-semibold text-gray-900 tracking-wider uppercase shrink-0 text-xs"
            >BB</a
        >
        <ul class="flex overflow-x-auto -mb-px scrollbar-hide">
            {#each navLinks as nl}
                <li class="shrink-0">
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
</div>

{#if $navigating && $page.url.pathname.startsWith("/news/")}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 p-3 max-w-7xl mx-auto">
        {#each Array(6) as _}
            <SkeletonCard />
        {/each}
    </div>
{:else}
    <div class="max-w-7xl mx-auto">
        {@render children()}
    </div>
{/if}

<Footer />
