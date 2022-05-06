import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [svelte()],
  optimizeDeps: {
    include: ['highlight.js', 'highlight.js/lib/core']
  },
  base: './',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    target: 'es2015'
  }
});
