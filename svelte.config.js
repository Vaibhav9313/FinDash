import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let adapter;
if (process.env.VERCEL) {
  adapter = import('@sveltejs/adapter-static').then((module) => module.default);
} else {
  adapter = import('@sveltejs/adapter-static').then((module) => module.default);
}

export default {
  preprocess: [vitePreprocess(), sveltePreprocess()],

  kit: {
    // Use dynamic import for the adapter
    adapter: adapter,

    paths: {
      base: '', // Set the base path if required
    },

    prerender: {
      default: true,
    },
  },
};
