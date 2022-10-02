<script lang="ts">
  let classes = '';
  /**
   * Custom CSS class to add to the `c-tabs__tablist` base class for custom styling purposes
   */

  export { classes as class };
</script>

<!--
@component
@order 10
This is a child component for `Tabs` and a container for many `Tab` components

```tsx
<TabList>
  <Tab>A</Tab>
  <Tab>B</Tab>
</TabList>
```
-->

<div class={'c-tabs__tablist' + (classes ? ' ' + classes : '')}>
  <slot />
</div>
