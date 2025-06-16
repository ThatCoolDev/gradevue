// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            // Set a fallback page for dynamic routes when using adapter-static.
            // This means if a route is not prerendered, the static server will
            // serve this file, and SvelteKit's client-side router will take over.
            fallback: 'index.html'
        }),
        // The 'default' option for prerender has been removed in newer SvelteKit versions.
        // Use 'entries' to explicitly specify what pages should be prerendered.
        // Using '*' tells SvelteKit to attempt to prerender all discoverable pages that don't explicitly opt out.
        prerender: {
            entries: ['*']
        }
    }
};

export default config;