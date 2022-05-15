<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import { ColorPicker } from '@apsc/color';
  import '@apsc/color/color-picker.css';

  import 'svelte-highlight/styles/atom-one-dark.css';

  let color = '#f70';
  const colors = [''];
</script>

<section class="prose max-w-none my-4">
  <div class="base-style flex gap-8">
    <ColorPicker class="basis-1/2 h-[256px] pt-2" bind:color />
    <div class="basis-1/2">
      <div>Current color: <code>{color}</code></div>
      <div class="p-2 border rounded-md">
        <div class="relative h-[1.5em]">
          <div class="bg-chess absolute left-0 top-0 right-0 bottom-0" />
          <div class="absolute left-0 top-0 right-0 bottom-0" style="background-color: {color};" />
        </div>
      </div>
      <div class="mt-4">Set color</div>
    </div>
  </div>

  <h3>Code</h3>
  <HighlightSvelte code={`<${'script lang="ts"'}>`} />
</section>

<style lang="postcss">
</style>
