import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [svelte()],
  server: {
    // hmr: true,  // No need to manually set this
  },
};
