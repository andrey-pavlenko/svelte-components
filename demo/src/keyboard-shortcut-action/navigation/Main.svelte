<script lang="ts">
  import { DemoCode } from '../../_components';
  import Demo from './Demo.svelte';
</script>

<section class="prose max-w-none my-4">
  <Demo />
  <DemoCode
    code={`<${'script lang="ts"'}>
  import useKeyboardShortcut from '@apsc/keyboard-shortcut-action';
  import { onMount } from 'svelte';

  const beverages = [ ... ];
  const beveragePerColumn = Math.floor(beverages.length / 3);

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

<div class="my-4">
  <div>Select a beverage</div>
  <div class="flex">
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
          ArrowLeft: () => goToBeverage(-beveragePerColumn),
          ArrowRight: () => goToBeverage(beveragePerColumn),
          PageUp: () => goToBeverage(-((active || 0) % beveragePerColumn)),
          PageDown: () => goToBeverage(beveragePerColumn - 1 - ((active || 0) % beveragePerColumn)),
          Home: () => (active = (active || 0) % beveragePerColumn),
          End: () =>
            (active = beverages.length - (beveragePerColumn - ((active || 0) % beveragePerColumn))),
          'Ctrl+Home': () => (active = 0),
          'Ctrl+End': () => (active = beverages.length - 1)
        }
      }}
    />
    <button
      type="button"
      class="input"
      on:click={() => {
        active = NaN;
        autofocus.focus();
      }}>Reset</button
    >
  </div>
  <div class="block text-sm mt-1 text-gray-500">
    Use the navigation buttons
    <code>ArrowUp</code>,
    <code>ArrowDown</code>,
    <code>ArrowLeft</code>,
    <code>ArrowRight</code>,
    <code>PageUp</code>,
    <code>PageDown</code>,
    <code>Home</code>,
    <code>End</code>,
    <code>Ctrl+Home</code>,
    <code>Ctrl+End</code> to select a drink
  </div>
</div>
<div class="columns-3 gap-3 border-2 border-gray-200  rounded-md p-2">
  {#each beverages as b, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="beverage-item"
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

<${'style lang="postcss"'}>
  .beverage-item {
    @apply px-4 py-1 rounded-md cursor-pointer;
  }
  .beverage-item.active {
    @apply bg-blue-600 text-white;
  }
</style>`}
  />
</section>
