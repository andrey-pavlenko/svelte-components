<script lang="ts">
  import { TabsContext } from '@apsc/tabs';
  import { getContext } from 'svelte';

  const context = getContext<TabsContext>(TabsContext.contextName);
  const length = context.length;
  const active = context.active;
  const chevronRight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="1em" height="1em"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill="currentColor"/></svg>`;

  let isOverflow = false;
  function detectOverflow(node: HTMLElement, _: number) {
    function updateOverflow() {
      isOverflow = node.scrollWidth > node.offsetWidth;
    }

    updateOverflow();
    window.addEventListener('resize', updateOverflow);

    return {
      update() {
        updateOverflow();
      },
      destroy() {
        window.removeEventListener('resize', updateOverflow);
      }
    };
  }
</script>

<div class="doc-tabs__list">
  <div class="doc-tabs__list__tabs" use:detectOverflow={$length}><slot /></div>
  {#if isOverflow}
    <div class="doc-tabs__list__arrows">
      <button disabled={$active.index === 0} on:click={() => context.select($active.index - 1)}
        ><span class="block" style:transform="rotate(180deg)">{@html chevronRight}</span></button
      >
      <button
        disabled={$active.index >= $length - 1}
        on:click={() => context.select($active.index + 1)}
        ><span class="block">{@html chevronRight}</span></button
      >
    </div>
  {/if}
</div>
