# Action to scroll the child to parent viewport Svelte directive `use`

- no dependencies
- useful for components like dropdown
- exports independent functions for vertical and horizontal scrolling of elements

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=scroll-child-action)

## Install

### NPM

```sh
npm i -D @apsc/scroll-child-action
```

### PNPM

```sh
pnpm add -D @apsc/scroll-child-action
```

## API

```tsx
let active = 0;
const items = [...Array(20).keys()].map((i) => ({
  id: i + 1,
  message: `Text #${(i + 1).toString().padStart(2, '0')}`
}));

<div>
  {#each items as item, index}
    <div class="cmp-item" use:useScrollChild={active === index} class:active={active === index}>
      {item.id}
      {item.message}
    </div>
  {/each}
</div>
```

### Action options

```ts
export type UseScrollChildOptions = boolean | { x?: boolean; y?: boolean };
```

- `true` -- scrolling both vertically and horizontally
- `{ x: true, y: true }` -- scrolling both vertically and horizontally
- `{ x: true }` -- scrolling only horizontally
- `{ y: true }` -- scrolling only vertically
- else -- don't scroll

## Exports

```ts
export default function useScrollChild(node: HTMLElement, options: UseScrollChildOptions);
```

## Additional exports

```ts
export function scrollChildIntoParentVertical(el: HTMLElement): boolean;
export function scrollChildIntoParentHorizontal(el: HTMLElement): boolean;
```
