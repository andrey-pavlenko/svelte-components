<script lang="ts">
  import '../lib/style.css';
  import type { Readable } from 'svelte/store';
  import { Tabs, TabPanel, TabList, Tab } from '../lib';

  const visible = {
    d: false,
    e: false
  };

  let tabs: Tabs;
  let activeTabIndex: Readable<number>;
  $: if (tabs) {
    console.info('tabs', Date.now());
    tabs.selectTab(1);
    activeTabIndex = tabs.selectedIndex;
  } else {
    console.info('no tabs', Date.now());
  }
</script>

<Tabs bind:this={tabs}>
  <TabList>
    <Tab>A</Tab>
    <Tab>B</Tab>
    <Tab disabled>C</Tab>
    {#if visible.d}
      <Tab>D</Tab>
    {/if}
    {#if visible.e}
      <Tab>E</Tab>
    {/if}
  </TabList>

  <TabPanel let:index>A {index}</TabPanel>
  <TabPanel let:index>B {index}</TabPanel>
  <TabPanel let:index>C {index}</TabPanel>
  {#if visible.d}
    <TabPanel let:index>D {index}</TabPanel>
  {/if}
  {#if visible.e}
    <TabPanel let:index>E {index}</TabPanel>
  {/if}
</Tabs>

<label>
  <input type="checkbox" bind:checked={visible.d} /> Show D
</label>
<label>
  <input type="checkbox" bind:checked={visible.e} /> Show E
</label>
<div>
  <button on:click={() => tabs.selectTab(-1)}>Activate last</button>
</div>
<div>
  <button on:click={() => tabs.selectTab(0)}>Activate first</button>
</div>
{#if tabs != null}
  <div>activateTab: {$activeTabIndex}</div>
{/if}
