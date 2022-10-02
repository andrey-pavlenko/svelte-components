<script lang="ts">
  import { DemoCode } from '../../_components';
  import Demo from './Demo.svelte';
</script>

<section class="prose max-w-none my-4">
  <Demo />
  <DemoCode
    code={`<${'script lang="ts"'}>
  import { Tab, Panel, Tabs } from '@apsc/tabs';

  let disable3 = false;
  let show4 = true;
  let show5 = true;
  let selected = NaN;
</script>

<Tabs bind:selected>
  <Tab let:active let:activate
    ><button class="tab" class:active on:click={activate}>First</button></Tab
  >
  <Tab let:active let:activate
    ><button class="tab" class:active on:click={activate}>Second</button></Tab
  >
  <Tab let:active let:activate
    ><button disabled={disable3} class="tab" class:active on:click={activate}>Third</button></Tab
  >
  {#if show4}
    <Tab let:active let:activate>
      <button class="tab" class:active on:click={activate}
        >Fourth <button on:click|preventDefault={() => (show4 = false)}>&times;</button></button
      >
    </Tab>
  {/if}
  {#if show5}
    <Tab let:active let:activate>
      <button class="tab" class:active on:click={activate}
        >Fifth <button on:click|preventDefault={() => (show5 = false)}>&times;</button></button
      >
    </Tab>
  {/if}
  <Panel let:active>
    <div class="panel" class:active>
      These are the first diamonds I ever took from my first mine.
    </div></Panel
  >
  <Panel let:active>
    <div class="panel" class:active>
      The second stage supplements the first stage by adding the second rail tunnel.
    </div>
  </Panel>
  <Panel let:active>
    <div class="panel" class:active>Let's not worry about third or fourth place.</div>
  </Panel>
  {#if show4}
    <Panel let:active>
      <div class="panel" class:active>
        The fourth is the process of Timorization through capacity-building.
      </div>
    </Panel>
  {/if}
  {#if show5}
    <Panel let:active>
      <div class="panel" class:active>Strings tuned a fifth apart.</div>
    </Panel>
  {/if}
</Tabs>
<div class="py-2 border-t text-center text-gray-500">Use these controls to operate tabs.</div>
<div class="flex items-center place-content-center gap-4">
  <label><input type="checkbox" bind:checked={show4} /> Fourth</label>
  <label><input type="checkbox" bind:checked={show5} /> Fifth</label>
  <label><input type="checkbox" bind:checked={disable3} /> Disable Third</label>
  <label
    >Selected&emsp;<input class="input max-w-[6ch]" type="number" bind:value={selected} /></label
  >
</div>

<${'style lang="postcss"'}>
  .tab {
    @apply appearance-none px-2 bg-blue-100 text-blue-800 rounded-md;
  }
  .tab:disabled {
    @apply bg-gray-200 text-gray-500 cursor-not-allowed;
  }
  .tab.active {
    @apply bg-blue-800 text-blue-100;
  }
  .tab button {
    @apply appearance-none border-l border-dotted border-current ml-1.5 pl-1.5;
  }
  .panel {
    @apply mt-3;
  }
  .panel:not(.active) {
    display: none;
  }
</style>`}
  />
</section>
