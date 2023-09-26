<script>
    export let cardImg = "";
    export let articleLink = "";
    export let altText = "";
    export let cardHeading = "";
</script>

<div class="flex border-b border-black p-5 space-x-4">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
        src={cardImg ?? "../assets/newspaper.png"}
        alt="News article image"
        class={`aspect-square rounded h-fit ${cardImg ?? "h-20 w-20"}`}
    />

    <div class="flex flex-col">
        <a
            href="./fullnews/${articleLink}"
            class="hover:underline text-xl font-semibold line-clamp-3"
            >{cardHeading}</a
        >
        <p class="text-xs line-clamp-2 text-gray-400">{altText ?? ""}</p>
    </div>
</div>
