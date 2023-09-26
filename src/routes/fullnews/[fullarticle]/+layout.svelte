<script>
  import { navigating, page } from "$app/stores";
  import Article from "../../../components/Article.svelte";
  import ScaletonArticle from "../../../components/ScaletonArticle.svelte";
  import ScaletonCard from "../../../components/ScaletonCard.svelte";
</script>

{#if $navigating && $page.url.pathname.startsWith("/fullnews/")}
  <!-- {console.log("From:", $page.url.pathname)} -->
  <!-- <ScaletonArticle /> -->
  <div class="grid grid-cols-2 gap-x-5 p-3">
    {#each Array(8) as _}
    <ScaletonCard />
    {/each}
</div>
{:else}
  <!-- {$page.url.pathname.startsWith("/fullnews/")} -->
  <slot />
{/if}
