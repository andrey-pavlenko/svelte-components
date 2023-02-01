<script lang="ts">
  import { Tabs, Tab, Panel } from '../../lib';

  let count = 5;
  let tabs: number[] = [];
  $: tabs = [...Array(count).keys()];
  let selected = NaN;
  let length = 0;
</script>

<Tabs bind:selected bind:length>
  <section>
    {#each tabs as tab}
      <Tab let:active let:activate>
        <button class="tab" class:active on:click={activate}>Tab #{tab}</button>
      </Tab>
    {/each}
  </section>
  <section>
    {#each tabs as tab}
      <Panel let:active>
        <div class="panel" class:active>Tab context #{tab}</div>
      </Panel>
    {/each}
  </section>
</Tabs>
<hr />
<label>
  <span>Tabs count</span>
  <input type="number" bind:value={count} />
</label>
<label>
  <span>Selected</span>
  <input type="number" bind:value={selected} />
</label>
<span>Length: <code>{length}</code></span>

<style>
  .tab {
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    padding: 0.25em 0.5em;
    border-bottom: 4px solid silver;
  }

  .tab.active {
    background-color: silver;
    border-bottom: 4px solid gray;
  }

  .panel:not(.active) {
    display: none;
  }

  label {
    display: inline-block;
  }
  label span,
  label input {
    display: block;
  }
</style>
