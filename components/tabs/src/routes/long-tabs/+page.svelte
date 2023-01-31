<script lang="ts">
  import { Tabs, Tab, Panel } from '$lib';
  import useScrollChild from '@apsc/scroll-child-action';

  let tabsCount = 30;
  let tabs: number[] = [];
  $: tabs = [...Array(tabsCount).keys()];

  let selected = NaN;
  let isTabsOverflow = false;

  function detectOverflow(node: HTMLElement, _: number) {
    isTabsOverflow = node.scrollWidth > node.offsetWidth;
    return {
      update() {
        isTabsOverflow = node.scrollWidth > node.offsetWidth;
      }
    };
  }
</script>

<div>
  <label><span>Tabs count</span>&nbsp;<input type="number" bind:value={tabsCount} /></label>
</div>
<Tabs bind:selected>
  <div class="tabs-list">
    <div class="tabs-list__buttons" use:detectOverflow={tabsCount}>
      {#each tabs as tab (tab)}
        <Tab let:active let:activate>
          <button
            class="c-tabs__tab"
            class:active
            on:click={activate}
            use:useScrollChild={active ? { x: true } : false}>Tab #{tab}</button
          >
        </Tab>
      {/each}
    </div>
    {#if isTabsOverflow}
      <div class="tabs-list__selector">
        <button on:click={() => (selected -= 1)}>‹</button>
        <button on:click={() => (selected += 1)}>›</button>
      </div>
    {/if}
  </div>
  <div>
    {#each tabs as tab (tab)}
      <Panel let:active
        ><div style="display: {active ? 'block' : 'none'};">Tab context #{tab}</div></Panel
      >
    {/each}
  </div>
</Tabs>

<style>
  .tabs-list {
    display: flex;
    gap: 1ch;
    align-items: center;
  }

  .tabs-list__buttons {
    flex-grow: 1;
    box-sizing: border-box;
    white-space: nowrap;
    overflow-x: hidden;
    border-bottom: 1px solid silver;
  }

  .tabs-list__selector {
    flex-shrink: 0;
  }

  .tabs-list__selector button {
    border: 1px solid gray;
    border-radius: 4px;
    background-color: transparent;
  }
  .tabs-list__selector button:hover {
    border-color: black;
    background-color: silver;
  }
</style>
