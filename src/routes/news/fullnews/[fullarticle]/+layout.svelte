<script>
    import { navigating } from "$app/stores";
    import SkeletonArticle from "../../../../components/SkeletonArticle.svelte";

    let { children } = $props();
</script>

{#if $navigating}
    <SkeletonArticle />
{:else}
    {@render children()}
{/if}
