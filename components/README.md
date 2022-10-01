## New component

```sh
pnpm create svelte <component_name>
```

`package.json`

```json
{
  "name": "@apsc/<component_name>",
  "type": "module",
  "types": "index.d.ts",
  "svelte": "./index.js",
  "main": "index.js",

  "scripts": {
    "dev": "vite dev --port 3000",
    "finish:package": "cd ../../packages/tabs && npe devDependencies --delete &&  node ../../documetator/index.js .",
    "package": "pnpm run check && svelte-package && pnpm run finish:package",
    "changelog": "conventional-changelog -p angular -i src/lib/CHANGELOG.md -s --commit-path=.",
    "publish": "cd ../../packages/tabs && pnpm publish --no-git-checks --access public"
  },

  "author": "Andrey Pavlenko",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/andrey-pavlenko/svelte-components.git"
  },
  "bugs": {
    "url": "https://github.com/andrey-pavlenko/svelte-components/issues"
  },
  "keywords": ["svelte", "component", "..."],
  "homepage": "https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/tabs#readme",

  "exports": {
    ".": "./index.js"
  },
  "peerDependencies": {
    "svelte": "^3.50.1"
  }
}
```

`svelte.config.js`

```js
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter()
  },
  package: {
    dir: '../../packages/tabs',
    exports: (filepath) => {
      console.info('exports', filepath);
      return filepath.match(/\.css$/i);
    }
  }
};

export default config;
```
