<script lang="ts">
  import { slide, scale, fade, blur, TransitionConfig } from 'svelte/transition';
  import createPopper from '@apsc/popper-action';

  const [useReference, usePopper] = createPopper();
  let transitionFn: (...args: unknown[]) => TransitionConfig;
  const transitionFns: Record<string, (...args: unknown[]) => TransitionConfig> = {
    none: () => ({ delay: 0, duration: 0 }),
    slide,
    scale,
    fade,
    blur
  };
  let show = false;
  const options = {
    placement: 'auto',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 16]
        }
      }
    ]
  };
</script>

<section class="prose max-w-none my-4">
  <div class="bg-gray-200 py-2 px-4 text-center rounded-md mb-8">
    <strong class="text-red-700">Note!</strong> Partially compatible with svelte transitions.
  </div>

  <div class="mb-8 flex justify-evenly">
    <label>
      <span>placement</span>
      <select class="input" bind:value={options.placement}>
        {#each ['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'] as p}
          <option value={p}>{p}</option>
        {/each}
      </select>
    </label>

    <label>
      <span>skidding</span>
      <input
        type="number"
        class="input w-[8ch]"
        bind:value={options.modifiers[0].options.offset[0]}
      />
    </label>
    <label>
      <span>distance</span>
      <input
        type="number"
        class="input w-[8ch]"
        bind:value={options.modifiers[0].options.offset[1]}
      />
    </label>
    <label>
      <span>transition</span>
      <select class="input" bind:value={transitionFn}>
        {#each Object.keys(transitionFns) as k}
          <option value={transitionFns[k]}>{k}</option>
        {/each}
      </select></label
    >
  </div>

  <div class="h-64 flex items-center justify-center border">
    <button
      use:useReference
      class="input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"
      on:click={() => (show = !show)}>Click me to {show ? 'hide' : 'show'}</button
    >
    {#if show}
      <div
        use:usePopper={options}
        transition:transitionFn|local
        class="dropdown not-prose"
        data-popper-placement={undefined}
      >
        <div class="arrow" data-popper-arrow />
        <ul>
          <li>Action</li>
          <li>Another action</li>
          <li>Something else</li>
        </ul>
        <hr />
        <button class="input" on:click={() => (show = false)}>Close dropdown</button>
      </div>
    {/if}
  </div>
</section>

<style lang="postcss">
  .dropdown {
    @apply border border-gray-400 py-2 shadow-md bg-white rounded-md;
  }

  .dropdown li {
    @apply px-4 cursor-pointer;
  }

  .dropdown button {
    @apply mx-4 my-1;
  }
  .dropdown li:hover {
    @apply bg-blue-200;
  }

  .dropdown hr {
    @apply border-gray-400 my-2 h-px;
  }

  .dropdown .arrow,
  .dropdown .arrow::before {
    @apply absolute h-4 w-4 bg-inherit;
  }
  .dropdown .arrow {
    @apply invisible;
  }

  .dropdown .arrow::before {
    content: '';
    @apply visible block border-gray-400 rotate-45;
  }
  .dropdown[data-popper-placement^='top'] > .arrow {
    @apply -bottom-2;
  }
  .dropdown[data-popper-placement^='top'] > .arrow::before {
    @apply border-r border-b;
  }
  .dropdown[data-popper-placement^='bottom'] > .arrow {
    @apply -top-2 border-x;
  }
  .dropdown[data-popper-placement^='bottom'] > .arrow::before {
    @apply border-l border-t;
  }
  .dropdown[data-popper-placement^='left'] > .arrow {
    @apply -right-2;
  }
  .dropdown[data-popper-placement^='left'] > .arrow::before {
    @apply border-r border-t;
  }
  .dropdown[data-popper-placement^='right'] > .arrow {
    @apply -left-2;
  }
  .dropdown[data-popper-placement^='right'] > .arrow::before {
    @apply border-l border-b;
  }
</style>
