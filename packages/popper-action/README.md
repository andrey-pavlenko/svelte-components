# Action to use [Popper.js](https://github.com/floating-ui/floating-ui/tree/v2.x) [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/popper-action)

## Install

### NPM

```sh
npm i -D @apsc/popper-action
```

### PNPM

```sh
pnpm add -D @apsc/popper-action
```

## API

```ts
const [
  useReference, // @type { function(node: Element) } -- action for reference element
  usePopper, // @type { function(node: HTMLElement, options?: Options) } -- action for popper element
  getInstance // @type { function(): Instance | null } -- get Popperjs instance
] = createPopperAction();
```

## Usage

```tsx
<script>
  import createPopperAction from '@apsc/popper-action';

  const [useReference, usePopper] = createPopperAction();
  let show = false;
</script>

<button use:useReference on:click={() => (show = !show)}>Click me</button>
{#if show}
  <ul
    class="tooltip"
    use:usePopper={{
      placement: 'bottom',
      modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
    }}
  >
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
{/if}
```

## Note!

Partially compatible with svelte transitions.
