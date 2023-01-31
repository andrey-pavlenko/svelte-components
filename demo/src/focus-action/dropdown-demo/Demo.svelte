<script lang="ts">
  import { offset, flip } from '@floating-ui/dom';
  import { slide } from 'svelte/transition';
  import createFloatingUiAction from '@apsc/floating-ui-action';
  import useFocus from '@apsc/focus-action';

  const [useRef, useFloat, setAutoupdate] = createFloatingUiAction(true);

  let show = false;
  $: setAutoupdate(show);
</script>

<div class="w-fit mx-auto" use:useFocus={[undefined, () => (show = false)]}>
  <button class="input" use:useRef on:click={() => (show = true)}>Action</button>
  {#if show}
    <ul
      class="dropdown"
      tabindex="-1"
      transition:slide|local
      use:useFloat={{
        placement: 'bottom-start',
        middleware: [flip(), offset(8)]
      }}
    >
      <li><button on:click={() => (show = false)}>Open</button></li>
      <li><button on:click={() => (show = false)}>Close</button></li>
      <li><button on:click={() => (show = false)}>Upload</button></li>
      <li><button on:click={() => (show = false)}>Download</button></li>
      <li class="separator" />
      <li><button on:click={() => (show = false)}>About</button></li>
    </ul>
  {/if}
</div>

<style lang="postcss">
  .dropdown {
    @apply absolute border shadow-md rounded-md py-2 px-0 my-0 bg-white;
  }

  .dropdown li {
    @apply list-none p-0 m-0;
  }

  .dropdown li button {
    @apply w-full text-left px-4;
  }

  .dropdown li button:hover {
    @apply bg-blue-400 text-white;
  }

  .dropdown li.separator {
    @apply border-t my-2;
  }
</style>
