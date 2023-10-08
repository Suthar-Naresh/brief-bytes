<script>
  import { navigating, page } from "$app/stores";
    import ScaletonArticle from "../../../../components/ScaletonArticle.svelte";
    import ScaletonCard from "../../../../components/ScaletonCard.svelte";

  const params = new URLSearchParams($page.url.search);
</script>

{#if $navigating && params.has("to", "article")}
  <ScaletonArticle />

  <div class="grid grid-cols-2 gap-x-5 p-3">
    {#each Array(8) as _}
      <ScaletonCard />
    {/each}
  </div>
{:else}
  <slot />
{/if}
