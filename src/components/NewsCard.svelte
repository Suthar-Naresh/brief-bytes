<script>
    import { prettyURL } from "$lib/URLExtract";

    let { cardImg = "", articleLink = "", altText = "", cardHeading = "" } = $props();
</script>

<div class="flex border-b border-gray-200 p-4 md:p-5 space-x-3 md:space-x-4">
    {#if cardImg}
        <img
            src={cardImg}
            alt={altText || cardHeading}
            class="w-20 h-20 md:w-24 md:h-24 object-cover rounded shrink-0"
        />
    {:else}
        <div class="w-20 h-20 md:w-24 md:h-24 rounded bg-gray-200 flex justify-center items-center text-gray-400 font-semibold text-xs shrink-0">
            NEWS
        </div>
    {/if}

    <div class="flex flex-col min-w-0">
        <a
            href="/news/fullnews/{prettyURL(articleLink)}"
            class="hover:underline text-base md:text-xl font-semibold line-clamp-3"
            >{cardHeading}</a
        >
        <p class="text-xs line-clamp-2 text-gray-400 mt-1">{altText ?? ""}</p>
    </div>
</div>
