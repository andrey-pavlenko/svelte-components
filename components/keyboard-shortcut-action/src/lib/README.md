# Action to call a function by keyboard shortcut for Svelte directive `use`

- allows to reduce keyboard event handling code
- dependence [`keyboard-event-to-string`](https://www.npmjs.com/package/keyboard-event-to-string)

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=keyboard-shortcut-action)

## Install

### NPM

```sh
npm i -D @apsc/keyboard-shortcut-action
```

### PNPM

```sh
pnpm add -D @apsc/keyboard-shortcut-action
```

## API

```ts
let active = 0;
const items = [...Array(20).keys()].map((i) => ({
  id: i + 1,
  message: `Text #${(i + 1).toString().padStart(2, '0')}`
}));

<div
  tabindex="0"
  use:useKeyboardShortcut={{
    event: 'keydown',
    preventDefault: true,
    fns: {
      'Ctrl+ArrowUp': () => (active = 0),
      'ArrowUp': () => (active = Math.max(0, active - 1)),
      'Ctrl+ArrowDown': () => (active = items.length - 1),
      'ArrowDown': () => (active = Math.min(items.length - 1, active + 1))
    }
  }}
>
  {#each items as item, index}
    <div class:active={active === index}>{item.id} {item.message}</div>
  {/each}
</div>
```

#### useKeyboardShortcut options

```ts
export interface UseKeyboardShortcutOptions {
  event: 'keypress' | 'keydown' | 'keyup';
  capture?: boolean; // default false
  passive?: boolean; // default false
  preventDefault?: boolean; // default false
  stopPropagation?: boolean; // default false
  stopImmediatePropagation?: boolean; // default false
  fns: Record<string, (event: KeyboardEvent) => void>;
}
```

#### Lifecycle

The action attaches a handler to the corresponding event `options.event` with parameters

- `capture`
- `passive`

The handler converts event to `shortcut` using package [`keyboard-event-to-string`](https://www.npmjs.com/package/keyboard-event-to-string).

If function `options.fns[shortcut]` exists then handler executes

- `event.preventDefault()` if `options.preventDefault == true`
- `event.stopPropagation()` if `options.stopPropagation == true`
- `event.stopImmediatePropagation()` if `options.stopImmediatePropagation == true`

After it calls `options.fns[shortcut](event)`.

**Note!** The action modifies [global options](https://github.com/ndp-software/keyboard-event-to-string#options)

```js
setOptions({ joinWith: '+' });
```

Therefore, the shortcut obtained in the action are `Ctrl+A` instead `Ctrl + A`.
