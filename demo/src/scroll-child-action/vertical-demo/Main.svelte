<script lang="ts">
  import { DemoCode } from '../../_components';
  import Demo from './Demo.svelte';
</script>

<section class="prose max-w-none my-4">
  <div class="w-fit mx-auto mb-4">
    This example uses <a href="/?c=keyboard-shortcut-action"
      ><code>@apsc/keyboard-shortcut-action</code></a
    >
  </div>
  <Demo />
  <DemoCode
    code={`<${'script lang="ts">'}
  import useKeyboardShortcut from '@apsc/keyboard-shortcut-action';
  import useScrollChild from '@apsc/scroll-child-action';
  import { onMount } from 'svelte';
  import { beverages } from '../beverages';

  let autofocus: HTMLInputElement;
  onMount(() => autofocus.focus());

  let active = NaN;

  function goToBeverage(offset: number) {
    if (isFinite(active)) {
      let _active = active + offset;
      if (_active < 0) {
        _active = 0;
      } else if (_active >= beverages.length) {
        _active = beverages.length - 1;
      }
      active = _active;
    } else {
      active = 0;
    }
  }
</script>

<div class="my-2 mx-auto w-96">
  <div>Select a beverage</div>
  <div class="text-sm leading-4 text-gray-500">
    use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>Home</code>,
    <code>End</code> to select a drink
  </div>
  <div class="mt-2 flex">
    <input
      bind:this={autofocus}
      type="text"
      class="input grow"
      readonly
      value={beverages[active] ?? ''}
      use:useKeyboardShortcut={{
        event: 'keydown',
        preventDefault: true,
        fns: {
          ArrowUp: () => goToBeverage(-1),
          ArrowDown: () => goToBeverage(1),
          Home: () => (active = 0),
          End: () => (active = beverages.length - 1)
        }
      }}
    />
    <button
      type="button"
      class="input ml-2"
      on:click={() => {
        active = NaN;
        autofocus.focus();
      }}>Reset</button
    >
  </div>
  <div
    class="border-2 border-gray-200 rounded-md p-2 mt-2 w-48 max-h-[15.25rem] overflow-y-auto shadow-md scroll-smooth"
  >
    {#each beverages as b, index}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="beverage-item"
        use:useScrollChild={active === index ? { y: true } : false}
        on:click={() => {
          active = index;
          autofocus.focus();
        }}
        class:active={index === active}
      >
        {b}
      </div>
    {/each}
  </div>
</div>

<${'style lang="postcss"'}>
  .beverage-item {
    @apply px-4 py-1 rounded-md cursor-pointer leading-5;
  }
  .beverage-item:not(:first-child) {
    @apply px-4 py-1 mt-2 rounded-md cursor-pointer leading-5;
  }
  .beverage-item.active {
    @apply bg-blue-600 text-white;
  }
</style>`}
  />
</section>
