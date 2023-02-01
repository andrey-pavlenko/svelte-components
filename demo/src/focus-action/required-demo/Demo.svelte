<script lang="ts">
  import useFocus from '@apsc/focus-action';

  let show = false;
  let error = false;
  let inputs: HTMLElement | undefined = undefined;
  let selected = '';

  function handleFocusout() {
    if (selected) {
      show = false;
      error = false;
    } else {
      error = true;
    }
  }

  $: if (inputs) {
    inputs.focus();
  }
</script>

<div class="w-fit mx-auto mb-4">
  {#if show && !selected}Try to close the dropdown block by clicking outside{:else}&nbsp;{/if}
</div>
<div class="w-fit mx-auto">
  <button class="input w-[200px]" on:click={() => (show = true)}>
    {#if selected}
      Selected <small class="font-semibold text-gray-400">{selected}</small>
    {:else}
      Select
    {/if}
  </button>
  <button class="input" disabled={show} on:click={() => (selected = '')}>Reset</button>
  <div class="relative">
    {#if show}
      <div
        class="absolute border shadow-md rounded-md p-2 top-2 bg-white"
        tabindex="-1"
        use:useFocus={[undefined, handleFocusout]}
        bind:this={inputs}
      >
        <div class="alert" class:error>Choose one of the items</div>
        <div class="mt-2 flex gap-4 px-2">
          <label>
            <input type="radio" value="Firts" bind:group={selected} name="item" />
            <span>Firts</span>
          </label>
          <label>
            <input type="radio" value="Second" bind:group={selected} name="item" />
            <span>Second</span>
          </label>
          <label>
            <input type="radio" value="Third" bind:group={selected} name="item" />
            <span>Third</span>
          </label>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .alert {
    @apply bg-yellow-100 text-center p-1 rounded-md text-orange-700;
  }
  .alert.error {
    @apply bg-red-500 text-white font-semibold;
  }
</style>
