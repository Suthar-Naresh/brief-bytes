<script>
    import { navigating, page } from "$app/stores";
    import ScaletonArticle from "../../components/ScaletonArticle.svelte";

    export let data;
</script>

{#if $navigating}
    <ScaletonArticle />
{/if}
<a href="/">HOME</a><br />
<h1>{data.data}</h1>