import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: preprocess(),
  kit: {
    adapter: adapter()
  },
  package: {
    dir: '../../packages/tabs',
    exports: (filepath) => Boolean(filepath.match(/\.css$/i))
  }
};

export default config;
