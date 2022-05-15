<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import { ColorPicker, luminance } from '@apsc/color';
  import '@apsc/color/color-picker.css';

  let color = '#f70';
  let colors = [
    '#001219',
    '#005F73',
    '#0A9396',
    '#94D2BD',
    '#E9D8A6',
    '#EE9B00',
    '#CA6702',
    '#BB3E03',
    '#AE2012',
    '#9B2226',
    '#F72585',
    '#B5179E',
    '#7209B7',
    '#560BAD',
    '#480CA8',
    '#3A0CA3',
    '#3F37C9',
    '#4361EE',
    '#4895EF',
    '#4CC9F0'
  ];

  function randomizeAlpha(colors: string[]) {
    return resetAlpha(colors).map(
      (s) =>
        s +
        Math.floor(Math.random() * 255)
          .toString(16)
          .padStart(2, '0')
    );
  }

  function resetAlpha(colors: string[]) {
    return colors.map((s) => s.slice(0, 7));
  }
</script>

<section class="prose max-w-none my-4">
  <div class="base-style flex gap-8">
    <ColorPicker class="basis-1/2 h-[256px] pt-2" bind:color />
    <div class="basis-1/2">
      <div>Current color: <code class="uppercase">{color}</code></div>
      <div class="p-2 border rounded-md">
        <div class="relative h-[1.5em]">
          <div class="bg-chess absolute left-0 top-0 right-0 bottom-0" />
          <div class="absolute left-0 top-0 right-0 bottom-0" style="background-color: {color};" />
        </div>
      </div>
      <div class="mt-4">
        <span>Set color</span>
        <a
          class="text-sm"
          href={'javascript:void(0)'}
          on:click={() => (colors = randomizeAlpha(colors))}>randomize alpha</a
        >
        <span class="text-blue-500">&bull;</span>
        <a
          class="text-sm"
          href={'javascript:void(0)'}
          on:click={() => (colors = resetAlpha(colors))}>reset alpha</a
        >
      </div>
      <div>
        {#each colors as c}
          <button
            class="input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"
            style="background-color: {c}; color: {luminance(c) > 0.55 ? 'inherit' : 'white'}"
            on:click={() => (color = c)}>{c}</button
          >
        {/each}
      </div>
    </div>
  </div>

  <h3>Code</h3>
  <HighlightSvelte
    code={`<${'script lang="ts"'}>
  import { ColorPicker, luminance } from '@apsc/color';
  import '@apsc/color/color-picker.css';

  let color = '#f70';
  let colors = [ ... ];

  function randomizeAlpha(colors: string[]) {
    return resetAlpha(colors).map(
      (s) =>
        s +
        Math.floor(Math.random() * 255)
          .toString(16)
          .padStart(2, '0')
    );
  }

  function resetAlpha(colors: string[]) {
    return colors.map((s) => s.slice(0, 7));
  }
</script>

<section class="prose max-w-none my-4">
  <div class="base-style flex gap-8">
    <ColorPicker class="basis-1/2 h-[256px] pt-2" bind:color />
    <div class="basis-1/2">
      <div>Current color: <code class="uppercase">{color}</code></div>
      <div class="p-2 border rounded-md">
        <div class="relative h-[1.5em]">
          <div class="bg-chess absolute left-0 top-0 right-0 bottom-0" />
          <div class="absolute left-0 top-0 right-0 bottom-0" style="background-color: {color};" />
        </div>
      </div>
      <div class="mt-4">
        <span>Set color</span>
        <a
          class="text-sm"
          href={'javascript:void(0)'}
          on:click={() => (colors = randomizeAlpha(colors))}>randomize alpha</a
        >
        <span class="text-blue-500">&bull;</span>
        <a
          class="text-sm"
          href={'javascript:void(0)'}
          on:click={() => (colors = resetAlpha(colors))}>reset alpha</a
        >
      </div>
      <div>
        {#each colors as c}
          <button
            class="input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"
            style="background-color: {c}; color: {luminance(c) > 0.55 ? 'inherit' : 'white'}"
            on:click={() => (color = c)}>{c}</button
          >
        {/each}
      </div>
    </div>
  </div>
</section>`}
  />
</section>
