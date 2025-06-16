<script lang="ts">
    import { page } from '$app/stores';

    // Import your global CSS file. Ensure the path is correct relative to this layout file.
    import '../app.css';

    // Svelte 5 style to access children slot content
    let { children } = $props();
</script>

<div class="app-container">
    {@render children?.()}
</div>

<style lang="css">
    :global(body) {
        background-color: transparent;
        overflow: hidden;
    }

    .app-container {
        padding-top: max(1rem, env(safe-area-inset-top));
        padding-bottom: max(1rem, env(safe-area-inset-bottom));
        padding-left: env(safe-area-inset-left);
        padding-right: env(safe-area-inset-right);

        min-height: 100vh;
        width: 100vw;

        display: flex;
        flex-direction: column;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>