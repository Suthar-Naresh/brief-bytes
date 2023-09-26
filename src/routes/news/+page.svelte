<script>
    export let data;
</script>

<div class="grid grid-cols-2 gap-x-5 p-3">
    {#each data.news as n}
        <div class="flex border-b border-black p-5 space-x-4">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img 
            src={n.img??"/src/assets/newspaper.png"}
            alt="News article image" 
            class={`aspect-square rounded h-fit ${n.img??'h-20 w-20'}`}
            >

            <div class="flex flex-col">
                <a href='./fullnews/{n.url}' class="hover:underline text-xl font-semibold line-clamp-3">{n.text}</a>
                <p class="text-xs line-clamp-2 text-gray-400">{n.alt??''}</p>
            </div>
        </div>
    {/each}
</div>
