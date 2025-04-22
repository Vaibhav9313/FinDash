import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

export default {
  preprocess: [vitePreprocess(), sveltePreprocess()],

  kit: {
    // Specify the adapter to generate static assets
    adapter: adapter(),

    // You can specify other kit options here as needed
    paths: {
      base: '', // Specify your base path if needed (for example, if the app is hosted in a subfolder)
    },

    // Enable prerendering if necessary
    prerender: {
      default: true, // Prerender all pages by default
    },
  },
};
