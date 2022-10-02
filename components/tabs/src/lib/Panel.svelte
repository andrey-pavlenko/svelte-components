<script lang="ts">
  import { getContext, onDestroy } from 'svelte';
  import { TabsContext, type ActivateItem } from './tabs-context';

  const context = getContext<TabsContext>(TabsContext.contextName);
  const id = context.push('panel');
  const active = context.active;
  onDestroy(() => context.pop({ panel: id }));
  const activate: ActivateItem = () => context.select({ panel: id });
</script>

<!--
@component
@order 20

The component sends `active` and `activate` props to the slot.

- `active: boolean` — whether the current panel is active
- `activate: () => void` — call this function to make the current panel active
-->
<slot active={$active.panel === id} {activate}>Panel slot is empty</slot>
