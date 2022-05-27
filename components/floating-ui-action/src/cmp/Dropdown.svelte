<script lang="ts">
  import { scale } from 'svelte/transition';
  let show = false;
  let transitionFn = scale;
</script>

<button on:click={() => (show = !show)}>Dropdown</button>
{#if show}
  <div class="dropdown" transition:transitionFn|local>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <hr />
    <div class="dropdown__close">
      <button on:click={() => (show = false)}>Close</button>
    </div>
  </div>
{/if}

<style>
  .dropdown {
    position: absolute;
    background: white;
    padding: 8px 0;
    border-radius: 4px;
    border: 1px solid gray;
    border-radius: 8px;
  }

  .dropdown ul {
    margin: 0;
    padding: 0;
  }

  .dropdown ul li {
    padding: 0 16px;
    cursor: pointer;
    list-style: none;
  }

  .dropdown ul li:hover {
    background-color: aqua;
  }

  .dropdown__close {
    text-align: center;
  }
</style>
