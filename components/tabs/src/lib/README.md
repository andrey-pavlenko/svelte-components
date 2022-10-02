# A set of components and context classes for the organization of the Tabs interface.

- no dependencies
- no inline styles
- set of predefined components `<Tabs />`, `<Tab />` and `<Panel />`.
- base context class for toggling component states

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=tabs) &bull; [API](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/tabs/API.md)

## Install

### NPM

```sh
npm i -D @apsc/tabs
```

### PNPM

```sh
pnpm add -D @apsc/tabs
```

## Usage

This is the root component. It's a container of the `Tab` and `Panel` components. The basic structure of components is:

```tsx
<Tabs>
  <div> <!‐‐ optional wrapper ‐‐>
    <Tab>A</Tab>
    <Tab>B</Tab>
  </div>
  <div> <!‐‐ optional wrapper ‐‐>
    <TabPanel>A</TabPanel>
    <TabPanel>B</TabPanel>
  </div>
</Tabs>
```

But what you really need to do is fill the slots with useful items such as these:

```tsx
<Tabs>
  <Tab let:active let:activate>
    <button class:active on:click={activate}>
      A
    </button>
  </Tab>
  <Tab let:active let:activate>
    <button class:active on:click={activate}>
      B
    </button>
  </Tab>
  <TabPanel let:active>
    <div style:display={active ? 'block' : 'none'}>Content of A</div>
  </TabPanel>
  <TabPanel let:active>
    <div style:display={active ? 'block' : 'none'}>Content of B</div>
  </TabPanel>
</Tabs>
```

**Important!**

The `Tab` and `Panel` components are added to the end of the list during rendering. To keep the correct component order, reassign the entire tab list or use the [`{#keys}`](https://svelte.dev/docs#template-syntax-key) or [`{#each key}`](https://svelte.dev/docs#template-syntax-each).

## Context class

Under the hood, the component uses a [TabContext](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/tabs/tabs-context.js) of this type:

```ts
class TabsContext {
  readonly active: Readable<ContextActive>;
  readonly length: Readable<number>;
  static readonly contextName: symbol;
  push(entity: 'tab' | 'panel'): symbol;
  pop(entity: { tab: symbol } | { panel: symbol }): boolean;
  select(entity: number | { tab: symbol } | { panel: symbol }): boolean;
}

interface ContextActive {
  index: number;
  tab?: symbol;
  panel?: symbol;
}
```

You can access the context with the code `getContext(TabsContext.contextName)`. You can also extend the class if there is a lack of functionality.
