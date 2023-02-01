<script lang="ts">
  import { getContext, onDestroy } from 'svelte';
  import { TabsContext, type ActivateItem } from './tabs-context';

  const context = getContext<TabsContext>(TabsContext.contextName);
  const id = context.push('tab');
  const active = context.active;
  onDestroy(() => context.pop({ tab: id }));
  const activate: ActivateItem = () => context.select({ tab: id });
</script>

<!--
@component
@order 10

The component sends `active` and `activate` props to the slot.

- `active: boolean` — whether the current tab is active
- `activate: () => void` — call this function to make the current tab active
-->
<slot active={$active.tab === id} {activate}>Tab slot is empty</slot>
