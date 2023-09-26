<script>
    import NewsCard from '../../components/NewsCard.svelte';

    export let data;
    
</script>

{#if data.error}
    <p>Something went wrong...</p>
{:else}
    <!-- <h1>Head lines {data.news?.len}</h1> -->
    <article class="grid grid-cols-3 gap-3 mt-4">
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
