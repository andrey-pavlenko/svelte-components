<script lang="ts">
  import { placements } from '@popperjs/core';
  import { slide } from 'svelte/transition';
  import usePopper from '../lib';

  const _l = console.info();
  const [useReference, useTooltip] = usePopper();
  let show = false;

  // const myTransition = slide;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const myTransition = (...agrs: unknown[]) => ({ delay: 0, duration: 0 });
</script>

<h1>Welcome to SvelteKit</h1>
{#each Array(10) as a}
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aspernatur dolor perferendis
    vero ea ipsa quis id quas corporis fuga fugiat facilis, molestias perspiciatis sequi aliquid
    nulla nemo? Magnam, temporibus.
  </p>
{/each}
<span>Test</span> <button use:useReference on:click={() => (show = !show)}>Click me</button>
{#if show}
  <ul
    class="tooltip"
    transition:myTransition
    use:useTooltip={{
      placement: 'bottom-start',
      modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
    }}
  >
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
{/if}
{#each Array(10) as a}
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aspernatur dolor perferendis
    vero ea ipsa quis id quas corporis fuga fugiat facilis, molestias perspiciatis sequi aliquid
    nulla nemo? Magnam, temporibus.
  </p>
{/each}

<style>
  .tooltip {
    background-color: white;
    padding: 1em;
    border: 1px solid gray;
  }

  .tooltip li {
    margin-left: 1em;
  }
</style>
