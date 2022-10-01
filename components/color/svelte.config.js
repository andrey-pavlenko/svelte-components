import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter()
  },
  package: {
    dir: '../../packages/color',
    exports: (path) => /(index|converter)\.(js|ts)$/i.test(path) || /\.css$/i.test(path),
    files: (file) => !/\.spec\.[jt]s$/gi.test(file)
  }
};

export default config;
