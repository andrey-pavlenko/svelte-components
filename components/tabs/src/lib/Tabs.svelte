<script lang="ts">
  import { setContext, onDestroy } from 'svelte';
  import { TabsContext } from './tabs-context';

  const context = new TabsContext();
  setContext(TabsContext.contextName, context);

  const _active = context.active;
  const _length = context.length;

  /**
   * **Reactive, read/write**. The current index of the `Tab`/`Panel` pair members.
   * The index will not go beyond the range of the tabs, so you can safely assign a new value.
   * @type {number}
   */
  export let selected = NaN;
  $: selected = $_active.index;
  $: if (typeof selected === 'number' && !context.select(selected)) {
    selected = $_active.index;
  }

  /**
   * **Reactive, read**. The current number of `Tab`/`Panel` pair members
   */
  export let length = 0;
  $: length = $_length;
</script>

<!--
@component
@order 0
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
  <Tab let:active let:activate><button class:active on:click={activate}>A</button></Tab>
  <Tab let:active let:activate><button class:active on:click={activate}>B</button></Tab>
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


Under the hood, the component uses a [TabContext](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/tabs/tabs-context.js) of this type:

```js
class TabsContext {
  readonly active: Readable<ContextActive>;
  readonly length: Readable<number>;
  static readonly contextName: symbol;
  push(entity: 'tab' | 'panel'): symbol;
  pop(entity: { tab: symbol; } | { panel: symbol; }): boolean;
  select(entity: number | { tab: symbol; } | { panel: symbol; }): boolean;
}
```

You can access the context with the code `getContext(TabsContext.contextName)`. You can also extend the class if there is a lack of functionality.
-->

<slot />
