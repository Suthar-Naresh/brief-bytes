<script>
    export let data;
</script>
<h1>Web Scraping with cheerio </h1>

<!-- <p>{data.news}</p> -->

{#each data.news as l}
    <p>{l}</p>
{/each}