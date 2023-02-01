<script lang="ts">
  import { DemoCode } from '../../_components';
  import Demo from './Demo.svelte';
</script>

<section class="prose max-w-none my-4">
  <div class="w-fit mx-auto mb-4">
    This example uses <a href="/?c=scroll-child-action" target="_blank"
      ><code>@apsc/scroll-child-action</code></a
    >
  </div>
  <Demo />
  <DemoCode
    code={`<${'script lang="ts"'}>
  import { Tabs, Tab, Panel } from '@apsc/tabs';
  import scrollAction from '@apsc/scroll-child-action';

  let count = 25;
  let isOverflow = false;
  let selected = NaN;
  let length = 0;

  function detectOverflow(node: HTMLElement, _: number) {
    const checkOverflow = () => node.scrollWidth > node.offsetWidth;
    isOverflow = checkOverflow();
    return {
      update() {
        isOverflow = checkOverflow();
      }
    };
  }
</script>

<section class="demo">
  {#if count > 0}
    <Tabs bind:selected bind:length>
      <div class="tabs-list">
        <div class="tabs" use:detectOverflow={count} class:is-overflow={isOverflow}>
          {#each { length: count } as _, i}
            <Tab let:active let:activate>
              <button class:active on:click={activate} use:scrollAction={{ x: active }}
                >Tab #{i}</button
              >
            </Tab>
          {/each}
        </div>
        {#if isOverflow}
          <div class="arrows">
            <button disabled={selected === 0} on:click={() => selected--}>‹</button>
            <button disabled={selected >= length - 1} on:click={() => selected++}>›</button>
          </div>
        {/if}
      </div>
      {#each { length: count } as _, i}
        <Panel let:active>
          <div class="panel" class:active>
            <div class="text-lg text-black mb-2">Tab content #{i}</div>
            <div class="text-gray-500 text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias unde minus expedita
              saepe dolorem accusamus molestias omnis repellat architecto, voluptate ullam rem et
              nihil exercitationem corporis, earum quasi accusantium.
            </div>
          </div>
        </Panel>
      {/each}
    </Tabs>
  {/if}
</section>

<section class="controls">
  <label>
    <span>Number of tabs</span>
    <input class="input max-w-[7ch]" min="1" type="number" bind:value={count} />
  </label>
  <label>
    <input class="input" type="checkbox" disabled checked={isOverflow} />
    <span>Is overflow</span>
  </label>
  <label>
    <span>Selected index</span>
    <input class="input max-w-[7ch]" type="number" bind:value={selected} />
  </label>
</section>

<${'style lang="postcss"'}>
  .demo {
    @apply my-4 border-y;
  }
  .tabs-list {
    @apply flex my-4 pb-2 border-b-2 border-indigo-200;
  }
  .tabs {
    @apply grow items-center flex whitespace-nowrap overflow-hidden gap-1;
  }
  .tabs.is-overflow {
    @apply pr-4;
  }
  .tabs button {
    @apply appearance-none px-2 rounded-md bg-indigo-200 text-indigo-800;
  }
  .tabs button.active {
    @apply bg-indigo-800 text-indigo-100;
  }
  .arrows {
    @apply pl-1 relative flex items-center gap-0.5;
  }
  .arrows::before {
    content: '';
    right: 100%;
    @apply absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-white;
  }
  .arrows button {
    @apply appearance-none text-2xl leading-4 px-1 pt-0.5 pb-1 rounded-[0.25rem] bg-indigo-400 text-white;
  }
  .arrows button:disabled {
    @apply bg-gray-400 text-gray-200 cursor-not-allowed;
  }
  .arrows button:not(:disabled):hover {
    @apply bg-indigo-800;
  }
  .panel:not(.active) {
    display: none;
  }
  .controls {
    @apply w-fit mx-auto flex gap-4;
  }
  .controls label {
    @apply flex items-center gap-2;
  }
</style>`}
  />
</section>
