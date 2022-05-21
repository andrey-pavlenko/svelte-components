## New conponent

```sh
pnpm create svelte@next <component_name>
```

`package.json`

```json
{
  "name": "@apsc/<component_name>"
}
```

`svelte.config.js`

```js
const config = {
  kit: {
    package: {
      dir: '../../packages/tabs'
    }
  }
};
```
