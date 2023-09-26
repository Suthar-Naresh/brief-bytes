<script>
    import NewsCard from "../components/NewsCard.svelte";
    export let data;
    //  {
    // "source": {
    // "id": "cnn",
    // "name": "CNN"
    // },
    // "author": "Jackie Wattles",
    // "title": "NASA's SpaceX Crew-6  - CNN",
    // "description": "Four astronauts concluded their parts of the state.",
    // "url": "https://www.cnn.com/2023/09/03/world/sp-return-scn/index.html",
    // "urlToImage": "https://media.cnn.com/api/v1/ima&q=w_800,c_fill",
    // "publishedAt": "2023-09-03T11:52:00Z",
    // "content": "Sign up for CNNs Wonder Theory sciestay aboard … [+3200 chars]"
    // }
</script>

{#if data.error}
    <p>Something went wrong...</p>
{:else}
    <!-- <h1>Head lines {data.news?.len}</h1> -->
    <article class="grid grid-cols-3 gap-3 mt-4 mx-auto place-content-center">
        {#each data.news?.articles as ar}
            {#if ar.title && ar.description && ar.url && ar.urlToImage}
                <NewsCard
                    title={ar.title}
                    description={ar.description}
                    readMoreurl={ar.url}
                    urlToImage={ar.urlToImage}
                />
            {/if}
        {/each}
    </article>
{/if}
