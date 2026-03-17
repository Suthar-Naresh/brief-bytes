<script>
    import NewsCard from '../../../../components/NewsCard.svelte';
    let { data } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 p-3">
    {#each data.news as n}
        <NewsCard
            cardImg={n.img}
            articleLink={n.url}
            cardHeading={n.text}
            altText={n.alt}
        />
    {/each}
</div>
