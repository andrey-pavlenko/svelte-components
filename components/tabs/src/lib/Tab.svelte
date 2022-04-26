<script lang="ts">
  import { getContext } from 'svelte';
  import { contextName, type TabsContext } from './tabs';

  let classes = '';
  /**
   * Custom CSS class to add to the `c-tabs__tab` base class for custom styling purposes
   */
  export { classes as class };

  const { registerTab, selectTab, selectedTab, selectedIndex, selectedTabClass } =
    getContext<TabsContext>(contextName);

  /**
   * The CSS class that will be added when `Tab` becomes selected. *Default value from `Tabs.selectedTabClass`*
   *
   * @type {string}
   */
  export let selectedClass = selectedTabClass;

  /**
   * Disable `Tab` for pointer, but it's possible to select tab by function `Tabs.selectTab(index)`. *Default `undefined`*
   *
   * @type {boolean | undefined}
   */
  export let disabled: boolean | undefined = undefined;

  const id = registerTab();
</script>

<!--
@component
This is a child component for `TabList`
@order 20

```tsx
<Tab>A</Tab>
```
-->
<button
  class={['c-tabs__tab', classes, $selectedTab === id ? selectedClass : '']
    .filter((s) => !!s)
    .join(' ')}
  {disabled}
  on:click={() => selectTab(id)}
>
  <slot index={$selectedIndex} {id} />
</button>
