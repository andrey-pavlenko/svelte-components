<script lang="ts">
  import { DemoCode } from '../../_components';
  import Demo from './Demo.svelte';
</script>

<section class="prose max-w-none my-4">
  <div class="w-fit mx-auto mb-4">
    This example uses <a href="./?c=floating-ui-action"><code>@apsc/floating-ui-action</code></a>
    and
    <a href="./?c=focus-action"><code>@apsc/flocus-action</code></a>
  </div>
  <Demo />
  <DemoCode
    code={`<${'script lang="ts'}">
  import { slide } from 'svelte/transition';
  import { ColorPicker, ColorEdit } from '@apsc/color';
  import { flip, offset } from '@floating-ui/dom';
  import createFloationAction from '@apsc/floating-ui-action';
  import useFocus from '@apsc/focus-action';
  import SampleColors from '../SampleColors.svelte';

  const [useReference, useFloating] = createFloationAction(true);
  let color = '#f70';
  let show = false;
</script>

<div class="flex gap-8">
  <div class="basis-1/2">
    <div>Click this button to pick a color</div>
    <div use:useFocus={[undefined, () => (show = false)]}>
      <button class="input py-1" use:useReference on:click={() => (show = !show)}>
        <span
          class="block border h-[22px] w-[10ch] bg-chess"
          style="background: linear-gradient(to right, {color} 0, {color} 100%), var(--bg-chess-background);"
        />
      </button>
      {#if show}
        <div
          use:useFloating={{ placement: 'bottom-start', middleware: [flip(), offset(8)] }}
          transition:slide|local
          class="absolute w-[240px] border rounded-lg bg-white shadow-lg"
        >
          <ColorPicker
            bind:color
            class="h-48 p-3"
            style="--cp-marker-size: 0.85em; --cp-track-size: 0.5em; --cp-sample-size: 2em;"
          />
          <div class="border-t" />
          <ColorEdit bind:color class="p-3 text-sm" />
        </div>
      {/if}
    </div>
  </div>
  <div class="basis-1/2">
    <div>Current color: <code class="uppercase">{color}</code></div>
    <div class="p-2 border rounded-md">
      <div
        class="h-[1.5em] bg-chess"
        style="background: linear-gradient(to right, {color} 0, {color} 100%), var(--bg-chess-background);"
      />
    </div>
    <SampleColors class="mt-4" on:color={({ detail }) => (color = detail)} />
  </div>
</div>`}
  />
</section>
