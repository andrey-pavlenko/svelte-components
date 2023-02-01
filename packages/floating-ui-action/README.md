# [Floating UI](https://floating-ui.com/) action for `use` Svelte directive

- allows you to use both Svelte transitions and CSS transitions
- dependence [@floating-ui/dom](https://github.com/floating-ui/floating-ui)

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=floating-ui-action)

## Install

### NPM

```sh
npm i -D @apsc/floating-ui-action
```

### PNPM

```sh
pnpm add -D @apsc/floating-ui-action
```

## API

```ts
function createFloatingUiAction(
  options: UpdateOptions
): [Action, Action, (options: UpdateOptions) => void];

// Example
const [useReference, useFloat, setAutoupdate] = createAction(true);
```

Creates actions for use in directive `use`. Returns an array of three functions `useReference`, `useFloating` and `setAutoupdate`.

Parameter `options` can take values

- `true` -- `autoUpdate` will be enabled with default options
- `object` -- `autoUpdate` will be enabled with the specified options
- `false` -- `autoUpdate` will be disabled

See [`autoUpdate`](https://floating-ui.com/docs/autoUpdate)

Use actions `useReference` and `useFloat` in directive `use` on target elements.

```svelte
<button on:click={() => (show = !show)} use:useReference>Click me</button>
{#if show}
<div use:useFloat2={{
  placement: 'bottom',
  middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrow })],
  callback: positionFloat
}}
transition:scale|local>My tooltip</div>
{/if}
```

Action `useFloating` takes options as a function [`computePosition`](https://floating-ui.com/docs/computePosition)
with optional `callback` for custom element control, e.g. an arrow.

`setAutoupdate` allows disable, enable or change the [`autoUpdate`](https://floating-ui.com/docs/autoUpdate) settings at any time.

## Usage

```svelte
<script>
  import { scale } from 'svelte/transition';
    import {
    arrow,
    flip,
    offset,
    type ComputePositionReturn,
    type Middleware
  } from '@floating-ui/dom';
  import createFloating from '@apsc/floating-ui-action';

  let show = false;
  let _arrow: HTMLElement;

  function adjustArrow(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      if (staticSide) {
        Object.assign(_arrow.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '-6px'
        });
      }
    }
  }
</script>

<button on:click={() => (show = !show)} use:useReference>Click me</button>
{#if show}
  <div
    use:useFloating={{
      placement: 'top',
      middleware: [offset(8), flip(), arrow({ element: _arrow })],
      callback: adjustArrow
    }}
    transition:slide|local
  >
    <div bind:this={_arrow} />
    Lorem ipsum dolor sit amet consectetur adipisicing elit
  </div>
{/if}
```
