<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import 'svelte-highlight/styles/atom-one-dark.css';

  import { slide, scale, fade, blur, TransitionConfig } from 'svelte/transition';
  import {
    arrow,
    flip,
    offset,
    size,
    type ComputePositionReturn,
    type Middleware
  } from '@floating-ui/dom';
  import createFloating from '@apsc/floating-ui-action';

  const [useReference, useFloating] = createFloating(true);

  let _arrow: HTMLElement;
  let show = false;

  function adjustArrow(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      if (staticSide) {
        Object.assign(_arrow.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '-6px'
        });
      }
    }
  }

  const placements = [
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end'
  ];
  let placement = placements[0];
  let _offset = 16;
  let _flip = true;
  let _sizePadding = 16;
  let middleware: Middleware[] = [];

  $: middleware = [
    offset(_offset),
    _flip && flip(),
    size({
      padding: _sizePadding,
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`
        });
      }
    }),
    _arrow && arrow({ element: _arrow })
  ].filter((m) => !!m);

  let transitionFn: (...args: unknown[]) => TransitionConfig;
  const transitionFns: Record<string, (...args: unknown[]) => TransitionConfig> = {
    slide,
    scale,
    fade,
    blur,
    none: () => ({ delay: 0, duration: 0 })
  };
</script>

<section class="prose max-w-none my-4">
  <div class="mb-8 flex justify-evenly flex-wrap gap-y-3">
    <label>
      <span>placement</span>
      <select class="input" bind:value={placement}>
        {#each placements as p}
          <option value={p}>{p}</option>
        {/each}
      </select>
    </label>
    <label class="whitespace-nowrap">
      <input type="checkbox" bind:checked={_flip} />
      <span>flip</span>
    </label>
    <label>
      <span>offset</span>
      <input type="number" class="input w-[8ch]" bind:value={_offset} />
    </label>
    <label>
      <span>size padding</span>
      <input type="number" class="input w-[8ch]" bind:value={_sizePadding} />
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
        use:useFloating={{
          placement,
          middleware,
          callback: adjustArrow
        }}
        transition:transitionFn|local
        class="tooltip not-prose"
      >
        <div class="arrow" bind:this={_arrow} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </div>
    {/if}
  </div>

  <h3>Code</h3>
  <HighlightSvelte
    code={`<${'script lang="ts"'}
  import { slide, scale, fade, blur } from 'svelte/transition';
  import {
    arrow,
    flip,
    offset,
    size,
    type ComputePositionReturn,
    type Middleware
  } from '@floating-ui/dom';
  import createFloating from '@apsc/floating-ui-action';

  const [useReference, useFloating] = createFloating(true);

  let _arrow: HTMLElement;
  let show = false;

  function adjustArrow(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      if (staticSide) {
        Object.assign(_arrow.style, {
          left: x != null ? \`$\{x}px\` : '',
          top: y != null ? \`$\{y}px\` : '',
          right: '',
          bottom: '',
          [staticSide]: '-6px'
        });
      }
    }
  }

  let _offset = 16;
  let _flip = true;
  let _sizePadding = 16;
  let middleware: Middleware[] = [];

  $: middleware = [
    offset(_offset),
    _flip && flip(),
    size({
      padding: _sizePadding,
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: \`$\{availableWidth}px\`,
          maxHeight: \`$\{availableHeight}px\`
        });
      }
    }),
    _arrow && arrow({ element: _arrow })
  ].filter((m) => !!m);
</script>

<section class="prose max-w-none my-4">
  <div class="h-64 flex items-center justify-center border">
    <button
      use:useReference
      class="input min-w-[160px] bg-blue-600 border-blue-800 text-white ring-offset-2"
      on:click={() => (show = !show)}>Click me to {show ? 'hide' : 'show'}</button
    >
    {#if show}
      <div
        use:useFloating={{
          placement: '${placement}',
          middleware,
          callback: adjustArrow
        }}
        ${transitionFn != null ? `transition:${transitionFn.name}|local` : ''}
        class="tooltip not-prose"
      >
        <div class="arrow" bind:this={_arrow} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </div>
    {/if}
  </div>
</section>

<${'style lang="postcss"'}>
  .tooltip {
    @apply absolute box-border bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-sm;
  }

  .tooltip .arrow {
    @apply absolute bg-gray-800 h-3 w-3 rotate-45;
  }
</style>`}
  />
</section>

<style lang="postcss">
  .tooltip {
    @apply absolute box-border bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-sm;
  }

  .tooltip .arrow {
    @apply absolute bg-gray-800 h-3 w-3 rotate-45;
  }
</style>
