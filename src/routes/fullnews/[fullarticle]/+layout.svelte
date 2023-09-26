<script>
    import { navigating } from "$app/stores";
    import Article from "../../../components/Article.svelte";
    import ScaletonArticle from "../../../components/ScaletonArticle.svelte";
  
    export let data;
  </script>
  
  {#if $navigating}
    <ScaletonArticle />
  {:else}
    <slot />
  {/if}
  