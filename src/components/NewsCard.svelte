<script>
    import { prettyURL } from "$lib/URLExtract";

    export let cardImg = "";
    export let articleLink = "";
    export let altText = "";
    export let cardHeading = "";
</script>

<div class="flex border-b border-black p-5 space-x-4">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    {#if cardImg}
        <img
            src={cardImg}
            alt="News article image"
            class="aspect-square rounded h-fit"
        />
    {:else}
        <span>
            <div class="h-20 w-20 rounded bg-gray-200 flex justify-center items-center text-gray-400 font-semibold">
                NEWS
            </div>
        </span>
    {/if}

    <div class="flex flex-col">
        <a
            href="/news/fullnews/{prettyURL(articleLink)}"
            class="hover:underline text-xl font-semibold line-clamp-3"
            >{cardHeading}</a
        >
        <p class="text-xs line-clamp-2 text-gray-400">{altText ?? ""}</p>
    </div>
</div>
