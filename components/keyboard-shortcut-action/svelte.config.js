import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    package: {
      dir: '../../packages/keyboard-shortcut-action',
      exports: (path) => /index\.(js|ts)/i.test(path) || /style\.css/i.test(path)
    }
  }
};

export default config;