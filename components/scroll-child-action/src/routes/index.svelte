<script lang="ts">
  import useScrollChild from '$lib';

  const items = [...Array(40).keys()].map((i) => ({
    id: i + 1,
    message: `Text #${(i + 1).toString().padStart(2, '0')}`
  }));

  let active = 5;
</script>

{#each { length: 20 } as _}
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aliquid temporibus earum
    quasi quae eos laborum nisi exercitationem. Incidunt ea consequatur aspernatur ex doloremque
    obcaecati et quia exercitationem quidem dolore!
  </p>
{/each}

<div>
  <input type="number" bind:value={active} min="0" max={items.length - 1} />
</div>

<hr class="line" />

<div class="cmp-list-v" tabindex="0">
  {#each items as item, index}
    <div class="cmp-item" use:useScrollChild={active === index} class:active={active === index}>
      {item.id}
      {item.message}
    </div>
  {/each}
</div>

<div class="cmp-list-h" tabindex="0">
  {#each items as item, index}
    <div class="cmp-item" use:useScrollChild={active === index} class:active={active === index}>
      {item.id}
      {item.message}
    </div>
  {/each}
</div>

{#each { length: 20 } as _}
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aliquid temporibus earum
    quasi quae eos laborum nisi exercitationem. Incidunt ea consequatur aspernatur ex doloremque
    obcaecati et quia exercitationem quidem dolore!
  </p>
{/each}

<style>
  .line {
    position: absolute;
    padding: 0;
    margin: 0;
    width: 100%;
    border: none;
    border-top: 1px solid red;
    top: 475px;
  }
  .cmp-list-v {
    width: fit-content;
    margin: 1em;
    padding: 0.25em 1em 0.5em 1em;
    border: 1px solid gray;
    max-height: 14em;
    overflow-y: auto;
  }
  .cmp-list-h {
    margin: 1em;
    padding: 0.5em 2em 0.5em 1em;
    border: 1px solid gray;
    max-width: 100%;
    white-space: nowrap;
    overflow-x: auto;
  }
  .cmp-list-h .cmp-item {
    display: inline-block;
    width: max-content;
    margin: 0;
  }

  .cmp-item {
    padding: 4px 16px;
    margin: 0 -0.5em;
  }
  .cmp-item.active {
    background-color: blue;
    color: white;
  }
</style>
