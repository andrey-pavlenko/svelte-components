# Action to control `focusin` and `focusout` for Svelte directive `use`

- no dependencies
- based on `focusin` and `focusout` events.
- correctly detects loss of focus with `tab` key

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=focus-action)

## Install

### NPM

```sh
npm i -D @apsc/focus-action
```

### PNPM

```sh
pnpm add -D @apsc/focus-action
```

## API

```ts
let focused = false;
const focusFns = [() => (focused = true), () => (focused = false)];

<div class:focused use:useFocus={focusFns}>
  ...
</div>;
```

Based on [`focusin`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event) and [`focusout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event) events.

Executes callbacks when the node or its children gain or lose focus.

Ensure the `node` or its children [can be focused](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)
